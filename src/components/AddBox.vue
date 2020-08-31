<template>
  <div class="container">
    <div class="overlay"></div>
    <div class="add-box">
      <form action>
        <div class="btn-dark d-flex justify-content-end">
          <button class="btn btn-danger" @click="cancelBox">X</button>
        </div>
        <div style="margin-top:5px" class="container-fluid">
          <fieldset class="form-group">
            <div class="row visible">
              <div class="col">
                <div class="row">
                  <legend class="col-form-label col pt-0 btn-info
                  d-flex justify-content-center align-items-center">Confirmed?
                  </legend>
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
                  <legend class="col-form-label col pt-0 btn-info
                  d-flex justify-content-center align-items-center">Brief type</legend>
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
                  <legend class="col-form-label col pt-0 btn-info
                  d-flex justify-content-center align-items-center">Set status:</legend>
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
                      >
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
          </fieldset>
          <div class="d-flex justify-content-center">
            <button class="btn btn-success" @click.prevent="addBox">Add</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { tableBus } from "../main.js";
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
    addBox() {
      /*tableBus.$emit('addBox',
        this.clientName, this.confirmed, this.briefType, this.setStatus, 
        this.whoFor, this.whoWith, this.startDate, this.meetDate, this.deadline,
        this.delDate)*/
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
      this.$emit("addingCanceled", false);
    },
    restart() {
      this.clientName = "";
      this.confirmed = "";
      this.briefType = "";
      this.setStatus = "";
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
  opacity: 0.5;
}

.add-box {
  height: 50%;
  width: 50%;
  background-color: white;
  position: fixed;
  top: 25%;
  left: 25%;
  z-index: 3;
  opacity: 1;
}

.visible {
  border: 1px solid red;
}
</style>