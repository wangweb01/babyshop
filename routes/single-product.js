const express = require('express');
const pool = require('../pool');
const router = express.Router();

router.get('/', (req, res) => {
    var pid = req.query.pid;
    var obj = {product: {}, specs: [], pics: []};

    Promise.all([
        // 查询商品
        (function () {
            return new Promise(function (open) {
                var sql = `SELECT pic
                           FROM bs_product
                           WHERE pid = ?`;
                pool.query(sql, [pid], (err, result) => {
                    if (err)
                        console.error(err);
                    obj.product = result[0];
                    open();
                })
            })
        })(),
        (function () {
            return new Promise(function (open) {
                var sql = `SELECT pid, spec
                           FROM bs_product
                           WHERE family_id = (
                             SELECT family_id
                             FROM bs_product
                             WHERE pid = ?
                           )`;
                pool.query(sql, [pid], (err, result) => {
                    if (err)
                        console.error(err);
                    obj.specs = result;
                    open();
                });
            })
        })(),
        (function () {
            return new Promise(function (open) {
                var sql = `SELECT lg
                           FROM bs_product_pic
                           WHERE product_id = ?`;
                pool.query(sql, [pid], (err, result) => {
                    if (err)
                        console.error(err);
                    obj.pics = result;
                    open();
                });
            });
        })()
    ]).then(function () {
        res.send(obj);
    })
});

module.exports = router;









