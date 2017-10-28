<template>
	<div class="cont1">
		<swiper :options="swiperOption" ref="mySwiper">
			<!-- slides -->
			<swiper-slide><img src="../../assets/car-main-bannerimage/图层 265.png" /></swiper-slide>
			<swiper-slide><img src="../../assets/car-main-bannerimage/bg.png" /></swiper-slide>
			<!-- Optional controls -->
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
	</div>
</template>
<script>
	import "../../assets/swiper.min.css"
	export default {
		name: "mainMenu",
		data() {
			return {
				swiperOption: {
					autoplay: 3000,
					direction: 'horizontal',
					grabCursor: true,
					autoHeight: true,
					pagination: '.swiper-pagination', //小圆点
					paginationClickable: true,
					observeParents: true,
					loop: true
				}
			}
		},
		methods: {},
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
	img {
		width: 529px;
		height: 265px;
	}
</style>