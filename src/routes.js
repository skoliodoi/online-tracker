import BoxGridAll from './components/BoxGrids/BoxGridAll.vue'
import BoxGridComplete from './components/BoxGrids/BoxGridComplete.vue'
import BoxGridInProgress from './components/BoxGrids/BoxGridInProgress.vue'

export const routes = [
  { path: '', component: BoxGridAll },
  { path: '/complete', component: BoxGridComplete },
  { path: '/wip', component: BoxGridInProgress }
];