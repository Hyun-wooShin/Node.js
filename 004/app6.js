const path = require('path');

const express = require('express');
const bodyParser = require("body-parser");

const adminRoutes = require('./routes/admin6');
const shopRoutes = require('./routes/shop6');
const errorRoutes = require('./routes/error6');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

//public 폴더 하위는 정적으로 서비스 하기위한 설정 css나 image등의 경로를 이렇게 설정한다. 여기서는 public 이하 폴더를 정적으로 서비스 
app.use(express.static(path.join(__dirname,"public")))

app.use('/admin',adminRoutes);

app.use(shopRoutes);

app.use(errorRoutes);

app.listen(3000);
