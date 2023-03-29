const path = require('path');

const express = require('express');
const bodyParser = require("body-parser");

//const adminRoutes = require('./routes/admin1');
const adminData = require('./routes/admin1');
const shopRoutes = require('./routes/shop1');
const errorRoutes = require('./routes/error1');

const app = express();

//템플릿엔진으로 pug를 사용하겠다고 express에 알리는 구문
app.set('view engine', 'pug');

//view 템플릿들이 위치한 경로 등록 여기서는 ./views 경로 (./view 경로의 .pug 파일)
app.set('views','views');

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname,"public")))

//app.use('/admin',adminRoutes);
app.use('/admin', adminData.routes)

app.use(shopRoutes);

app.use(errorRoutes);

app.listen(3000);
