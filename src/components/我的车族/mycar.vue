<template>
	<div>
		<div class="k_hint">
			<span>您有6个订单还没付款, <a href="###">快来支付吧!</a> 以免团购抢光啦!</span>
			<img src="../../assets/mycar-image/close.png"/>
		</div>
		<div class="k_title">
			<router-link to="/mycar/indent" class="gg dd">我的订单</router-link>
			<router-link to="/mycar/good" class="a gg">我的评价</router-link>
			<router-link to="/mycar/collect" class="a gg">我的收藏</router-link>
			<router-link to="/mycar/surplus" class="a gg">车族余额</router-link>
			<router-link to="/mycar/carry" class="a gg">充值/提现</router-link>
			<router-link to="/mycar/chit" class="a gg">代金券</router-link>
			<router-link to="/mycar/score" class="a gg">我的积分</router-link>
			<router-link to="/mycar/set" class="a gg">账户设置</router-link>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
	import './mycar.css'
	export default{
		name:"macar",
		mounted(){
			$(".k_myIndent").click(function() {
				$(".k_hint").css("display","block");
			});
			$(".dd").click(function() {
				$(".k_hint").css("display","block");
			});
			$(".a").click(function () {
				$(".k_hint").css("display","none");
			})
			$(".k_hint img").click(function() {
				$(".k_hint").css("display","none");
			});
			$(".gg").click(function() {
				$(this).css({"background":"#fff","z-index":"100","color":"black"}).siblings().css({"background":"","z-index":"","color":""});
			});
//			$(".gg").click(function() {
//				$(this).removeClass("k_myIndent").siblings().addClass("k_myIndent");
//			});
		}
	}
</script>

<style scoped="scoped">
</style>