const http = require('http');

const server = http.createServer((req, res) => {
  // Robust error handling for null request object
  if (!req) {
    console.error('Request object is null! Check server load and network configuration.');
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
    return;
  }

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});