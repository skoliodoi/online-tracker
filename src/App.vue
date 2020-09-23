<template>
<div>
  <app-navbar></app-navbar>
  <div class="col-xs-12">
    <router-view></router-view>
  </div>
  <add-box 
  v-if="boxesVisible" 
  @addingCanceled="cancelBox">
  </add-box>
</div>
</template>

<script>
  import {mapGetters} from "vuex";
  import Navbar from './components/Navbar.vue'
  import AddBox from './components/AddBox.vue'
  export default {
    computed: {
    ...mapGetters([
      'boxesVisible'
    ]),
  },
    components: {
      appNavbar: Navbar,
      AddBox: AddBox
    }
  }
</script>

