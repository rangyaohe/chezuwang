<!--购物车的底部-->
<template>
	<div class="wrop">
		<h3>购买本团的客户还看了</h3>
		<div class="cont">
			<div class="cont_one">
				<img src="../../assets/car-shop/车1.png"/>
				<img src="../../assets/car-shop/直降.png" class="lower"/>
				<span class="detail">第三代全时科技数字轿车,全新奥迪7豪华版</span><br />
				<span class="price">
					<span>门店价</span>
					<span>¥100</span>
					<span>¥88</span>
				</span><br />
				<a href="###"><img src="../../assets/car-shop/小车.png"/>加入购物车</a>
			</div>
			<div class="cont_one">
				<img src="../../assets/car-shop/车2.png"/>
				<span class="detail">第三代全时科技数字轿车,全新奥迪7豪华版</span><br />
				<span class="price">
					<span>门店价</span>
					<span>¥100</span>
					<span>¥88</span>
				</span><br />
				<a href="###"><img src="../../assets/car-shop/小车.png"/>加入购物车</a>
			</div>
			<div class="cont_one">
				<img src="../../assets/car-shop/车3.png"/>
				<span class="detail">第三代全时科技数字轿车,全新奥迪7豪华版</span><br />
				<span class="price">
					<span>门店价</span>
					<span>¥100</span>
					<span>¥88</span>
				</span><br />
				<a href="###"><img src="../../assets/car-shop/小车.png"/>加入购物车</a>
			</div>
			<div class="cont_one">
				<img src="../../assets/car-shop/车4.png"/>
				<span class="detail">第三代全时科技数字轿车,全新奥迪7豪华版</span><br />
				<span class="price">
					<span>门店价</span>
					<span>¥100</span>
					<span>¥88</span>
				</span><br />
				<a href="###"><img src="../../assets/car-shop/小车.png"/>加入购物车</a>
			</div>
			<div class="cont_one">
				<img src="../../assets/car-shop/车5.png"/>
				<span class="detail">第三代全时科技数字轿车,全新奥迪7豪华版</span><br />
				<span class="price">
					<span>门店价</span>
					<span>¥100</span>
					<span>¥88</span>
				</span><br />
				<a href="###"><img src="../../assets/car-shop/小车.png"/>加入购物车</a>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"Shopfoot"
	}
</script>

<style scoped>
	*{padding: 0;margin: 0;}
	.wrop{
		width: 943px;
		margin: 10px auto 48px;
		background: white;
		padding: 10px 16px 0;
		border: 1px solid #c6c6c6;
	}
	.wrop h3{
		font-size: 14px;
		line-height: 48px;
	}
	.wrop .cont{
		width: 943px;
		height: 213px;
		display: flex;
		justify-content: space-between;
	}
	.cont .cont_one{
		height: 213px;
		width: 181px;
		background: white;
		position: relative;
	}
	/*直降的小三角*/
	.lower{
		position: absolute;
		top:0;
		right: 0;
	}
	.cont_one .detail{
		font-size: 12px;
		color: #565353;
	}
	.price{
		width: 100%;
		display: inline-block;
		line-height: 15px;
	}
	.price span:nth-child(1){
		font-size: 12px;
		color: #8c8a8a;
	}
	.price span:nth-child(2){
		font-size: 10px;
		color: #8c8a8a;
		margin-left: 10px;
	}
	.price span:nth-child(3){
		font-size: 15px;
		color: #e40d1a;
		margin-left: 67px;
		font-weight: 600;
	}
	.cont_one a{
		display: inline-block;
		font-size: 12px;
		color: #3b6bb1;
		margin-top: 16px;
		margin-left: 94px;
		line-height: 12px;
		text-decoration: none;
	}
	.cont_one a img{
		vertical-align: top;
		margin-right: 7px;
	}
</style>