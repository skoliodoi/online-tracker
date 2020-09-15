import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import  { routes } from './routes'

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history' 
})

export const tableBus = new Vue({
  methods: {
    addBox(name, confirmed, brief, status, whoFor, whoWith, start, meetDate, deadline, delivery) {
      this.$emit('addBox', name, confirmed, brief, status, whoFor, whoWith, start, meetDate, deadline, delivery)
    }
  }
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
