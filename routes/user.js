const express = require("express");
const router = express.Router();
const pool = require("../pool");

router.post('/signin', (req, res) => {
    var {uname, upwd} = req.body;
    /*
        res.writeHead(200);
        res.write(JSON.stringify({req}));
    */
    var sql = `SELECT *
               FROM bs_user
               WHERE uname = ?
                 AND upwd = ?`;
    pool.query(sql, [uname, upwd], (err, result) => {
        if (err)
            console.error(err);
        if (result.length > 0) {
            res.writeHead(200);
            var user = result[0];
            req.session.uid = user.uid;
            res.write(JSON.stringify({ok: 1, msg: '登录成功！'}));
        } else {
            res.write(JSON.stringify({ok: 0, msg: '用户名或密码错误！'}))
        }
        res.end();
    })
});

router.get('/islogin', (req, res) => {
    var uid = req.session.uid;
    res.writeHead(200);
    if (uid === undefined || uid === null) {
        res.write(JSON.stringify({ok: 0, msg: '用户未登录！'}));
        res.end();
    } else {
        var sql = `SELECT *
                   FROM bs_user
                   WHERE uid = ?`;
        pool.query(sql, [uid], (err, result) => {
            res.write(JSON.stringify({ok: 1, uname: result[0].uname}));
            res.end();
        });
    }
});

router.get('/signout', (req, res) => {
    res.writeHead(200);
    res.write(JSON.stringify({ok: 2, msg: '已退出登录！'}));
    req.session.uid = undefined;
    res.end();
});

module.exports = router;








