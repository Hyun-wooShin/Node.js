const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const sequelize = require('./util/database');
const Product = require('./models/product');
const User = require('./models/user');
const Cart = require('./models/cart');
const CartItem = require('./models/cart-item');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) =>{
    User.findByPk(1)
    .then(user=> {
        req.user = user;
        next();
    })
    .catch(err=>console.log(err));
})

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

//User와 Product는 일대다관계
Product.belongsTo(User, {constraints: true, onDelete: 'CASCADE'});
User.hasMany(Product);

//User와 Cart는 일대일관계
User.hasOne(Cart);
Cart.belongsTo(User);

//Cart 와 Product는 다대다, CartItem은 Cart와 Product의 중간모델
Cart.belongsToMany(Product ,{ through: CartItem });
Product.belongsToMany(Cart ,{ through: CartItem });

//js에서 정의한 대로 실제 데이터베이스와 동기화 하는 부분
sequelize
.sync()
//.sync({force: true}) //force: true 지정하면 테이블을 매번 지우고 다시만든다. 개발시 테이블 및 관계를 재설정할 경우 이걸로 하고 그게아니면 force: true는 빼야한다.
.then(result => {
    return User.findByPk(1) //Dummy User처리
    //console.log(result);
})
.then(user => {
    if(!user){//User가 하나도 없으면 하나 새로 만든다.
        return User.create({name: 'Shin', email:'a@a.a'})
    }
    return user;
})
.then(user=> {
    //console.log(user);
    //return user.createCart();
})
.then(cart=>{
    app.listen(3000);
})
.catch(err => {
    console.log(err);
});
