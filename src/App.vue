<template>
<div>
  <box-grid>
    <app-box 
    :boxes="boxContents"
    @boxRemoved="removeBox"
    >
    </app-box>
  </box-grid>
  <add-box></add-box>
  
</div>
</template>

<script>
  import { tableBus } from './main.js'
  import Box from './components/Boxes/Box.vue'
  import BoxGrid from './components/Boxes/BoxGrid.vue'
  import AddBox from './components/AddBox.vue'
  export default {
      data() {
      return {
        id: 0,
        boxesVisible: false,
        boxContents: []
      }
    },
    components: {
      appBox: Box,
      boxGrid: BoxGrid,
      addBox: AddBox,
    },
    methods: {
      removeBox(index) {
        if (confirm("Are you sure you want to remove this component?")) {
          this.boxContents.splice(index, 1)
        }
      }
    },
    created(){
      tableBus.$on("addBox",(clientName, confirmed, briefType, setStatus, whoFor, whoWith, startDate, meetDate, deadline, delDate)=>{
        this.boxesVisible = true;
        this.boxContents.push({
          id: this.id += 1,
          clientName,
          confirmed,
          whoFor,
          whoWith,
          startDate,
          meetDate,
          deadline,
          delDate
        })
      })
    }
  }
</script>

<style lang="scss">

</style>
