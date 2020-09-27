<template>
<div>
  <div class="box-field" 
  v-if="!isEditable"
  @click="makeEditable">
    <slot> {{ display }}</slot>
  </div>
  <div v-else>
    <input
    class="form-control"
    type="text" 
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
  computed: {
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
      this.$store.commit('updateContents', this.newDisplay)
    }
  }
}
</script>

<style scoped>
  .box-field {
    cursor: pointer;
  }
  .box-field:hover {
    background: crimson;
    cursor: pointer;
  }
  .visible {
    border: 1px solid red;
  }
  .small {
    width: 75%;
  }

</style>