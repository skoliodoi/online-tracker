<template>
  <div id="app">
    <my-table
    :name="clientName" 
    :cells="tableRows"></my-table>
    <add-row @rowAdded="newRow"></add-row>
  </div>
</template>

<script>
  import AddRow from './components/AddRow.vue'
  import Table from './components/Table.vue'
  export default {
      data() {
      return {
        clientName: '',
        tableRows: []
      }
    },
    components: {
      myTable: Table,
      addRow: AddRow,
    },
    methods: {
      newRow(data) {
        this.tableRows.push({
          clientName: data,
        })
      }
    }
  }
</script>

<style lang="scss">
  table {
    border-collapse: collapse;
  }
</style>
