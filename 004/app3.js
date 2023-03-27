const express = require('express');
//bodyPaser 사용 전 npm install body-parser --save 명령을 통해 먼저 설치를 진행한다.
const bodyParser = require("body-parser");

const app = express();

//app.use(bodyParser.urlencoded()); 
//form을 통해 전송된 본문을 분석하기 위해 bodyParser.urlencoded() 사용.
//body-parser deprecated undefined extended: provide extended option app3.js:7:20 와 같이 나오면 아래와 같이 바꾼다. 비표준 대상의 분석이 가능한지 여부 설정.
app.use(bodyParser.urlencoded({extended: false}));

//요청 Form생성
app.use('/add-product', (req, res, next)=>{
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add product</button></form>'); 
});

//요청 처리
//post요청(add-product의 form에서 온 요청)에 대해서만 반응 하려면 app.use 가 아닌 app.post로 바꾸면 된다.
//app.get은 동일하게 get 요청에만 반응.
app.post('/product', (req,res,next)=>{
    console.log(req.body); //bodyParser가 등록되지 않으면 undefined 값찍힘. bodyParser 등록 후 값 찍힘 ex { title: 'book' }
    res.redirect('/');
});

app.use('/', (req, res, next)=>{
    res.send('<h1>Hello from Express</h1>'); 
});

app.listen(3000);
