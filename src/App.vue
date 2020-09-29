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
  import AddBox from './components/AddBox.vue'
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

