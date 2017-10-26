<template>
<div class="wrop">
	<!--左边部分-->
	<div class="cont">
		<shoptitle></shoptitle>
		<div class="cont_msg">
			<h4>项目名称及数量</h4>
			<span><span class="hot"></span>立水桥4s店&nbsp;-1张,赠送食品优惠劵,节假日通用</span><br />
			<span><span class="hot"></span>团购成功后送一个大众甲壳虫+观后镜+清洁液+一年保养,去商家消费</span><br />
			<span class="site">商品类型:花园店*1</span>
		</div>
		<div class="phone_mt">
			<span>接收美团劵密码的手机号:</span><br />
			<span>1860****559,凭车组券密码去商家消费</span>
		</div>
		<div class="recover">
			<h3>应付总额<span>¥30.00</span></h3>
			<div class="recover_cont">
				<h5><span></span>网上银行支付</h5>
				<div class="bank_show">
					<input type="radio" class="check" name="one"/>
					<img :src="imgurl"/>
					<span>其他付款方式<span class="down"></span></span>
				</div>
				<!--隐藏的支付方式-->
				<div class="bank_hide">
					<!--网上银行-->
					<div class="bank_hide_inbank">
						<div class="bank_hide_one" v-for="imgurl in 17">
							<input type="radio" class="check" name="one"/>
							<img src="../../../static/工商银行.png"/>
						</div>
						<div class="bank_hide_one"></div>
					</div>
					<h5><span></span>信用卡支付</h5>					
					<!--信用卡支付-->
					<div class="card_bank">
						<div class="bank_hide_one" v-for="imgurl in 7">
							<input type="radio" class="check" name="one"/>
							<img src="../../../static/工商银行.png"/>
						</div>
					</div>
					<h5><span></span>支付宝/财付通支付</h5>
					<!--支付宝或财付通支付-->
					<div class="qq_back">
						<div class="bank_hide_one" v-for="imgurl in 2">
							<input type="radio" class="check" name="one"/>
							<img src="../../../static/工商银行.png"/>
						</div>
						<div class="bank_hide_one"></div>
					</div>
				</div>
			</div>
		</div>
		<!--支付按钮和上边的字-->
		<div class="btn_cont">
			<span>支付<span class="btn_cont_red">¥30</span></span><br />
			<button class="gave_rmb">去付款</button>
		</div>
	</div>
	<!--右边部分-->
	<div class="rmb_right">
		<shopright></shopright>
	</div>
	<!--提示窗口-->
	<div class="alertDiv">
		<div class="alert_cont">
			<div class="alert_title">
				<span class="remove_w"><span class="remove">+</span></span>
			</div>
			<div class="alert_worp">
				<h3>请您在新打开的页面上完成付款</h3>
				<p>付款完成前请不要关闭此窗口<br/>完成付款后请根据您的情况点击下面的按钮:</p>
				<button class="succeed">已完成付款</button><button class="no_succeed">付款遇到问题</button><br />
				<a href=""><<&nbsp;回选择其他付款方式</a>
			</div>
		</div>
	</div>
</div>
</template>

<script>
	import Shoptitle from "./Car-shop-title"
	import Shopright from "./Car-shop-right"
	export default{
		name:"Rmbway",
		components:{
			Shoptitle,
			Shopright,
		},
		data(){
			return{
				imgurl:"../../../static/工商银行.png"
			}
		},
		mounted(){
			$(".bank_show span").click(function(){
				$(this).css("display","none")
				$(".bank_hide").css("display","block");
			});
			$(".remove_w").click(function(){
				$(this).parents(".alertDiv").css("display","none")
			});
			$(".gave_rmb").click(function(){
				$(".alertDiv").css("display","block")
			})
		}
	}
</script>
<style scoped>
*{padding: 0;margin: 0;}
.wrop{
	width: 980px;
	margin:10px auto 0;
	position: relative;
}
.cont{
	/*height: 576px;*/
	width: 660px;
	background: white;
	padding: 0 28px;
	border: 1px solid #c7c7c7;
	margin-bottom: 50px;
	padding-bottom: 45px;
}
.cont_msg{
	font-size: 12px;
	padding-top: 34px;
}
.cont_msg h4{
	font-size:12px ;
	line-height: 22px;
}
.cont_msg .hot{
	display: inline-block;
	height: 4px;
	width: 4px;
	background: #c4c4c4;
	margin-right: 9px;
	margin-left: 18px;
	vertical-align: middle;
}
.cont_msg span{
	line-height: 28px;
}
.cont_msg .site{
	color: #87888a;
	margin-left: 30px;
}
.phone_mt{
	margin-top: 12px;
}
.phone_mt span{
	line-height: 18px;
	font-size: 12px;
}
.phone_mt span:nth-child(1){
	font-weight: 800;
}
.recover h3{
	padding-top: 25px;
	line-height: 47px;
	font-size: 14px;
}
.recover h3 span{
	color: #dc0404;
	margin-left: 9px;
}
/*灰色的那个块*/
.recover_cont{
	background: #f7f7f7;
	/*height: 100px;*/
	padding-bottom: 15px;
	padding-left: 21px;
}
.recover_cont h5{
	font-size: 14px;
	line-height: 42px;
	padding-top: 10px;
}
.recover_cont h5 span{
	display: inline-block;
	height: 3px;
	width: 3px;
	border-top: 3px solid #959595;
	border-right: 3px solid #959595;
	transform: rotate(-45deg);
	/*margin-left: 22px;*/
	margin-right: 8px;
}
.recover_cont .down{
	height: 0;
	width: 0;
	border: 5px solid transparent;
	border-top: 5px solid #3d76d6;
	position: relative;
	top: 3px;
	left: -5px;
}
/*最开始显示的部分*/
.bank_show{
	height: 34px;
}
.check{
	vertical-align: top;
	margin-top: 10px;
}
.bank_show span{
	display: inline-block;
	line-height: 34px;
	position: relative;
	top: -10px;	
	color: #3d76d6;
	font-size: 12px;
	margin-left: 12px;
	cursor: pointer;
}
/*隐藏的部分*/
.bank_hide{
	display: none;
}
.bank_hide_inbank,.card_bank,.qq_back{
	width: 557px;
	display: flex;
	flex-wrap:wrap ;
	justify-content: space-between;
	align-content: space-between;
	margin-top: 10px;
}
.bank_hide_inbank{
	height: 254px;
}
/*信用卡支付*/
.card_bank{
	height: 122px;
}
/*支付宝*/
.qq_back{
	height: 42;
}
.bank_hide_one{
	height: 34px;
	width: 165px;
}

.btn_cont{
	text-align: right;
}
.btn_cont span{
	line-height: 50px;
	font-size: 14px;
}
.btn_cont .btn_cont_red{
	color: #dc0404;
	font-size: 12px;
}
.btn_cont button{
	background: #3b6bb1;
	width: 96px;
	line-height: 42px;
	color: white;
	font-size: 14px;
	border-radius: 3px;
}
.rmb_right{
	width: 238px;
	position: absolute;
	top: 0;
	right: 0;
}
/*弹窗*/
.alertDiv{
	position: fixed;
	background: rgba(191,191,191,0.5);
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	display: none;
	z-index: 10000;
}
.alertDiv .alert_cont{
	height: 287px;
	width: 320px;
	border: 3px solid #a4a4a5;
	background: white;
	margin: 474px auto 0;
}
.alert_cont .alert_title{
	height: 32px;
	background: #213f7b;
	text-align: right;
}
.alert_title span{
	display: block;
	background: #193166;
	color: white;
	line-height: 28px;
	width: 28px;
	text-align: center;
	cursor: pointer;
}
.remove_w{
	margin-left: 290px;
}
.remove{
	transform: rotate(45deg);
	border-radius: 50%;
}
.alert_worp{
	padding-left:20px ;
}
.alert_worp h3{
	line-height: 22px;
	width: 149px;
	font-size: 14px;
	padding:27px 0 25px 80px;
	background: url(../../assets/car-shop/感叹号.png) no-repeat;
	background-size: 55px 55px ;
	background-position: 0 20px;
}
.alert_worp p{
	font-size: 14px;
	line-height: 18px;
	margin-bottom: 18px;
}
/*已完成付款和失败的按钮*/
.succeed,.no_succeed{
	background: #315aac;
	border-radius: 2px;
	text-align: center;
	line-height: 35px;
	color: white;
	width: 113px;
	border: 0;
}
.succeed{
	margin-right: 18px;
}
.alert_worp a{
	font-size: 14px;
	color: #0aa0df;
	line-height: 46px;
	text-decoration: none;
}
</style>