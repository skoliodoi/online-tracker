<template>
<div>
  <box-grid 
  :boxes="boxContents"
  @boxRemoved="removeBox"
  ></box-grid>
  <add-box></add-box>
</div>
</template>

<script>
  import { tableBus } from './main.js'
  import BoxGrid from './components/BoxGrid.vue'
  import AddBox from './components/AddBox.vue'
  export default {
      data() {
      return {
        boxContents: [{
          clientName: 'asd',
        }]
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
      tableBus.$on("addBox",(name)=>{
        this.boxContents.push({
          clientName: name
        })
      })
    }
  }
</script>

<style lang="scss">

</style>
