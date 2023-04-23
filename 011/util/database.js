const mysql = require('mysql2');

//pool 생성
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node-complete',
    password: '1111'
});

module.exports = pool.promise();