<template>
  <div class="visible">
    <slot>
      {{ name }}
    </slot>
  </div>
</template>

<script>
export default {
  props: ["name"]
}
</script>

<style scoped>
  .visible {
    height: auto;
    width: 450px;
    border: 1px solid red;
  }

</style>