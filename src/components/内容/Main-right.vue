<template>
<div id="cont">
	<!--添加我的店-->
	<div class="add">
		<span>添加我的店</span>
	</div>
	<!--添加店的下面的两张广告图-->
	<div class="adv">
		<img src="../../assets/car-main-right/图层 162 副本 2.png"/>
		<img src="../../assets/car-main-right/图层 261.png"/>
	</div>
	<!--各种手机版-->
	<div class="phone_type">
		<div class="phone_classify">
			<span>车族手机版</span>
			<span>免费下载</span>
		</div>
		<div class="phone_classify">
			<span>车族电影手机版</span>
			<span>免费下载</span>
		</div>
		<div class="phone_classify">
			<span>车族酒店手机</span>
			<span>免费下载</span>
		</div>
	</div>
	<!--热门专题-->
	<div class="hot_special">
		<h3>热门专题</h3>
			<div class="hot_spe_s">
				<img src="../../assets/car-main-right/图层 249.png"/>
				<div class="hot_spe_del">
					<span>新版奥迪7豪华版</span>
					<span>第三代全时科技数字轿</span>
					<span><strong>468</strong>人已购买</span>
				</div>
			</div>
			<div class="hot_spe_s">
				<img src="../../assets/car-main-right/图层 248 副本.png"/>
				<div class="hot_spe_del">
					<span>新版奥迪7豪华版</span>
					<span>第三代全时科技数字轿</span>
					<span><strong>468</strong>人已购买</span>
				</div>
			</div>
			<div class="hot_spe_s">
				<img src="../../assets/car-main-right/图层 247.png"/>
				<div class="hot_spe_del">
					<span>新版奥迪7豪华版</span>
					<span>第三代全时科技数字轿</span>
					<span><strong>468</strong>人已购买</span>
				</div>
			</div>
			<div class="hot_spe_s">
				<img src="../../assets/car-main-right/图层 248 副本.png"/>
				<div class="hot_spe_del">
					<span>新版奥迪7豪华版</span>
					<span>第三代全时科技数字轿</span>
					<span><strong>468</strong>人已购买</span>
				</div>
			</div>
		</div>
		<!--热卖排行榜-->

	<hotandluck></hotandluck>
	<!--车族资讯-->
	<div class="car_msg">
		<h3>车族资讯</h3>
		<a href="###">更多>></a>
		<ul>
			<li>
				<span class="dot"></span>
				<span>新考新规1月1日实施&nbsp;项目更注重实际操作</span>
				<span>2012-12-14</span>
			</li>
			<li>
				<span class="dot"></span>
				<span>新考新规1月1日实施&nbsp;项目更注重实际操作</span>
				<span>2012-12-14</span>
			</li>
			<li>
				<span class="dot"></span>
				<span>新考新规1月1日实施&nbsp;项目更注重实际操作</span>
				<span>2012-12-14</span>
			</li>
			<li>
				<span class="dot"></span>
				<span>新考新规1月1日实施&nbsp;项目更注重实际操作</span>
				<span>2012-12-14</span>
			</li>
		</ul>
	</div>
	
</div>
</template>

<script>
	import Hotandluck from "./Hot_and_luck"
	export default{
		name:"mainRight",
		components:{
			Hotandluck
		},
//		mounted:{
//			
//		}
		data(){
			return{}
		}
	}
</script>
<style scoped>
	*{margin: 0;padding: 0;}
	ul,li{list-style-type: none;}
	#cont{
		width: 236px;
		margin-left: 13px;
	}
	/*添加我的店*/
	.add{
		border: 1px solid #c5c5c5;
		line-height: 48px;
		text-indent: 42px;
		background: #FFFFFF url("../../assets/car-main-right/加号.png") no-repeat;
		background-size: 17px;
		background-position:15px 15px;
		margin-top: 10px;
	}
	.add span{
		font-size: 18px;
		color: #005bac;
	}
	#cont .adv{
		font-size: 0;
	}
	#cont .adv img{
		width: 234px;
		border: 1px solid #c5c5c5;
		margin-top: 10px;
	}
	/*各种手机版*/
	.phone_type{
		height: 338px;
		background: url("../../assets/car-main-right/下载.png") no-repeat #FFFFFF;
		background-size: 100%;
		margin-top: 10px;
	}
	.phone_classify{
		padding-bottom: 8px;
		/*text-align: center;*/
	}
	.phone_classify span{
		display: block;
	}
	.phone_classify span:nth-child(1){
		line-height: 60px;
		text-indent: 82px;
		font-size: 16px;
	}
	.phone_classify span:nth-child(2){
		line-height: 42px;
		text-indent: 97px;
		color: white;
		font-size: 13px;
	}
	/*热门专题*/
	.hot_special{
		border: 1px solid #c5c5c5;
		padding-left: 15px;
		margin-top: 10px;
		background: #ffffff;
	}
	.hot_special h3{
		font-size: 14px;
		line-height: 62px;
	}
	.hot_special .hot_spe_s{
		height: 50px;
		padding-top: 18px;
		padding-bottom: 14px;
	}
	.hot_special .hot_spe_s:nth-child(1){
		margin-top: 2px;
	}
	.hot_special .hot_spe_s img{
		width: 81px;
		float: left;
	}
	.hot_special .hot_spe_s .hot_spe_del{
		width: 131px;
		float: left;
		font-size: 14px;
		margin-left: 7px;
		/*vertical-align: top;*/
	}
	.hot_spe_s .hot_spe_del span{
		display: block;
	}
	.hot_spe_s .hot_spe_del strong{
		color: black;
	}
	.hot_spe_del span:nth-child(1){
		font-weight: 900;
	}
	.hot_spe_del span:nth-child(2),.hot_spe_del span:nth-child(3){
		font-size: 12px;
		color: #999999;
	}
	/*车族资讯*/
	.car_msg {
		border: 1px solid #c5c5c5;
		position: relative;
		margin-top: 10px;
		background: #ffffff;
	}
	.car_msg h3{
		font-size: 16px;
		line-height: 48px;
		margin-top: 7px;
		text-indent: 14px;
	}
	.car_msg a{
		position: absolute;
		top: 25px;
		right: 14px;
		font-size: 11px;
		color: #1b5495;
		text-decoration: none;
	}
	.car_msg ul li{
		padding-left: 27px;
		padding-right: 24px;
		padding-bottom: 13px;
		position: relative;
	}
	.car_msg ul li span {
		display: block;
		font-size: 12px;
	}
	.car_msg ul li .dot{
		display: inline-block;
		height: 6px;
		width: 6px;
		background: #d5d5d5;
		border-radius: 50%;
		vertical-align: middle;
		position: absolute;
		left: 15px;
		top:6px;
	}
	.car_msg ul li span:nth-child(3){
		line-height: 12px;
		font-size: 10px;
		
	}
</style>