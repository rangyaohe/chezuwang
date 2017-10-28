<!--无用的组件-->
<template>
	<div class="ddddd">
		<swiper :options="swiperOption" ref="mySwiper">
	    <!-- slides -->
		    <swiper-slide>I'm Slide 1</swiper-slide>
		    <swiper-slide>I'm Slide 2</swiper-slide>
		    <swiper-slide>I'm Slide 3</swiper-slide>
		    <swiper-slide>I'm Slide 4</swiper-slide>
		    <swiper-slide>I'm Slide 5</swiper-slide>
		    <swiper-slide>I'm Slide 6</swiper-slide>
		    <swiper-slide>I'm Slide 7</swiper-slide>
		    <!-- Optional controls -->
		    <div class="swiper-pagination"  slot="pagination"></div>//
 		 </swiper>
	</div>
</template>

<script>
	// swiper options example:
	import "../assets/swiper.min.css"
  export default {
    name: 'carrousel',
    data() {
      return {
        swiperOption: {
         autoplay: 3000,
          direction : 'horizontal',
          grabCursor : true,
          setWrapperSize :true,
          autoHeight: true,
          pagination : '.swiper-pagination',//小圆点
          paginationClickable :true,
          mousewheelControl : true,
          observeParents:true,
        		loop:true
        }
      }
    },
 
  }
</script>

<style scoped>
	.swiper-slide{
		background: red;
		height: 50px;
		width: 50px;
	}
</style>