<template>
	<div class="q_chit">
		<div class="q_wrap">
			<div class="q_wrap_top">
				<span>想获取更多代金券?<a href="###">用车族积分兑换</a></span>
			</div>
			<span>您没有使用过代金券</span><br />
			<span class="q_phone"><img src="../../assets/mycar-image/phone.png"/>下载<a href="###">车族手机版</a>, 更多获券机会。</span>
		</div>
	</div>
</template>

<script>
	export default{
		name:"Chit"
	}
</script>

<style scoped="scoped" lang="scss">
	.q_chit{
		position: relative;
		width: 977px;
		/*height: 594px;*/
		/*margin-left: 92px;*/
		margin: 0px auto 38px;
		z-index: 2;
		.q_wrap{
			width: 716px;
			height: 554px;
			border: 1px solid #c6c6c6;
			margin-left: -5px;
			margin-top: -1px;
			background-color: #fff;
			.q_wrap_top{
				width: 672px;
				height: 35px;
				border: 1px solid #f6e1b1;	
				background-color: #fffbf2;
				margin: 25px auto 0;
				span{
					display: inline-block;
					font-size: 12px;
					color: black;
					margin: 10px 0 0 15px;
					a{
						margin-left: 5px;
						text-decoration: none;
						color: #1978cf;
						font-size: 11px;
					}
				}
			}
			span{
				display: inline-block;
				margin: 25px 0 0 28px;
				font-size: 14px;
			}
			.q_phone{
				font-size: 14px;
				img{
					margin-right: 5px;
					position: relative;
					top: 2px;
				}
				a{
					text-decoration: none;
					color: #1978cf;
				}
			}
		}
	}
</style>