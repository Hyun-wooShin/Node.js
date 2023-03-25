const fs = require('fs');

const requestHandler = (req, res)=>{
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
                res.statusCode = 302;
                res.setHeader('Location','/');
                return res.end();
            });
        });

        

        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
}

//하나만 넘겨도 되고
// module.exports = requestHandler;

//객체로 넘겨도 되고
// module.exports = {
//     handler: requestHandler,
//     someText: "someText"
// }

//각각 넘겨도 되고
// module.exports.handler = requestHandler;
// module.exports.someText = "someText";

//module은 생략해도 되네.
exports.handler = requestHandler;
exports.someText = "someText";