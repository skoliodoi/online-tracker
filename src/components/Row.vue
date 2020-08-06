<template>
  <tr>
    <app-cell>{{ clientName }}</app-cell>
    <app-cell>{{ confirmed }}</app-cell>
    <app-cell>{{ briefType }}</app-cell>
  </tr>
</template>

<script>
import Cell from './Cell.vue'
export default {
  components: {
    appCell: Cell,
  },
  data() {
    return {
      clientName: 'Bob',
      confirmed: 'Yes',
      briefType: 'Client',
      setStatus: '',
      whoFor: '',
      whoWith: '',
      startDate: '',
      meetDate: '',
      deadline: '',
      delDate: '',
      inputEntry: '',
    }
  }
}
</script>

<style scoped>

</style>