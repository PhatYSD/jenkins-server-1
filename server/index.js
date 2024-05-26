const http = require("http");

const server = http.createServer((_req, res) => {
    res.statusCode = 200;
    res.end("Hello World");
});

server.listen(3000, () => console.log(`http://localhost:3000`));