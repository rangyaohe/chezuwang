<!--这是热门汽车排行榜和抽奖的组件-->
<template>
	<div>
		<div class="hot_ranking">
		<h3>热卖排行榜</h3>
		<div class="rank">
			<div class="rank_title">
				<span>1</span>
				<span>【朝阳东四店】第三代全时轿车</span>
			</div>
			<div class="rank_del" style="margin-top: 13px;">
				<img src="../../assets/car-main-right/图层 249.png"/>
				<div class="rank_del_price">
					<span>¥98</span>
					<span>每月<strong>60</strong>人购买</span>
				</div>
			</div>
		</div>
		<div class="rank">
			<div class="rank_title">
				<span>2</span>
				<span>【朝阳东四店】第三代全时轿车</span>
			</div>
			<div class="rank_del">
				<img src="../../assets/car-main-right/图层 249.png"/>
				<div class="rank_del_price">
					<span>¥98</span>
					<span>每月<strong>60</strong>人购买</span>
				</div>
			</div>
		</div>
		<div class="rank">
			<div class="rank_title">
				<span>3</span>
				<span>【朝阳东四店】第三代全时轿车</span>
			</div>
			<div class="rank_del">
				<img src="../../assets/car-main-right/图层 249.png"/>
				<div class="rank_del_price">
					<span>¥98</span>
					<span>每月<strong>60</strong>人购买</span>
				</div>
			</div>
		</div>
		<div class="rank">
			<div class="rank_title">
				<span>4</span>
				<span>【朝阳东四店】第三代全时轿车</span>
			</div>
			<div class="rank_del">
				<img src="../../assets/car-main-right/图层 249.png"/>
				<div class="rank_del_price">
					<span>¥98</span>
					<span>每月<strong>60</strong>人购买</span>
				</div>
			</div>
		</div>
		<div class="rank" style="margin-bottom: 15px;">
			<div class="rank_title">
				<span>5</span>
				<span>【朝阳东四店】第三代全时轿车</span>
			</div>
			<div class="rank_del">
				<img src="../../assets/car-main-right/图层 249.png"/>
				<div class="rank_del_price">
					<span>¥98</span>
					<span>每月<strong>60</strong>人购买</span>
				</div>
			</div>
		</div>
	</div>
	<!--抽奖-->
	<div class="good_luck">
		<div class="luck_title">
			<span>0元抽奖是真的么</span>
			<span>车族圆梦系列抽奖>></span>
		</div>
		<ul>
			<li>
				<span></span>
				<span>背景运动嘉宝S4</span>
				<span style="color: #1376ce;">抽奖结果</span>
			</li>
			<li>
				<span></span>
				<span>博瑞祥云奥迪购车惠</span>
				<span>火爆进行中</span>
			</li>
			<li>
				<span></span>
				<span>购BMW3系尊享万元开业礼</span>
				<span>火爆进行中</span>
			</li>
		</ul>
	</div>
	</div>
</template>

<script>
	export default{
		name:"Hotandluck"
		}
</script>

<style scoped>
	*{margin: 0;padding: 0;}
	ul,li{list-style-type: none;}
		/*热卖排行榜开始*/
	.hot_ranking{
		padding-left: 15px;
		border: 1px solid #c5c5c5;
		margin-top: 10px;
		background: #ffffff;
	}
	.hot_ranking h3{
		font-size: 14px;
		line-height: 62px;
	}
	.rank_title span:nth-child(1){
		display: inline-block;
		line-height:15px;
		width: 15px;
		text-align: center;
		border-radius: 1px;
		background: #1376ce;
		color: white;
		font-size: 8px;
	}
	.rank_title span:nth-child(2){
		font-size: 12px;
		margin-left: -8px;
	}
	.rank_del{
		width: 221px;
		height: 49px;
		margin-top: 9px;
		margin-bottom: 18px;
	}
	.rank_del img{
		width: 81px;
		float: left;
	}
	.rank_del .rank_del_price{
		width: 130px;
		float: left;
		margin-top: 4px;
		margin-left: 10px;
	}
	.rank_del_price span{
		display: block;
		/*background: red;*/
		vertical-align: bottom;
	}
	.rank_del_price span strong{
		font-size: 10px;
		color: black;
		
	}
	.rank_del_price span:nth-child(1){
		color: #e61b27;
		font-size: 11px;
		line-height: 32px;
	}
	.rank_del_price span:nth-child(2){
		color: #999999;
		font-size: 12px;
	}
	/*抽奖*/
	.good_luck{
		background: #ffffff url("../../assets/car-main-right/278.png") no-repeat;
		background-size: 70px 58px;
		background-position: 5px 11px;
		font-size: 12px;
		border: 1px solid #c5c5c5;
		margin-top: 10px;
	}
	.good_luck .luck_title{
		padding-left: 78px;
		padding-top: 20px;
	}
	.luck_title span{
		display: block;
	}
	.luck_title span:nth-child(1){
		font-size: 16px;
		color: #ff4040;
		line-height: 30px;
	}
	.luck_title span:nth-child(2){
		color: #1376ce;
	}
	.good_luck ul{
		padding: 18px 0 20px 14px;
	}
	.good_luck ul li span{
		line-height: 22px;
	}
	.good_luck ul li span:nth-child(1){
		display: inline-block;
		height: 4px;
		width: 4px;
		background: black;
		vertical-align: middle;
	}
	.good_luck ul li span:nth-child(3){
		color: #ff4040;
	}
</style>