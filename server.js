const http = require('http');
const quotes = require('./quotes');

const quote = quotes[Math.floor(Math.random() * quotes.length)];


http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.writeHead(200);
    res.write(quotes[Math.floor(Math.random() * quotes.length)]);

    res.end();
}).listen(3000);