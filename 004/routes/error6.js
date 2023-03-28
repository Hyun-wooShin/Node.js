const path = require('path');

const rootDir = require('../util/path');

const express = require('express');

const router = express.Router();

router.use((req, res, next)=>{
    //../util/path 사용
    //const error404HtmlPath = path.join(__dirname, "../" , "views","404.html");
    const error404HtmlPath = path.join(rootDir , "views","404.html");
    res.status(404).sendFile(error404HtmlPath);
});

module.exports = router;