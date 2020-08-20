<template>
<div>
  <div class="visible" 
  v-if="!isEditable"
  @click="makeEditable">
    <slot> {{ display }}</slot>
  </div>
  <div v-else>
    <button @click="makeEditable">click</button>
  </div>
</div>
</template>

<script>
import InputField from './InputField.vue'
export default {
  data() {
    return {
      isEditable: this.bool,
      display: this.displayValue
    }
  },
  props: ["bool", "displayValue"],
  components: {
    inputField: InputField
  },
  methods: {
    makeEditable() {
      this.isEditable = !this.isEditable
      console.log(this.isEditable)
    },
    changeToEdited() {
      this.$emit("fieldEdited", this.inputValue)
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