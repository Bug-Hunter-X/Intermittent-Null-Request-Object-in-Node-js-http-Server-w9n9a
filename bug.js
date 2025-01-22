const http = require('http');

const server = http.createServer((req, res) => {
  // This is where the error occurs.  The request object is unexpectedly null.
  if (req === null) {
    console.error('Request object is null!');
    res.writeHead(500);
    res.end();
    return;
  }

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});