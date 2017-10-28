 import Vue from 'vue';
import Vuex from 'vuex';
 Vue.use(Vuex);
  const state = {
  		dddd:"dasd",
  		enroll:"注册",
        userMsg:{
        		name:"",
        		phonnum:0,
        		email:"",
        		loginState:0,//0代表未登录;1代表登录
        }
  }
  export default new Vuex.Store({
        state
    });