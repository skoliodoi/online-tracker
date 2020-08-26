import Vue from 'vue'
import App from './App.vue'


export const tableBus = new Vue({
  methods: {
    addBox(name, confirmed, brief, status, whoFor, whoWith, start, meetDate, deadline, delivery) {
      this.$emit('addBox', name, confirmed, brief, status, whoFor, whoWith, start, meetDate, deadline, delivery)
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
