const path = require('path');
const express = require('express');

const router = express.Router();

router.use((req, res, next)=>{
    const error404HtmlPath = path.join(__dirname, "../" , "views","404.html");
    res.status(404).sendFile(error404HtmlPath);
});

module.exports = router;