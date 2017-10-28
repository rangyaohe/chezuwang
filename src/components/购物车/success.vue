<template>
	<div class="suc_cont">
		<!--左边-->
		<div class="suc_left">
			<div class="suc_left_title">
				<h3><span>参与成功!</span>美团网让你美梦成真</h3>
				<img class="car" src="../../assets/car-shop/358.png"/>
				<!--抽奖成功-->
				<span class="award">抽奖成功,祝你美梦成真!<a href="###">查看抽奖详情</a></span>
				<span class="download"><img src="../../assets/car-shop/小手机.png"/>下载<a href="###">车族网手机版</a>,抽奖结果轻松查看</span>
			</div>
			<!--绑定微博-->
			<div class="suc_weibo">
				<h4>绑定微博并关注,多获得一个抽奖号(首次绑定有效)</h4>
				<div class="suc_weibo_msg">
					<input type="checkbox"/>关注或收听美团,获取最新团购信息<br />
					<input type="checkbox"/>自动发布微博,邀请好友抽奖<br />
					<button class="weibo_btn">绑定新浪微博</button><button class="qq_btn">绑定腾讯微博</button><br />
					提示:绑定微博后,可以用微博账号登录美团
				</div>
				<h4>邀请好友,获得更多抽奖号</h4>
				<div class="suc_qq_msg">
					<span>每成功邀请1名参与,你就能获取1个新的抽奖号</span><br />
					<p class="suc_qq_url">
						<a href="###">这是你的专用邀请链接,请通过MSM或QQ发送给好友:</a><br/>
						<input type="text" value="http://www."/><button>复制</button>
					</p>
					<div class="suc_qq_share">
						<a href="###">分享抽奖活动给好友</a><br />
						<img src="../../assets/car-shop/享_车.png"/>
						<p>美梦成真:第三代全时科技数字轿车,全第三代全时科技数字轿车,第三代全时科技数字轿车,全第三代全时科技数字轿车,第三代全时科技数字轿车,全第三代全时科技数字轿车,第三代全时科技数字轿车,全第三代全时科技数字轿车,第三代全时科技数字轿车,全第三代全时科技数字轿车,第三代全时科技数字轿车,全第三代全时科技数字轿车,,中奖率翻倍!</p>
					</div>
				</div>
				<!--分享-->
				<span class="suc_share">分享到:<img src="../../assets/car-shop/373.png"/></span>
			</div>
		</div>
		<!--右边-->
		<div class="suc_right"></div>
	</div>
</template>
<script>
	export default{
		name:"success",
		mounted(){
			var _this=this;
			$(document).click(function(){
//				alert(_this.$store.state.userMsg.loginState)
			})
		}
	}
</script>
<style scoped lang="scss">
*{padding: 0;margin: 0;}
a{text-decoration: none;font-size: 14px;}
$h:1px solid #c7c7c7;
.suc_cont:after{
	content: "";
	clear: both;
	display: block;
}
.suc_cont{
	font-size: 14px;
    width: 975px;
    margin:10px auto 44px;
    .suc_left{
		height: 1252px;
		width: 656px;
		border: $h;
		padding: 0 30px;
		background: white;
		float: left;
		/*绑定微博上边的*/
		.suc_left_title {
			h3{
				font-size: 28px;
				color: #636363;
				line-height: 75px;
				padding-top: 40px;
				padding-left: 148px;
				background: url(../../assets/car-shop/笑脸.png) no-repeat;
				background-position: 49px 24px;
				span{
					font-size: 26px;
					color: red;
				}
			}
			.car{
				width: 100%;
			}
			/*抽奖成功*//*下载手机版*/
			.award,.download{
				display:block;
				text-align: center;
				line-height: 37px;
				a{
					color: #1978CF;
				}
				img{
					margin-right: 4px;
				}
			}
			.award{
				font-weight: 600;
				margin-top: 20px;
			}
		}
		/*绑定微博和邀请qq 的部分*/
		.suc_weibo{
			padding-top: 8;
			h4{
				line-height: 38px;
				font-size: 14px;
				text-indent: 16px;
				background: #eef7fe;
			}
			.suc_weibo_msg{
				margin-top: 7px;
				line-height: 20px;
				margin-left: 31px;
				padding-bottom: 20px;
				input{
					margin-right: 11px;
				}
				button{
					background: #1978cf;
					color: white;
					line-height: 30px;
					width: 120px;
					border: 1px solid #2559c1;
					text-align: center;
					border-radius: 2px;
					margin-top: 11px;
					margin-bottom: 7px;
				}
				.weibo_btn{
					margin-right:14px ;
				}
			}
			.suc_qq_msg{
				span{
					line-height: 36px;
					margin-left: 16px;
				}
			}
			.suc_qq_url{
				margin-top: 7px;
				line-height: 33px;
				padding-left: 78px;
				background:url(../../assets/car-shop/QQ.png) no-repeat;
				background-position: 13px 11px;
				a{
					color: #1978cf;                
				}
				input{
					height: 23px;
					line-height: 23px;
					width: 253px;
					border: 1px solid #1978cf;
					text-indent: 5px;
				}
				button{
					width: 54px;
					height: 24px;
					border: 1px solid #2559c1;
					border-radius: 2px;
					background: #1978cf;
					text-align: center;
					font-size: 12px;
					margin-left: 7px;
				}
			}
			.suc_qq_share{
				  padding-left: 78px;
				  margin-top: 40px;
				  background: url(../../assets/car-shop/享.png) no-repeat;
				  background-position: 13px 0;
				  margin-bottom: 20px;
				  a{
				  	line-height: 22px;
				  	color: #2559c1;
				  }
				  img{
				  	margin-top: 11px;
				  }
				  p{
				  	width: 370px;
				  	line-height: 20px;
				  	font-size: 12px;
				  }
			}
		}
		.suc_share{
			padding-left: 80px;
			img{
				vertical-align: middle;
				margin-left: 17px;
			}
		}
	}
	.suc_right{
		height: 1373px;
		width: 238px;
		background: white;
		float: right;
	}
}
</style>