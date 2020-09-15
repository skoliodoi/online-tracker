<template>
<div>
  <app-navbar></app-navbar>
  <router-view></router-view>
</div>
</template>

<script>
  import Navbar from './components/Navbar.vue'
  import BoxGridAll from './components/BoxGrids/BoxGridAll.vue'
  export default {
    components: {
      appNavbar: Navbar,
      'box-grid-all': BoxGridAll
    }
  }
</script>

