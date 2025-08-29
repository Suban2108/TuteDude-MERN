// router.js
// All routing logic lives here. Static files are served from /public.
// Uses helpers/sendFile.js and helpers/mime.js.

const path = require("path");
const fs = require("fs");
const sendFile = require("./helper/sendFile.js");

const publicDir = path.join(__dirname, "public");

// Prevent directory traversal; only allow paths under /public
function safeJoin(base, target) {
  const targetPath = path.normalize(path.join(base, target));
  return targetPath.startsWith(base) ? targetPath : null;
}

async function send404(res) {
  const notFoundPath = path.join(publicDir, "404.html");
  if (fs.existsSync(notFoundPath)) {
    await sendFile(res, notFoundPath, 404);
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  }
}

async function handleRequest(req, res) {
  try {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const { pathname } = url;

    // Only GET is supported in this simple server
    if (req.method !== "GET") {
      res.writeHead(405, { "Content-Type": "text/plain" });
      res.end("405 Method Not Allowed");
      return;
    }

    // Redirect root -> /home
    if (pathname === "/") {
      res.writeHead(302, { Location: "/home" });
      res.end();
      return;
    }

    // Route map for pages
    const routeMap = {
      "/home": "home.html",
      "/about": "about.html",
      "/contact": "contact.html",
      "/services": "services.html" // extra route (enhancement)
    };

    // Health check (JSON) — enhancement
    if (pathname === "/health") {
      const payload = { ok: true, time: new Date().toISOString() };
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(payload));
      return;
    }

    // Known page routes
    if (routeMap[pathname]) {
      const filePath = safeJoin(publicDir, routeMap[pathname]);
      if (!filePath) return send404(res);
      await sendFile(res, filePath, 200);
      return;
    }

    // Serve static assets (e.g., /css/styles.css, images, etc.)
    if (path.extname(pathname)) {
      const staticPath = safeJoin(publicDir, pathname.replace(/^\/+/, ""));
      if (staticPath && fs.existsSync(staticPath)) {
        await sendFile(res, staticPath, 200);
        return;
      }
    }

    // Unknown route => 404
    await send404(res);
  } catch (err) {
    console.error("Router error:", err);
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("500 Internal Server Error");
  }
}

module.exports = { handleRequest };
