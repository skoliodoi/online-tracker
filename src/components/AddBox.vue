<template>
  <div class="container">
    <div class="overlay" @click="cancelBox"></div>
    <div class="add-box">
      <form action>
        <div class="d-flex text-light bg-dark justify-content-between align-items-center">
          <div class="pl-2">Add a new brief information</div>
          <button class="btn btn-danger" @click="cancelBox">X</button>
        </div>
        <div style="margin-top:5px" class="container-fluid">
          <fieldset class="form-group">
            <div class="row">
              <div class="col">
                <div class="row">
                  <legend
                    class="col-form-label col pt-0 text-light bg-info d-flex justify-content-center align-items-center"
                  >Confirmed?</legend>
                  <div class="col">
                    <div class="form-check">
                      <input
                        v-model="confirmed"
                        class="form-check-input"
                        type="radio"
                        name="confirmationRadios"
                        id="confirmationRadios1"
                        value="Yes"
                        checked
                      />
                      <label class="form-check-label" for="confirmationRadios1">Yes</label>
                    </div>
                    <div class="form-check">
                      <input
                        v-model="confirmed"
                        class="form-check-input"
                        type="radio"
                        name="confirmationRadios"
                        id="confirmationRadios2"
                        value="No"
                      />
                      <label class="form-check-label" for="confirmationRadios2">No</label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="row">
                  <legend
                    class="col-form-label col pt-0 text-light bg-info d-flex justify-content-center align-items-center"
                  >Brief type</legend>
                  <div class="col">
                    <div class="form-check-inline">
                      <input
                        v-model="briefType"
                        class="form-check-input"
                        type="radio"
                        name="briefTypeRadios"
                        id="briefTypeRadios1"
                        value="Client"
                        checked
                      />
                      <label class="form-check-label" for="briefTypeRadios1">Client</label>
                    </div>
                    <div class="form-check-inline">
                      <input
                        v-model="briefType"
                        class="form-check-input"
                        type="radio"
                        name="briefTypeRadios"
                        id="briefTypeRadios2"
                        value="Carrier"
                      />
                      <label class="form-check-label" for="briefTypeRadios2">Carrier</label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="row">
                  <legend
                    class="col-form-label col pt-0 text-light bg-info d-flex justify-content-center align-items-center"
                  >Set status:</legend>
                  <div class="col">
                    <div class="form-check">
                      <input
                        v-model="setStatus"
                        class="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios5"
                        value="In Progress"
                        checked
                      />
                      <label class="form-check-label" for="exampleRadios5">In Progress</label>
                    </div>
                    <div class="form-check">
                      <input
                        v-model="setStatus"
                        class="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios6"
                        value="Pending"
                      />
                      <label class="form-check-label" for="exampleRadios6">Pending</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row mt-2">
              <div class="col">
                <div class="form-group">
                  <label>Client name:</label>
                  <input v-model="clientName" class="form-control" type="text" />
                </div>
                <div class="form-group">
                  <label>For:</label>
                  <input v-model="whoFor" class="form-control" type="text" />
                </div>
                <div class="form-group">
                  <label>Who is the meeting with:</label>
                  <input v-model="whoWith" class="form-control" type="text" />
                </div>
              </div>
              <div class="col">
                <div class="form-group">
                  <label>Start date:</label>
                  <input v-model="startDate" class="form-control" id="startDate" type="date" name="startDate" />
                </div>

                <div class="form-group">
                  <label>Meeting date:</label>
                  <input v-model="meetDate" class="form-control" id="meetDate" type="date" name="meetDate" />
                </div>

                <div class="form-group"> 
                  <label>Delivery date:</label>
                  <input v-model="delDate" id="delDate" class="form-control" type="date" name="delDate" />
                </div>

                <div class="form-group">
                  <label>OpCo deadline:</label>
                  <input v-model="deadline" class="form-control" id="deadline" type="date" name="deadline" />
                </div>
              </div>
            </div>
          </fieldset>
          <div class="d-flex justify-content-center">
            <button class="btn btn-outline-success" @click.prevent="addInput({name: 'Henio'})">Add</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { tableBus } from "../main.js";
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      clientName: "",
      confirmed: "Yes",
      briefType: "Client",
      setStatus: "In Progress",
      whoFor: "",
      whoWith: "",
      startDate: "",
      meetDate: "",
      deadline: "",
      delDate: "",
    };
  },
  methods: {
    ...mapMutations(['addInput']),
    addBox() {
      tableBus.addBox(
        this.clientName,
        this.confirmed,
        this.briefType,
        this.setStatus,
        this.whoFor,
        this.whoWith,
        this.startDate,
        this.meetDate,
        this.deadline,
        this.delDate
      );
      this.restart();
    },
    cancelBox() {
      this.$store.dispatch('addBoxDisplay')
    },
    restart() {
      this.clientName = "";
      this.confirmed = "Yes";
      this.briefType = "Client";
      this.setStatus = "In Progress";
      this.whoFor = "";
      this.whoWith = "";
      this.startDate = "";
      this.meetDate = "";
      this.deadline = "";
      this.delDate = "";
      this.inputEntry = "";
    },
  },
};
</script>

<style scoped>
.overlay {
  height: 100%;
  width: 100%;
  background-color: whitesmoke;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  opacity: 0.75;
}

.add-box {
  height: 32em;
  width: 50em;
  background-color: white;
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 3;
  opacity: 1;
  margin-top: -16em;
  margin-left: -25em;
}

.visible {
  border: 1px solid red;
}
</style>