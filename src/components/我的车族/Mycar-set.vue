<template>
	<div class="set_wrap">
		<div class="set">
			<a href="###" class="aa">基本信息</a><a href="###" class="bb">邮件阅读</a><a href="###" class="cc">收货地址</a>
			<div class="line"></div>
			<div class="setcont_">
				<span class="ff">手机号:</span> <span class="phone dd">15515619809</span><a href="###" class="gh">更换</a><br />
				<span class="ff">邮&nbsp;&nbsp; 箱:</span> <span class="dd ee">15515619809@qq.com</span><span class="wyz">未验证,</span><span class="yzz"><a href="###" class="change_email">立即验证</a></span><br />
				<span class="ff">用户名:</span> <span class="name dd">vvvzjp</span><a href="###" class="xg1">修改</a><br />
				<span class="ff">密&nbsp;&nbsp; 码:</span> <span class="password dd">········</span><a href="###" class="xg2">修改</a><br />
			</div>
		</div>
			<!--弹框-->
			
		<div class="mark">
			<div class="alert_log">
				<!--重置密码-->
					<div class="alert_log_top a1">
						<span class="sm">设置密码</span><span class="qx"><img src="../../assets/car-shop/quxiao.png"/></span>
					</div>
					<div class="setpassword a1" >
					<!--密码账号-->
					<div class="pp">
						<span>当前密码</span> <input type="password" class="before" /><br />
						<span>新的密码</span> <input type="password" class="now new_password p1"/><br />
						<span class="waring ww">新密码至少6个字符,最多32个字符</span><br />
						<span>确认密码</span> <input type="password" class="now new_password p2"/>
					</div>
					<div class="queren">
						<button class="yes">确认</button><a href="###">取消</a>
					</div>
				</div>
				<!--修改用户名-->
				<div class="alert_log_top a2" >
						<span class="sm">修改用户名</span><span class="qx"><img src="../../assets/car-shop/quxiao.png"/></span>
					</div>
					<div class="setpassword a2" >
					<!--密码账号-->
					<div class="pp">
						<span class="vvv">当前用户名</span> <span class="nname">vvvzjp</span><br />
						<span class="qr">新的用户名</span> <input type="text" class="now new_name"/><br />
						<span class="waring w0">以中文或英文字母开头,限4-15个字符</span>
					</div>
					<div class="queren">
						<button class="yes">确定</button><a href="###">取消</a>
					</div>
				</div>
				<!--绑定邮箱-->
					<div class="alert_log_top a3" >
						<span class="sm">绑定邮箱</span><span class="qx"><img src="../../assets/car-shop/quxiao.png"/></span>
					</div>
					<div class="setpassword a3" >
					<!--密码账号-->
					<div class="pp">
						<span class="vvv">用户名</span> <span class="nname">vvvzjp</span><br />
						<span class="qr">邮 &nbsp;&nbsp;箱</span> <input type="text" class="email"/><br />
						<span class="yyyzm">验证码 </span><input type="text" class="yyyzm_"/><a href="" class="hyh"> 看不清楚?换一张</a>
					</div>
					<div class="queren qra">
						<button class="yes">确定</button><a href="###">取消</a>
					</div>
				</div>
				<!--修改手机号码-->
				<div class="alert_log_top a4">
						<span class="sm">更换手机号码</span><span class="qx"><img src="../../assets/car-shop/quxiao.png"/></span>
					</div>
					<div class="setpassword a4">
					<!--密码账号-->
					<div class="pp">
						<span class="old">更换手机号码</span> <input type="text" class="before_phone"/><br />
						<span class="waring w1"><img src="../../assets/car-shop/警告按钮.png"/> 请正确填写手机号</span><br />
						<span class="new"> 新的手机号码</span> <input type="text" class="now_phone"/><br />
						<span class="waring w2"><img src="../../assets/car-shop/警告按钮.png"/> 请正确填写手机号</span><br />
						<button class="bbbtn">获取验证码</button><span class="send"> (将发送到新手机上)</span><br />
						<span class="yyyzm yyyy">验证码 </span><input type="text" class="yyyzm_"/><br />
						<span class="notice">注意:绑定新手机号将会清空所有已绑定手机号</span>
					</div>
					<div class="queren qqrr">
						<button class="yes y1">确定</button><a href="###">取消</a>
					</div>
				</div>
				
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'Set',
		mounted(){
			$(".qx").click(function(){
				$(".mark").css("display","none");
				$(".alert_log").css("display","none");
				$(".alert_log_top").css("display","none");
				$(".setpassword").css("display","none");
			});
			//修改手机号码
			$(".gh").click(function () {
				$(".mark").css("display","block");
				$(".alert_log").css("display","block");
				$(".a4").css("display","block");
			});
			//手机正则验证
			$(".before_phone").blur(function () {
				var reg = /^[1][3,4,5,7,8][0-9]{9}$/;
				var bh = $(".before_phone").val();
				if(!(reg.test(bh))){
					$(".w1").css("display","inline-block");
				}
			});
			$(".now_phone").blur(function () {
				var reg = /^[1][3,4,5,7,8][0-9]{9}$/;
				var nh = $(".before_phone").val();
				if(!(reg.test(nh))){
					$(".w2").css("display","inline-block");
				}
			});
			//验证码
			$(".bbbtn").click(function () {
				var time = 60;
				var timer = setInterval(function () {
					time--;
					$(".bbbtn").html(time+"s后重新获取");
					if(time<=0){
						clearInterval(timer);
					}
				},1000);
			});
			
			$(".y1").click(function(){
				var phoneNum = $(".now_phone").val();
				$(".phone").html(phoneNum);
				
//				$(".mark").css("display","none");
//				$(".alert_log").css("display","none");
//				$(".a4").css("display","none");
				
			
			});
			//修改邮箱
			$(".change_email").click(function () {
				$(".mark").css("display","block");
				$(".alert_log").css("display","block");
				$(".a3").css("display","block");
			});
			//邮箱验证
			$(".email").blur(function () {
				var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;  
				var em = $(".email").val();
				if(!(reg.test(em))){
					alert("请输入正确的邮箱!!!");
				}
			})
			
			$(".yes").click(function(){
				var e_mail = $(".email").val();
				$(".ee").html(e_mail);
			});
			//修改用户名
			$(".xg1").click(function () {
				$(".mark").css("display","block");
				$(".alert_log").css("display","block");
				$(".a2").css("display","block");
			});
			$(".yes").click(function(){
				var _name = $(".new_name").val();
				$(".name").html(_name);
			});
			
			//修改密码
			$(".xg2").click(function () {
				$(".mark").css("display","block");
				$(".alert_log").css("display","block");
				$(".a1").css("display","block");
			});
			//重置密码验证
			var pass = $(".password").html();
			if(!($(".before").val(pass))){
				alert("请输入正确的密码!!!");
			}
			var p1 = $(".p1").val();
			var p2 = $(".p2").val();
			if(!(p1==p2)){
				alert("您本次输入的密码不对,请再次确认密码!!!");
			}
			
			
			
			$(".yes").click(function(){
				var _password = $(".new_password").val();
				$(".password").html(_password);
			});
			
		}
		
	}
</script>

<style scoped>
	*{
		margin: 0;
		padding: 0;
	}
.set_wrap{
		position: relative;
		width: 977px;
		margin: 0px auto 38px;
		z-index: 2;
	}
	.set{
			position: relative;
			z-index: 2;
			width: 716px;
			height: 555px;
			border: 1px solid #c6c6c6;
			margin-left: -5px;
			margin-top: -1px;
			background-color: #fff;
	}
	.set .aa{
		margin-left: 20px;
		background-color: #5a97d4;
		color: white !important;
	}
	.set .aa,.bb,.cc{
		display: inline-block;
		color:#5a97d4 ;
		width: 63px;
		line-height: 21px;
		font-size: 12px;
		text-decoration: none;
		text-align: center;
		margin-top: 26px;
		margin-right: 4px;
		margin-bottom: 10px;
	}
	.line{
		width: 677px;
		border: .5px solid #C5C5C5;
		margin: 0 auto;
	}
	.setcont_{
		width: 677px;
		height: 276px;
		margin: 0 auto;
		font-size: 14px;
		position: relative;
	}
	.setcont_ a{
		color: #5a97d4;
		text-decoration: none;
	}
	.dd,.ee{
		font-size: 12px;
	}
	.ff:nth-child(1){
		margin-top: 24px;
	}
	.ff{
		display: inline-block;
		text-indent: 2em;
		margin-bottom: 20px;
	}
	.gh,.wyz,.xg1,.xg2,.yzz{
		position: absolute;
	}
	.gh{
		top:24px;
		left: 228px;
	}
	.wyz{
		top:64px;
		left: 228px;
	}
	.yzz{
		top:64px;
		left: 275px;
	}
	.xg1,.xg2{
		top:104px;
		left: 228px;
	}
	.xg2{
		top:144px;
	}
	
	
	/*弹框*/
		.mark{
		background-color: rgba(123,123,123,0.3);
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 99;
	}
	.alert_log{
		width: 416px;
		height: 387px;
		border: 1px solid #007AFF;
		background-color: white;
		margin: 250px auto;
		z-index: 999;
	}
	.alert_log_top{
		width: 416px;
		height: 32px;
		background-color: #213f7b;
	}
	.sm{
		display: inline-block;
		text-indent: 1em;
		line-height: 32px;
		font-size: 16px;
		color: white;
	}
	.qx{
		float: right;
	}

	.pp{
		width: 336px;
		height: 84px;
		margin-left: 43px;
	}
	.before,.now,.email,.before_phone,.now_phone{
		width: 230px;
		height: 26px;
		font-size: 14px;
	}
	.before_phone{
		margin-top: 46px;
	}
	.waring{
		display: inline-block;
		text-indent: 30px;
		color: red !important;
	}
	.waring img{
		vertical-align: middle;
	}
	.yyyzm,.old,.new{
		font-size: 14px;
	}
	.yyyy{
		margin-left: 42px;
	}
	.yyyzm_{
		width: 104px;
		height: 26px;
		margin-top: 24px;
	}
	.hyh{
		text-decoration: none;
		font-size: 12px;
		color: #3071b9 ;;
	}
	.queren{
		position: relative;
		top: 134px;
		left: 112px;
	}
	.qra{
		left: 92px;
	}
	.qqrr{
		left: 132px;
		top: 204px;
	}
	.queren a{
		font-size: 12px;
		text-decoration: none;
		margin-left: 6px;
		color:#3071b9 ;
	}
	.yes{
		width: 78px;
		height: 38px;
		border-radius: 3px;
		border: none;
		font-size: 18px;
		color: white;
		font-weight: 100;
		background-color: #3071b9;
	}
	.before{
		display: inline-block;
		margin-top: 46px;
		margin-bottom:25px ;
	}
	.waring{
		font-size: 12px;
		color: #C5C5C5;
		display: inline-block;
		margin-left: 69px;
		margin-bottom: 8px;
		display: none;
	}
	.bbbtn{
		width:90px;
		height: 28px;
		border: 1px solid #C5C5C5;
		background-color: #f2f2f2;
		border-radius:3px;
		margin-left: 88px;
	}
	.send,.notice{
		font-size: 12px;
		color: #898888;
	}
	.notice{
		margin-left: 88px;
	}

	/*修改用户名*/
	.vvv{
		display: inline-block;
		margin-top: 52px;
		margin-bottom: 27px;
		font-size: 14px;
	}
	.nname{
		font-size: 12px;
	}
	.qr{
		font-size: 14px;
	}
	.w2{
		margin-top: 15px;
	}
	 .mark,.alert_log,.a1,.a2,.a3,.a4{
		display: none;
	}
</style>