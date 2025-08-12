const url = require("url");
const http = require("http");

const port = 3000;

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true); // true = parse query into object
    const path = parsedUrl.pathname;
    const query = parsedUrl.query;

    if (path === "/greet" && query.name) {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(`Hello, ${query.name}!`);
    } else if (path === "/sum" && query.a && query.b) {
        const a = parseInt(query.a);
        const b = parseInt(query.b);
        const sum = a + b;
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(`Sum is ${sum}.`);
    }
    else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Page not found");
    }
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
