const mysql = require('mysql');

var pool = mysql.createPool({
/*
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'bs',
    connectionLimit: 10
*/
    host: 'w.rdc.sae.sina.com.cn',
    user: '4l540mxz5x',
    password: 'yxx2hkz3yxxxy1121wmykk0i0hj1wz40ih5kk3lm',
    database: 'app_babyshop',
    connectionLimit: 10
});

module.exports = pool;







