import Vue from "vue"
import  App from "./App.vue"
import Routes from './router'
import VueRouter from "vue-router"

const router = new VueRouter({
  routes: Routes,
  mode : 'history' //history 모드
});

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')