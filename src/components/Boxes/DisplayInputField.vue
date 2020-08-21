<template>
<div>
  <div class="visible" 
  v-if="!isEditable"
  @click="makeEditable">
    <slot> {{ display }}</slot>
  </div>
  <div v-else>
    <input 
    v-model="newDisplay"
    v-on:keyup.enter="changeDisplay">
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      isEditable: this.bool,
      display: this.displayValue,
      newDisplay: ''
    }
  },
  props: ["bool", "displayValue"],
  methods: {
    makeEditable() {
      this.isEditable = !this.isEditable
      this.newDisplay = this.display
    },
    changeDisplay() {
      this.isEditable = !this.isEditable
      this.display = this.newDisplay
    }
  }
}
</script>

<style scoped>
  .visible {
    height: auto;
    width: 450px;
    border: 1px solid red;
  }

</style>