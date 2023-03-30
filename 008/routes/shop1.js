const path = require('path');

const rootDir = require('../util/path');

const express = require('express');

const adminData = require('./admin1');

const router = express.Router();

router.get('/', (req, res, next)=>{
    // console.log(adminData.products);
    // const shopHtmlPath = path.join(rootDir , "views","shop.html");
    // res.sendFile(shopHtmlPath);

    // pug를 사용해 응답
    // main에 pug위치를 등록했으므로 그냥 shop만 입력하면됨.
    const products = adminData.products;
    console.log(products);
    res.render('shop',{
        pageTitle:'Shop', 
        prods:products, 
        path:'/', 
        hasProds: products.length>0 ? true : false,
        activeShop: true,
        productCSS: true
    });
});

module.exports = router;