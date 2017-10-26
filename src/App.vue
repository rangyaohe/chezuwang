<template>
  <div id="cont">
  	<maintitle></maintitle>
  	<div id="app">
		<router-view></router-view>
  	</div>
	<mainfoot></mainfoot>
  </div>
</template>

<script>
import Maintitle from "./components/导航栏/main-title"	
import Mainfoot from "./components/导航栏/main-foot"	
export default {
  name: 'app',
  components: {
	Maintitle,
	Mainfoot
  }
}
</script>
<style scoped>
#cont{
	background: #e9e9e9;
	min-width: 977px;
}
#app {
  /*border: 1px solid black;*/
 
}

</style>
