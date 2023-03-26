//require('http')는 require('express') 사용으로 더이상 필요하지 않다.
//const http = require('http');

//Express.js 불러오기
const express = require('express');

//불러온 express를 app 상수에 담기
const app = express();

//미들웨어 추가 : app.use를 사용하고 파라메터로 req, res, next 를 넘기는 것은 미들웨어이다.
app.use((req, res, next)=>{
    console.log('In the middleware!');
    next(); //next(); 추가하면 다음 미들웨어로 이동할 수 있게 해줘 In another middleware!가 로그에 찍히게 된다.
});

//다른 미들웨어 추가 : app.use를 사용하고 파라메터로 req, res, next 를 넘기는 것은 미들웨어이다.
app.use((req, res, next)=>{
    console.log('In another middleware!');
    //마지막 미들웨어에서는 응답을 내보내야 한다.
    res.send('<h1>Hello from Express</h1>'); //.send()함수로 응답을 내보낸다. 여기서는 text/html 형식으로 응답.

});

//app 상수를 넘겨 서버 생성
// const server = http.createServer(app);
// server.listen(3000);

/*const server = http.createServer(app);
server.listen(3000);
이 두줄을 사용하는 대신 아래 Express.js 기능을 사용하는 것으로 바꿀 수 있다.*/
app.listen(3000);
