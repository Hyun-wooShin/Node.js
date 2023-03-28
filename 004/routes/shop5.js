const path = require('path');
const express = require('express');

const router = express.Router();

router.get('/', (req, res, next)=>{
    //res.send('<h1>Hello from Express</h1>'); 
    //res.sendFile('/views/shop.html'); //Error: ENOENT: no such file or directory, stat 'D:\views\shop.html'
    
    //__dirname : 현재위치의 경로를 절대경로로 반환해주는 전역변수 여기서는 routes폴더 경로임.
    // ../ 를 통해 한단계 위로 올라감.
    //path.join을 사용하는 이유는 각각 다른운영체제에 맞는 패스를 자동으로 생성해주기 때문. 윈도우 \  리눅스 /
    const shopHtmlPath = path.join(__dirname, "../" , "views","shop.html");
    res.sendFile(shopHtmlPath);
});

module.exports = router;