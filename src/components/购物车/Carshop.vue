<template>
	<div class="cont">
		<shopcar></shopcar>
		<rmbway></rmbway>
		<shopfoot class="shopfoot"></shopfoot>
	</div>
</template>
<script>
import Shopfoot from "./Shop-foot"
import Rmbway from "./Rmb-way"
import Shopcar from "./Car-shop-one"


	export default{
		name:"Carshop",
		components:{
			Shopfoot,
			Rmbway,
			Shopcar
		}
	}
</script>

<style scoped>
	.shopfoot{
		/*display: none;*/
	}
</style>