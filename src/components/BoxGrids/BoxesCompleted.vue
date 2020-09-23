<template>
  <div>
   <app-box 
   :boxes="doneBoxContents">
   </app-box>
  </div>
</template>

<script>
import Box from '../Boxes/Box.vue'
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["doneBoxContents"]),
  },
  components: {
    appBox: Box
  }
};
</script>