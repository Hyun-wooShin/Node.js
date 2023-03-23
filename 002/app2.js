const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    const url = req.url;
    const method = req.method;

    if(url === '/')
    {
        res.setHeader('Contet-Type','text/html');
        res.write('<html>');
        res.write('<head><title>test</title></head>');
        res.write('<body><form action="/message" method="post"><input type="text" name="message"/><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }

    
    if(url === '/message' && method === 'POST')
    {
        const body = [];
        req.on('data',(chunk)=>{
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end',()=>{
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, err=>{
                // res.statusCode = 302;
                // res.setHeader('Location','/');
                // return res.end();
            });
        });

        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }

    res.setHeader('Contet-Type','text/html');
    res.write('<html>');
    res.write('<head><title>test</title></head>');
    res.write('<body><h1>test</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(3000);