import Boxes from './components/Boxes/Boxes.vue'
import Home from './components/Home.vue'

export const routes = [
  { path: '/', component: Home, name:'home' },
  { path: '/tracker', component: Boxes, name:'tracker' },
  { path: '*', redirect: '/' }
];