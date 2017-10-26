<template>
	<!--服务详情页-->
	<div class="c_zjp_serviceDetailPage_wrap">
		<!--service-sort-->
		<div class="service_sort">
			<a href="">汽车美容</a>
			<span>>></span>
			<a href="">整车美容</a>
			<span>>></span>
			<a href="">美容养护套餐</a>
			<span>>></span>
			<span>爱义行</span>
		</div>
		<!--右-->
		<div class="right_wrap">
			<hotandluck></hotandluck>
			<others></others>
		</div>
		<!--服务详情左-->
		<div class="c_c_wrap">
			<div class="c_zjp_sdpl_wrap">
				<span>普利司通清洁</span><br />
				<span>【朝阳北路】仅88元！即可享受100%无接触汽车清洁套餐！项目含MOC无接触洗车液+MOC水晶甲衣镀膜+仪表台清洁上光+内饰清洁</span><br />
				<img class="bp" src="../assets/hairdress-image/z_bg1.png" alt="" />
				<span class="act_price">¥1280</span><br />
			<span class="mendianjia">门店价:</span>
			<span class="md_price">¥5237</span><br />
			<span class="zhekou">4折</span>
				<img class="car_pic" src="../assets/car-main-leftimage/57345d466c0241463049542.jpg"/>
				<div class="buying">
					<div class="qg">
						<a href="###" class="qg_qg">抢购</a>
						<a href="###" class="gw_car">加入购物车</a>
					</div>
					<div class="per_num">
						<span class="num">35</span>人已购买<br />
						<span class="time">剩余3天以上</span>
					</div>
					<ul class="refund">
						<li class="rl">
							<img src="../assets/car-service-image/clock.png" alt="" /><br />
							<span>支持7天退款</span>
						</li>
						<li class="rr">
							<img src="../assets/car-service-image/rmb.png" alt="" /><br />
							<span>支持过期退款</span>
						</li>
					</ul>
				</div>
				
			</div>
			<!--收藏-->
			<div class="collect">
				<a href="" class="collect_"><img src="../assets/car-service-image/car_icon.png" alt="" /><span> 收藏本单</span></a>
				<span class="share">分享:</span>
				<a href=""><img src="../assets/car-service-image/db.png" alt="" /></a>
				<a href=""><img src="../assets/car-service-image/qq.png" alt="" /></a>
				<a href=""><img src="../assets/car-service-image/qqkj.png" alt="" /></a>
				<a href=""><img src="../assets/car-service-image/star.png" alt="" /></a>
				<a href=""><img src="../assets/car-service-image/tb.png" alt="" /></a>
				<a href=""><img src="../assets/car-service-image/wb.png" alt="" /></a>
			</div>
			<!--评分-->
			<div class="grade">
				<span>会员评分:</span>
				<span class="g_num">4.7</span>
				<span><img src="../assets/car-service-image/sstar.png"/></span>
				<span class="pj_num">已有<span>3</span>人评价</span>
				<a href="">查看全部评价</a>
			</div>
			<!--详细情况-->
			<div class="d_detail_wrap">
				<div class="sort">
					<a href="#store_adderss">商家位置</a><a href="#bill">本单详情</a><a href="#appraise">消费评价</a><a href="" class="ask">我要提问 (<span>10</span>条)</a>
				</div>
				<div class="banner"></div>				
				<div id="store_adderss">商家位置</div>
				<div class="wwwrap">
					<div class="both">
						<div class="map">
						<img src="../assets/car-service-image/mmap.png"/>
					</div>
					<div class="address_text">
						<div class="this_text">
							<span class="this_store">2店通用(太平洋店)</span>
							<span class="rank">商家等级: ⭐⭐⭐⭐⭐  3.5星</span>
							<span class="addr">地址:丰台区个房间打开过积分抵扣</span>
							<span class="phone">010-123456456</span>
							<a href="" class="look_map">查看地图>></a><a href="" class="path">驾车路线>></a>
						</div>
						<span class="others">4S店通用(立水桥店)</span>
						<span class="others">门店通用(北苑店)</span>
					</div>
					</div>
				</div>
				<div id="bill">本单详情</div>
				<div class="bill_detail">
					<img src="../assets/car-service-image/bbbjjj.png"/>
				</div>
				<div id="appraise">消费评价</div>
				<div class="C_evaluation">
					<h2>这是评价内容</h2>
					<!--<div id="appraise">全部评价</div>-->
				</div>
			</div>
			<div class="interst">
				<a href="###" style="display: block;">
					<img src="../assets/car-service-image/interest.png"/>
				</a>
			</div>
			<div class="car_talk">
				<img src="../assets/car-service-image/car_talk.png" class="ct"/>
			</div>
		</div>
	</div>
</template>

<script>
	import Hotandluck from "./内容/Hot_and_luck"
	import Others from "./服务/Others"
	export default{
		name:"detail",
		components:{
			Hotandluck,
			Others
		},
		data(){
			return{}
		},
		mounted(){
			$("h1").click(function(){
				alert("1")
			})
		}
	}
</script>

<style scoped>
	div,ul,li,a,span,img{
		margin: 0;
		padding: 0;
	}
	.c_zjp_serviceDetailPage_wrap{
		width:977px;
		margin: 0 auto;
		background-color: lavender;
	}
	.service_sort{
		width: 975px;
		border: 1px solid #C5C5C5;
		padding-bottom: 8px;
		padding-top: 14px;
		font-size: 12px;
		text-indent: 0.8em;
		margin-top: 10px;
		
	}
	.service_sort a{
		text-decoration: none;
		color: #000000;
	}
	.service_sort a:hover{
		text-decoration: underline;
		color: #096edf;
	}
	.service_sort span:last-child{
		color: #096edf;
	}
	.c_c_wrap{
		width: 717px;
		background-color: white;
	}
	.c_zjp_sdpl_wrap{
		width: 685px;
		height: 365px;
		border: 1px solid #C5C5C5;
		margin-top: 10px;
		padding:0 15px;
		padding-top: 33px;
				
	}
	.c_zjp_sdpl_wrap span:nth-child(1){
		font-size: 28px;
		font-weight: 500;
	}
	.bp{
		width: 250px;
		height: 70px;
		position: relative;
		top: px;
		right: 26px;
		z-index: 1;
	}
	.act_price{
		font-size: 29px;
		color: red;
		position: relative;
		right: 245px;
		top: 18px;
		font-weight: 500;
		z-index: 1;
	}
	.mendianjia{
		font-size: 14px;
		color: #989c9c;
		position: relative;
		left: 100px;
		bottom: 40px;
		z-index: 1;
	}
	.md_price{
		font-size: 12px;
		color: #989c9c;
		position: relative;
		left: 100px;
		bottom: 40.5px;
		font-weight: 500;
		z-index: 1;
	}
	.zhekou{
		display: inline-block;
		background: url(../assets/car-service-image/dico_f.png) no-repeat center;
		background-size: 100%;
		width: 51px;
		height: 26px;
		font-size: 12px;
		padding-top: 4px;
		text-align: center;
		color: white;
		position: relative;
		bottom: 95px;
		left: 120px;
		z-index: 1;
	}
	.car_pic{
		width: 457px;
		height: 255px;
		position: relative;
		left: 171px;
		bottom: 86px;
		
	}
	.buying{
		width: 213px;
		height: 200px;
		border: 1px solid #C5C5C5;
		background-color: #eeeeee;
		position: relative;
		bottom: 288px;
	}
	.qg,.per_num{
		width: 213px;
		height: 75px;
		border-bottom: 1px solid #C5C5C5;
	}
	.gw_car,.qg_qg{
		display: inline-block;
		text-align: center;
		position: relative;
		padding-top: 10px;
		text-decoration: none;
	}
	.gw_car:hover,.qg_qg:hover{
		text-decoration: underline;
	}
	.qg_qg{
		width: 88px;
		height: 31px;
		background-color: #213f7b;
		border-radius:3px;
		color: white;
		font-size: 16px;
		top: 20px;
		left: 12px;
	}
	.gw_car{	
		width: 77px;
		height: 28px;
		background: url(../assets/car-service-image/jg.png) no-repeat;
		font-size: 12px;	
		padding-left: 14px;
		top: 18px;
		left: 17px;
		color: #666666;
	}
	.per_num{
		height: 48px;
		padding-top: 14px;
		line-height: 19px;
		border-top: 1px solid white ;
	}
	.num{
		color: red;
		font-size: 14px !important;
		margin-left: 72px;
		
	}
	.time{
		font-size: 12px;
		margin-left: 80px;
	}
	/*退款*/
	.refund{
		height: 61px;
		width: 213px;
		border-top: 1px solid white;
		list-style: none;
		font-size: 12px;
	}
	.refund li{
		float: left;
		height: 61px;
		width: 105px;
		text-align: center;
	}
	.refund li img{
		margin-top: 10px;
	}
	.rl{
		border-right:1px solid #C5C5C5;
	}
	.rr{
		border-left:1px solid white;
	}
	.rr img{
		width: 24px;
		position: relative;
		top: 4px;
		margin-bottom: 4px;
	}
	.collect{
		width: 715px;
		border: 1px solid #C5C5C5;
		border-top: none;
		background-color:#f4f4f4;
		padding-top: 12px;
		padding-bottom: 12px;
		 
	}
	.collect a:nth-child(1){
		margin-left: 16px;
		text-decoration: none;
		color: #000;
		font-size: 12px;
		margin-top: 10px;
	}
	.collect a img{
		vertical-align: middle;
	}
	.share{
		font-size: 12px;
		margin-left: 450px;
	}
	.collect_:hover span{
		text-decoration: underline;
	}
	.grade{
		width: 715px;
		margin-top: 10px;
		border: 1px solid #C5C5C5;
		font-size: 14px;
		padding: 22px 0;
		text-indent: 1em;
	}
	.grade a{
		text-decoration: none;
		margin-left: 272px;
		color: #1b4fb7;
	}
	.grade a:hover{
		text-decoration: underline;
	}
	.grade img{
		vertical-align: middle;
	}
	.grade .g_num{
		margin-left: 36px;
		font-size: 18px;
		color: red;
	}
	.grade .pj_num{
		margin-left: 30px;
	}
	/*详细情况*/
	.d_detail_wrap{
		width: 715px;
		border: 1px solid #C5C5C5;
		margin-top: 10px;
	}
	.sort{
		width: 715px;
		padding: 0;
		border-bottom: 1px solid #C5C5C5;
	}
	.sort a{
		text-decoration: none;
		color: black;
		display: inline-block;
		font-size: 12px;
		padding:12px 16px ;
		border-right: 1px solid #C5C5C5;
	}
	.sort .ask{
		color: #1b4fb7;
	}
	.sort a:hover{
		color:  #1b4fb7;
		text-decoration: underline;
	}
	.banner{
		width: 684px;
		height: 65px;
		margin: 0 auto;
		margin-top: 10px;
		background: url(../assets/car-service-image/banner.png) no-repeat;
	}
	.both{
		width: 644px;
		height: 255px;
		margin-top: 20px;
		margin-left: 15px;
	}
	.map{
		width: 312px;
		height: 255px;
		float: left;
	}
	.address_text{
		width: 312px;
		height: 252px;
		float: right;
		border: 1px solid #C5C5C5;
		border-left:none ;
		border-right: none;
	}
	.this_text{
		height: 174px;
		width: 312px;
		background-color: #FFFFFF;
	}
	.address_text span{
		display: block;
		text-indent: .5em;
	}
	.this_store,.others{
		background-color: #fafafa;
		font-size: 15px;
		line-height: 38px;
		color: #1b4fb7;
	}
	.others{
		border-top: 1px solid #C0C0C0; 
	}
	.rank,.phone,.addr{
		font-size: 12px;
		line-height: 28px;
	}
	.look_map,.path{
		font-size: 12px;
		text-decoration: none;
		color:#1b4fb7;
		margin-left: 8px;
		padding-bottom: 40px;	
	}
	.wwwrap{
		width: 670px;
		height: 293px;
		margin-left:15px;
		background-color:#fafafa;
		border-bottom: 1px solid #C5C5C5;
	}
	#store_adderss,#bill,#appraise{
		width: 684px;
		margin: 0 auto;
		color: white;
		font-size: 16px;
		background-color: #3071b9;
		margin-top: 10px;
		text-indent: 1em;
		padding: 10px 0;
	}
	.bill_detail,.C_evaluation,.interst,.car_talk{
		width: 684px;
		margin: 0 auto;
		margin-top: 15px;
		background-color: lightblue;
	}
	.car_talk,.interst{
		width: 717px;
	}
	.car_talk{
		margin-bottom: 26px;
	}
	.right_wrap{
		width: 239px;
		float: right;
	}
</style>