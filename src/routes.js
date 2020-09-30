import Boxes from './components/Boxes/Boxes.vue'


export const routes = [
  { path: '/tracker', component: Boxes, name:'tracker' },
  { path: '*', redirect: '/tracker' }
];