<template>
	<div class="m_surplus">
		<div class="m_surplus_wrap">
			<div class="m_wrap_top">
				<span>您当前的车组余额:<strong>¥0</strong><button class="m_c">充值</button><button class="m_t">提现</button></span><br />
				<a href="###" class="m_deal">交易记录</a>
				<a href="###" class="m_deposits">提现记录</a>
			</div>
			<span class="m_record">您还没有消费记录</span>
			<div class="m_deposit_cont">
				<div class="m_deposit_money">
					<span>您正在提现的金额:<strong>¥0</strong></span>
				</div>
				<span class="m_no_record">您现在还没有提现记录。</span>
			</div>
		</div>
		<!--充值-->
		<div class="m_recharge">
			<div class="m_reminder">
				<strong>充值 <span>小提示: 账户充值, 手机抢购更便捷!</span><a href="###" class="m_return">查看车族余额</a></strong>
			</div>
			<span class=" m_c_money">充值金额<input type="number" />元</span>
			<span class="m_pic"><img src="../../assets/mycar-image/poo.png"/> 充值金额不能为空</span><br />
			<button class="m_btn">确定, 去付款</button>
		</div>
		<!--提现-->
		<div class="m_deposit">
			<div class="m_deposit_title">
				<span>提现</span>
				<a href="###" class="m_returnA">返回交易记录</a>
			</div>
			<span class="m_car_money">车组余额:<strong>¥0</strong></span>
			<span class="m_no_money">不可提现:<strong>¥0</strong><em>(此部分为充值卡或返利余额)</em></span>
			<span class="m_yes_money">可提现:<strong>¥0</strong></span>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Surplus",
		mounted() {
			$(".m_wrap_top a").click(function() {
				$(this).css({
					"background": "#5a97d4",
					"color": "#fff"
				}).siblings().css({
					"background": "",
					"color": ""
				});
			});
			$(".m_wrap_top .m_deal").click(function() {
				$(".m_record").css("display", "block");
				$(".m_deposit_cont").css("display", "none")
			});
			$(".m_wrap_top .m_deposits").click(function() {
				$(".m_record").css("display", "none");
				$(".m_deposit_cont").css("display", "block")
			});
			$(".m_c").click(function() {
				$(".k_title").css("display", "none");
				$(".m_recharge").css("display", "block");
				$(".m_surplus_wrap").css("display", "none")
			});
			$(".m_return").click(function() {
				$(".k_title").css("display", "block");
				$(".m_recharge").css("display", "none");
				$(".m_surplus_wrap").css("display", "block")
			});
			$(".m_btn").click(function() {
				var val = $(".m_c_money input").val();
				if(val == "") {
					$(".m_pic").css("display", "inline-block");
					$(".m_c_money input").css("border-color", "red")
				}
			});
			$(".m_c_money input").change(function() {
				$(".m_pic").css("display", "none");
				$(".m_c_money input").css("border-color", "#ccc");
			});
			$(".m_t").click(function() {
				$(".k_title").css("display", "none");
				$(".m_deposit").css("display", "block");
				$(".m_surplus_wrap").css("display", "none")
			});
			$(".m_returnA").click(function() {
				$(".k_title").css("display", "block");
				$(".m_deposit").css("display", "none");
				$(".m_surplus_wrap").css("display", "block");
			})
		}

	}
</script>

<style scoped="scoped" lang="scss">
	.m_surplus {
		position: relative;
		width: 977px;
		margin: 0px auto 38px;
		z-index: 2;
		.m_surplus_wrap {
			/*display: none;*/
			position: relative;
			z-index: 2;
			width: 716px;
			height: 555px;
			border: 1px solid #c6c6c6;
			margin-left: -5px;
			margin-top: -1px;
			background-color: #fff;
			.m_wrap_top {
				width: 660px;
				height: 86px;
				margin: 30px auto 0;
				border-bottom: 1px solid #dcdcdc;
				span {
					display: inline-block;
					font-size: 14px;
					strong {
						display: inline-block;
						margin-left: 8px;
						color: red;
						letter-spacing: 6px;
					}
					button {
						width: 60px;
						height: 29px;
						border: none;
					}
					button:nth-child(2) {
						border: 1px solid #264787;
						background-color: #3b6bb1;
						border-radius: 5px;
						margin-right: 14px;
						color: #fff;
					}
					button:nth-child(3) {
						border: 1px solid #d5d5d5;
						background-color: #ebebeb;
						border-radius: 5px;
					}
				}
				a {
					display: inline-block;
					width: 54px;
					line-height: 21px;
					font-size: 12px;
					text-decoration: none;
					color: #1978cf;
					text-align: center;
					margin-top: 26px;
				}
				a:hover {
					background-color: #5a97d4;
					color: #fff;
				}
			}
			.m_record {
				display: inline-block;
				margin: 25px 0 0 28px;
				font-size: 14px;
				/*display: none;*/
			}
			.m_deposit_cont {
				width: 660px;
				margin: 22px auto 0;
				display: none;
				.m_deposit_money {
					width: 658px;
					height: 41px;
					border: 1px solid #f6e0af;
					background-color: #fffbf2;
					span {
						display: inline-block;
						font-size: 14px;
						margin: 10px 0 0 10px;
						strong {
							color: red;
							margin-left: 7px;
							letter-spacing: 5px;
						}
					}
				}
				.m_no_record {
					display: inline-block;
					font-size: 14px;
					margin-top: 30px;
				}
			}
		}
		.m_recharge {
			/*margin-top: 10px;*/
			position: relative;
			z-index: 2;
			width: 723px;
			height: 555px;
			border: 1px solid #c6c6c6;
			margin-left: -5px;
			margin-top: 10px;
			background-color: #fff;
			display: none;
			.m_reminder {
				width: 660px;
				height: 41px;
				border-bottom: 1px solid #c6c6c6;
				margin: 30px auto 0;
				strong {
					font-size: 23px;
					span {
						font-size: 14px;
						font-weight: 500;
					}
					a {
						display: inline-block;
						font-size: 14px;
						color: #3d76d6;
						text-decoration: none;
						margin: 5px 0 0 285px;
					}
				}
			}
			.m_c_money {
				display: inline-block;
				font-size: 14px;
				margin: 22px 0 0 40px;
				width: 340px;
				line-height: 32px;
				input {
					border: none;
					border: 1px solid #cccccc;
					width: 232px;
					height: 28px;
					margin-left: 15px;
					margin-right: 9px;
				}
				input::-webkit-outer-spin-button,
				input::-webkit-inner-spin-button {
					-webkit-appearance: none !important;
					/*margin: 0;*/
				}
			}
			.m_pic {
				display: inline-block;
				width: 128px;
				line-height: 30px;
				border: 1px solid #ffbebd;
				font-size: 12px;
				background-color: #fff1f1;
				text-align: center;
				display: none;
				img {
					position: relative;
					top: 3px;
				}
			}
			.m_btn {
				width: 122px;
				line-height: 19px;
				border: none;
				border: 1px solid #27498a;
				background-color: #3b6bb1;
				color: #fff;
				border-radius: 4px;
				margin: 17px 0 0 110px;
			}
		}
		.m_deposit {
			position: relative;
			z-index: 2;
			width: 723px;
			height: 555px;
			border: 1px solid #c6c6c6;
			margin-left: -5px;
			margin-top: 10px;
			background-color: #fff;
			display: none;
			.m_deposit_title {
				height: 40px;
				width: 660px;
				border-bottom: 1px solid #c6c6c6;
				margin: 30px auto 0;
				span {
					font-size: 23px;
				}
				a {
					font-size: 14px;
					text-decoration: none;
					color: #3d76d6;
					display: inline-block;
					margin-left: 500px;
				}
			}
			.m_car_money {
				font-size: 14px;
				display: block;
				margin: 16px 0 0 42px;
				strong {
					margin-left: 12px;
					letter-spacing: 3px;
				}
			}
			.m_no_money {
				font-size: 14px;
				display: block;
				margin: 22px 0 0 42px;
				strong {
					margin-left: 12px;
					letter-spacing: 3px;
				}
				em {
					font-size: 12px;
					color: #999999;
					margin-left: 9px;
					font-style: normal;
				}
			}
			.m_yes_money {
				font-size: 14px;
				display: block;
				margin: 22px 0 0 42px;
				strong {
					margin-left: 12px;
					letter-spacing: 3px;
					color: red;
				}
			}
		}
	}
</style>