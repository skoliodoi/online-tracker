<template>
<div>
  <div class="col-xs-12">
    <router-view></router-view>
  </div>
  <add-box 
  v-if="boxesVisible">
  </add-box>
</div>
</template>

<script>
  import {mapGetters} from "vuex";
  import AddBox from './components/Boxes/AddBox.vue'
  export default {
    computed: {
    ...mapGetters([
      'boxesVisible'
    ]),
  },
    components: {
      AddBox: AddBox
    }
  }
</script>

<style>
body {
  background: linear-gradient(45deg, #009DDF, #00AC42);
}
</style>
