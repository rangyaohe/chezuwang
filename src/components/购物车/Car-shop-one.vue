<template>
	<div>
		<div class="shopcar">
			<!--我的购物车-->
			<div class="shopcarTitle">
				<img src="../../assets/car-shop/车图标.png" alt="" class="mycar_img"/>
				<div class="left">
					<span class="mycar">我的购物车</span>
					<span class="state"><span class=""></span></span> <span> 1/20</span>
				</div>
				<div class="liucheng">
					
					<img src="../../assets/car-shop/mydd.png" alt="" />
					<span class="log">现在<a href="/login">登录</a>,您的购物车商品将被永久保存</span>
				</div>
			</div>
			<!--购物列表-->
			<div class="car_list">
				<table border="0" cellspacing="0" cellpadding="0">
					<tr class="shop_list">
						<th>项目</th>
						<th>状态</th>
						<th>类型/数量</th>
						<th>单价</th>
						<th>小计</th>
						<th>操作</th>
					</tr>
					<tr class="list_detail">
						<td><img src="../../assets/car-footimage/car3.png" alt="" /><span>第三代全时科技数字轿车,全新奥迪A7</span></td>
						<td><span>可购买</span></td>
						<td class="string"><span class="minus">-</span> <input type="text" class="num_state" value="1"  disabled="disabled" v-model="sum_price"/> <span class="add">+</span></td>
						<td>¥<span class="u_price" v-model="u_price">{{u_price}}</span></td>
						<td>¥<span class="u_price_sum">{{sum_price*u_price}}</span></td>
						
						<td><button class="delete">删除</button></td>
					</tr>
					<tr>
						<td></td>
						<td></td>
						<td></td>
						<td>代金券:</td>
						<td>-¥<span class="voucher">0</span></td>
						<td></td>
					</tr>
					<tr>
						<td></td>
						<td></td>
						<td></td>
						<td>应付总额:</td>
						<td>¥<span class="all_sum">{{sum_price*u_price}}</span></td>
						<td></td>
					</tr>
			</table>			
			</div>
			<button class="submit">提交订单</button>	
		</div>
				<!--弹框-->
		<div class="mark">
			
			<div class="alert_log">
				
					<div class="alert_log_top">
						<span class="dl">登录</span><span class="qx"><img src="../../assets/car-shop/quxiao.png"/></span>
					</div>
					<div class="putongdenglu">
					<!--手机动态码登录-->
					<div class="dongtai_log">
						<img src="../../assets/car-shop/shouji.png" alt="" />
						<a href="###" class="dddtm">手机动态码登录</a>
					</div>
					<!--密码账号-->
					<div class="pp">
						<span>账号</span> <input type="tel" class="phone_num" /><br />
						<span>密码</span> <input type="password" class="password"/> <a href="###" class="forget_password">忘记密码?</a>
					</div>
					<div class="remberpass">
						<input type="checkbox" class="rem"/><span>记住密码</span>
						<input type="checkbox" class="selflog"/><span>下次自动登录</span>
					</div>
					<div class="btn">
						<button>登录</button><span>免费注册</span>
					</div>
				</div>
				<!--手机验证码登录-->
				<div class="yanzhengmalog">
					<div class="dongtai_log">
						<img src="../../assets/car-shop/shouji.png" alt="" />
						<a href="###" class="pptt">普通方式登录</a>
					</div>
					<span class="yzm">无需注册,使用手机动态码即可购买</span>
					<!--密码账号-->
					<div class="p_p">
						<span>手机号</span> <input type="tel" class="phone_num" /><br />
						<button class="dtm">免费获取手机动态码</button><br />
						<span>动态码</span> <input type="password" class="password"/>
					</div>
					<div class="rem_phone">
						<input type="checkbox" name="" id="" value="" /><span>记住手机</span>
					</div>
					
					<div class="btn">
						<button>登录</button><span>免费注册</span>
					</div>
				</div>
				
				
				<!--合作伙伴-->
				<div class="partner">
					<span>用合作网站账号登录</span>
					<img src="../../assets/car-shop/partner.png"/>
				</div>
				
				
			</div>
		</div>
	</div>
		
</template>
<script>
	export default {
		name:"shopcar",
		data(){
			return{
				sum_price:1,
				u_price:58,
			}
			
		},
		mounted(){
			var _this = this;
			//删除购物列表
				$(".delete").click(function () {
					console.log(this);
					$(this).parent().parent("tr").remove();
				});
			//改变数量
			$(".add").click(function () {
				var num = $(this).prev("input").val();				
					$(this).prev("input").val(num-0+1);
					_this.sum_price=_this.sum_price+1;
					console.log(_this.sum_price);
			});
			$(".minus").click(function () {
				var num = $(this).next("input").val();
				if(num>1){
					$(this).next("input").val(num-0-1);
				} else if(num=1){
					num=1;
				}
			});
			
			//弹窗功能
			//普通登录方式
			$(".pptt").click(function () {
				$(".putongdenglu").css("display","block");
				$(".yanzhengmalog").css("display","none");
			})
			//动态码登录方式
			$(".dddtm").click(function () {
				$(".putongdenglu").css("display","none");
				$(".yanzhengmalog").css("display","block");
			})
			//取消
			$(".qx").click(function () {
				$(".mark").css("display","none");
			})
			//提交订单提示登录
			$(".submit").click(function () {
				$(".mark").css("display","block");
			})
		}
	}
</script>

<style scoped>
	div,h2,span{
		margin: 0;
		padding: 0;
	}
	.shopcar{
		width: 977px;
		height:500px;
		margin:0 auto;
		padding: 0;
		margin-top: 10px;
		background-color: white;
		border: 1px solid #C5C5C5;
	}
	.mycar_img{
		margin-top: 40px;
		/*margin-left: 30px;*/
		margin-bottom: 45px;
		background-color: red;
	}
	.shopcarTitle{
		width: 917px;
		height: 84px;
		margin: 0 auto;
		margin-bottom: 44px;
	}
	.left{
		width: 130px;
		/*background-color: red;*/
		line-height: 18px;
		position: relative;
		bottom: 90px;
		left: 70px;
	}
	.mycar{
		font-size: 25px;
	}
	.left span:nth-child(3){
		font-size: 14px;
		color:#C5C5C5;
		font-weight: 100;
	}
	.state{
		display: inline-block;
		width: 90px;
		height: 5px;
		border: 1px solid #005BAC;
	}
	.tiao{
		display: inline-block;
		width: 20px;
		height: 5px;
		background-color: #005BAC;
		
	}
	.liucheng{
		width: 666px;
		position: relative;
		bottom: 140px;
		left: 258px;
	}
	.liucheng img{
		vertical-align: top;
	}
	.liucheng .log{
		font-size: 12px;
		color: #C5C5C5;
		font-weight: 130;
	}
	.liucheng .log a{
		text-decoration: none;
		color: #007AFF;
	}
	
	.car_list{
		width: 917px;
		/*height: 323px;*/
		margin: 0 auto;
		border: 1px solid #C5C5C5;
	}
	.car_list table{
		width: 917px;
	}
	.shop_list{
		height: 34px;
		background-color: #f6f6f6;
		
	}
	 table{
  	 border-collapse:collapse;
	}
	tr{
		height: 62px;
		text-align: center;
		border-bottom: 1px dashed #C5C5C5;
	}
	.num_state{
		width: 60px;
		height: 30px;
		text-align: center;
	}
	.string span{
		display: inline-block;
		cursor: pointer;
		width: 12px;
		height: 12px;
		line-height: 10px;
		border: 1px solid #C5C5C5;
		cursor: pointer;
	}
	.submit{
		width: 97px;
		height: 44px;
		background-color: #3b6bb1;
		border: none;
		border-radius:3px ;
		font-size: 14px;
		color: white;
		float: right;
		margin-right: 30px;
		margin-top: 30px;
	}
	.list_detail td img{
		width: 63px;
		height: 38px;
		
	}
	.list_detail td:nth-child(1){
		text-align: left;
		text-indent: 12px;
	}
	.list_detail td{
		font-size: 12px;
	}
	.list_detail td:nth-child(1) span{
		position: relative;
		bottom: 27px;
		left: 6px;
	}
	.shop_list th:nth-child(1){
		text-align: left;
		text-indent: 12px;
	}
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
		/*height: 409px;*/
		border: 1px solid #007AFF;
		background-color: white;
		margin: 250px auto;
	}
	.alert_log_top{
		width: 416px;
		/*height: 32px;*/
		background-color: #213f7b;
	}
	.dl{
		display: inline-block;
		text-indent: 1em;
		line-height: 32px;
		font-size: 16px;
		color: white;
	}
	.qx{
		float: right;
	}
	.dongtai_log{
		width: 101px;
		height: 16px;
		margin-left: 214px;
		margin-top:17px;
		margin-bottom: 8px;
	}
	.dongtai_log img{
		vertical-align: middle;
	}
	.dongtai_log a{
		font-size: 12px;
		text-decoration: none;
		color: #096edf;
	}
	.pp{
		width: 336px;
		height: 84px;
		margin-left: 43px;
	}
	.p_p{
		width: 350px;		
		margin-left: 30px;
	}
	.p_p .password{
		margin-top: 15px;
	}
	.forget_password{
		font-size: 12px;
		text-decoration: none;
		color: #096edf;
	}
	.phone_num,.password{
		width: 230px;
		height: 26px;
	}
	.password{
		margin-top: 20px;
	}
	.remberpass{
		width: 182px;
		height: 15px;
		margin-left:83px;
		margin-top: 20px;
		
	}
	.remberpass span{
		font-size: 12px;
		color: #666666;
	}
	.selflog{
		margin-left: 14px;
	}
	.btn button{
		width: 78px;
		height: 38px;
		border-radius: 3px;
		border: none;
		font-size: 18px;
		color: white;
		font-weight: 100;
		background-color: #3071b9;
		margin-left: 80px;
		margin-top: 28px;
		margin-bottom: 20px;
	}
	.btn span{
		font-size: 12px;
		color: #096edf;
		margin-left: 10px;
		cursor: pointer;
	}
	.partner{
		width: 416px;
		height: 131px;
		border-top: 1px solid #C5C5C5;
		font-size: 15px;
	}
	.partner span{
		display: inline-block;
		margin-left: 52px;
		margin-top: 20px;
		margin-bottom: 8px;
	}
	.partner img{
		margin-left: 26px;
	}
	.yanzhengmalog,.mark{
		display: none;
	}
	.yzm{
		display: inline-block;
		border: 1px solid #F8D680;
		width: 234px;
		line-height: 30px;
		text-indent: 0.5em;
		font-size: 12px;
		background-color: #FDF6D5;
		margin-left: 83px;
		margin-bottom: 15px;
		margin-top: 8px;
	}
	.dtm{
		width:158px ;
		height: 26px;
		margin-top: 15px;
		margin-left: 54px;
		border-radius: 3px;
		background-color: #F0F1F2;
		border: 1px solid #C5C5C5;
	}
	.rem_phone{
		margin-left: 84px;
		margin-top: 26px;
	}
	
</style>