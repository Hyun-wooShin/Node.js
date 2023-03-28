const path = require('path');

const rootDir = require('../util/path');

const express = require('express');

const router = express.Router();

router.get('/', (req, res, next)=>{
    //../util/path 사용
    //const shopHtmlPath = path.join(__dirname, "../" , "views","shop.html");
    const shopHtmlPath = path.join(rootDir , "views","shop.html");
    res.sendFile(shopHtmlPath);
});

module.exports = router;