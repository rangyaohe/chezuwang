<template>
	<div class="schedule">
		<span class="schedule_one">1.查看购物车</span>
		<span class="schedule_one">2.选择支付方式</span>
		<span class="schedule_one">3,购买成功</span>
		<span class="toright1"></span>
		<span class="toright2"></span>
	</div>
</template>

<script>
	export default{
		name:"shoptitle"
	}
</script>

<style scoped>
div,span{padding: 0;margin: 0;}
.schedule{
	height: 30px;
	width: 660px;
	margin-top: 24px;
	position: relative;
}
.schedule .schedule_one{
	display: inline-block;
	line-height: 30px;
	text-align: center;
	width: 219px;
	font-weight: 200;
}
.schedule span:nth-child(1){
	background: #ececec;
}
.schedule span:nth-child(2){
	background: #3b6bb1;
	color:white;
	margin: 0 -5px;
}
.schedule span:nth-child(3){
	background: #ececec;
}
.toright1,.toright2{
	display: block;
	position: absolute;
	height: 20px;
	width: 20px;
	border-right: 2px solid white;
	border-bottom: 2px solid white;
	transform: rotate(-45deg);
	
}
.toright1{
	background: #ececec;
	left: 209px;
	top: 4px;
}
.toright2{
	background: #3b6bb1;
	left: 427px;
	top: 4px;
}
</style>