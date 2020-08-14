<template>
<div>
  <app-box :boxes="boxes">
  </app-box>
</div>
</template>

<script>
import Box from './Box.vue'
export default {
  props: ['boxes'],
  components: {
    appBox: Box
  },
  methods: {
    removeBox(index) {
      this.$emit('boxRemoved', index)
    }
  }
}
</script>

<style  scoped>

</style>