const path = require('path');

const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next)=>{
    //res.send('<form action="/admin/product" method="POST"><input type="text" name="title"><button type="submit">Add product</button></form>'); 
    //res.sendFile('/views/add-product.html'); //Error: ENOENT: no such file or directory, stat 'D:\views\add-product.html'
    
    //__dirname : 현재위치의 경로를 절대경로로 반환해주는 전역변수 여기서는 routes폴더 경로임.
    // ../ 를 통해 한단계 위로 올라감.
    //path.join을 사용하는 이유는 각각 다른운영체제에 맞는 패스를 자동으로 생성해주기 때문. 윈도우 \  리눅스 /
    const addProductHtmlPath = path.join(__dirname, "../" , "views","add-product.html");
    res.sendFile(addProductHtmlPath);
});

router.post('/product', (req,res,next)=>{
    console.log(req.body); 
    res.redirect('/');
});

module.exports = router;