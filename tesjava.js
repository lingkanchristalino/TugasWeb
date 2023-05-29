const http = require('http');
const url = require('url');

function hitungLuasLingkaran(radius) {
  return Math.PI * Math.pow(radius, 2);
}

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathName = parsedUrl.pathname;
  const query = parsedUrl.query;

  if (pathName === '/calculate') {
    const radius = parseFloat(query.radius);

    if (isNaN(radius)) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Please provide a valid radius.' }));
    } else {
      const area = hitungLuasLingkaran(radius);
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ area: area }));
    }
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Error: Not found.\n');
  }
});


const port = process.env.PORT || 3000
app.listen(port, () => {
 console.log('Server is up on port ' + port)
})

