<template>
<div>
  <box-grid>
    <input v-model="searchForBox">
    <app-box 
    :boxes="filterBoxes"
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
        searchForBox: '',
        boxContents: [{
          clientName: 'Godzilla',
          id: 111,
        },
        {
          clientName: 'Ghidora',
          id: 112,
        },
        {
          clientName: 'Mothra',
          id: 113,  
        },
        {
          clientName: 'Rodan',
          id: 114,  
        },]
      }
    },
    computed: {
      filterBoxes() {
        return this.boxContents.filter((element) => {
          return element.clientName.match(this.searchForBox)
        })
      }
    },
    components: {
      appBox: Box,
      boxGrid: BoxGrid,
      addBox: AddBox,
    },
    methods: {
      removeBox(idNumber) {
        const deleteBox = this.boxContents.map((item) => {
          return item.id
        }).indexOf(idNumber)
        if (confirm("Are you sure you want to remove this component?")) {
          this.boxContents.splice(deleteBox, 1)
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
