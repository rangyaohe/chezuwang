<template>
	<div class="n_merchant">
		<img src="../../assets/mycar-image/tupian.png" class="one"/>
		<img src="../../assets/mycar-image/denglu.png" class="n_sign"/>
		<div class="n_input">
			<span>用户名 / 邮箱 / 手机号:</span><br />
			<input type="text" class="username"/><br />
			<span>密码:</span><br />
			<input type="text" class="password"/><br />
			<span>验证码:</span><br />
			<input type="text" class="yanzheng"/><img src="../../assets/mycar-image/tt.png"/><a href="###">点击刷新</a><br />
			<em>忘记密码?</em><br />
			<button class="button">登录</button>
		</div>
	</div>
</template>

<script>
	export default{
		name:"merchant"
	}
</script>

<style scoped="scoped" lang="scss">
	.n_merchant{
		position: relative;
		width: 977px;
		height: 544px;
		border: 1px solid #c5c5c5;
		margin: 30px auto 49px;
		background-color: #fff;
		.one{
			margin-top: 21px;
		}
		.n_sign{
			position: absolute;
			left: 538px;
			top: 89px;
		}
		.n_input{
			position: absolute;
			left: 578px;
			top: 163px;
			span{
				font-size: 14px;
				display: inline-block;
				/*margin-bottom: 57px;*/
			}
			.username{
				width: 188px;
				height: 33px;
				margin-bottom: 17px;
			}
			.password{
				width: 188px;
				height: 33px;
				margin-bottom: 17px;
			}
			.yanzheng{
				/*display: inline-block;*/
				margin-top: -10px;
				width: 115px;
				height: 33px;
				
			}
			img{
					position: relative;
					top: 10px;
					margin: 0 9px 0 13px;
				}
			a{
				font-size: 12px;
				color: #095987;
				text-decoration: none;
			}
			em{
				font-style: normal;
				font-size: 12px;
				display: inline-block;
				margin: 14px 0 10px 0;
			}
			.button{
				width: 115px;
				height: 36px;
				border: none;
				border: 1px solid #005BAC;
				background-color: #3b6bb1;
				border-radius: 4px;
				color: #fff;
			}
		}
	}
</style>