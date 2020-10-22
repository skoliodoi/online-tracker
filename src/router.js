import Vue from 'vue'
import VueRouter from 'vue-router'
import Boxes from './components/Boxes/Boxes.vue'
import Home from './components/Home.vue'
import Auth from './components/Auth.vue'
import store from './store/index.js'

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home, name:'home', meta: {requiresAuth: false} },
  { path: '/tracker', component: Boxes, name:'tracker', meta: {requiresAuth: true} },
  { path: '/auth', component: Auth, name:'auth'},
  { path: '*', redirect: '/' }
];

const router = new VueRouter({
  routes,
  mode: 'history' 
})

router.beforeEach((to, _, next)=>{
  if (to.meta.requiresAuth && !store.getters.isAuthenticated){
    next('/')
  } else {
    next()
  }
})

export default router;
