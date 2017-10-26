<template>
	<div class="bodyDiv">
		<!--找回密码第一个-->
		<div class="cont1">
			<h1>找回密码</h1>
			<div class="input">
				<span>手机号:</span>
				<input type="text" placeholder="手机号/用户名/邮箱" class="phone_num"/><br />
				<span>动态码:</span>
				<input type="text" class="phone_msg"/>
				<img src="../../assets/car-login/346.png" class="msg_img"/>
				<a href="###">看不清楚?换一张</a>
			</div>
			<button class="btn1">登录</button>
		</div>
		<!--重设密码第二个-->
		<div class="cont2">
			<h1>重设密码密码</h1>
			<div class="input1">
				<span>短信验证码:</span>
				<input type="text" class="phone_msg_num"/>
				<span class="waring"><img src="../../assets/car-login/352.png"/>请输入你收到短信中的验证码</span><br />
				<span>创建密码:</span>
				<input type="text" class="new_passw1"/><br />
				<span>确认密码</span>
				<input type="text" class="new_passw2" /><br />
				<span>验证码</span>
				<input type="text" class="phone_msg2"/>
				<img src="../../assets/car-login/346.png" class="msg_img"/>
				<a href="###">看不清楚?换一张</a>
			</div>
			<button class="btn2">查询</button>
		</div>
		<!--重设成功-->
		<div class="cont3">
			<h1>找回密码</h1>
			<p>操作成功!请到
			<a href="###">xushuang_0902@hotmail.com</a>
			,查阅来自车族网的邮件,点击邮件中的链接重设您的密码
			</p>
		</div>
	</div>
</template>

<script>
	import "./find.css"
	export default{
		name:"Find",
		mounted(){
			$(".btn1").click(function(){
				$(".cont1").css("display","none");
				$(".cont2").css("display","block");
			})
			$(".btn2").click(function(){
				$(".cont3").css("display","block").siblings().css("display","none");
			})
		}
	}
</script>

<style scoped="scoped">
*{padding: 0;margin:0 ;}
img{
	vertical-align: top;
}
.bodyDiv{
	height: 382px;
	width: 982px;
	margin:10px auto 35px;
	font-size: 12px;
}
/*找回密码开始*/
.cont1,.cont2,.cont3{
	width: 722px;
	height: 380px;
	border: 1px solid #c5c5c5;
	background: white;
	display: none;
}
.cont1{
	display: block;
}
.bodyDiv h1{
	line-height: 54px;
	padding-top: 6px;
	font-size: 24px;
	text-indent: 21px;
	background: #f6f6f6;
	border-bottom: 1px solid #c5c5c5;
}
.bodyDiv .input{
	padding-top: 34px;
	padding-left: 29px;
}
.msg_img{
	height: 30px;
	width: 64px;
	margin-right: 12px;
}
.bodyDiv a{
	color: #36273a;
}
.bodyDiv input{
	line-height: 22px;
	text-indent: 8px;
	border: 1px solid #c5c5c5;
	margin-bottom: 17px;
	margin-left: 11px;
}
.cont1 .phone_num{
	width: 241px;
}
.bodyDiv .phone_msg{
	width: 114px;
}
.cont1 .btn1{
	background: #2870b2;
	line-height: 23px;
	width: 70px;
	text-align: center;
	font-size: 14px;
	color: white;
	margin-left: 84px;
}
/*找回密码结束*/
/*开始重设密码*/
.cont2 span{
	display: inline-block;
	width: 75px;
	text-align: right;
}
.cont2 .waring{
	width: 203px !important;
	padding-top: 2px;
	line-height: 20px;
	background: #fff1f1;
	border: 1px solid #ffbebd;
	color:#5e6871;
	text-align: left;
}
.waring img{
	height: 16px;
	width: 16px;
	vertical-align: middle;
	margin-left: 10px;
	margin-right:8px ;
}
.cont2 .input1{
	padding-left: 34px;
	padding-top: 32px;
}
.cont2 input{
	width: 208px;
}
.cont2 .phone_msg2{
	width: 114px;
	margin-right: 26px;
}
.cont2 .btn2{
	background: #2870b2;
	line-height: 23px;
	width: 87px;
	text-align: center;
	font-size: 14px;
	color: white;
	margin-left: 123px;
}
/*重设成功*/
.cont3{
	display: none;
}
.cont3 p{
	width: 485px;
	line-height: 25px;
	padding: 22px 83px 26px 83px;
	margin-top: 32px ;
	margin-left: 32px;
	border: 1px solid #e4e3d2;
	background: #ffffeb;
}
.cont3 p a{
	color: #a11212;
}

</style>