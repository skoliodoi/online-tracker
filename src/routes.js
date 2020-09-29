import BoxesAll from './components/BoxGrids/BoxesAll.vue'


export const routes = [
  { path: '/tracker', component: BoxesAll, name:'tracker' },
  { path: '*', redirect: '/tracker' }
];