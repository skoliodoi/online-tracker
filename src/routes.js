import BoxesAll from './components/BoxGrids/BoxesAll.vue'
import BoxesCompleted from './components/BoxGrids/BoxesCompleted.vue'
import BoxesInProgress from './components/BoxGrids/BoxesInProgress.vue'
import BoxesPending from './components/BoxGrids/BoxesPending.vue'

export const routes = [
  { path: '/all', component: BoxesAll, name:'all' },
  { path: '/done', component: BoxesCompleted, name: 'done' },
  { path: '/wip', component: BoxesInProgress, name:'wip' },
  { path: '/pending', component: BoxesPending, name:'pending' },
  { path: '*', redirect: '/all' }
];