<template>
	<div>
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
						<img src="../../assets/car-signinimage/success.png" class="success" />
					</div>
					<div class="j_content_B">
						<span>用户名:</span>
						<input type="text" id="" value="" />
						<span class="erro"><img src="../../assets/car-signinimage/erro.png"/> 请填写用户名</span>
						<span class="hint"><img src="../../assets/car-signinimage/hint.png"/> 4-16个字符, 不能以数字开头, 一个汉字为两个字符</span>
						<img src="../../assets/car-signinimage/success.png" class="success" />
					</div>
					<div class="j_content_C">
						<span>创建密码:</span>
						<input type="text" id="" value="" />
						<span class="erro"><img src="../../assets/car-signinimage/erro.png"/> 请填写密码</span>
						<span class="hint"><img src="../../assets/car-signinimage/hint.png"/> 6-32个字符, 可使用字母、数字及符号的任意组合</span>
						<img src="../../assets/car-signinimage/success.png" class="success" />
					</div>
					<div class="j_content_D">
						<span>确认密码:</span>
						<input type="text" id="" value="" />
						<span class="erro"><img src="../../assets/car-signinimage/erro.png"/> 请再次输入密码</span>
						<span class="hint"><img src="../../assets/car-signinimage/hint.png"/> 请再次输入密码</span>
						<img src="../../assets/car-signinimage/success.png" class="success" />
					</div>
					<div class="j_content_E">
						<span>所在城市:</span>
						<select class="city">
							<option value="-1">北京</option>
							<option value="0">洛阳</option>
							<option value="1">郑州</option>
						</select>
						<select class="region">
							<!--<option value="东城区">东城区</option>
							<option value="朝阳区">朝阳区</option>
							<option value="郑州">郑州</option>-->
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
						<img src="../../assets/car-signinimage/code.png" />
						<a href="###">看不清楚?换一张</a>
						<span class="erro"><img src="../../assets/car-signinimage/erro.png"/> 请填写验证码</span>
						<span class="hint"><img src="../../assets/car-signinimage/title.png"/> 请输入图片中的字符, 不区分大小写</span>
					</div>
					<div class="j_content_H">
						<span>是否有车:</span>
						<input type="radio" name="car" checked/> 有车
						<input type="radio" name="car" /> 无车
					</div>
					<div class="j_content_I">
						<span>是否需要购车:</span>
						<input type="radio" name="buycar" checked/> 有购车需求
						<input type="radio" name="buycar" /> 无购车需求
					</div>
					<button class="j_btn">同意以下协议并注册</button><br />
					<a href="###" class="j_deal">
						<<车族用户协议>></a>
				</div>
			</div>
			<!--手机号注册验证-->
			<div class="j_contA">
				<div class="j_phone_content">
					<span>手机号:</span>
					<input type="text" />
					<span class="hint"><img src="../../assets/car-signinimage/hint.png"/> 用于登录和找回密码, 不会公开</span>
					<span class="default"><img src="../../assets/car-signinimage/erro.png"/> 请输入您的手机号码</span>
					<img src="../../assets/car-signinimage/success.png" class="success" /><br />
					<button class="j_btn">免费获取短信验证码</button>
				</div>
				<div class="j_phone_contentA">
					<span>短信验证码:</span>
					<input type="text" />
					<span class="default"><img src="../../assets/car-signinimage/erro.png"/> 请输入收到的手机验证码</span>
					<img src="../../assets/car-signinimage/success.png" class="success" />
					<span class="hint"><img src="../../assets/car-signinimage/hint.png"/> 请输入收到的手机验证码</span>
				</div>
				<div class="j_phone_contentB">
					<span>创建密码:</span>
					<input type="text" />
					<span class="default"><img src="../../assets/car-signinimage/erro.png" /> 请填写密码</span>
					<img src="../../assets/car-signinimage/success.png" class="success" />
					<span class="hint"><img src="../../assets/car-signinimage/hint.png"/> 6-32字符, 可使用字母, 数字及符号的任意组合</span>
				</div>
				<div class="j_phone_contentC">
					<span>确认密码:</span>
					<input type="text" />
					<span class="default"><img src="../../assets/car-signinimage/erro.png" /> 请再次输入密码</span>
					<img src="../../assets/car-signinimage/success.png" class="success" />
					<span class="hint"><img src="../../assets/car-signinimage/hint.png"/> 请再次输入密码</span>
				</div>
				<button class="j_button">同意以下协议并注册</button><br />
				<a href="###" class="j_protocol">
					<<车族网用户协议>></a>
			</div>
		</div>
		<div class="j_wrapA">
			<span class="j_top"><img src="../../assets/car-signinimage/tick.png"/> 恭喜 、注册成功 !</span></br>
			<span class="j_phone">您绑定的手机号: <span>15236236205</span></span>
			</br>
			<span class="j_userName">系统生成用户名: <span>OKEI123</span>
			<a href="###">去个人中心修改</a>
			</span>
			</br>
			<button class="j_btn_but">返回首页</button>
		</div>
		<div class="j_wrapB">
			<div class="j_top">
				<span>下一步: 请验证您的邮箱</span>
			</div>
			<div class="j_cont">
				<span>我们发送了一封邮件到 <a href="###">xushaung_0902@hotmail.com</a>, 请到您的邮箱接收, 并点击其中的链接验证您的邮箱。</span>
				<button class="j_btns">去邮箱验证</button>
			</div>
			<span class="j_receive"><img src="../../assets/car-signinimage/emails.png"/> 收不到邮件?</span></br>
			<span class="j_inspect"><span></span> 请检查你的垃圾箱或广告箱, 邮件有可能被误以为垃圾或广告邮件: 或选择 <button>重发验证邮件</button></span>
			</br>
			<span class="j_receiveA"><span></span> 用xushuang_0902@hotmail.meituan.com发送一封任意内容邮件, 内分钟后即可直接登录车族网</span><br />
			<span class="j_receiveB"><span></span>
			<a href="###">了解如何把车族网的邮件列为白名单</a>
			</span>
		</div>
	</div>

</template>

<script>
	import './signin.css'
	export default {
		name: "Signin",
		data() {
			return {
				checkedbol: true
			}
		},
		mounted() {
			// 对勾
			var _this = this;
			$(".checked").click(function() {
				_this.checkedbol = !_this.checkedbol
			})
			// 邮箱注册验证
			$(".alter").click(function() {
				$(".j_cont").css("display", "none");
				$(".j_contA").css("display", "block");
				$(".alter").removeClass("j_phone_signin");
				$(".alter").addClass("change");
				$(".alterA").removeClass("j_email_signin");
				$(".alterA").addClass("changeA");
			});
			$(".alterA").click(function() {
				$(".j_cont").css("display", "block");
				$(".j_contA").css("display", "none");
				$(".alter").removeClass("change");
				$(".alter").addClass("j_phone_signin");
				$(".alterA").addClass("j_email_signin");
				$(".alterA").removeClass("changeA");
			});
			$(".j_content_A input").focus(function() {
				$(".j_content_A").css("background", "#fdf0e3");
				$(".j_content_A .default").css("display", "none");
				$(".j_content_A .hint").css("display", "inline-block");
				$(".j_content_A .success").css("display", "none");
				$(".j_content_A .erro").css("display", "none");
			}).blur(function() {
				var val = $(".j_content_A input").val();
				var reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
				if(reg.test(val)) {
					$(".j_content_A .hint").css("display", "none");
					$(".j_content_A").css("background", "#FFF");
					$(".j_content_A .hint").css("display", "none");
					$(".j_content_A img").css("display", "inline-block");
					$(".j_content_A .success").css("display", "inline-block")
				} else {
					$(".j_content_A").css("background", "#FFF");
					$(".j_content_A .erro").css("display", "inline-block");
					$(".j_content_A .hint").css("display", "none");
				}
			});
			$(".j_content_B input").focus(function() {
				$(".j_content_B").css("background", "#fdf0e3");
				$(".j_content_B .default").css("display", "none");
				$(".j_content_B .hint").css("display", "inline-block");
				$(".j_content_B .success").css("display", "none");
				$(".j_content_B .erro").css("display", "none");
			}).blur(function() {
				var val = $(".j_content_B input").val();
				if(!(val == "")) {
					$(".j_content_B .hint").css("display", "none");
					$(".j_content_B").css("background", "#FFF");
					$(".j_content_B .hint").css("display", "none");
					$(".j_content_B img").css("display", "inline-block");
					$(".j_content_B .success").css("display", "inline-block")
				} else {
					$(".j_content_B").css("background", "#FFF");
					$(".j_content_B .erro").css("display", "inline-block");
					$(".j_content_B .hint").css("display", "none");
				}
			});
			$(".j_content_C input").focus(function() {
				$(".j_content_C").css("background", "#fdf0e3");
				$(".j_content_C .default").css("display", "none");
				$(".j_content_C .hint").css("display", "inline-block");
				$(".j_content_C .success").css("display", "none");
				$(".j_content_C .erro").css("display", "none");
			}).blur(function() {
				var val = $(".j_content_C input").val();
				var reg = /^([a-zA-Z0-9]){1}([a-zA-Z0-9]){5,31}$/;
				if(reg.test(val)) {
					$(".j_content_C .hint").css("display", "none");
					$(".j_content_C").css("background", "#FFF");
					$(".j_content_C .hint").css("display", "none");
					$(".j_content_C img").css("display", "inline-block");
					$(".j_content_C .success").css("display", "inline-block")
				} else {
					$(".j_content_C").css("background", "#FFF");
					$(".j_content_C .erro").css("display", "inline-block");
					$(".j_content_C .hint").css("display", "none");
				}
			});
			$(".j_content_D input").focus(function() {
				$(".j_content_D").css("background", "#fdf0e3");
				$(".j_content_D .default").css("display", "none");
				$(".j_content_D .hint").css("display", "inline-block");
				$(".j_content_D .success").css("display", "none");
				$(".j_content_D .erro").css("display", "none");
			}).blur(function() {
				var val = $(".j_content_D input").val();
				var sel = $(".j_content_C input").val();
				if(val == sel && val) {
					$(".j_content_D .hint").css("display", "none");
					$(".j_content_D").css("background", "#FFF");
					$(".j_content_D .hint").css("display", "none");
					$(".j_content_D img").css("display", "inline-block");
					$(".j_content_D .success").css("display", "inline-block")
				} else {
					$(".j_content_D").css("background", "#FFF");
					$(".j_content_D .erro").css("display", "inline-block");
					$(".j_content_D .hint").css("display", "none");
				}
			});
			$(".j_content_G input").focus(function() {
				$(".j_content_G").css("background", "#fdf0e3");
				$(".j_content_G .default").css("display", "none");
				$(".j_content_G .hint").css("display", "inline-block");
				$(".j_content_G .success").css("display", "none");
				$(".j_content_G .erro").css("display", "none");
			}).blur(function() {
				var val = $(".j_content_G input").val();
				if(val) {
					$(".j_content_G .hint").css("display", "none");
					$(".j_content_G").css("background", "#FFF");
					$(".j_content_G .hint").css("display", "none");
					$(".j_content_G img").css("display", "inline-block");
					$(".j_content_G .success").css("display", "inline-block")
				} else {
					$(".j_content_G").css("background", "#FFF");
					$(".j_content_G .erro").css("display", "inline-block");
					$(".j_content_G .hint").css("display", "none");
				}
			});

			// 手机号注册验证

			$(".j_phone_content input").focus(function() {
				$(".j_phone_content").css("background", "#fdf0e3");
				$(".j_phone_content .default").css("display", "none");
				$(".j_phone_content .hint").css("display", "inline-block");
				$(".j_phone_content .success").css("display", "none");
				$(".j_phone_content .erro").css("display", "none");
			}).blur(function() {
				var val = $(".j_phone_content input").val();
				var reg = /^1[3|4|5|8][0-9]\d{4,8}$/;
				if(reg.test(val)) {
					$(".j_phone_content .hint").css("display", "none");
					$(".j_phone_content").css("background", "#FFF");
					$(".j_phone_content .hint").css("display", "none");
					$(".j_phone_content img").css("display", "inline-block");
					$(".j_phone_content .success").css("display", "inline-block")
				} else {
					$(".j_phone_content").css("background", "#FFF");
					$(".j_phone_content .default").css("display", "inline-block");
					$(".j_phone_content .hint").css("display", "none");
				}
			});
			$(".j_phone_contentA input").focus(function() {
				$(".j_phone_contentA").css("background", "#fdf0e3");
				$(".j_phone_contentA .default").css("display", "none");
				$(".j_phone_contentA .hint").css("display", "inline-block");
				$(".j_phone_contentA .success").css("display", "none");
				$(".j_phone_contentA .erro").css("display", "none");
			}).blur(function() {
				var val = $(".j_phone_contentA input").val();
				var reg = /^\d\d{2,6}$/;
				if(reg.test(val)) {
					$(".j_phone_contentA .hint").css("display", "none");
					$(".j_phone_contentA").css("background", "#FFF");
					$(".j_phone_contentA .hint").css("display", "none");
					$(".j_phone_contentA img").css("display", "inline-block");
					$(".j_phone_contentA .success").css("display", "inline-block")
				} else {
					$(".j_phone_contentA").css("background", "#FFF");
					$(".j_phone_contentA .default").css("display", "inline-block");
					$(".j_phone_contentA .hint").css("display", "none");
				}
			});
			$(".j_phone_contentB input").focus(function() {
				$(".j_phone_contentB").css("background", "#fdf0e3");
				$(".j_phone_contentB .default").css("display", "none");
				$(".j_phone_contentB .hint").css("display", "inline-block");
				$(".j_phone_contentB .success").css("display", "none");
				$(".j_phone_contentB .erro").css("display", "none");
			}).blur(function() {
				var val = $(".j_phone_contentB input").val();
				var reg = /^([a-zA-Z0-9]){1}([a-zA-Z0-9]){5,31}$/;
				if(reg.test(val)) {
					$(".j_phone_contentB .hint").css("display", "none");
					$(".j_phone_contentB").css("background", "#FFF");
					$(".j_phone_contentB .hint").css("display", "none");
					$(".j_phone_contentB img").css("display", "inline-block");
					$(".j_phone_contentB .success").css("display", "inline-block")
				} else {
					$(".j_phone_contentB").css("background", "#FFF");
					$(".j_phone_contentB .default").css("display", "inline-block");
					$(".j_phone_contentB .hint").css("display", "none");
				}
			});
			$(".j_phone_contentC input").focus(function() {
				$(".j_phone_contentC").css("background", "#fdf0e3");
				$(".j_phone_contentC .default").css("display", "none");
				$(".j_phone_contentC .hint").css("display", "inline-block");
				$(".j_phone_contentC .success").css("display", "none");
				$(".j_phone_contentC .erro").css("display", "none");
			}).blur(function() {
				var val = $(".j_phone_contentC input").val();
				var sel = $(".j_phone_contentB input").val();
				if(val == sel && val) {
					$(".j_phone_contentC .hint").css("display", "none");
					$(".j_phone_contentC").css("background", "#FFF");
					$(".j_phone_contentC .hint").css("display", "none");
					$(".j_phone_contentC img").css("display", "inline-block");
					$(".j_phone_contentC .success").css("display", "inline-block")
				} else {
					$(".j_phone_contentC").css("background", "#FFF");
					$(".j_phone_contentC .default").css("display", "inline-block");
					$(".j_phone_contentC .hint").css("display", "none");
				}
			});
			$(".j_phone_content .j_btn").click(function() {
				$('.j_phone_content .j_btn').attr('disabled', "true");
				var s = 60;
				var timer = setInterval(function() {
					s--;
					$(".j_phone_content .j_btn").html("免费获取短信验证码" + "(" + s + "s)");
					console.log(s);
					if(s <= 0) {
						clearInterval(timer);
						$(".j_phone_content .j_btn").removeAttr("disabled");
						$(".j_phone_content .j_btn").html("重新获取验证码");
					}
				}, 1000);

			});
			var city_data = [
				["济南", "青岛", "威海", "临沂", "菏泽"],
				["郑州", "洛阳", "开封", "平顶山"]
			];
			$(function() {
				$(".city").change(function() {
					$(".region").html("");
					var index = $(this).val();
					if(index - 0 == -1) {
						$(".region").append("<option>--</option>");
						return;
					}
					var data = city_data[index];
					for(var i in data) {
						$(".region").append("<option>" + data[i] + "</option>");
					}
				});
			});
		}
	}
</script>

<style scoped>

</style>