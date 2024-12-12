const fs = require('fs');
const http = require('http');




const data =  fs.readFile('${__dirname}/dev-data/data.json', 'utf-8');
const productData = JSON.parse(data); 

const server = http.createServer((req, res) => {
    res.end('hello from the server !');
});//阿要先創建server

server.listen(8000, '127.0.0.1',() =>{
    console.log("listen on prot 8000 ");
}); //這server.listen就是開port server

if (pathName ==='/' || pathName ==='/overview'){
    res.end('this is a overview');
    
}else if (pathName ==='/api'){
    res.writeHead(200,{'content-type':'application/json'});
    res.end(data);

}else if(pathName ==='/product'){
    res.end('this is a product');
}