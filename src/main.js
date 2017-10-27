import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

import Maincont from './components/Main-cont'
//import Maintitle from './components/导航栏/Main-title'
//import Mainfoot from './components/导航栏/Main-foot'
import Keyt from './components/导航栏/Key-t'
import Keyd from './components/导航栏/Key-d'
import Keyq from './components/导航栏/Key-q'
import Keya from './components/导航栏/Key-a'
import Keys from './components/导航栏/Key-s'
//服务
import Service from './components/导航栏/Service'
import Groupon from './components/导航栏/Groupon'
import Forum from './components/导航栏/Forum'
//注册
import Signin from './components/注册/Signin'
//找回密码
import Find from './components/登录/Find'
//详情
import Hairdressing from './components/服务/Hairdressing'
import Detail from './components/Detail'
//登录
import Login from './components/登录/Login'
import $ from "jquery"
//购物车
import Carshop from "./components/购物车/Carshop"
//购买成功
import Success from "./components/购物车/Success"
import Mycar from './components/我的车族/mycar'
import Good from './components/我的车族/Mycar-good'
import Collect from './components/我的车族/Mycar-collect'
import Surplus from './components/我的车族/Mycar-surplus'
import Carry from './components/我的车族/Mycar-carry'
import Chit from './components/我的车族/Mycar-chit'
import Score from './components/我的车族/Mycar-score'
import Set from './components/我的车族/Mycar-set'
import Indent from './components/我的车族/Mycar-indent'
// 商家
import Merchant from './components/商家/Merchant'
Vue.use(VueRouter)
Vue.config.productionTip = false

//设置路由
const router = new VueRouter({
	mode: "history",
	base: __dirname,
	routes: [{
			path: "/",
			component: Maincont
		},
		{
			path: "/keyd",
			component: Keyd
		},
		{
			path: "/keyt",
			component: Keyt
		},
		{
			path: "/keyq",
			component: Keyq
		},
		{
			path: "/keya",
			component: Keya
		},
		{
			path: "/keys",
			component: Keys
		},
		//服务
		{
			path: "/service",
			component: Service
		},
		{
			path: "/groupon",
			component: Groupon
		},
		{
			path: "/forum",
			component: Forum
		},
		//服务下面的二级路由
		{
			path: "/service",
			component: Service,
			children: [{
				path: "/service/hairdressing",
				component: Hairdressing
			}]
		},
		// 商家
		{
			path:'/merchant',
			component:Merchant
		},
		//详情页
		{
			path: "/detail",
			component: Detail
		},
		//登录
		{
			path:"/login",
			component:Login
		},
		//注册
		{
			path:"/Signin",
			component:Signin
		},
		//找回密码
		{
			path:"/Find",
			component:Find
		},
		// 我的车族
		{
			path:"/mycar",
			component:Mycar,
			//二级路由
			children:[
			// 我的订单
			{
				path:'/mycar/indent',
				component:Indent
			},
			// 我的评价
			{
				path:'/mycar/good',
				component:Good
			},
			// 我的收藏
			{
				path:'/mycar/collect',
				component:Collect
			},
			// 车组余额
			{
				path:'/mycar/surplus',
				component:Surplus
			},
			// 充值/提现
			{
				path:'/mycar/carry',
				component:Carry
			},
			// 代金券
			{
				path:'/mycar/chit',
				component:Chit
			},
			// 我的积分
			{
				path:'/mycar/score',
				component:Score
			},
			// 账户设置
			{
				path:'/mycar/set',
				component:Set
			}
			]
		},
		//购物车
		{
			path:"/Shop",
			component:Carshop
		},
		//购买成功
		{
			path:"/success",
			component:Success
		}
	]
})
new Vue({
	router,
	template: "<App/>",
	components: {
		App
	}
}).$mount("#app")