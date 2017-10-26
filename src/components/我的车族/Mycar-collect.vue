<template>
	<div class="k_gg">
		<div class="k_content">
			<div class="k_content_top">
				<span>全部</span>
				<span>进行中团购</span>
				<span>已结束</span>
			</div>
			<div class="j_nodemo">
				<span>您还没有收藏过呢, 现在可以在详情页直接收藏项目啦!</span><br />
				<img src="../../assets/mycar-image/sssss.png"/>
			</div>
			<table class="k_content_center" cellspacing="0">
				<tr>
					<th>团购项目</th>
					<th>数量</th>
					<th>金额</th>
					<th>订单状态</th>
					<th>操作</th>
				</tr>
				<tr>
					<td class="centerOne"><img src="../../assets/mycar-image/cas.png" /><span>新MiNiCooper无伪装谍照新无伪装谍照伪装谍照伪装谍照</span></td>
					<td>1</td>
					<td>¥30</td>
					<td>进行中</td>
					<td>
						<a href="###">购买</a>
						<a href="###">删除</a>
					</td>
				</tr>
				<tr>
					<td class="centerOne"><img src="../../assets/mycar-image/cas.png" /><span>新MiNiCooper无伪装谍照新无伪装谍照伪装谍照伪装谍照</span></td>
					<td>1</td>
					<td>¥30</td>
					<td>进行中</td>
					<td>
						<a href="###">购买</a>
						<a href="###">删除</a>
					</td>
				</tr>
				<tr>
					<td class="centerOne"><img src="../../assets/mycar-image/cas.png" /><span>新MiNiCooper无伪装谍照新无伪装谍照伪装谍照伪装谍照</span></td>
					<td>1</td>
					<td>¥30</td>
					<td>进行中</td>
					<td>
						<a href="###">购买</a>
						<a href="###">删除</a>
					</td>
				</tr>
				<tr>
					<td class="centerOne"><img src="../../assets/mycar-image/cas.png" /><span>新MiNiCooper无伪装谍照新无伪装谍照伪装谍照伪装谍照</span></td>
					<td>1</td>
					<td>¥30</td>
					<td>进行中</td>
					<td>
						<a href="###">购买</a>
						<a href="###">删除</a>
					</td>
				</tr>
				<tr>
					<td class="centerOne"><img src="../../assets/mycar-image/cas.png" /><span>新MiNiCooper无伪装谍照新无伪装谍照伪装谍照伪装谍照</span></td>
					<td>1</td>
					<td>¥30</td>
					<td>进行中</td>
					<td>
						<a href="###">购买</a>
						<a href="###">删除</a>
					</td>
				</tr>
				<tr>
					<td class="centerOne"><img src="../../assets/mycar-image/cas.png" /><span>新MiNiCooper无伪装谍照新无伪装谍照伪装谍照伪装谍照</span></td>
					<td>1</td>
					<td>¥30</td>
					<td>进行中</td>
					<td>
						<a href="###">购买</a>
						<a href="###">删除</a>
					</td>
				</tr>
			</table>
			
			<div class="j_demo">
				<span>您的收藏中没有进行中的项目</span>
			</div>
		</div>
	</div>
</template>

<script>
//	import './collect.css'
	export default {
		name: "Indent",
		mounted() {
			$(".k_content_center>tr>td:nth-child(5)>a:nth-child(2)").click(function() {
				$(".k_dang").css("display", "block");
			})
			$(".k_delete_top img").click(function() {
				$(".k_dang").css("display", "none");
			});
			$(".details").click(function() {
				$(".k_contentA").css("display", "block");
				$(".k_content").css("display", "none");
			});
			$(".k_content_top span:nth-child(1)").click(function() {
				$(".j_nodemo").css("display","table");
				$(".j_demo").css("display","none");
			});
			$(".k_content_top span:nth-child(3)").click(function() {
				$(".j_nodemo").css("display","none");
				$(".j_demo").css("display","block");
			});
			$(".k_content_top span").click(function() {
				$(this).addClass("click").siblings().removeClass("click");
			})
		}
	}
</script>

<style scoped="scoped">
	.k_gg{
	position: relative;
	width: 977px;
	/*height: 594px;*/
	/*margin-left: 92px;*/
	margin: 0px auto 38px;
	z-index: 2;
}
.k_content {
	position: relative;
	z-index: 2;
	width: 716px;
	height: 555px;
	border: 1px solid #c6c6c6;
	margin-left: -5px;
	margin-top: -1px;
	background-color: #fff;
	/*display: none;*/
}

.k_content .k_content_top {
	margin: 26px auto 10px;
	width: 660px;
	height: 29px;
	border-bottom: 1px solid #dcdcdc;
}

.k_content_top span {
	display: inline-block;
	padding: 3px 10px 2px 8px;
	text-decoration: none;
	color: #1978cf;
	font-size: 11px;
	cursor: pointer;
}
.click{
	background-color: #5a97d4;
	color: #fff !important;
}

/*.k_content_top span:hover {
	background-color: #5a97d4;
	color: #fff;
}*/


.k_content_center{
	width: 658px;
	height: 459px;
	border: 1px solid #e5e5e5;
	margin: 0 auto 0;
	border-collapse: collapse;
	display: none;
}
.k_content_center>tr:nth-child(1){
	background-color: #f7f7f7;
	border-bottom: 1px solid #e5e5e5;
}
.k_content_center>tr:nth-child(2)>td:nth-child(4){
	font-size: 12px;
}
.k_content_center>tr:nth-child(2)>td:nth-child(4)>a{
	text-decoration: none;
	
	color: #1978cf;
}

.k_content_center>tr:nth-child(2)>td:nth-child(5)>a:nth-child(1){
	display:inline-block;
	text-decoration: none;
	margin: 0 auto 0;
	width: 35px;
	/*height: 21px;*/
	line-height: 21px;
	font-size: 12px !important;
	text-align: center;
	color: #fff;
	background-color: #5a97d4;
}
.k_content_center>tr:nth-child(2)>td:nth-child(5)>a:nth-child(2){
	text-decoration: none;
	color: #1978cf;
	font-size: 12px !important;
}

.k_content_center .centerOne {
	width: 279px;
	text-align: left;
}

.k_content_center .centerOne>img {
	margin-left: 12px;
}

.k_content_center .centerOne>span {
	display: inline-block;
	font-size: 12px;
	position: relative;
	top: 8px;
	left: 10px;
	width: 182px;
}
.k_content_center td{
	text-align: center;
}

.k_content_center>tr>td:nth-child(4){
	font-size: 12px;
}
.k_content_center>tr>td:nth-child(4)>a{
	text-decoration: none;
	color: #1978cf;
}

.k_content_center>tr>td:nth-child(5)>a:nth-child(1){
	display:inline-block;
	text-decoration: none;
	margin: 0 auto 0;
	font-size: 12px !important;
	width: 35px;
	/*height: 21px;*/
	line-height: 21px;
	text-align: center;
	color: #fff;
	background-color: #5a97d4;
}
.k_content_center>tr>td:nth-child(5)>a:nth-child(2){
	text-decoration: none;
	font-size: 12px !important;
	color: #1978cf;
}
.k_dang{
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background-color:rgba(0,0,0,0);
	display: none;
}
.k_delete{
	width: 345px;
	height: 182px;
	border: 3px solid #b2b2b3;
	position: absolute;
	top: 163px;
	left: 217px;
	background-color: #fff;
	/*display: none;*/
}
.k_delete .k_delete_top{
	display: inline-block;
	width: 345px;
	line-height: 32px;
	background-color: #213f7b;
	position: relative;
}
.k_delete .k_delete_top span{
	display: inline-block;
	margin-left: 17px;
	font-size: 18px;
	color: #fff;
}
.k_delete .k_delete_top img{
	position: absolute;
	right: 4px;
	top: 4px;
}

.k_delete_cont{
	width: 343px;
	height: 148px;
	border: 1px solid #213f7b;
}
.k_delete_cont img:nth-child(1){
	margin: 30px 0 0 31px;
}
.k_delete_cont img:nth-child(3){
	margin: 26px 0 0 79px;
	cursor: pointer;
}
.k_delete_cont img:nth-child(4){
	margin: 26px 0 0 17px;
	cursor: pointer;
}

.k_contentA{
	position: relative;
	z-index: 2;
	width: 716px;
	border: 1px solid #c6c6c6;
	margin-left: -5px;
	margin-top: -1px;
	background-color: #fff;
	display: none;
}
.k_contentA_top{
	position: relative;
	margin: 26px auto 10px;
	width: 660px;
	height: 38px;
	border-bottom: 1px solid #dcdcdc;
}
.k_contentA_top span:nth-child(1){
	font-size: 24px;
}
.k_contentA_top span:nth-child(2){
	display: inline-block;
	cursor: pointer;
	font-size: 14px;
	color:#1978cf;
	position: absolute;
	right: 0;
	bottom: 7px;
}
.k_contentA_contA{
	width: 660px;
	border: 1px solid #f6e0af;
	height: 83px;
	margin:0 auto 0;
}
.k_contentA_contA span:nth-child(1){
	display: inline-block;
	font-size: 12px;
	font-weight: bolder;
	margin: 10px 0 0 17px;
}
.k_contentA_contA span:nth-child(1) strong{
	color: #dd0000;
	text-decoration: none;
}
.k_contentA_contA span:nth-child(3){
	font-size: 13px;
	margin-left:17px;
}
.k_contentA_contA .payment{
	width: 43px;
	height: 24px;
	border: none;
	border: 1px solid #101F4B;
	background-color: #3b6bb1;
	border-radius: 4px;
	color: #fff;
	font-size: 12px;
	margin: 3px 0 0 17px;
}

.k_contentA_contA .remove{
	font-size: 12px;
	text-decoration: none;
	color: #1978cf;
	display: inline-block;
	position: relative;
	top: 2px;
	left: 5px;
}
.k_contentA_contB{
	width: 660px;
	height: 163px;
	border: 1px solid #d3e9fd;
	margin: 10px auto 85px;
}
.message{
	width: 660px;
	height: 32px;
	background-color: #d3e9fd;
}
.message h4{
	display: inline-block;
	margin:7px 0 0 8px;
	font-size: 14px;
}
.messageA{
	position: relative;
	width: 660px;
	height: 36px;
	background-color: #fff;
}
.messageA span{
	display: inline-block;
	margin:7px 0 0 8px;
	font-size: 12px;
}
.messageA span:nth-child(2){
	display: inline-block;
	/*margin:7px 0 0 8px;*/
	font-size: 12px;
	position: absolute;
	left: 242px;
}
.messageB{
	width: 660px;
	height: 31px;
	background-color: #d3e9fd;
}
.messageB h4{
	display: inline-block;
	margin:7px 0 0 8px;
	font-size: 14px;
}
.messageC{
	position: relative;
}
.messageC span:nth-child(1){
	display: inline-block;
	font-size: 14px;
	margin: 13px 0 0 13px;
}
.messageC span:nth-child(2){
	display: inline-block;
	font-size: 14px;
	margin-left: 350px;
}
.messageC span:nth-child(2) em{
	font-style: normal;
}
.messageC span:nth-child(2) em:nth-child(1),em:nth-child(2){
	display: inline-block;
	margin-right: 45px;
}
.messageC a{
	text-decoration: none;
	color: #339999;
	font-size: 12px;
	display: inline-block;
	margin-left: 13px;
}
.messageC .money{
	font-size: 9px;
	margin-left: 278px;
	margin-right: 10px;
}
.messageC .ride{
	font-size: 9px;
	margin-right: 27px;
}
.messageC .count{
	font-size: 9px;
	margin-right: 25px;
}
.messageC .equal️{
	font-size: 9px;
	margin-right: 30px;
}
.messageC .value{
	font-size: 9px;
	color: #cc3333;
}

.j_demo{
	width: 658px;
	margin: 0 auto 0;
	display: none;
}
.j_nodemo{
	width: 658px;
	margin: 0 auto 0;
}
.j_nodemo span{
	font-size: 14px;
	color: #535455;
}
.j_nodemo img{
	margin: 15px 0 0 59px;
}
.j_demo span{
	font-size: 14px;
	color: #535455;
}
</style>