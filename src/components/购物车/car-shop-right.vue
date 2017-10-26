<template>
	<div class="shop_right">
		<img src="../../assets/car-service-image/dphone.jpg"/>
		<div class="shop_right1">
			<h3>小提示</h3>
			<span class="ask">为什么使用过的订单任然显示为"未使用"?</span><br />
			<span class="answer">订单的使用状态更新可能会有延迟,订单的真是使用状态以实际消费情况为准,敬请谅解</span><br />
			<span class="ask">哪种订单可以评价?</span><br />
			<div class="two_answer">
				<span class="answer"><span class="hot"></span>只有已消费过的订单才可以评价,评价可获赠积分!</span><br />
				<span class="answer"><span class="hot"></span>如果团购项目为优惠码,支付成功即可评价(建议消费后再评价)。</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"shopright",
		
	}
</script>

<style scoped>
*{padding: 0;margin: 0;}
.shop_right{
	width: 238px;
}
.shop_right1{
	width: 210px;
	border: 1px solid #c5c5c5;
	padding:4px 12px 0 14px;
	height: 301px;
	background: white;
}
.shop_right1 h3{
	line-height: 60px;
	font-size: 16px;
}
.ask{
	font-size: 14px;
	line-height: 20px;
	font-weight: 600;
}

.answer{
	font-size: 12px;
	line-height: 16px;
	margin-top: 3px;
	margin-bottom: 12px;
	position: relative;
}
.two_answer{
	padding-left: 15px;
}
.answer .hot{
	display: inline-block;
	height: 4px;
	width: 4px;
	background: #545b63;
	border-radius: 50%;
	position: absolute;
	top: 5px;
	left: -6px;
}
</style>