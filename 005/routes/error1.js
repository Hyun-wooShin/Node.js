const path = require('path');

const rootDir = require('../util/path');

const express = require('express');

const router = express.Router();

router.use((req, res, next)=>{
    // const error404HtmlPath = path.join(rootDir , "views","404.html");
    // res.status(404).sendFile(error404HtmlPath);
    res.status(404).render('404', {pageTitle:'Error404'});
});

module.exports = router;