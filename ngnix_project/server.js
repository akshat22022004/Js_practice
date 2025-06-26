const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;

const server = http.createServer((req, res) => {
  const filepath = path.join(__dirname, req.url === '/' ? "index.html" : req.url);
  const extname = String(path.extname(filepath).toLowerCase());

  const mimetypes = {
    ".html": "text/html",
    ".js": "text/javascript",
    ".css": "text/css",
    ".png": "image/png",
  };

  const myContentType = mimetypes[extname] || 'application/octet-stream';

  fs.readFile(filepath, (err, content) => {
    if (err) {
      res.writeHead(404, {"Content-Type": "text/plain"});
      res.end("File not found");
    } else {
      res.writeHead(200, {"Content-Type": myContentType});
      res.end(content, "utf-8");
    }
  });
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

