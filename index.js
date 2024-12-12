const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
    res.end('hello from the server !');
});

server.listen(8000, '127.0.0.1',() =>{
    console.log("listen on prot 8000 ");
});