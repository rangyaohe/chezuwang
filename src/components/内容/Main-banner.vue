<template>
	<div class="cont1">
		<div class="banner">
			<img src="../../assets/car-main-bannerimage/图层 265.png" />
			<img src="../../assets/car-main-bannerimage/bg.png" />
			<img src="../../assets/car-main-bannerimage/图层 265.png" />
			<img src="../../assets/car-main-bannerimage/bg.png" />
		</div>
		<div class="indexs">
			<span></span>
			<span></span>
			<span></span>
			<span></span>
		</div>
	</div>
</template>
<script>
	export default {
		name: "mainMenu",
		data() {
			return {
				i: 0
			}
		},
		methods: {
			banner: function() {
				this.i++;
				var _left = $(".banner").position().left;
				_left -= 529;
				if(this.i >= 4) {
					_left = 0;
					this.i = 0;
				}
//				$(".indexs span").click(function(){
//					var _index = $(this).index();
//					this.i = _index;
//					_left = _index*(-529);
//				})
				$(".indexs span").eq(this.i).css("background", "#1a5190").siblings().css("background", "white");
				$(".banner").css("left", _left);
			}
		},
		mounted() {
			
			setInterval(this.banner, 2000)
		}
	}
</script>
<style scoped>
	div,
	img,
	span {
		margin: 0;
		padding: 0;
	}
	
	.cont1 {
		display: inline-block;
		margin-top: 10px;
		position: relative;
		width: 527px;
		height: 265px;
		margin-left: 4px;
		overflow: hidden;
		font-size: 0;
	}
	
	.banner {
		width: 2216px;
		height: 265px;
		position: absolute;
	}
	
	.banner img {
		width: 529px;
		height: 265px;
	}
	
	.cont1 .indexs {
		position: absolute;
		bottom: 10px;
		right: 10px;
		margin-right: 6px;
		text-align: right;
		width: 100px;
	}
	
	.indexs span {
		display: inline-block;
		width: 8px;
		height: 8px;
		background: white;
		border: 1px solid #a7a7a7;
		border-radius: 50%;
		margin-right: 4px;
	}
	
	.indexs span:nth-child(1) {
		background: #1a5190;
	}
</style>