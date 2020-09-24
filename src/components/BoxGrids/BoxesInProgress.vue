<template>
  <div>
   <app-box 
   :boxes="wipBoxContents">
   </app-box>
  </div>
</template>

<script>
import Box from '../Boxes/Box.vue'
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["wipBoxContents"]),
  },
  components: {
    appBox: Box
  }
};
</script>