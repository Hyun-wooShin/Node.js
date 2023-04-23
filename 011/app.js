const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
// const db = require('./util/database');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

//promise와 관련 : then() or catch()
//promise는 자바스크립트 기본 객체
//then 블록을 배치하면 익명홤수를 가져와서 실행할 수 있다. 중첩된 코드 대신 읽기 쉬운 코드가 됨.
//catch 블록에서는 에러가 발생했을 때 처리.
// db.execute('select * from products')
//     .then(result=>{
//         console.log(result[0], result[1]);
//     })
//     .catch(err=>{
//         console.log(err);
//     });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);
