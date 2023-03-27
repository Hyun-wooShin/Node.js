const express = require('express');
const bodyParser = require("body-parser");

//라우트 분리 사용
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

//라우트 분리 사용
app.use(adminRoutes);
app.use(shopRoutes);

//404 오류페이지 추가 마지막 미들웨어까지와서도 처리를 못하면 여기 미들웨어에서 에러를 반환함.
app.use((req, res, next)=>{
    res.status(404).send('<h1>page not found</h1>');
});

app.listen(3000);
