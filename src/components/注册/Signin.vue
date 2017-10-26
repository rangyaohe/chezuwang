<template>
	<div class="j_wrap">
		<div class="j_email_signin alterA">
			<span>邮箱注册</span>
		</div>
		<div class="j_phone_signin alter">
			<span>手机注册</span>
		</div>
		<div class="j_cont">
			<div class="j_content">
				<div class="j_content_A">
					<span>邮箱:</span>
					<input type="text" />
					<span class="default"><img src="../../assets/car-signinimage/title.png"/> 用于登录和找回密码, 不会公开</span>
					<span class="erro"><img src="../../assets/car-signinimage/erro.png"/> 请填写邮箱地址</span>
					<span class="hint"><img src="../../assets/car-signinimage/hint.png"/> 推荐:<a href="###">QQ邮箱</a></span>
					<img src="../../assets/car-signinimage/success.png" class="success"/>
				</div>
				<div class="j_content_B">
					<span>用户名:</span>
					<input type="text" id="" value="" />
					<span class="erro"><img src="../../assets/car-signinimage/erro.png"/> 请填写用户名</span>
					<span class="hint"><img src="../../assets/car-signinimage/hint.png"/> 4-16个字符, 不能以数字开头, 一个汉字为两个字符</span>
					<img src="../../assets/car-signinimage/success.png" class="success"/>
				</div>
				<div class="j_content_C">
					<span>创建密码:</span>
					<input type="text" id="" value="" />
					<span class="erro"><img src="../../assets/car-signinimage/erro.png"/> 请填写密码</span>
					<span class="hint"><img src="../../assets/car-signinimage/hint.png"/> 6-32个字符, 可使用字母、数字及符号的任意组合</span>
					<img src="../../assets/car-signinimage/success.png" class="success"/>
				</div>
				<div class="j_content_D">
					<span>确认密码:</span>
					<input type="text" id="" value="" />
					<span class="erro"><img src="../../assets/car-signinimage/erro.png"/> 请再次输入密码</span>
					<span class="hint"><img src="../../assets/car-signinimage/hint.png"/> 请再次输入密码</span>
					<img src="../../assets/car-signinimage/success.png" class="success"/>
				</div>
				<div class="j_content_E">
					<span>所在城市:</span>
					<select name="city">
						<option value="北京">北京</option>
						<option value="洛阳">洛阳</option>
						<option value="郑州">郑州</option>
					</select>
					<select name="region">
						<option value="东城区">东城区</option>
						<option value="朝阳区">朝阳区</option>
						<option value="郑州">郑州</option>
					</select>
				</div>
				<div class="j_content_F">
					<!--对勾-->
					<span class="checked"><a v-show="checkedbol"></a></span>
					<span>订阅每日最新团购信息</span><br />
					<span>订阅后将收到每日团购信息邮件 (可随时退订)</span>
				</div>
				<div class="j_content_G">
					<span>验证码:</span>
					<input type="text" />
					<img src="../../assets/car-signinimage/code.png"/>
					<a href="###">看不清楚?换一张</a>
					<span class="erro"><img src="../../assets/car-signinimage/erro.png"/> 请填写验证码</span>
					<span class="hint"><img src="../../assets/car-signinimage/title.png"/> 请输入图片中的字符, 不区分大小写</span>
				</div>
				<div class="j_content_H">
					<span>是否有车:</span>
					<input type="radio" name="car" checked/> 有车
					<input type="radio" name="car"/> 无车
				</div>
				<div class="j_content_I">
					<span>是否需要购车:</span>
					<input type="radio" name="buycar" checked/> 有购车需求
					<input type="radio" name="buycar"/> 无购车需求
				</div>
				<button class="j_btn">同意以下协议并注册</button><br />
				<a href="###" class="j_deal"><<车族用户协议>></a>
			</div>
		</div>
		<!--手机号注册验证-->
		<div class="j_contA">
			<div class="j_phone_content">
				<span>手机号:</span>
				<input type="text"/>
				<span class="hint"><img src="../../assets/car-signinimage/hint.png"/> 用于登录和找回密码, 不会公开</span>
				<span class="default"><img src="../../assets/car-signinimage/erro.png"/> 请输入您的手机号码</span>
				<img src="../../assets/car-signinimage/success.png" class="success" /><br />
				<button class="j_btn">免费获取短信验证码</button>
			</div>
			<div class="j_phone_contentA">
				<span>短信验证码:</span>
				<input type="text"/>
				<span class="default"><img src="../../assets/car-signinimage/erro.png"/> 请输入收到的手机验证码</span>
				<img src="../../assets/car-signinimage/success.png" class="success"/>
				<span class="hint"><img src="../../assets/car-signinimage/hint.png"/> 请输入收到的手机验证码</span>
			</div>
			<div class="j_phone_contentB">
				<span>创建密码:</span>
				<input type="text"/>
				<span class="default"><img src="../../assets/car-signinimage/erro.png" /> 请填写密码</span>
				<img src="../../assets/car-signinimage/success.png" class="success"/>
				<span class="hint"><img src="../../assets/car-signinimage/hint.png"/> 6-32字符, 可使用字母, 数字及符号的任意组合</span>
			</div>
			<div class="j_phone_contentC">
				<span>确认密码:</span>
				<input type="text"/>
				<span class="default"><img src="../../assets/car-signinimage/erro.png" /> 请再次输入密码</span>
				<img src="../../assets/car-signinimage/success.png" class="success" />
				<span class="hint"><img src="../../assets/car-signinimage/hint.png"/> 请再次输入密码</span>
			</div>
			<button class="j_button">同意以下协议并注册</button><br />
			<a href="###" class="j_protocol"><<车族网用户协议>></a>
		</div>
	</div>
</template>

<script>
	export default{
		name:"Signin",
		data(){
			return{
				checkedbol:true
			}
		},
		mounted(){
//			$(document).click(function(){
//				$.ajax({
//					type:"get",
//					url:"api/sigin",
//					data:{
//						way:"email",
//						name:"十7",
//						password:"123",
//						phonenum:"666",
//						email:"15989878@qq.com",
//						havecar:1,
//						shop:0,
//					},
//					success:function(data){
//						var data =$.parseJSON(data);
//						console.log(data.err)
//					}
//				});
//			})
			// 对勾
			var _this = this;
			$(".checked").click(function() {
				_this.checkedbol=!_this.checkedbol
			})
			// 邮箱注册验证
			$(".alter").click(function() {
				$(".j_cont").css("display","none");
				$(".j_contA").css("display","block");
				$(".alter").removeClass("j_phone_signin");
				$(".alter").addClass("change");
				$(".alterA").removeClass("j_email_signin");
				$(".alterA").addClass("changeA");
			});
			$(".alterA").click(function() {
				$(".j_cont").css("display","block");
				$(".j_contA").css("display","none");
				$(".alter").removeClass("change");
				$(".alter").addClass("j_phone_signin")	;
				$(".alterA").addClass("j_email_signin");
				$(".alterA").removeClass("changeA");
			});
			$(".j_content_A input").focus(function() {
				$(".j_content_A").css("background","#fdf0e3");
				$(".j_content_A .default").css("display","none");
				$(".j_content_A .hint").css("display","inline-block");
				$(".j_content_A .success").css("display","none");
				$(".j_content_A .erro").css("display","none");
			}).blur(function() {
				var val = $(".j_content_A input").val();
				var reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
				 if (reg.test(val)) {
				 	$(".j_content_A .hint").css("display","none");
				 	$(".j_content_A").css("background","#FFF");
					$(".j_content_A .hint").css("display","none");
					$(".j_content_A img").css("display","inline-block");
					$(".j_content_A .success").css("display","inline-block")
				 }else{
				 	$(".j_content_A").css("background","#FFF");
					$(".j_content_A .erro").css("display","inline-block");
					$(".j_content_A .hint").css("display","none");
				 }
			});
			$(".j_content_B input").focus(function() {
				$(".j_content_B").css("background","#fdf0e3");
				$(".j_content_B .default").css("display","none");
				$(".j_content_B .hint").css("display","inline-block");
				$(".j_content_B .success").css("display","none");
				$(".j_content_B .erro").css("display","none");
			}).blur(function() {
				var val = $(".j_content_B input").val();
				if (!(val == "")) {
					$(".j_content_B .hint").css("display","none");
				 	$(".j_content_B").css("background","#FFF");
					$(".j_content_B .hint").css("display","none");
					$(".j_content_B img").css("display","inline-block");
					$(".j_content_B .success").css("display","inline-block")
				}else{
					$(".j_content_B").css("background","#FFF");
					$(".j_content_B .erro").css("display","inline-block");
					$(".j_content_B .hint").css("display","none");
				}
			});
			$(".j_content_C input").focus(function() {
				$(".j_content_C").css("background","#fdf0e3");
				$(".j_content_C .default").css("display","none");
				$(".j_content_C .hint").css("display","inline-block");
				$(".j_content_C .success").css("display","none");
				$(".j_content_C .erro").css("display","none");
			}).blur(function() {
				var val = $(".j_content_C input").val();
				var reg = /^([a-zA-Z0-9]){1}([a-zA-Z0-9]){5,31}$/;
				if (reg.test(val)) {
					$(".j_content_C .hint").css("display","none");
				 	$(".j_content_C").css("background","#FFF");
					$(".j_content_C .hint").css("display","none");
					$(".j_content_C img").css("display","inline-block");
					$(".j_content_C .success").css("display","inline-block")
				}else{
					$(".j_content_C").css("background","#FFF");
					$(".j_content_C .erro").css("display","inline-block");
					$(".j_content_C .hint").css("display","none");
				}
			});
			$(".j_content_D input").focus(function() {
				$(".j_content_D").css("background","#fdf0e3");
				$(".j_content_D .default").css("display","none");
				$(".j_content_D .hint").css("display","inline-block");
				$(".j_content_D .success").css("display","none");
				$(".j_content_D .erro").css("display","none");
			}).blur(function() {
				var val = $(".j_content_D input").val();
				var sel = $(".j_content_C input").val();
				if (val==sel&&val) {
					$(".j_content_D .hint").css("display","none");
				 	$(".j_content_D").css("background","#FFF");
					$(".j_content_D .hint").css("display","none");
					$(".j_content_D img").css("display","inline-block");
					$(".j_content_D .success").css("display","inline-block")
				}else{
					$(".j_content_D").css("background","#FFF");
					$(".j_content_D .erro").css("display","inline-block");
					$(".j_content_D .hint").css("display","none");
				}
			});
			$(".j_content_G input").focus(function() {
				$(".j_content_G").css("background","#fdf0e3");
				$(".j_content_G .default").css("display","none");
				$(".j_content_G .hint").css("display","inline-block");
				$(".j_content_G .success").css("display","none");
				$(".j_content_G .erro").css("display","none");
			}).blur(function() {
				var val = $(".j_content_G input").val();
				if (val) {
					$(".j_content_G .hint").css("display","none");
				 	$(".j_content_G").css("background","#FFF");
					$(".j_content_G .hint").css("display","none");
					$(".j_content_G img").css("display","inline-block");
					$(".j_content_G .success").css("display","inline-block")
				}else{
					$(".j_content_G").css("background","#FFF");
					$(".j_content_G .erro").css("display","inline-block");
					$(".j_content_G .hint").css("display","none");
				}
			});
			// 手机号注册验证
			$(".j_phone_content input").focus(function() {
				$(".j_phone_content").css("background","#fdf0e3");
				$(".j_phone_content .default").css("display","none");
				$(".j_phone_content .hint").css("display","inline-block");
				$(".j_phone_content .success").css("display","none");
				$(".j_phone_content .erro").css("display","none");
			}).blur(function() {
				var val = $(".j_phone_content input").val();
				var reg = /^1[3|4|5|8][0-9]\d{4,8}$/;
				if (reg.test(val)) {
					$(".j_phone_content .hint").css("display","none");
				 	$(".j_phone_content").css("background","#FFF");
					$(".j_phone_content .hint").css("display","none");
					$(".j_phone_content img").css("display","inline-block");
					$(".j_phone_content .success").css("display","inline-block")
				}else{
					$(".j_phone_content").css("background","#FFF");
					$(".j_phone_content .default").css("display","inline-block");
					$(".j_phone_content .hint").css("display","none");
				}
			});
			$(".j_phone_contentA input").focus(function() {
				$(".j_phone_contentA").css("background","#fdf0e3");
				$(".j_phone_contentA .default").css("display","none");
				$(".j_phone_contentA .hint").css("display","inline-block");
				$(".j_phone_contentA .success").css("display","none");
				$(".j_phone_contentA .erro").css("display","none");
			}).blur(function() {
				var val = $(".j_phone_contentA input").val();
				var reg = /^\d\d{2,6}$/;
				if (reg.test(val)) {
					$(".j_phone_contentA .hint").css("display","none");
				 	$(".j_phone_contentA").css("background","#FFF");
					$(".j_phone_contentA .hint").css("display","none");
					$(".j_phone_contentA img").css("display","inline-block");
					$(".j_phone_contentA .success").css("display","inline-block")
				}else{
					$(".j_phone_contentA").css("background","#FFF");
					$(".j_phone_contentA .default").css("display","inline-block");
					$(".j_phone_contentA .hint").css("display","none");
				}
			});
			$(".j_phone_contentB input").focus(function() {
				$(".j_phone_contentB").css("background","#fdf0e3");
				$(".j_phone_contentB .default").css("display","none");
				$(".j_phone_contentB .hint").css("display","inline-block");
				$(".j_phone_contentB .success").css("display","none");
				$(".j_phone_contentB .erro").css("display","none");
			}).blur(function() {
				var val = $(".j_phone_contentB input").val();
				var reg = /^([a-zA-Z0-9]){1}([a-zA-Z0-9]){5,31}$/;
				if (reg.test(val)) {
					$(".j_phone_contentB .hint").css("display","none");
				 	$(".j_phone_contentB").css("background","#FFF");
					$(".j_phone_contentB .hint").css("display","none");
					$(".j_phone_contentB img").css("display","inline-block");
					$(".j_phone_contentB .success").css("display","inline-block")
				}else{
					$(".j_phone_contentB").css("background","#FFF");
					$(".j_phone_contentB .default").css("display","inline-block");
					$(".j_phone_contentB .hint").css("display","none");
				}
			});
			$(".j_phone_contentC input").focus(function() {
				$(".j_phone_contentC").css("background","#fdf0e3");
				$(".j_phone_contentC .default").css("display","none");
				$(".j_phone_contentC .hint").css("display","inline-block");
				$(".j_phone_contentC .success").css("display","none");
				$(".j_phone_contentC .erro").css("display","none");
			}).blur(function() {
				var val = $(".j_phone_contentC input").val();
				var sel = $(".j_phone_contentB input").val();
				if (val==sel&&val) {
					$(".j_phone_contentC .hint").css("display","none");
				 	$(".j_phone_contentC").css("background","#FFF");
					$(".j_phone_contentC .hint").css("display","none");
					$(".j_phone_contentC img").css("display","inline-block");
					$(".j_phone_contentC .success").css("display","inline-block")
				}else{
					$(".j_phone_contentC").css("background","#FFF");
					$(".j_phone_contentC .default").css("display","inline-block");
					$(".j_phone_contentC .hint").css("display","none");
				}
			});
		$(".j_btn").click(function() {
			$('.j_btn').attr('disabled',"true");
			var s = 60;
			var timer =setInterval(function() {
					s--;
					$(".j_btn").html("免费获取短信验证码"+"("+s+"s)");
					console.log(s);
					if(s<=0){
						clearInterval(timer);
						$(".j_btn").removeAttr("disabled");
						$(".j_btn").html("重新获取验证码");
					}
			},1000);
			
				
		});
		}
	}
</script>

<style scoped>
	.j_wrap{
	width: 977px;
	/*height: 561px;*/
	margin: 30px auto 46px;
	margin-bottom: 46px;
	position: relative;
	
}
.changeA{
	height: 35px;
	width: 163px;
	border: 1px solid #c5c5c5;
	border-top-left-radius: 5px;
	border-top-right-radius: 5px;
	background: url(../../assets/car-signinimage/L_register.png) no-repeat;
	background-position: 0px -58px;
	position: absolute;
	left: 38px;
	top: -36px;
	cursor: pointer;
	z-index: 100;
}
.changeA span{
	display: inline-block;
	font-size: 14px;
	color: #225a9a;
	line-height: 36px;
	margin-left: 59px;
	}
.j_wrap .j_email_signin{
	width: 163px;
	height: 40px;
	border-top-left-radius: 5px;
	border-top-right-radius: 5px;
	background: url(../../assets/car-signinimage/L_register.png) no-repeat;
	/*background-position: 37px 13px;*/
	position: absolute;
	left: 38px;
	top: -35px;
	cursor: pointer;
	z-index: 100;
}
.j_wrap .changeA:hover{
	background: url(../../assets/car-signinimage/L_register.png) no-repeat;
	background-position: 0px 0px;	
	height: 40px;
	top: -35;
	border: none;
}
.j_wrap .changeA:hover span{
	color: #fff;
}
.j_email_signin span{
	display: inline-block;
	font-size: 14px;
	color: #fff;
	line-height: 36px;
	margin-left: 59px;
}

.j_wrap .j_phone_signin{
	width: 158px;
	height: 35px;
	border-top-left-radius: 5px;
	border-top-right-radius: 5px;
	background: url(../../assets/car-signinimage/L_register.png) no-repeat ;
	background-position: -170px 0px;
	position: absolute;
	left: 208px;
	top: -36px;
	border: 1px solid #c5c5c5;
	cursor: pointer;
}
.j_wrap .j_phone_signin:hover{
	background: url(../../assets/car-signinimage/L_register.png) no-repeat ;
	background-position: -170px -58px;
	height: 40px;
	/*margin-top: -10px;*/
	border: none;
}
.change{
	background: url(../../assets/car-signinimage/L_register.png) no-repeat ;
	background-position: -170px -58px;
	height: 40px;
	width: 158px;
	/*margin-top: -10px;*/
	border: none;
	position: absolute;
	left: 208px;
	top: -36px;
	cursor: pointer;
	border-top-left-radius: 5px;
	border-top-right-radius: 5px;
}
.change span{
	display: inline-block;
	font-size: 14px;
	color: #fff;
	line-height: 36px;
	margin-left: 59px;
}
.j_wrap .j_phone_signin:hover span{
	color: #fff;
}
.j_phone_signin span:nth-child(2){
	display: inline-block;
	width: 7px;
	height: 7px;
	background-color: #225a9a;
	transform: rotate(45deg);
	position: absolute;
	right: 77px;
	top: 31.5px;
	display: none;
}
.j_phone_signin span:nth-child(1){
	display: inline-block;
	font-size: 14px;
	color: #225a9a;
	line-height: 36px;
	margin-left: 59px;
}
.j_email_signin span:nth-child(2){
	display: inline-block;
	width: 7px;
	height: 7px;
	background-color: #225a9a;
	transform: rotate(45deg);
	position: absolute;
	right: 77px;
	top: 31.5px;
}
.j_email_signin span:nth-child(2):after{
	content: "";
	display: block;
	clear: both;
}

.j_wrap .j_cont{
	width: 974px;
	/*height: 524px;*/
	border: 1px solid #c5c5c5;
	margin-top: 66px;
	background: #fff;
	
}
.j_content .j_content_A,
.j_content_B,
.j_content_C,
.j_content_D,
.j_content_G{
	width: 926px;
	height: 43px;
	margin: 3px auto 0;
	line-height: 43px;
}
.j_content .j_content_A{
	margin-top: 21px;
}
.j_content .j_content_A span:nth-child(1){
	display: inline-block;
	font-size: 14px;
	margin-left: 45px;
}
/*默认*/
.j_content .j_content_A .default{
	display: inline-block;
	border: 1px solid #d3edfb;
	width: 214px;
	height: 22px;
	background-color: #ebf7fe;
	font-size: 12px;
	text-align: center;
	line-height: 22px;
}
.j_content .j_content_A span:nth-child(3) img{
	position: relative;
	top: 3px;
	}
	/*验证错误*/
.j_content .j_content_A .erro{
	display: inline-block;
	border: 1px solid #ffbebd;
	width: 128px;
	height: 22px;
	background-color: #fff1f1;
	font-size: 12px;
	text-align: center;
	line-height: 22px;
	display: none;
}
.j_content .j_content_A .erro img{
	position: relative;
	top: 3px;
	}
/*提示*/
.j_content .j_content_A .hint{
	display: inline-block;
	border: 1px solid #d3edfb;
	width: 128px;
	height: 22px;
	background-color: #ebf7fe;
	font-size: 12px;
	text-align: center;
	line-height: 22px;
	display: none;  
}
.j_content .j_content_A .hint img{
	position: relative;
	top: 3px;
	}
.j_content .j_content_A .hint a{
	color: #1978cf;
}
/*正确*/
.j_content .j_content_A .success{
	position: relative;
	top: 3px;
	display: none;
}	
.j_content .j_content_A input{
	display: inline-block;
	width: 285px;
	height: 22px;
	margin-left: 7px;
	border: none;
	border: 1px solid #c5c5c5;
}



.j_content .j_content_B span{
	display: inline-block;
	font-size: 14px;
	margin-left: 30px;
}
.j_content .j_content_B input{
	display: inline-block;
	width: 285px;
	height: 22px;
	margin-left: 7px;
	border: none;
	border: 1px solid #c5c5c5;
}
/*错误验证*/
.j_content .j_content_B .erro{
	display: inline-block;
	border: 1px solid #ffbebd;
	width: 128px;
	height: 22px;
	background-color: #fff1f1;
	font-size: 12px;
	text-align: center;
	line-height: 22px;
	margin-left: 0;
	display: none;
}
.j_content .j_content_B .erro img{
	position: relative;
	top: 3px;
	margin-left: -10px;
	}
/*提示*/
.j_content .j_content_B .hint{
	display: inline-block;
	border: 1px solid #d3edfb;
	width: 297px;
	height: 22px;
	background-color: #ebf7fe;
	font-size: 12px;
	text-align: center;
	line-height: 22px;
	margin-left: 0;
	display: none;  
}
.j_content .j_content_B .hint img{
	position: relative;
	top: 3px;
	}
/*正确*/
.j_content .j_content_B .success{
	position: relative;
	top: 3px;
	display: none;
}	



.j_content .j_content_C span{
	display: inline-block;
	font-size: 14px;
	margin-left: 16px;
}
.j_content .j_content_C input{
	display: inline-block;
	width: 285px;
	height: 22px;
	margin-left: 7px;
	border: none;
	border: 1px solid #c5c5c5;
}
/*错误验证*/
.j_content .j_content_C .erro{
	display: inline-block;
	border: 1px solid #ffbebd;
	width: 128px;
	height: 22px;
	background-color: #fff1f1;
	font-size: 12px;
	text-align: center;
	line-height: 22px;
	margin-left: 0;
	display: none;
}
.j_content .j_content_C .erro img{
	position: relative;
	top: 3px;
	margin-left: -23px;
	}
/*提示*/
.j_content .j_content_C .hint{
	display: inline-block;
	border: 1px solid #d3edfb;
	width: 297px;
	height: 22px;
	background-color: #ebf7fe;
	font-size: 12px;
	text-align: center;
	line-height: 22px;
	margin-left: 0;
	display: none;  
}
.j_content .j_content_C .hint img{
	position: relative;
	top: 3px;
	}
/*正确*/
.j_content .j_content_C .success{
	position: relative;
	top: 3px;
	display: none;
}





.j_content .j_content_D span{
	display: inline-block;
	font-size: 14px;
	margin-left: 16px;
}
.j_content .j_content_D input{
	display: inline-block;
	width: 285px;
	height: 22px;
	margin-left: 7px;
	border: none;
	border: 1px solid #c5c5c5;
}
/*错误验证*/
.j_content .j_content_D .erro{
	display: inline-block;
	border: 1px solid #ffbebd;
	width: 128px;
	height: 22px;
	background-color: #fff1f1;
	font-size: 12px;
	text-align: center;
	line-height: 22px;
	margin-left: 0;
	display: none;
}
.j_content .j_content_D .erro img{
	position: relative;
	top: 3px;
	}
/*提示*/
.j_content .j_content_D .hint{
	display: inline-block;
	border: 1px solid #d3edfb;
	width: 120px;
	height: 22px;
	background-color: #ebf7fe;
	font-size: 12px;
	text-align: center;
	line-height: 22px;
	margin-left: 0;
	display: none;  
}
.j_content .j_content_D .hint img{
	position: relative;
	top: 3px;
	}
/*正确*/
.j_content .j_content_D .success{
	position: relative;
	top: 3px;
	display: none;
}





.j_content .j_content_E span{
	display: inline-block;
	font-size: 14px;
	margin: 10px 0 0 42px;
}
.j_content .j_content_E select{
	margin-left: 8px;
	width: 68px;
	height: 18px;
}
.j_content .j_content_F{
	margin: 22px 0 0 115px;
}
.j_content .j_content_F span:nth-child(1){
	display: inline-block;
	width: 8px;
	height: 8px;
	border: 2px solid #706e62;
}
.j_content .j_content_F .checked a{
	display: block;
	width: 2px;
	height: 5px;
	border-bottom:2px solid black ;
	border-right:2px solid black ;
	transform: rotate(45deg);
	margin-left: 2px;
}
.j_content .j_content_F span:nth-child(2){
	display: inline-block;
	font-size: 12px;
	margin-left: 3px;
}
.j_content .j_content_F span:nth-child(4){
	display: inline-block;
	font-size: 12px;
	margin-left: 19px;
	color: #989898;
}


/*.j_content .j_content_G{
	margin: 17px 0 0 30px;
}*/
.j_content .j_content_G img{
	vertical-align: middle;
	width: 63px;
	height: 31px;
	margin-left: 23px;
	cursor: pointer;
}
.j_content .j_content_G span{
	display: inline-block;
	font-size: 14px;
	margin-left: 30px;
}
.j_content .j_content_G input{
	width: 114px;
	height: 22px;
	margin-left: 8px;
}
.j_content .j_content_G a{
	display: inline-block;
	margin-left: 9px;
	text-decoration: underline;
	color: #36273a;
	font-size: 12px;
}
/*错误验证*/
.j_content .j_content_G .erro{
	display: inline-block;
	border: 1px solid #ffbebd;
	width: 111px;
	height: 22px;
	background-color: #fff1f1;
	font-size: 12px;
	text-align: center;
	line-height: 22px;
	margin-left: 0;
	display: none;
}
.j_content .j_content_G .erro img{
	position: relative;
	top: -2px;
	margin-left: -10px;
	width: 16px;
	height: 16px;
	}
/*提示*/
.j_content .j_content_G .hint{
	display: inline-block;
	border: 1px solid #d3edfb;
	width: 229px;
	height: 22px;
	background-color: #ebf7fe;
	font-size: 12px;
	text-align: center;
	line-height: 22px;
	margin-left: 0;
	display: none;  
}
.j_content .j_content_G .hint img{
	position: relative;
	top: -2px;
	margin-left: -10px;
	width: 16px;
	height: 16px;
	}





.j_content .j_content_H{
	font-size: 14px;
	margin:22px 0 0 63px;
}

.j_content .j_content_H span{
	display: inline-block;
	margin-right: -13px;
}
.j_content .j_content_H input{
	margin-left: 20px;
}
.j_content .j_content_I{
	margin:22px 0 0 35px;
	font-size: 14px;
}

.j_content .j_content_I span  {
	display: inline-block;
	margin-right: -10px;
}
.j_content .j_content_I input{
	margin-left: 17px;
}
.j_content .j_btn{
	width: 145px;
	height: 23px;
	border: none;
	background-color: #2870b2;
	color: #fff;
	font-size: 14px;
	border-top:2px solid #95c2ec;
	border-left:2px solid #95c2ec;
	border-right:2px solid #183754;
	border-bottom:2px solid #183754;
	margin: 33px 0 0 136px;
}
.j_content .j_deal{
	display: inline-block;
	margin: 17px 0 30px 136px;
	font-size: 12px;
	color: #2870b2;
}
.j_contA{
	width: 974px;
	/*height: 524px;*/
	border: 1px solid #c5c5c5;
	margin-top: 66px;
	background: #fff;
	display: none;
}
.j_contA .j_phone_content{
	width: 926px;
	height: 71px;
	margin: 25px auto 0;
}
.j_contA .j_phone_content span:nth-child(1){
	display: inline-block;
	font-size: 13px;
	margin: 13px 0 0 31px;
}
.j_contA .j_phone_content input{
	width: 285px;
	height: 22px;
	margin-left: 7px;
}
.j_contA .j_phone_content span:nth-child(3){
	display: inline-block;
	width: 214px;
	height: 22px;
	background-color: #ebf7fe;
	border: 1px solid #d3edfb;
	font-size: 12px;
}
.j_contA .j_phone_content span:nth-child(3) img{
	position: relative;
	top: 3px;
	margin-left: 11px;
}
.j_contA .j_phone_content .j_btn{
	width: 156px;
	height: 24px;
	border: none;
	border: 1px solid #c5c5c5;
	border-radius: 5px;
	background-color: #f3f3f3;
	margin: 8px 0 0 88px;
}
/*错误验证*/
.j_contA .j_phone_content span:nth-child(4){
	display: inline-block;
	width: 140px;
	height: 22px;
	background-color: #fff1f1;
	border: 1px solid #ffbebd;
	font-size: 12px;
	display: none;
}
/*正确验证*/
.j_contA .j_phone_content .success{
	position: relative;
	top: 3px;
	display: none;
}


 
.j_contA .j_phone_content span:nth-child(4) img{
	position: relative;
	top: 3px;
	margin-left: 7px;
}


.j_contA .j_phone_contentA{
	width: 926px;
	height: 40px;
	margin: 2px auto 0;
}
.j_contA .j_phone_contentA span:nth-child(1){
	display: inline-block;
	font-size: 13px;
	margin: 10px 0 0 5px;
}
.j_contA .j_phone_contentA input{
	margin-left: 7px;
	width: 285px;
	height: 22px;
}

/*默认*/
.j_contA .j_phone_contentA span:nth-child(5){
	display: inline-block;
	width: 170px;
	height: 22px;
	background-color: #ebf7fe;
	border: 1px solid #d3edfb;
	font-size: 12px;
	display: none;
}
.j_contA .j_phone_contentA span:nth-child(5) img{
	position: relative;
	top: 3px;
	margin-left: 11px;
}
/*错误*/
.j_contA .j_phone_contentA span:nth-child(3){
	display: inline-block;
	width: 163px;
	height: 22px;
	background-color: #fff1f1;
	border: 1px solid #ffbebd;
	font-size: 12px;
	display: none;
}
.j_contA .j_phone_contentA span:nth-child(3) img{
	position: relative;
	top: 3px;
	margin-left: 7px;
}

/*正确验证*/
.j_contA .j_phone_contentA .success{
	position: relative;
	top: 3px;
	display: none;
}


.j_contA .j_phone_contentB{
	width: 926px;
	height: 40px;
	margin: 2px auto 0;
}
.j_contA .j_phone_contentB span:nth-child(1){
	display: inline-block;
	font-size: 13px;
	margin: 10px 0 0 18px;
}
.j_contA .j_phone_contentB input{
	margin-left: 7px;
	width: 285px;
	height: 22px;
}
/*默认*/
.j_contA .j_phone_contentB span:nth-child(5){
	display: inline-block;
	width: 290px;
	height: 22px;
	background-color: #ebf7fe;
	border: 1px solid #d3edfb;
	font-size: 12px;
	display: none;
}
.j_contA .j_phone_contentB span:nth-child(5) img{
	position: relative;
	top: 3px;
	margin-left: 11px;
}
/*错误*/
.j_contA .j_phone_contentB span:nth-child(3){
	display: inline-block;
	width: 94px;
	height: 22px;
	background-color: #fff1f1;
	border: 1px solid #ffbebd;
	font-size: 12px;
	display: none;
}
.j_contA .j_phone_contentB span:nth-child(3) img{
	position: relative;
	top: 3px;
	margin-left: 7px;
}

/*正确验证*/
.j_contA .j_phone_contentB .success{
	position: relative;
	top: 3px;
	display: none;
}




.j_contA .j_phone_contentC{
	width: 926px;
	height: 40px;
	margin: 2px auto 0;
}
.j_contA .j_phone_contentC span:nth-child(1){
	display: inline-block;
	font-size: 13px;
	margin: 10px 0 0 18px;
}
.j_contA .j_phone_contentC input{
	margin-left: 7px;
	width: 285px;
	height: 22px;
}

.j_contA .j_button{
	width: 145px;
	height: 23px;
	font-size: 14px;
	color: #fff;
	background-color: #2870b2;
	border: none;
	border-top: 2px solid #95c2ec;
	border-left: 2px solid #95c2ec;
	border-bottom: 2px solid #183754;
	border-right: 2px solid #183754;
	margin:27px 0 0 113px;
}
.j_contA .j_protocol{
	display: inline-block;
	font-size: 12px;
	color: #2870b2;
	margin: 16px 0 32px 114px;
}
/*默认*/
.j_contA .j_phone_contentC span:nth-child(5){
	display: inline-block;
	width: 120px;
	height: 22px;
	background-color: #ebf7fe;
	border: 1px solid #d3edfb;
	font-size: 12px;
	display: none;
}
.j_contA .j_phone_contentC span:nth-child(5) img{
	position: relative;
	top: 3px;
	margin-left: 11px;
}
/*错误*/
.j_contA .j_phone_contentC span:nth-child(3){
	display: inline-block;
	width: 120px;
	height: 22px;
	background-color: #fff1f1;
	border: 1px solid #ffbebd;
	font-size: 12px;
	display: none;
}
.j_contA .j_phone_contentC span:nth-child(3) img{
	position: relative;
	top: 3px;
	margin-left: 7px;
}

/*正确验证*/
.j_contA .j_phone_contentC .success{
	position: relative;
	top: 3px;
	display: none;
}
</style>