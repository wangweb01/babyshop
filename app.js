const express = require('express');
const session = require('express-session');
const cors = require('cors');
const bodyParser = require('body-parser');

const index = require('./routes/index');
const singleProduct = require('./routes/single-product');
const shop = require('./routes/shop');
const user = require('./routes/user');

var app = express();
app.listen(3003, function () {
    console.log('Server listening on 3003 ...');
});

app.use(cors({
    origin: [
        "http://127.0.0.1:8080",
        "http://localhost:8080"
    ],
    credentials: true
}));

app.use(session({
    secret: '128位随机字符串',
    // cookie: {maxAge: 60 * 1000 * 30},//过期时间ms
    resave: false,
    saveUninitialized: true
}));

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(__dirname + '/static'));

app.use('/index', index);
app.use('/single-product', singleProduct);
app.use('/shop', shop);
app.use('/user', user);










