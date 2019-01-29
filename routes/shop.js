const express = require("express");
const router = express.Router();
const pool = require("../pool");

router.get('/', (req, res) => {
    var obj = {ok: 1};
    var kword = req.query.kword;
    obj.pno = req.query.pno;
    var pageSize = req.query.pageSize;
    console.log(kword,obj.pno)


    var arr = kword.split(' ');
    if (!obj.pno)
        obj.pno = 1;
    if (!pageSize)
        obj.pageSize = 8;
    var reg = /^[0-9]{1,9}$/;
    if (!reg.test(obj.pno)) {
        res.send({code: -1, msg: "页码格式不正确"});
        return;
    }
    if (!reg.test(obj.pageSize)) {
        res.send({code: -2, msg: "页大小格式不正确"});
        return;
    }
    if (arr[0] == '*')
        arr[0] = '%';
    var sqlCount = `SELECT count(pid) AS counts
                    FROM bs_product`;
    for (var i = 0; i < arr.length; i++)
        arr[i] = ` title LIKE '%${arr[i]}%'`;
    var sqlWhere = " WHERE " + arr.join(" AND ");
    sqlCount += sqlWhere;
    var progress = 0;
    pool.query(sqlCount, (err, result) => {
        if (err) throw err;
        obj.count = result[0].counts;
        obj.pageCount = Math.ceil(obj.count / obj.pageSize);
        progress += 1;
        if (progress == 2) {
            res.send(obj);
        }
    });
    var sqlProduct = `SELECT pid, title
                   ,
                      (
                        SELECT sm
                        FROM bs_product_pic
                        WHERE product_id = pid
                        LIMIT 1
                      ) AS sm
               FROM bs_product`;
    sqlProduct += sqlWhere;
    sqlProduct += ` LIMIT ?, ?`;
    var offset = (obj.pno - 1) * obj.pageSize;
    pool.query(sqlProduct, [offset, obj.pageSize], (err, result) => {
        if (err)
            console.log(err);
        obj.data = result;
        progress += 1;
        if (progress = 2) {
            res.send(obj);
        }
        /*
                // 截取分页后的结果集
                output.shop = result.slice(output.pno * 9, output.pno * 9 + 9);
                res.writeHead(200, {
                    "Content-Type": "application/json;charset=utf-8",
                    // "Access-Control-Allow-Origin": "*"
                });
                res.write(JSON.stringify(output));
                res.end()
        */
    })
});

module.exports = router;