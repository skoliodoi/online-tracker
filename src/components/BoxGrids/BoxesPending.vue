<template>
  <div>
   <app-box 
   :boxes="pendingBoxContents">
   </app-box>
  </div>
</template>

<script>
import Box from '../Boxes/Box.vue'
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["pendingBoxContents"]),
  },
  components: {
    appBox: Box
  }
};
</script>