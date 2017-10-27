<template>
	<div id="cont">
		<div id="cont_left">
			<mainmenu id="mainmenu"></mainmenu>
			<mainbanner id="mainbanner"></mainbanner>
			<mainleft></mainleft>
		</div>
		<div id="cont_right">
			<mainright></mainright>
		</div>
	</div>
</template>

<script>
	import Mainmenu from "./内容/Main-menu"
	import Mainbanner from "./内容/Main-banner"
	import Mainright from "./内容/Main-right"
	import Mainleft from "./内容/Main-left"
	
	export default{
		name:"maincont",
		components:{
			Mainmenu,
			Mainbanner,
			Mainright,
			Mainleft
		},
		data(){
			return{
				title:"这是主页的内容"
			}
		}
	}
</script>

<style scoped>
	*{
		padding: 0;
		margin: 0;
	}
	img{
		vertical-align: top;
		
	}
	#mainmenu{
		display: inline-block;
		vertical-align: top;
		margin-top: 10px;
		position: relative;
		z-index: 102;
	}
	#cont{
		width: 976px;
		margin: 0 auto;
	}
	#cont_left{
		width: 722px;
		display: inline-block;
		padding-bottom: 10px;
	}
	#cont_right{
		display: inline-block;
		width: 238px;
		vertical-align: top;
	}
</style>