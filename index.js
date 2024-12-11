const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
    res.end('hello from the server !');
});