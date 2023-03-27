const express = require('express');
const bodyParser = require("body-parser");

//라우트 분리 사용
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin',adminRoutes);

// 라우트 분리 사용 (필터설정 미사용)
app.use(shopRoutes);


app.use((req, res, next)=>{
    res.status(404).send('<h1>page not found</h1>');
});

app.listen(3000);
