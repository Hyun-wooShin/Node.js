const path = require('path');

//main module의 폴더 절대경로 반환
module.exports = path.dirname(require.main.filename);