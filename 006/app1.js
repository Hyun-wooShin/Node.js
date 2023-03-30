const path = require('path');

const express = require('express');
const bodyParser = require("body-parser");

//express-handlebars 사용 
const expressHbs = require('express-handlebars');


//const adminRoutes = require('./routes/admin1');
const adminData = require('./routes/admin1');
const shopRoutes = require('./routes/shop1');
const errorRoutes = require('./routes/error1');

const app = express();

//뷰엔진에 handlebars 이름으로 expressHbs 등록
//view 추가할때 확장자명을 .handlebars로 쓸수있음.
//handlebars 대신 hbs를 사용한다면 view 추가할때 확장자명을 .hbs로 쓸수 있음.
app.engine('hbs', expressHbs({
    layoutDir: 'views/layouts/', 
    defaultLayout: 'main-layout',
    extname: 'hbs'
})); //expressHbs() 내부에 layout 경로를 줄수 있다.

//템플릿엔진으로 handlebars를 사용하겠다고 express에 알리는 구문
app.set('view engine', 'hbs');

//view 템플릿들이 위치한 경로 등록 여기서는 ./views 경로 (./view 경로의 .hbs 파일)
app.set('views','views');

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname,"public")))

//app.use('/admin',adminRoutes);
app.use('/admin', adminData.routes)

app.use(shopRoutes);

app.use(errorRoutes);

app.listen(3000);
