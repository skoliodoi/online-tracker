<template>
<div>
  <div class="container">
    <input 
    placeholder="Search for the client"
    v-model="searchForBox">
    <select v-model="searchForBox">
      <option value="" selected disabled hidden>Choose here</option>
      <option v-for="each in boxContents">{{ each.clientName }}</option>
    </select>
    <button class="btn btn-success"
    @click="boxesVisible=true">Add New Box</button>
  </div>
  <box-grid class="box-grid">
    <app-box 
    :boxes="filterBoxes"
    @boxRemoved="removeBox"
    >
    </app-box>
  </box-grid>
  <add-box 
  v-if="boxesVisible"
  @addingCanceled="cancelBox"></add-box>
  
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
        },
        {
          clientName: 'Gundam',
          id: 115,  
        },
        {
          clientName: 'EVA-01',
          id: 116,  
        },
        {
          clientName: 'Totoro',
          id: 117,  
        },
        {
          clientName: 'Mechagodzilla',
          id: 118,  
        },
        {
          clientName: 'Bumblebee',
          id: 119,  
        },
        {
          clientName: 'Optimus Prime',
          id: 120,  
        },
        {
          clientName: 'Megatron',
          id: 121,  
        }]
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
        this.searchForBox = ''
      },
      cancelBox(value) {
        this.boxesVisible = value;
      }
    },
    created(){
      tableBus.$on("addBox",(clientName, confirmed, briefType, setStatus, whoFor, whoWith, startDate, meetDate, deadline, delDate)=>{
        this.boxesVisible = true;
        this.boxContents.push({
          id: this.id += 1,
          clientName,
          confirmed,
          briefType,
          setStatus,
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

<style scoped>

</style>
