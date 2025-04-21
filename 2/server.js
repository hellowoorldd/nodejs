const http = require('http');
const url = require('url');
// GET
// POST
// DELETE
// PUT

const PORT = 3000;

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const method = req.method;
  const path = parsedUrl.pathname;

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
  res.setHeader('Access-Control-Allow-Header', 'Content-Type');

  if (method === 'GET' && path === 'notes') {
    res.writeHead(200, { 'content-type': 'application/json' });
    res.end(JSON.stringify('')); // notes
  }

  if (method === 'POST' && path === '/notes') {
    let body = '';

    req.on('data', chunk => {
      body += chunk;
    })

    req.on('end', () => {
      try {
        const { title } = JSON.parse(body);

        if (!title) {
          res.writeHead(400, {'content-type': 'application/json'});
        }

        res.writeHead(201, { 'content-type': 'application/json' });
        res.end(JSON.stringify(newNote));
      } catch (err) {
        res.writeHead(400, { 'content-type': 'application/json' });
        res.end(JSON.stringify({error: err.message}))
      }
    })
  }
});
