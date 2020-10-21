import Vue from 'vue'
import VueRouter from 'vue-router'
import Boxes from './components/Boxes/Boxes.vue'
import Home from './components/Home.vue'

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home, name:'home' },
  { path: '/tracker', component: Boxes, name:'tracker' },
  { path: '*', redirect: '/' }
];

const router = new VueRouter({
  routes,
  mode: 'history' 
})

export default router;
