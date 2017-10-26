<template>
	<div >
		<div class="other">
				<span class="_title">看了本团购用户还看了</span>
				<div class="other_cont">
					<img src="../../assets/car-footimage/car2.png" alt="" />
					<span class="ccont">【2店通用】4.4折!仅1650元享原价3760元汽车顶级贴膜套餐</span><br />
					<span class="act_price">¥81</span><span class="mdj">门店价</span><span class="md_price">¥120</span>
					<button class="look_btn">去看看</button>
				</div>
				<div class="other_cont">
					<img src="../../assets/car-footimage/car2.png" alt="" />
					<span class="ccont">【2店通用】4.4折!仅1650元享原价3760元汽车顶级贴膜套餐</span><br />
					<span class="act_price">¥81</span><span class="mdj">门店价</span><span class="md_price">¥120</span>
					<button class="look_btn">去看看</button>
				</div>
				<div class="other_cont">
					<img src="../../assets/car-footimage/car2.png" alt="" />
					<span class="ccont">【2店通用】4.4折!仅1650元享原价3760元汽车顶级贴膜套餐</span><br />
					<span class="act_price">¥81</span><span class="mdj">门店价</span><span class="md_price">¥120</span>
					<button class="look_btn">去看看</button>
				</div>				
			</div>
	</div>
</template>

<script>
	export default {
		name:"others",
		components:{
			
		},
		data(){
			return{
				
			}
		}
	}
	
</script>

<style scoped>
	div,p,span,a,ul,li,img,button{
		margin: 0;
		padding: 0;
	}
	/*看了本团购用户还看了*/
	.other{
		width: 236px;
		margin-top: 10px;
		background-color: white;
		border: 1px solid #C0C0C0;
		color: #6e6c6c;
	}
	._title{
		color: black;
		display: inline-block;
		width: 236px;
		font-size: 16px;
		text-indent: 14px;
		line-height: 66px;
	}
	.other img{
		display:block;
		width: 210px;
		vertical-align: top;
		margin: 0 auto;
	}
	.ccont{
		display: inline-block;
		font-size: 12px;
		padding-left: 12px;
		padding-right: 12px;
	}
	.act_price{
		padding-left: 12px;
		padding-right: 12px;
		font-size: 14px;
		color: red;
	}
	.mdj{
		font-size: 14px;
		padding-right: 10px;
	}
	.md_price{
		font-size: 10px;
	}
	.look_btn{
		width: 68px;
		height: 26px;
		background-color: #213f7b;
		border-radius:20px;
		border: none;
		color: white;
		margin-left: 25px;
	}
	.other_cont{
		margin-bottom: 33px;
	}
</style>