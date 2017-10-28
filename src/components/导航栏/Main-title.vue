<template>
	<div>
		<div id="i_header">
			<div class="i_header_top">
				<div class="i_list">
					<a href="###" class="i_favorite"><img src="../../assets/car-footimage/icon.png"/> 收藏夹</a>
					<a href="###" class="i_read"><img src="../../assets/car-footimage/icon2.png"/> 订阅</a>
					<a href="###" class="i_help"><img src="../../assets/car-footimage/icon3.png"/> 帮助</a>
				</div>
			</div>
			<div class="i_banner">
				<img src="../../assets/car-titleimage/banner.png" alt="" />
				<span class="i_close">+</span>
			</div>
			<div class="i_center">
				<div class="i_center_left">
					<img src="../../assets/car-titleimage/logo.png" alt="" class="i_logo" />
					<span class="i_address">北京</span><br />
					<a href="###" class="i_city" @click="show">[切换城市]</a>
				</div>
				<div class="i_left_list">
					<div class="i_block">
						<div class="i_block_top">
							<a href="###" class="city">按市切换</a>
							<a href="###" class="province">按省切换</a>
							<span class="close">+</span>
						</div>
						<div class="i_center_city">
							<div class="i_centre_city">
								<span>核心城市</span>
								<a href="">北京</a>
								<a href="">上海</a>
								<a href="">天津</a>
								<a href="">重庆</a>
								<a href="">深圳</a>
								<a href="">济南</a>
								<a href="">广州</a>
								<a href="">长沙</a>
								<a href="">武汉</a>
							</div>
							<div class="i_main_city">
								<span>重要城市</span>
								<a href="">保定</a>
								<a href="">长春</a>
								<a href="">成都</a>
								<a href="">大连</a>
								<a href="">东莞</a>
								<a href="">鄂州</a>
								<a href="">福州</a>
								<a href="">佛山</a>
								<a href="">贵阳</a>
								<a href="">哈尔滨</a></br>
								<a href="">杭州</a>
								<a href="">合肥</a>
								<a href="">呼市</a>
								<a href="">海口</a>
								<a href="">嘉兴</a>
								<a href="">金华</a>
								<a href="">昆明</a>
								<a href="">兰州</a>
								<a href="">廊坊</a>
								<a href="">南昌</a></br>
								<a href="">南京</a>
								<a href="">南宁</a>
								<a href="">南通</a>
								<a href="">宁波</a>
								<a href="">泉州</a>
								<a href="">青岛</a>
								<a href="">沈阳</a>
								<a href="">石家庄</a>
								<a href="">绍兴</a>
								<a href="">苏州</a></br>
								<a href="">太原</a>
								<a href="">温州</a>
								<a href="">潍坊</a>
								<a href="">无锡</a>
								<a href="">徐州</a>
								<a href="">西安</a>
								<a href="">厦门</a>
								<a href="">孝感</a>
								<a href="">西宁</a>
								<a href="">烟台</a></br>
								<a href="">银川</a>
								<a href="">淄博</a>
								<a href="">中山</a>
								<a href="">珠海</a>
								<a href="">郑州</a>
							</div>
							<div class="i_down_cont">
								<div class="i_letter">
									<a href="">A</a>
									<a href="">B</a>
									<a href="">C</a>
									<a href="">D</a>
									<a href="">E</a>
									<a href="">F</a>
									<a href="">G</a>
									<a href="">H</a>
									<a href="">I</a>
									<a href="">J</a>
									<a href="">K</a>
									<a href="">L</a>
									<a href="">M</a>
									<a href="">N</a>
									<a href="">O</a>
									<a href="">P</a>
									<a href="">Q</a>
									<a href="">R</a>
									<a href="">S</a>
									<a href="">T</a>
									<a href="">U</a>
									<a href="">V</a>
									<a href="">W</a>
									<a href="">X</a>
									<a href="">Y</a>
									<a href="">Z</a>
								</div>
								<div class="i_down_city">
									<a href="">北京</a>
									<a href="">保定</a>
									<a href="">包头</a>
									<a href="">本溪</a>
									<a href="">白城</a>
									<a href="">白山</a>
									<a href="">蚌埠</a>
									<a href="">滨州</a>
									<a href="">百色</a>
									<a href="">北海</a>
									<a href="">巴中</a>
									<a href="">毕节</a></br>
									<a href="">保山</a>
									<a href="">宝鸡</a>
									<a href="">白银</a>
								</div>
							</div>
						</div>
						<div class="i_center_province">
							<div class="i_mainCity">
								<a href="">北京</a>
								<a href="">上海</a>
								<a href="">天津</a>
								<a href="">重庆</a>
								<a href="">深圳</a>
							</div>
							<div class="i_allProvince">
								<a href="">A 安徽省(合肥)</a>
								<a href="">F 福建省(福州)</a>
								<a href="">G 广东省(广州)</a>
								<a href="">G 广西(南宁)</a>
								<a href="">G 贵州省(贵阳)</a><br />
								<a href="">G 甘肃省(兰州)</a>
								<a href="">H 河南省(郑州)</a>
								<a href="">H 湖北省(武汉)</a>
								<a href="">H 湖南省(长沙)</a>
								<a href="">H 海南省(海口)</a><br />
								<a href="">H 河北省(石家庄)</a>
								<a href="">H 黑龙江(哈尔滨)</a>
								<a href="">J 江苏省(南京)</a>
								<a href="">J 江西省(南昌)</a>
								<a href="">J 吉林省(长春)</a><br />
								<a href="">L 辽宁省(沈阳)</a>
								<a href="">N 宁夏(银川)</a>
								<a href="">N 内蒙古(呼市)</a>
								<a href="">Q 青海省(西宁)</a>
								<a href="">S 山东省(济南)</a><br />
								<a href="">S 四川省(成都)</a>
								<a href="">S 山西省(太原)</a>
								<a href="">Y 云南省(昆明)</a>
								<a href="">Z 浙江省(杭州)</a>
							</div>
							<div class="i_downProvince">
								<a href="">嘉峪关</a>
								<a href="">临夏</a>
								<a href="">兰州</a>
								<a href="">定西</a>
								<a href="">平凉</a>
								<a href="">武威</a>
								<a href="">张掖</a>
								<a href="">酒泉</a>
								<a href="">天水</a>
								<a href="">白银</a>
							</div>
						</div>
					</div>
				</div>
				<div class="i_center_search">
					<div class="i_searchList">
						<a href="/keyt" class="i_golf">高尔夫</a>
						<a href="/keyd" class="i_citroen">雪铁龙夫</a>
						<a href="/keyq" class="i_audi">奥迪</a>
						<a href="/keya" class="i_golf">高尔夫</a>
						<a href="/keys" class="i_citroen">雪铁龙</a>
						<a href="###" class="i_audiA">奥迪A7</a>
					</div>
					<div class="i_control">
						<input type="text" class="i_search" placeholder="搜索商品名、地址、服务等" />
						<input type="button" value="搜索" class="i_btn" />
					</div>
					<ul class="i_show_list">
						<li>贴贴膜1</li>
						<li>膜膜2</li>
						<li>膜贴膜1贴膜</li>
						<li>贴膜3</li>
						<li>贴膜1</li>
						<li>贴膜贴膜1</li>
						<li>贴膜1</li>
						<li>贴膜贴</li>
						<li>贴膜膜</li>
					</ul>
				</div>
				<div class="i_center_right">
					<span class="i_phone">4006-630-636</span><br />
					<span class="i_time">每日9:00-21:00</span>
				</div>
			</div>
			<div class="i_header_nav">
				<div class="i_nav_center">
					<div class="i_nav_left">
						<router-link to="/" class="i_serve">首页</router-link>
						<router-link to="/service" class="i_serve">服务</router-link>
						<router-link to="" class="i_serve">商家</router-link>
						<router-link to="/groupon" class="i_serve">团购</router-link>
						<router-link to="" class="i_serve">商城</router-link>
						<router-link to="/forum" class="i_serve">社区</router-link>
					</div>
					<div class="i_nav_right">
						<router-link to="/shop" class="i_cart"> 购物车</router-link>
						<router-link to="" class="i_browse">最近浏览</router-link>
						<router-link to="/mycar/indent" class="i_vehicles">我的车族</router-link>
						<router-link to="/login" class="i_enter">登录</router-link>
						<router-link to="/signin" class="i_enroll">{{this.$store.state.enroll}}</router-link>
						<span class="i_lineA"></span>
						<span class="i_lineB"></span>
						<span class="i_lineC"></span>
						<span class="i_lineD"></span>
					</div>
					<ul class="i_car_list">
						<li class="i_car_A"><img src="../../assets/car-footimage/car.png"/><div><span class="i_car_name">第三代全时数字科技轿车</span><br/><span class="i_money">¥18</span><a href="">删除</a></div></li>
						<li class="i_car_B"><img src="../../assets/car-footimage/car1.png"/><div><span class="i_car_name">第三代全时数字科技轿车</span><span class="i_money">¥18</span><a href="">删除</a></div></li>
						<li class="i_car_C"><img src="../../assets/car-footimage/car2.png"/><div><span class="i_car_name">第三代全时数字科技轿车</span><span class="i_money">¥18</span><a href="">删除</a></div></li>
						<li class="i_car_D"><img src="../../assets/car-footimage/car3.png"/><div><span class="i_car_name">第三代全时数字科技轿车</span><span class="i_money">¥18</span><a href="">删除</a></div></li>
						<li class="i_car_E"><img src="../../assets/car-footimage/car4.png"/><div><span class="i_car_name">第三代全时数字科技轿车</span><span class="i_money">¥18</span><a href="">删除</a></div></li>
						<li class="i_ctrl">
							<span class="i_check">查看我的购物车</span>
						</li>
					</ul>
					<ul class="i_car_listA">
						<li class="i_car_A"><img src="../../assets/car-footimage/car.png"/><div><span class="i_car_name">第三代全时数字科技轿车</span><br/><span class="i_money">¥18</span><span class="i_price">35</span></div></li>
						<li class="i_car_B"><img src="../../assets/car-footimage/car1.png"/><div><span class="i_car_name">第三代全时数字科技轿车</span><span class="i_money">¥18</span><span class="i_price">35</span></div></li>
						<li class="i_car_C"><img src="../../assets/car-footimage/car2.png"/><div><span class="i_car_name">第三代全时数字科技轿车</span><span class="i_money">¥18</span><span class="i_price">35</span></div></li>
						<li class="i_car_D"><img src="../../assets/car-footimage/car3.png"/><div><span class="i_car_name">第三代全时数字科技轿车</span><span class="i_money">¥18</span><span class="i_price">35</span></div></li>
						<li class="i_car_E"><img src="../../assets/car-footimage/car4.png"/><div><span class="i_car_name">第三代全时数字科技轿车</span><span class="i_money">¥18</span><span class="i_price">35</span></div></li>
						<li class="i_ctrl">
							<span class="i_check">清空最近浏览记录</span>
						</li>
					</ul>
					<ul class="i_mycar">
						<li><router-link to="/mycar/indent" class=" route">我的订单</router-link></li>
						<li><router-link to="/mycar/good" class=" route">我的评价</router-link></li>
						<li><router-link to="/mycar/collect" class=" route">我的收藏</router-link></li>
						<li><router-link to="/mycar/surplus" class=" route">车族余额</router-link></li>
						<li><router-link to="/mycar/carry" class=" route">充值/提现</router-link></li>
						<li><router-link to="/mycar/chit" class=" route">代金券</router-link></li>
						<li><router-link to="/mycar/score" class=" route">我的积分</router-link></li>
						<li><router-link to="/mycar/set" class=" route">账户设置</router-link></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
//			el: ".i_left_list",
			name: "maintitle",
			data(){
				return{
					arr: [{
						name: "核心城市",
						cont: ["北京", "上海", "天津", "重庆", "深圳", "济南", "长沙", "武汉"]
					}, {
						name: "重点城市",
						cont: ["保定", "长春", "成都", "大连", "东莞", "鄂州", "福州", "佛山", "贵阳", "哈尔滨", "杭州", "合肥", "呼市", "海口", "嘉兴", "金华", "昆明", "兰州", "廊坊", "南昌", "南京", "南宁", "南通", "宁波", "泉州", "青岛", "沈阳", "石家庄", "绍兴", "苏州", "太原"]
					}],
					beiArr:["北京","上海","天津","重庆","深圳"],
//					beiArr:["北京","A 安徽省(合肥)", "G 甘肃省(兰州)", "H 河北省(石家庄)", "L 辽宁省(沈阳)", "S 四川省(成都)"],
					shangArr:["F 福建省(福州)", "H 河南省(郑州)", "H 黑龙江(哈尔滨)", "N 宁夏(银川)", "S 山西省(太原)"],
					tianArr:["G 广东省(广州)", "H 湖北省(武汉)", "J 江苏省(南京)", "N 内蒙古(呼市)", "Y 云南省(昆明)"],
					chongArr:["G 广西省(南宁)", "H 湖南省(长沙)", "J 江西省(南昌)", "Q 青海省(西宁)", "Z 浙江省(杭州)"],
					shenArr:["G 贵州省(贵阳)", "H 海南省(海口)", "J 吉林省(长春)", "S 山东省(济南)"]
				}
			},
			methods:{
				show:function() {
					var leftList = document.getElementsByClassName("i_left_list")[0];        
					leftList.style.display="block";
				}
			},
			mounted(){
				$(".i_city").click(function() {
					$(".i_left_list").css("display","block");
					$(".province").click(function(){
						$(".i_center_city").css("display","none");
						$(".i_center_province").css("display","block");
						$(".province").css({color:"#fff",textDecoration:"underline"});
						$(".city").css({color:"#21a1fb",textDecoration:"none"})
					});
					$(".city").click(function(){
						$(".i_center_city").css("display","block");
						$(".i_center_province").css("display","none");
						$(".province").css({color:"#21a1fb",textDecoration:"none"});
						$(".city").css({color:"#fff",textDecoration:"underline"})
					});
					$(".close").click(function() {
						$(".i_left_list").css("display","none");
					});
				});
				$(".i_close").click(function() {
					$(".i_banner img,.i_close").css("display","none");
				});
				// 鼠标移入移出
				$(".i_car_list,.i_cart").hover(function(){
					$(".i_cart").addClass("i_hover");
					$(".i_car_list").css("display","block");
				},function() {
					$(".i_cart").removeClass("i_hover");
					$(".i_car_list").css("display","none");
				});
				$(".i_car_listA,.i_browse").hover(function() {
					$(".i_browse").addClass("i_browseHove");
					$(".i_car_listA").css("display","block");
				},function() {
					$(".i_browse").removeClass("i_browseHove");
					$(".i_car_listA").css("display","none");
				});
				$(".i_mycar,.i_vehicles").hover(function() {
					$(".i_vehicles").addClass("iVehicles");
					$(".i_mycar").css("display","block");
				},function() {
					$(".i_vehicles").removeClass("iVehicles");
					$(".i_mycar").css("display","none");
				});
				
				$(".i_nav_left .i_serve").click(function() {
					$(this).css("background-color","#101f4b").siblings().css("background-color","#213f7b");
				});
				$(".i_search").focus(function() {
					$(".i_show_list").css("display","block");
				});
				$(".i_search").blur(function() {
					$(".i_show_list").css("display","none");
				});
				$(".i_mycar .route,.i_vehicles").click(function() {
					$(".i_mycar").css("display","none");
				});
			}
		};

	
</script>
	
<style scoped>
	body,div,ul,li{
		margin: 0;
		padding: 0;
	}
	/*头部上边内容*/
	.i_header_top {
		width: 100%;
		height: 35px;
		background-color: #fcfcfc;
		border-top: 1px solid #213f7b;
		border-bottom: 1px solid #dfdfdf;
		position: relative;
	}
	.i_header_top a {
		font-size: 12px;
		text-decoration: none;
		color: #666666;
		display: inline-block;
		line-height: 11px;
		vertical-align: middle;
		margin-top: 13px;
	}
	.i_header_top .i_favorite,.i_read {
		border-right: 1px solid #666666;
		padding-right: 10px;
		margin-right: 11px;
	}
	.i_header_top a:hover {
		text-decoration: underline;
	}
	.i_list {
		width: 976px;
		margin: 0 auto;
		text-align: right;
	}
	/*头部 banner*/
	.i_banner {
		position: relative;
		width: 976px;
		margin: 0 auto;
	}
	.i_banner img {
		width: 974px;
		height: 68px;
		border: 1px solid #f2e9dc;
		vertical-align: top;
	}
	.i_banner .i_close {
		font-size: 17px;
		color: #fff;
		display: block;
		width: 17px;
		background-color: #213f7b;
		text-align: center;
		border-radius: 50%;
		line-height: 17px;
		transform: rotate(45deg);
		position: absolute;
		top: 1px;
		right: 1px;
	}
	/*头部中间内容*/
	.i_center {
		width: 976px;
		height: 100px;
		margin: 0 auto;
		position: relative;
	}
	.i_center .i_center_left {
		position: absolute;
		left: 0;
		width: 229px;
	}
	/*logo*/
	.i_center .i_logo {
		width: 155px;
		height: 74px;
		/*top: 12px;*/
		margin-top: 15px;
	}
	.i_center .i_address {
		display: inline-blockblock;
		position: absolute;
		left: 172px;
		bottom: 23px;
		font-size: 16px;
	}
	.i_center .i_city {
		position: absolute;
		left: 172px;
		bottom: 3px;
		font-size: 11px;
		text-decoration: none;
	}
	.close{
		font-size: 17px;
		color: #fff;
		display: block;
		width: 17px;
		background-color: #213f7b;
		text-align: center;
		border-radius: 50%;
		line-height: 17px;
		transform: rotate(45deg);
		position: absolute;
		top: 10px;
		right: 13px;
	}
	/* 城市切换 */
	.i_left_list{
		position: absolute;
		top: 90px;
		left: 170px;
		border: 2px solid #213f7b;
		display: inline-block;
		z-index: 100;
		display: none;
	}
	.i_block{
		background-color: #fff;
	}
	.i_block .i_block_top{
		background-color: #2e5497;
		/*height: 34px;*/
	}
	.i_block .i_block_top a:nth-child(1){
		display: inline-block;
		color: #fff;
		font-size: 14px;
		margin: 10px 0 10px 31px;
	}
	.i_block_top a:nth-child(2){
		display: inline-block;
		color: #21a1fb;
		font-size: 14px;
		margin: 10px 0 10px 24px;
		text-decoration: none;
	}
	.i_center_city{
		display: inline-block;
		font-size: 13px;
		
		/*display: none;*/
	}
	.i_centre_city{
		margin: 23px 0 0 30px;
	}
	.i_center_city .i_centre_city a{
		display: inline-block;
		margin-left: 13px;
		text-decoration: none;
		color:#666666;
	}
	.i_center_city .i_centre_city a:nth-child(2){
		margin-left: 27px;
	}
	.i_center_city .i_centre_city a:nth-child(10){
		margin-right: 96px;
	}
	
	.i_main_city{
		margin-left: 30px;
		margin-top: 29px;
		/*border-bottom:1px solid #666666;*/
		padding-bottom: 21px;
	}
	.i_main_city a{
		display: inline-block;
		margin-left: 13px;
		text-decoration: none;
		color: #666666;
		line-height: 28px;
	}
	
	.i_main_city a:nth-child(2){
		margin-left: 27px;
	}
	
	.i_main_city a:nth-child(13),
	.i_main_city a:nth-child(24),
	.i_main_city a:nth-child(35),
	.i_main_city a:nth-child(46)
	{
		margin-left: 83px;
	}
	
	.i_down_cont{
		border-top: 1px solid #666;
	}
	.i_down_cont .i_letter{
		margin-left: 39px;
	}
	.i_down_cont .i_letter a{
		display: inline-block;
		text-decoration: none;
		color: #666;
		width: 19px;
		/*height: 30px;*/
		text-align: center;
		line-height: 30px;
		margin-top: 10px;
		font-size: 11px;
		margin-left: -5px;
	}
	.i_down_cont .i_letter a:nth-child(2){
		background-color: #93ccf8;
	}
	.i_down_cont .i_letter a:hover{
		background-color: #93ccf8;
	}
	.i_down_cont .i_down_city{
		margin-left: 30px;
		margin-top: 12px;
		margin-bottom: 20px;
	}
	.i_down_cont .i_down_city a{
		display: inline-block;
		width: 43px;
		text-decoration: none;
		color: #666;
		text-align: center;
		line-height: 27px;
		margin-left: -5px;
		font-size: 13px;
	}
	.i_down_cont .i_down_city a:nth-child(2){
		background-color: #93ccf8;
	}
	.i_down_cont .i_down_city a:hover{
		background-color: #93ccf8;
	}
	.i_center_province{
		display: none;
	}
	.i_center_province .i_mainCity{
		margin: 25px 0 0 21px;
	}
	.i_center_province .i_mainCity a{
		display: inline-block;
		color: #333333;
		font-size: 14px;
		margin-left: -6px;
	}
	
	.i_center_province .i_mainCity a:nth-child(1){
		margin-right: 100px;
	}
	.i_center_province .i_mainCity a:nth-child(2){
		margin-right: 99px;
	}
	.i_center_province .i_mainCity a:nth-child(3){
		margin-right: 99px;
	}
	.i_center_province .i_mainCity a:nth-child(4){
		margin-right: 92px;
	}
	.i_center_province .i_mainCity a:nth-child(5){
		margin-right: 88px;
	}
	.i_center_province .i_allProvince{
		margin: 22px 0 0 20px;
		/*border-bottom: 1px solid #cacaca;*/
		/*display: flex;*/
		padding-bottom: 25px;
	}
	.i_center_province .i_allProvince a{
		display: inline-block;
		margin-left: -6px;
		width: 110px;
		height: 26px;
		line-height: 26px;
		font-size: 13px;
		color: #333333;
		/*padding: 7px 5px 8px 7px;*/
		margin-right: 15px;
	}
	.i_center_province .i_allProvince a:hover{
		background-color: #5ba9f3;
		color: #fff;
	}
	
	.i_downProvince {
		border-top: 1px solid #cacaca;
	}
	.i_downProvince a:nth-child(1){
		margin-left: 13px;
	}
	.i_downProvince a{
		display: inline-block;
		margin-top: 22px;
		margin-bottom: 22px;
		margin-left: -5px;
		line-height: 26px;
		font-size: 14px;
		text-decoration: none;
		width: 55px;
		/*height: 26px;*/
		text-align: center;
		color: black;
	}
	.i_downProvince a:hover{
		background-color: #5ba9f3;
		color: #fff;
	}
	
	.i_center_search {
		position: absolute;
		left: 0;
		right: 0;
		top: 10px;
		margin-left: 294px;
		z-index: 1000;
		/*text-align: center;*/
	}
	
	.i_center_search a {
		text-decoration: none;
		color: #666666;
		
	}
	.i_audiA {
		font-size: 12px;
	}
	.i_golf,.i_citroen,.i_audi {
		border-right: 1px solid #666666;
		font-size: 12px;
		padding-right: 9px;
		margin-right: 7px;
		line-height: 11px;
		vertical-align: middle;
	}
	.i_control {
		margin-top: 7px;
	}
	.i_search {
		width: 300px;
		height: 37px;
		border: none;
		border: 3px solid #2a4e91;
		/*margin-left: px;*/
		color: #9f9c9c;
		font-size: 12px;
		text-indent: 12px;
	}
	
	.i_btn {
		width: 63px;
		height: 43px;
		background-color: #2a4e91;
		border: none;
		color: #fff;
		font-size: 14px;
		margin-left: -6px;
	}
	
	.i_show_list{
		margin-left: 3px;
		width: 300px;
		height: 268px;
		border-left: 1px solid #c5c5c5;
		border-bottom: 1px solid #c5c5c5;
		border-right: 1px solid #c5c5c5;
		background-color: #fff;
		display: none;
	}
	.i_show_list li{
		list-style: none;
		padding: 7px 0 0 15px;
		font-size: 14px;
	}
	
	.i_center_right {
		position: absolute;
		right: 0;
		top: 30px;
	}
	
	.i_center_right .i_phone {
		font-size: 25px;
		color: #034886;
	}
	
	.i_center_right .i_time {
		font-size: 12px;
		color: #6e6c6c;
		display: inline-block;
		position: absolute;
		right: 0;
		/*top:6 4px;*/
	}
	/*导航条*/
	.i_header_nav {
		position: relative;
		width: 100%;
		margin-top: 5px;
		height: 41px;
		background-color: #213f7b;
		z-index:10;
	}
	.i_nav_center{
		width: 976px;
		margin: 0 auto;
		position: relative;
	}
	.i_nav_left .i_serve:nth-child(1){
		background-color: #101f4b;
	}
	.i_nav_left .i_serve{
		display: inline-block;
		width: 74px;
		height: 41px;
		text-decoration: none;
		color: #fff;
		font-size: 13px;
		line-height: 41px;
		text-align: center;
		margin-left: -4px;
	}
	.i_nav_left .i_serve:hover{
		background-color: #264787;
	}
	/*切三角*/
	.i_trigon{
		display: inline-block;
		width: 0px;
		height: 0px;
		/*border: 5px solid #fff;*/
		border-left: transparent;
		border-top: transparent;
		border-right: 5px solid red;
		border-bottom: 5px solid #fff;
	}
	
	.i_nav_right{
		position: absolute;
		right: 0;
		top: 0;
		z-index: 10;
	}
	.i_nav_right span{
		display: inline-block;
		width: 1px;
		height: 12px;
		background-color: #fff;
	}
	.i_nav_right .i_lineA{
		position: absolute;
		left: 100px;
		top: 15px;
	}
	.i_nav_right .i_lineB{
		position: absolute;
		left: 187px;
		top: 15px;
	}
	.i_nav_right .i_lineC{
		position: absolute;
		left: 260px;
		top: 15px;
	}
	.i_nav_right .i_lineD{
		position: absolute;
		left: 315px;
		top: 15px;
	}
 .i_cart{
 	background:url(../../assets/car-titleimage/s.png) no-repeat;
 	background-position: 11px 14px;
 	color: #fff;
 	text-decoration: none;
 	text-align: center;
 	line-height: 41px;
 	display: inline-block;
 	font-size: 12px;
 	width: 101px;
 	/*height: 41px;*/
 }
 
 .i_hover{
 	color: #22407c;
 	background: url(../../assets/car-titleimage/ss.png) no-repeat;
 	background-position: 11px 14px;
 	background-color: #fff;
 	width: 99px;
 	/*border-top: 1px solid #c5c5c5;*/
 	border-left: 1px solid #c5c5c5;
 	border-right: 1px solid #c5c5c5;
 }
 .i_browse{
 	background: url(../../assets/car-footimage/icon1.png) no-repeat;
 	background-position: 73px 19px;
 	text-decoration: none;
 	margin-left: -7px;
 	display: inline-block;
 	width: 89px;
 	line-height: 41px;
 	color: #fff;
 	font-size: 12px;
 	text-align: center;
 }
 
 .i_browseHove{
 	background: url(../../assets/car-titleimage/sss.png) no-repeat;
 	background-position: 73px 19px;
 	width: 87px;
 	background-color: #fff;
 	border-left: 1px solid #c5c5c5;
 	border-right: 1px solid #c5c5c5;
 	color: #22407c;
 }
 .i_vehicles{
 	display: inline-block;
 	line-height: 41px;
 	color: #fff;
 	font-size: 12px;
 	text-align: center;
 	text-decoration: none;
 	margin-left: -7px;
 	width: 77px;
 }
 .iVehicles{
 	width: 75px;
 	background-color: #fff;
 	border-left: 1px solid #c5c5c5;
 	border-right: 1px solid #c5c5c5;
 	color: #22407c;
 }
 .i_enter{
 	display: inline-block;
 	line-height: 41px;
 	color: #fff;
 	font-size: 12px;
 	text-align: center;
 	text-decoration: none;
 	margin-left: -7px;
 	width: 53px;
 }
	 
	.i_enroll{
		width: 37px;
		text-align: right;
		display: inline-block;
		text-decoration: none;
		line-height: 41px;
		color: #fff;
		font-size: 12px;
	}
	.i_nav_right a img{
		/*margin-top: -10px;*/
		vertical-align: middle;
	}
	.i_car_list{
		width: 219px;
		height: 440px;
		background-color: #fff;
		border: 1px solid #dddddd;
		position: absolute;
		left: 498px;
		top: 39px;
		z-index: 1 !important;
		display: none;
	}
	.i_car_list li{
		list-style: none;
	}
	 .i_car_A,
	 .i_car_B,
	 .i_car_C,
	 .i_car_D,
	 .i_car_E{
		width: 219px;
		height: 75px;
		margin-left: 12px;
	}
	.i_car_list li img{
		vertical-align: top;
	}
	.i_car_list .i_car_A{
		margin-top: 22px;
	}
	.i_car_list li div{
		width: 95px;
		height: 49px;
		float: right;
		margin-top: 0px;
		margin-right: 20px;
	}
	.i_car_list .i_car_name{
		font-size: 12px;	
		display: inline-block;
		line-height: 15px;
	}
	.i_car_list .i_money{
		display: inline-block;
		font-size: 11px;
		color: #ee5238;
	}
	.i_car_list a{
		text-decoration: none;
		color: #005bac;
		font-size: 11px;
		margin-left:40px ;
	}
	.i_car_list .i_ctrl{
		width: 100%;
		text-align: center;
	}
	.i_car_list .i_ctrl .i_check{
		display: inline-block;
		width: 99px;
		line-height: 28px;
		background-color: #005bac;
		font-size:12px;
		color: #fff;
		border-radius: 5px;
		cursor: pointer;
	}
	
	.i_car_listA{
		display: none;
		width: 219px;
		height: 440px;
		background-color: #fff;
		border: 1px solid #dddddd;
		position: absolute;
		left: 586px;
		top: 39px;
		z-index: 1;
	}
	.i_car_listA li{
		list-style: none;
	}
	 .i_car_A,
	 .i_car_B,
	 .i_car_C,
	 .i_car_D,
	 .i_car_E{
		width: 219px;
		height: 75px;
		margin-left: 12px;
	}
	.i_car_listA li img{
		vertical-align: top;
	}
	.i_car_listA .i_car_A{
		margin-top: 22px;
	}
	.i_car_listA li div{
		width: 95px;
		height: 49px;
		float: right;
		margin-top: 0px;
		margin-right: 20px;
	}
	.i_car_listA .i_car_name{
		font-size: 12px;	
		display: inline-block;
		line-height: 15px;
	}
	.i_car_listA .i_money{
		display: inline-block;
		font-size: 11px;
		color: #ee5238;
	}
	.i_car_listA .i_price{
		text-decoration: none;
		color: #666666;
		font-size: 11px;
		margin-left:11px;
		text-decoration: line-through;
	}
	.i_car_listA .i_ctrl{
		width: 100%;
		text-align: center;
	}
	.i_car_listA .i_ctrl .i_check{
		display: inline-block;
		width: 99px;
		line-height: 28px;
		/*background-color: #005bac;*/
		font-size:12px;
		color: #234994;
		border-radius: 5px;
		cursor: pointer;
	}
	
	.i_mycar{
		position: relative;
		width: 75px;
		height: 250px;
		border-left: 1px solid #cfcfcf;
		border-right: 1px solid #cfcfcf;
		border-bottom: 1px solid #cfcfcf;
		background-color: #fff;
		margin-left: 805px;
		text-align: center;
		display: none;
		z-index: 10000;
	}
	.i_mycar li{
		
		padding: 1px 0 1px 0;
		height: 28px;
		list-style: none;
		font-size:12px;
		color: #666666;
		/*margin-left: 16px;*/
		line-height: 30px;
	}
	.i_mycar li:nth-child(1){
		/*padding-top: 10px;*/
	}
	.route{
		text-decoration: none;
		color: black;
	}


</style>