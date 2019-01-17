const express = require("express");
const router = express.Router();
const pool = require("../pool");

router.get('/', (req, res) => {
    var kwords = req.query.kwords;
    var arr = kwords.split(' ');
    for (var i = 0; i < arr.length; i++) {
        arr[i] = `title LIKE '%${arr[i]}%'`
    }
    var where = " WHERE " + arr.join(" AND ");
    var output = {pageSize: 9};
    output.pno = req.query.pno;
    var sql = `SELECT pid, title
                   ,
                      (
                        SELECT sm
                        FROM bs_product_pic
                        WHERE product_id = pid
                        LIMIT 1
                      ) AS sm
               FROM bs_product`;
    pool.query(sql + where, [], (err, result) => {
        if (err)
            console.log(err);
        // 获得总记录数
        output.count = result.length;
        // 计算总页数
        output.pageCount = Math.ceil(output.count / output.pageSize);
        // 截取分页后的结果集
        output.shop = result.slice(output.pno * 9, output.pno * 9 + 9);
        res.writeHead(200, {
            "Content-Type": "application/json;charset=utf-8",
            "Access-Control-Allow-Origin": "*"
        });
        res.write(JSON.stringify(output));
        res.end()
    })
});

module.exports = router;