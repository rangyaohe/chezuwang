<template>
	<div id="login">
		<div class="login_title">
			<h2>登录
				<span>尚未注册?</span>
				<a href="###">免费注册</a>
			</h2>
		</div>
		<!--登录输入-->
			<!--普通的登录-->
		<div class="login_mon_cont">
			<div class="login_mon_phone">
				<a href="###" class="cut" id="mon_cut">手机动态码登录</a>
			</div>
			<div class="login_mon_name">
				账号:
				<input type="text" placeholder="手机号/用户名/邮箱" class="accIput"/><br />
				密码:
				<input type="text" class="pasIput"/>
				<a href="/find" class="cut">忘记密码?</a>
			</div>
			<!--是否记住账号密码-->
			<div class="log_mon_rem">
				<span class="boolen accbol">
					<span class="boolen_yn" v-show="accbol"></span>
				</span>
				<span>记住账号</span>
				<span class="boolen pasbol">
					<span class="boolen_yn" v-show="pasbol"></span>
				</span>
				<span>下次记住密码</span>
			</div>
			<button class="login_mon_btn">登录</button>
		</div>
			<!--手机登录-->
		<div class="login_phon_cont">
			<div class="login_phon_phone">
				<a href="###" class="cut" id="phon_cut">普通方式登录</a>
			</div>
			<div class="login_phon_name">
				手机号:
				<input type="text" placeholder="手机号/用户名/邮箱" class="phoIput"/>
				<span class="pro_msg">用于登录和找回密码,不会公开</span><br />
				<button class="phone_msg">免费获取手机动态码</button>
				<span class="time_pro">已发送,1分钟后可重新获取</span><br />
				动态码:
				<input type="text" />
				<span class="pro_msg">请输入收到的手机动态码</span>
			</div>
			<div class="log_phon_rem">
				<span class="boolen phobol">
					<span class="boolen_yn" v-show="phobol"></span>
				</span>
				<span>记住手机</span>
			</div>
			<button class="login_phon_btn">登录</button>
		</div>
		<!--登录右边的部分-->
		<div class="log_else">
			<div class="login_signin">
				<span>尚未注册?</span><br />
				<a href="/signin">免费注册>></a>
			</div>
			<div class="login_other">
				<h3>用合作网站登录</h3>
				<div class="login_qq">
					<!--<div class="login_ever" v-for="item in loginArr">
						<img src="../../assets/car-login/2.png"/>
					</div>-->
					<a class="login_ever">
						<img src="../../assets/car-login/1.png"/>QQ
					</a>
					<a class="login_ever">
						<img src="../../assets/car-login/2.png"/>支付宝
					</a>
					<a class="login_ever">
						<img src="../../assets/car-login/3.png"/>	新浪微博
					</a>
					<a class="login_ever">
						<img src="../../assets/car-login/4.png"/>百度
					</a>
					<a class="login_ever">
						<img src="../../assets/car-login/5.png"/>360
					</a>
					<a class="login_ever">
						<img src="../../assets/car-login/6.png"/>开心网
					</a>
					<a class="login_ever">
						<img src="../../assets/car-login/7.png"/>团800
					</a>
					<a class="login_ever">
						<img src="../../assets/car-login/8.png"/>手机支付
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"Login",
		data(){
			return{
				loginArr:[
				{urls:"../../assets/car-login/1.png",cont:"QQ"},
				{urls:"../../assets/car-login/2.png",cont:"支付宝"},
				{urls:"../../assets/car-login/1.png",cont:"新浪微博"},
				{urls:"../../assets/car-login/1.png",cont:"百度"},
				{urls:"../../assets/car-login/1.png",cont:"360"},
				{urls:"../../assets/car-login/1.png",cont:"开心网"},
				{urls:"../../assets/car-login/1.png",cont:"团800"},
				{urls:"../../assets/car-login/1.png",cont:"手机支付"}
				],
				time:5,
				accbol:false,//记住账号
				pasbol:false,//记住密码
				phobol:false//记住手机
			}
		},
		//vue-route
		route:{
			
		},
		methods:{
			
		},
		mounted(){
			$(document).click(function(){
				$.ajax({
					type:"get",
					url:"api/login",
					data:{
						name:"张三"
					}
				});
			})
			//定义一个函数,在页面加载时查看是否有缓存,如果有的话添加到输入框中
			$(".accIput").val(localStorage.account);
			$(".pasIput").val(localStorage.passwords);
			$(".phoIput").val(localStorage.phone);
			//切换手机登录还是普通登录
			var _this=this;
			$("#mon_cut").click(function(){
				$(".login_mon_cont").css("display","none");
				$(".login_phon_cont").css("display","block");
			})
			$("#phon_cut").click(function(){
				$(".login_mon_cont").css("display","block");
				$(".login_phon_cont").css("display","none");
			});
			//判断是否记住各项密码或者手机
			$(".accbol").click(function(){
				_this.accbol=!_this.accbol
			})
			$(".pasbol").click(function(){
				_this.pasbol=!_this.pasbol
			})
			$(".phobol").click(function(){
				_this.phobol=!_this.phobol
			})
			//短信倒计时
			$(".phone_msg").click(function(){
				$(".time_pro").css("display","inline-block")
				$(".phone_msg").html("重新获取(59)");
				$(".phone_msg").attr("disabled","true")
				var time1 = setInterval(function(){
					_this.time--;
					$(".phone_msg").html("重新获取("+_this.time+")");
					if(_this.time<=0){
						$(".phone_msg").html("重新获取");
						clearInterval(time1);
						_this.time=5;
						$(".phone_msg").removeAttr("disabled")
					}
				},1000)
			})
			//普通登录
			$(".login_mon_btn").click(function(){
				//判断是否记住账号
				if(_this.accbol){
					window.localStorage.account=$(".accIput").val();
				}else{//删除缓存
//					window.localStorage.removeItem(account);
				}
				//判断是否记住密码
				if(_this.pasbol){
					window.localStorage.passwords=$(".pasIput").val();
				}else{
//					window.localStorage.removeItem(passwords);
				}
				alert("登录成功")
			})
			//手机登录
			$(".login_phon_btn").click(function(){
				//判断是否记住手机
				if(_this.phobol){
					window.localStorage.phone=$(".phoIput").val();
				}else{
//					window.localStorage.removeItem(phone)
				}
				alert("登录成功")
			})
		}
	}
</script>

<style scoped>
	*{margin: 0;padding: 0;}
	a{
		text-decoration: none;
	}
#login{
	position: relative;
	width: 978px;
	margin:10px auto 35px;
	background: #FFFFFF;
	border:1px solid #c7c7c7;
}
.login_title{
	padding-top: 10px;
	line-height: 54px;
	font-size: 24px;
	text-indent: 21px;
	border-bottom: 1px solid #c7c7c7;
}
.login_title span{
	font-size: 14px;
	margin-left: 11px;
	font-weight: 400;
}
.login_title a{
	/*margin: 0;*/
	font-size: 14px;
	color: #1978cf;
	font-weight: 400;
}
/*普通的登录*/
.login_mon_cont{
	width: 636px;
	border-right: 1px solid #c7c7c7;
	padding-left: 63px;
	/*display: none;*/
}
.login_mon_cont .login_mon_phone{
/*	height: 49px;*/
	padding-top: 37px;
	background:url("../../assets/car-login/338.png") no-repeat;
	background-size:10px 14px ;
	background-position: 199px 44px;
	padding-left: 215px;
	margin-bottom: 14px;
	
} 
/*那几个切换的a标签*/
.cut{
	font-size: 12px;
	color:#1978cf;
	display: inline-block;
	line-height: 12px;
}
.login_mon_cont .login_mon_name{
	font-size: 12px;
}
input{
	border: 1px solid #c5c5c5;
	line-height: 22px;
	width: 241px;
	margin-left: 12px;
	margin-bottom: 20px;
}
/*是否记住密码*/
.log_mon_rem{
	padding-left: 22px;
	height: 12px;
	font-size: 12px;
	color: #7a7c81;
}
.log_mon_rem span{
	display: inline-block;
	vertical-align: top;
	line-height: 12px;
}
.boolen{
	display: inline-block;
	height: 10px;
	width: 10px;
	text-align: center;
	border: 1px solid #c5c5c5;
	margin-right:7px ;
	margin-left: 23px;
}
.boolen .boolen_yn{
	display: block;
	width: 3px;
	height: 8px;
	margin-left: 3px;
	border-bottom: 2px solid #1978cf;
	border-right: 2px solid #1978cf;
	transform: rotate(45deg);
}
.login_mon_btn{
	line-height: 23px;
	text-align: center;
	color: white;
	background: #2870b2;
	/*border: black;*/
	width: 70px;
	margin: 35px 0 86px 45px;
}
/*input后面的提示信息*/
.pro_msg{
	display: inline-block;
	line-height: 22px;
	font-size: 12px;
	background: #e5f5ff url(../../assets/car-login/353.png) no-repeat;
	background-position:7px 2px ;
	border:1px solid #a4dbfe;
	text-indent: 26px;
	padding-right: 5px;
}
/*动态码登录*/
.login_phon_cont{
	padding-left: 49px;
	width: 650px;
	border-right:1px solid #c7c7c7;
	display: none;
	font-size: 13px;
} 
.login_phon_cont .login_phon_phone{
	padding-top: 37px;
	padding-bottom: 15px;
	padding-left: 230px;
	background: url(../../assets/car-login/347.png) no-repeat;
	background-position: 211px 43px;
}
/*获取手机动态码的按钮*/
.phone_msg{
	line-height: 24px;
	width: 156px;
	text-align: center;
	border: 1px solid #c7c7c7;
	border-radius: 2px;
	background: #f2f2f2;
	margin: 0 20px 21px 69px;
}
.log_phon_rem{
	margin-left: 45px;
	margin-top: 4px;
}
.login_phon_btn{
	line-height: 23px;
	text-align: center;
	color: white;
	background: #2870b2;
	width: 70px;
	margin: 35px 0 32px 65px;
}
/*手机动态码登录时间倒计时提醒*/
.time_pro{
	font-size: 12px;
	color: #656565;
	display: none;
}
/*登录右边你的部分*/
.log_else{
	height: 321px;
	width: 258px;
	/*background: red;*/
	padding-left: 20px;
	position: absolute;
	right: 0;
	bottom: 0;
	font-size: 14px;
}
.login_signin span{
	display: inline-block;
	line-height: 52px;
	margin-top: 4px;
} 
.login_signin a{
	display: inline-block;
	line-height: 30px;
	border: 1px solid #c0c0c0;
	width: 103px;
	background: linear-gradient(#e2e2e2,#e0e0e0);
	text-align: center;
	color: black;
	margin-bottom: 4px;
}
.login_other h3{
	font-size: 14px;
	line-height: 42px;
	font-weight: 400;
}
.login_qq{
	height: 152px;
	width: 218px;
	display: flex;
	flex-wrap:wrap ;
	justify-content: space-between;
	align-content: space-between;
}
.login_qq .login_ever{
	display: block;
	width: 104px;	
	line-height: 30px;
	font-size: 12px;
	border: 1px solid #d2d2d2;
	border-radius: 2px;
	cursor: pointer;
}
.login_qq .login_ever:hover{
	border: 1px solid #2870b2;
}
.login_ever img{
	vertical-align: middle;
	width: 20px;
	height: 20px;
	margin:0 11px;
}

	
</style>