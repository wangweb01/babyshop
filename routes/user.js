const express = require("express");
const router = express.Router();
const pool = require("../pool");

router.post('/signin', (req, res) => {
    var {uname, upwd} = req.body;
    console.log(uname,upwd)
    /*
        res.writeHead(200);
        res.write(JSON.stringify({req}));
    */
    var sql = `SELECT sid
               FROM bs_signin
               WHERE uname = ?
                 AND upwd = (md5(?))`;
    pool.query(sql, [uname, upwd], (err, result) => {
        if (err)
            console.error(err);
        // var id = result[0].id;
// console.log(id)
        if (result.length == 1) {
            res.writeHead(200);
            req.session.userId = result[0].sid;
            res.write(JSON.stringify({ok: 1, msg: '登录成功！'}));
        } else {
            res.write(JSON.stringify({ok: 0, msg: '用户名或密码错误！'}))
        }
        res.end();
    })
});

router.get('/issignin', (req, res) => {
    var userId = req.session.userId;
    res.writeHead(200);
    if (userId === undefined || userId === null) {
        res.write(JSON.stringify({ok: 0, msg: '用户未登录！'}));
        res.end();
    } else {
        var sql = `SELECT user_name
                   FROM bs_user
                   WHERE uid = ?`;
        pool.query(sql, [userId], (err, result) => {
            res.write(JSON.stringify({ok: 1, name: result[0].user_name}));
            res.end();
        });
    }
});

router.get('/signout', (req, res) => {
    res.writeHead(200);
    res.write(JSON.stringify({ok: 2, msg: '已退出登录！'}));
    req.session.userId = undefined;
    res.end();
});

module.exports = router;








