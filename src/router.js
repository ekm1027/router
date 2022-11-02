import Vue from 'vue';
import VueRouter from 'vue-router';
import info from './components/info.vue';
import detail from './components/detail.vue';
import home from './components/home.vue';
import change from './components/change.vue';


Vue.use(VueRouter)

export default[
  {
    path:'/home', 
    name: 'home',
    component:home
  },
  {
    path:'/detail',
    name:'detail',
    component:detail
  },
  {
    path:'/info',
    name:'info',
    component:info
  },
  {
    path:'/change',
    name:'change',
    component:change
  }
]