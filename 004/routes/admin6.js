const path = require('path');

const rootDir = require('../util/path');

const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next)=>{
    //../util/path 사용
    //const addProductHtmlPath = path.join(__dirname, "../" , "views","add-product.html");
    const addProductHtmlPath = path.join(rootDir , "views","add-product.html");
    res.sendFile(addProductHtmlPath);
});

router.post('/product', (req,res,next)=>{
    console.log(req.body); 
    res.redirect('/');
});

module.exports = router;