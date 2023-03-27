const express = require('express');

const router = express.Router();

//router.use 가 아닌 router.get을 사용하면 정확히 경로가 일치 해야한다. /asdfsd 이런식의 경로를 입력하면 에러가 발생한다.
router.get('/', (req, res, next)=>{
    res.send('<h1>Hello from Express</h1>'); 
});

module.exports = router;