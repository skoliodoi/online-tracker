<template>
<div>
  <app-box v-for="(box, index) in boxes" @click.native="removeBox(index)">
    <div>
      {{ box.clientName }}
    </div>
    <div>For:</div>
    <p>With</p>

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