import { createRouter, createWebHistory }from 'vue-loader';

import Boxes from './components/Boxes/Boxes.vue'
import Home from './components/Home.vue'

const router = createRouter({
  mode: createWebHistory(),
  routes: [
  { path: '/', component: Home, name:'home' },
  { path: '/tracker', component: Boxes, name:'tracker' },
  { path: '*', redirect: '/' }
]});

export default router;