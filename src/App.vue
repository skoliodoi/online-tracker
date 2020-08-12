<template>
<div>
  <box-grid 
  v-if="boxesVisible"
  :boxes="boxContents"
  @boxRemoved="removeBox"
  ></box-grid>
  <add-box></add-box>
</div>
</template>

<script>
  import { tableBus } from './main.js'
  import BoxGrid from './components/Boxes/BoxGrid.vue'
  import AddBox from './components/AddBox.vue'
  export default {
      data() {
      return {
        boxesVisible: false,
        boxContents: []
      }
    },
    components: {
      boxGrid: BoxGrid,
      addBox: AddBox
    },
    methods: {
      removeBox(index) {
        this.boxContents.splice(index, 1)
      }
    },
    created(){
      tableBus.$on("addBox",(name, who)=>{
        this.boxesVisible = true;
        this.boxContents.push({
          clientName: name,
          whoFor: who
        })
      })
    }
  }
</script>

<style lang="scss">

</style>
