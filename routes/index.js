const express = require('express');
const router = express.Router();
const pool = require('../pool');
// const query = require('query');

router.get('/', (req, res) => {
    var obj = {
        carousel: [],
        banner: []
    };

    Promise.all([
        // 首页轮播
        (function () {
            return new Promise(function (open) {
                var sql = `SELECT img
                           FROM bs_index_carousel`;
                pool.query(sql, (err, result) => {
                    if (err)
                        console.log(err);
                    for (var i in result) {
                        obj.carousel.push(result[i]);
                    }
                    open();
                })
            })
        })(),
        // 首页广告
        (function () {
            return new Promise(function (open) {
                var sql = `SELECT img, title, href
                           FROM bs_index_banner`;
                pool.query(sql, (err, result) => {
                    if (err)
                        console.log(err);
                    for (var i in result) {
                        obj.banner.push(result[i]);
                    }
                    open();
                })
            })
        })()
    ]).then(function () {
        res.send(obj);
    })
});

module.exports = router;




