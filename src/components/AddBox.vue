<template>
<div class="container">
  <div class="overlay"></div>
  <div class="add-box">
    <button class="btn btn-success"
    @click="addBox">Add</button>  
    <button class="btn btn-danger"
    @click="cancelBox">X</button>  
  </div> 
</div>
  
</template>

<script>
import { tableBus } from '../main.js'
export default {
  data() {
    return {
      confirmedList: ["Yes", "No"],
      briefList: ["Client", "Carrier"],
      statusList: ["In Progress", "Pending"],
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
    }
  },
  methods: {
      addBox() {
        /*tableBus.$emit('addBox',
        this.clientName, this.confirmed, this.briefType, this.setStatus, 
        this.whoFor, this.whoWith, this.startDate, this.meetDate, this.deadline,
        this.delDate)*/
        tableBus.addBox(this.clientName, this.confirmed, this.briefType, this.setStatus, this.whoFor, this.whoWith, this.startDate, this.meetDate, this.deadline, this.delDate)
        this.restart()
      },
      cancelBox() {
        this.$emit("addingCanceled", false)
      },
      restart() {
          this.clientName = '';
          this.confirmed = '';
          this.briefType = '';
          this.setStatus = '';
          this.whoFor = '';
          this.whoWith = '';
          this.startDate = '';
          this.meetDate = '';
          this.deadline = '';
          this.delDate = '';
          this.inputEntry = '';
      }
    },
}

</script>

<style scoped>
.overlay {
  height: 100%;
  width: 100%;
  background-color:whitesmoke;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  opacity: 0.5;
}

.add-box {
  height: 50%;
  width: 50%;
  background-color:white;
  position: fixed;
  top: 25%;
  left: 25%;
  z-index: 3;
  opacity: 1;
}


</style>