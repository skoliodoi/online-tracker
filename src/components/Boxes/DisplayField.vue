<template>
<div>
  <div class="visible" 
  v-if="!isEditable"
  @click="makeEditable">
    <slot> 
    </slot>
  </div>
  <div v-else>
    <p>EDITABLE</p>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      isEditable: false
    }
  },
  props: ["name"],
  methods: {
    makeEditable() {
      this.isEditable = true
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