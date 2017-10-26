//后台服务器
const app = require('express')();

app.get("/login",function (req,res) {
    console.log(1);
})
// 后端api路由

// 监听端口
app.listen(8001,function () {
    console.log("服务器启动成")
});

