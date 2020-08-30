<template>
<div>
  <slot></slot>
</div>
</template>

<script>
import AddBox from '../AddBox.vue'
export default {
  components: {
    addBox: AddBox
  }
}
</script>

<style  scoped>
  div{
    border: 1px solid green;
    position: relative;
    z-index: 1;
  }
</style>