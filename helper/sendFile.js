// helpers/sendFile.js
// Streams a file to the response with proper headers.

const fs = require("fs");
const mime = require("./mime");

function sendFile(res, filePath, statusCode = 200) {
  return fs.promises.stat(filePath).then((stat) => {
    res.writeHead(statusCode, {
      "Content-Type": mime(filePath),
      "Content-Length": stat.size
    });

    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(filePath);
      stream.on("error", (err) => {
        if (!res.headersSent) {
          res.writeHead(500, { "Content-Type": "text/plain" });
        }
        res.end("500 Server Error");
        reject(err);
      });
      stream.on("end", resolve);
      stream.pipe(res);
    });
  });
}

module.exports = sendFile;
