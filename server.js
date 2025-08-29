// server.js
// Entry point: creates and starts the HTTP server.

const http = require("http");
const { handleRequest } = require("./router.js");

const PORT = process.env.PORT || 3000;

const server = http.createServer(handleRequest);

server.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
