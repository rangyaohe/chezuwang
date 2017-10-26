<template>
	<!--服务组件内容-->
	<div class="b_zjp_servicecont_wrap">
		<!--1-->
		<div class="b_zjp_servicecont">
			<a href="###" class="detial">
				<img src="../../assets/hairdress-image/bmw.jpg" alt="" />
				<span class="title">【二店通用】和平里4s店</span>
				<span class="cont">车族价99元 3.3折！享原价298元电离子素釉全车漆面封釉施工服务，包含轮毂</span>
			</a>
			<img src="../../assets/hairdress-image/z_bg1.png" class="_price"/>
			<span class="act_price">¥1280</span><br />
			<span class="mendianjia">门店价:</span>
			<span class="md_price">¥5237</span><br />
			<a href="###" class="state">去看看</a>
			<span class="per_num">4567<span class="per_text">人已购买</span></span>			
		</div>
		<!--2-->
		<div class="b_zjp_servicecont">
			<a href="###" class="detial">
				<img src="../../assets/hairdress-image/bmw.jpg" alt="" />
				<span class="title">【二店通用】和平里4s店</span>
				<span class="cont">车族价99元 3.3折！享原价298元电离子素釉全车漆面封釉施工服务，包含轮毂</span>
			</a>
			<img src="../../assets/hairdress-image/z_bg1.png" class="_price"/>
			<span class="act_price">¥1280</span><br />
			<span class="mendianjia">门店价:</span>
			<span class="md_price">¥5237</span><br />
			<a href="###" class="state">去看看</a>
			<span class="per_num">4567<span class="per_text">人已购买</span></span>			
		</div>
		
		<!--3-->
		<div class="b_zjp_servicecont">
			<a href="###" class="detial">
				<img src="../../assets/hairdress-image/bmw.jpg" alt="" />
				<span class="title">【二店通用】和平里4s店</span>
				<span class="cont">车族价99元 3.3折！享原价298元电离子素釉全车漆面封釉施工服务，包含轮毂</span>
			</a>
			<img src="../../assets/hairdress-image/z_bg1.png" class="_price"/>
			<span class="act_price">¥1280</span><br />
			<span class="mendianjia">门店价:</span>
			<span class="md_price">¥5237</span><br />
			<a href="###" class="state">去看看</a>
			<span class="per_num">4567<span class="per_text">人已购买</span></span>			
		</div>
	</div>
	
</template>

<script>
	export default{
		name:"hairdresser",
		components:{
		},
		data(){
			return{}
		},
		mounted(){
		}
	}
</script>

<style scoped>
	.b_zjp_servicecont_wrap{
		width: 718px;
		background-color: lightblue;
	}
	.b_zjp_servicecont{
		float: left;
		width:322px;
		height: 334px;
		border: 1px solid #C5C5C5;
		padding: 11px;
		margin-top: 12px;
	}
	.b_zjp_servicecont:nth-child(odd){
		margin-right: 13px;
	}
	.b_zjp_servicecont:nth-child(even){
		
		margin-left: 13px;
	}
	.b_zjp_servicecont a{
		text-decoration: none;
	}
	.b_zjp_servicecont .detial img{
		width: 320px;
		height: 179px;
		display: block;
		font-size: 0;
		vertical-align: top;
	}
	.b_zjp_servicecont a span{
		display: block;
		
	}
	.b_zjp_servicecont a span:nth-child(2){
		color: #282828;
		font-size: 18px;
		line-height: 28px;
		text-indent: -0.65em;
	}
	.b_zjp_servicecont a span:nth-child(3){
		color: #666666;
		font-size: 16px;
		line-height: 24px;
		font-weight: 100;
	}
	._price{
		margin-left: -20px;
		font-size: 0;
		vertical-align: top;
	}
	.act_price{
		font-size: 29px;
		color: red;
		position: relative;
		right: 215px;
		top: 20px;
		font-weight: 500;
	}
	.mendianjia{
		font-size: 14px;
		color: #989c9c;
		position: relative;
		left: 100px;
		bottom: 40px;
	}
	.md_price{
		font-size: 12px;
		color: #989c9c;
		position: relative;
		left: 100px;
		bottom: 40.5px;
		font-weight: 500;
	}
	.state{
		display: inline-block;
		width: 90px;
		height: 32px;
		background: url(../../assets/hairdress-image/z_bg21.png) no-repeat;
		background-size: 100%;
		color: white;
		font-size: 16px;
		text-align: center;
		padding-top:5px;
		position: relative;
		bottom: 75px;
		left: 218px;
		border-radius: 20px;
	}
	.state:hover{
		text-decoration: underline;
	}
	.per_num{
		position: relative;
		bottom: 40px;
		left: 120px;
		font-size: 13px;
		color: red;
	}
	.per_num .per_text{
		color: #5b5b5b;
	}
</style>