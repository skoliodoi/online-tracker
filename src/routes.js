import BoxGridAll from './components/BoxGrids/BoxGridAll.vue'
import BoxGridComplete from './components/BoxGrids/BoxGridComplete.vue'
import BoxGridInProgress from './components/BoxGrids/BoxGridInProgress.vue'


export const routes = [
  { path: '/all', component: BoxGridAll, name:'all' },
  { path: '/completed', component: BoxGridComplete, name: 'complete' },
  { path: '/wip', component: BoxGridInProgress, name:'wip' },
];