<template>
  <div class="container">
  <p>
    <button class="btn btn-outline-dark" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
      Add new
    </button>
  </p>
    <div class="collapse" id="collapseExample">
      <div class="control">
        <div class='add-fields'>
          <section>
            <div>
              <label for="confirmed">Confirmed?</label>
              <select v-model="confirmed" name="confirmed" id="confirmed">
                <option value="blank"></option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            <div>
              <label for="briefSelection">Brief type:</label>
              <select v-model="briefType" 
              name="briefSelection" 
              id="briefSelection">
                <option value=""></option>
                <option value="Client">Client</option>
                <option value="Carrier">Carrier</option>
              </select>
            </div>

            <div>
              <form>
                <label>Client name:</label>
                <input v-model="clientName" type="text">
              </form>
            </div>

            <div>
              <form>
                <label for="whoFor">For:</label>
                <input v-model="whoFor" type="text" id="whoFor">
              </form>
            </div>

            <div>
              <label for="whoWith">Who is the meeting with:</label>
              <input v-model="whoWith" type="text" id="whoWith">
            </div>
          </section>
            
          <section>
            <div>
              <label>Start date:</label>
              <input v-model="startDate" id="startDate"  type="date" name="startDate">
            </div> 

            <div>
              <label>Meeting date:</label>
              <input v-model="meetDate" id="meetDate" type="date" name="meetDate">
            </div>

            <div>
              <label>OpCo deadline:</label>
              <input v-model="deadline" id="deadline" type="date" name="deadline">
            </div>

            <div>
              <label>Delivery date:</label>
              <input v-model="delDate" id="delDate" type="date" name="delDate">
            </div>

            <div>
              <label for="setStatus">Set status:</label>
              <select v-model="setStatus" name="setStatus" id="setStatus">
                <option value=""></option>
                <option value="In progress">In progress</option>
                <option value="Pending">Pending</option>
              </select>
            </div>
          </section>
        </div>

        <div>
          <button class="btn btn-outline-dark" @click="addBox">Submit</button>
          <button class="btn btn-outline-dark" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { tableBus } from '../main.js'
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
    }
  },
  methods: {
      addBox() {
        /*tableBus.$emit('addBox',
        this.clientName, this.confirmed, this.briefType, this.setStatus, 
        this.whoFor, this.whoWith, this.startDate, this.meetDate, this.deadline,
        this.delDate)*/
        tableBus.addBox(this.clientName, this.confirmed, this.whoFor)
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

</style>