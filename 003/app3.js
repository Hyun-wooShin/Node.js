//Node 모듈 시스템 사용
const http = require('http');
const routes = require('./routes');
//const routes = reqire('./routes.js');

const server = http.createServer(routes.handler);
const someText = routes.someText;

console.log(someText);

server.listen(3000);