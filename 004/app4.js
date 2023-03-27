const express = require('express');
const bodyParser = require("body-parser");

//라우트 분리 사용
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

// 라우트 분리 사용 (필터설정 사용)
// '/admin' 필터를 설정하면 adminRoutes 는 /admin 로 시작하는 경로에만 반응한다.
// http://localhost:3000/admin/add-product 는 정상로딩
// http://localhost:3000/add-product 는 file not found
// http://localhost:3000/admin/product 는 정상로딩
// http://localhost:3000/product 는 file not found
app.use('/admin',adminRoutes);

// 라우트 분리 사용 (필터설정 미사용)
app.use(shopRoutes);

//404 오류페이지 추가 마지막 미들웨어까지와서도 처리를 못하면 여기 미들웨어에서 에러를 반환함.
app.use((req, res, next)=>{
    res.status(404).send('<h1>page not found</h1>');
});

app.listen(3000);
