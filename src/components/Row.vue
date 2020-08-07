<template>
  <tr>
    <app-cell>{{ clientName }}</app-cell>
    <app-cell>{{ confirmed }}</app-cell>
    <app-cell>{{ briefType }}</app-cell>
    <app-cell>{{ briefType }}</app-cell>
    <app-cell>{{ setStatus }}</app-cell>
    <app-cell>{{ whoFor }}</app-cell>
    <app-cell>{{ whoWith }}</app-cell>
    <app-cell>{{ startDate }}</app-cell>
    <app-cell>{{ meetDate }}</app-cell>
    <app-cell>{{ deadline }}</app-cell>
    <app-cell>{{ delDate }}</app-cell>
    <app-cell></app-cell>
    <app-cell></app-cell>
    <app-cell></app-cell>
    <app-cell></app-cell>
    <app-cell></app-cell>
    <app-cell></app-cell>
    <app-cell></app-cell>
    <app-cell></app-cell>
    <app-cell></app-cell>
    <app-cell></app-cell>
    <app-cell></app-cell>
    <app-cell></app-cell>
    <app-cell></app-cell>
    <app-cell></app-cell>
    <app-cell></app-cell>
    <app-cell></app-cell>

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
  },
  methods: {
    clickEvent() {
      console.log("Clisk")
    }
  }
}
</script>

<style scoped>

</style>