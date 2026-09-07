const http = require("http");
const fs = require("fs");
const path = require("path");

const root = __dirname;
const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".svg": "image/svg+xml",
};

http
  .createServer((request, response) => {
    const pathname = decodeURIComponent(request.url.split("?")[0]);
    const relativePath = pathname === "/" ? "index.html" : pathname.slice(1);
    const filePath = path.join(root, relativePath);

    fs.readFile(filePath, (error, data) => {
      if (error) {
        response.statusCode = 404;
        response.end("Not found");
        return;
      }

      response.setHeader(
        "Content-Type",
        contentTypes[path.extname(filePath)] || "application/octet-stream",
      );
      response.end(data);
    });
  })
  .listen(4174, "127.0.0.1");
