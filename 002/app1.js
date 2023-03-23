const http = require('http');

const server = http.createServer((req,res)=>{
    console.log(req.url, req.method, req.headers);
    //process.exit();
    res.setHeader('Contet-Type','text/html');
    res.write("<html>");
    res.write("<head><title>test</title></head>");
    res.write("<body><h1>test</h1></body>");
    res.write("</html>");
    res.end();
});

server.listen(3000);