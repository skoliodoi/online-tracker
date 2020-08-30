<template>
  <div class="overlay">
    <button class="btn btn-outline-dark overlay" @click="addBox">Submit</button>
    <button class="btn btn-outline-dark" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">Cancel</button>
  
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
.container {
  margin-top: 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
 
.add-fields {
  width: 100%;
  height: 100%;
  border: 1px solid black;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.add-fields section {
  height: 100%;
  width: 100%;
}
.add-fields section div {
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 1em 5em
}

.control{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.overlay {
  height: 100%;
  width: 100%;
  background-color:midnightblue;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  opacity: 0.5;
}


</style>