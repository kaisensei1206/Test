const fs = require('fs');
const http = require('http');
const url = require('url')


//讀JSON檔 再把它轉成javascript

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
    const pathName = req.url;
    //阿要先創建server

    server.listen(8000, '127.0.0.1', () => {
        console.log("listen on prot 8000 ");
    }); //這server.listen就是開port server

    if (pathName === '/' || pathName === '/overview') {
        res.end('this is a overview');

    } else if (pathName === '/api') {
        res.writeHead(200, { 'content-type': 'application/json' });
        res.end(data);

    } else if (pathName === '/product') {
        res.end('this is a product');
    }
});