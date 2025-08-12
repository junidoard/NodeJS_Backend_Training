const http = require("http");

const port = 3000;

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("Welcome to my Node.js server!");
    }
    else if (req.url === "/about") {
        res.end("About me: I am learning Node.js backend.");
    }
    else if (req.url === "/api") {
        res.end(JSON.stringify({ "status": "success", "message": "This is the API endpoint" }
        ));
    }
    else {
        res.statusCode = 404;
        res.end("Page not found!");
    }
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});