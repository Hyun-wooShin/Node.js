const path = require('path');

const rootDir = require('../util/path');

const express = require('express');

const router = express.Router();

router.use((req, res, next)=>{
    // const error404HtmlPath = path.join(rootDir , "views","404.html");
    // res.status(404).sendFile(error404HtmlPath);
    res.render('404');
});

module.exports = router;