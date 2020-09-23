<template>
  <div>
   <div v-for="each in doneBoxContents">
     {{ each.clientName }}
   </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["doneBoxContents"]),
  },
};
</script>