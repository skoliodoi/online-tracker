<template>
  <div id="app">
    <my-table></my-table>
    <add-row></add-row>
  </div>
</template>

<script>
  import AddRow from './components/AddRow.vue'
  import Table from './components/Table.vue'
  export default {
    data() {
      return {
        clientName: '',
        confirmed: '',
        briefType: '',
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
    components: {
      myTable: Table,
      addRow: AddRow,
    }
  }
</script>

<style lang="scss">
  table {
    border-collapse: collapse;
  }
</style>
