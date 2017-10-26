//后台服务器
const app = require('express')();
const bodyParser = require("body-parser")//引入post模块
const urlencodeParser = bodyParser.urlencoded();//处理post
var mysql = require("mysql");
var connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"sixgod"
})
//登录
app.post("/login",urlencodeParser,function (req,res) {
    var account_msg = req.body
    if(account_msg.way=="password"){//账号密码登录
        let sql = "select * from car1 where name='六' and password='0'"
        connection.query(sql,function (err,doc) {
            if(err){//登录失败
                res.send('{"err":0,}')
            }else{//登录成功
                res.send('{"err":1,"msg":"登录成功"}')
            }
        })
    }
    if(account_msg.way=="password"){
        let sql = "select * from car1 where phonenum=''"
        connection.query(sql,function (err,doc) {
            if(err){//登录失败
                res.send('{"err":0,"msg":"查询无此手机号"}')
            }else{//登录成功
                res.send('{"err":1,"msg":"有此手机号,开始手机动态验证"}')
            }
        })
    }
    res.send('{"err":1}')

})
//注册
app.get("/sigin",function (req,res) {
    var onemsg = req.query;
    if(onemsg.way=="phone"){//手机注册
        //判断手机是否被注册
        let sql = "select * from car1 where name='"+onemsg.name+"'";
        connection.query(sql,function(err,result){
            if(result==""){//可以注册
                console.log("可以注册")
                let sql = "insert into car1(name,password,phonenum,email,havecar,shop) values ('"+onemsg.name+"','"+onemsg.password+"','"+onemsg.phonenum+"','"+onemsg.email+"','"+onemsg.havecar+"','"+onemsg.shop+"')";
                //    执行语句
                connection.query(sql,function (err,result) {
                    console.log(err)
                    console.log(result)
                    res.send('{"err":1}')
                })
            }else {//不可以注册
                res.send('{"err":0,"msg":"手机号已经被注册"}')
            }
        })
    }
    if(onemsg.way=="email"){//邮箱注册
        //判断邮箱是否被注册
        let sql = "select * from car1 where email='"+onemsg.email+"'";
        connection.query(sql,function(err,result){
            if(result==""){//可以注册
                console.log("可以注册")
                let sql = "insert into car1(name,password,phonenum,email,havecar,shop) values ('"+onemsg.name+"','"+onemsg.password+"','"+onemsg.phonenum+"','"+onemsg.email+"','"+onemsg.havecar+"','"+onemsg.shop+"')";
                //    执行语句
                connection.query(sql,function (err,result) {
                    if(result){
                        res.send('{"err":1}')
                    }else {
                        res.send('{"err":0,"msg":"服务器错误"}')
                    }
                })
            }else {//不可以注册
                res.send('{"err":0,"msg":"邮箱已经被注册"}')
            }
        })
    }
  
})
// 监听端口
app.listen(8001,function () {
    console.log("服务器启动成")
});

