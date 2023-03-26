const express = require('express');

const app = express();

app.use((req, res, next)=>{
    console.log('Always run');
    next();
});

app.use('/add-product', (req, res, next)=>{
    console.log('/add-product');
    res.send('<h1>Add Product</h1>'); 
    //next();  // /add-product 요청에 대해서만 처리해야 하므로 next(); 호출하지 않음. next(); 호출하지 않으면 다음 미들웨어로 가지않고 멈춤
});

//위에서의 요청을 제외한 나머지 요청 처리 : / 나 /asdfs 등등 
app.use('/', (req, res, next)=>{
    console.log('/');
    res.send('<h1>Hello from Express</h1>'); 
});

app.listen(3000);
