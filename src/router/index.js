import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(Router)
Vue.use(VueAwesomeSwiper)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    }
  ]
})
