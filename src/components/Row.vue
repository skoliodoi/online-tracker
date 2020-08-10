<template>
  <div>
    <tr v-for="each in cells">
      <app-cell>{{ each.clientName }}</app-cell>
    </tr>
  </div>
</template>

<script>
  import { tableBus } from '../main.js'
  import Cell from './Cell.vue'
  export default {
    props: ['cells', 'name'],
    components: {
      appCell: Cell
    },
  }
</script>

<style scoped>
  tr:hover {
    background-color: grey;
  }
</style>