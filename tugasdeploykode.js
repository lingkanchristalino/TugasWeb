const http = require('http');
const url = require('url');

function calculateCircleArea(radius) {
  return Math.PI * radius ** 2;
}

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathName = parsedUrl.pathname;
  const query = parsedUrl.query;

  if (pathName === '/') {
    const radius = parseFloat(query.radius);

    if (isNaN(radius)) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Error: Please provide a valid radius.\n');
    } else {
      const area = calculateCircleArea(radius);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end(`The area of a circle with radius ${radius} is ${area}.\n`);
    }
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Error: Not found.\n');
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
