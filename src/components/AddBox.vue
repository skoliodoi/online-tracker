<template>
  <div class="container">
    <div class="overlay"></div>
    <div class="add-box">
      <form action>
        <div class="float-right">
          <button class="btn btn-danger" @click="cancelBox">X</button>
        </div>
        <div class="container visible">
          <fieldset class="form-group">
            <div class="row">
              <div class="col">
                <div class="row">
                  <legend class="col-form-label col-sm-3 pt-0 visible">Confirmed?</legend>
                  <div class="col visible">
                    <div class="form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios1"
                        value="option1"
                        checked
                      />
                      <label class="form-check-label" for="exampleRadios1">Yes</label>
                    </div>
                    <div class="form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios2"
                        value="option2"
                      />
                      <label class="form-check-label" for="exampleRadios2">No</label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="row">
                  <legend class="col-form-label col-sm-3 pt-0 btn-dark">Brief type</legend>
                  <div class="col">
                    <div class="form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios1"
                        value="option1"
                        checked
                      />
                      <label class="form-check-label" for="exampleRadios1">Client</label>
                    </div>
                    <div class="form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios2"
                        value="option2"
                      />
                      <label class="form-check-label" for="exampleRadios2">No</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </fieldset>
          <div class="form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              value="option1"
              checked
            />
            <label class="form-check-label" for="exampleRadios1">Yes</label>
          </div>
          <div class="form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios2"
              value="option2"
            />
            <label class="form-check-label" for="exampleRadios2">No</label>
          </div>
          <div>
            <button class="btn btn-success" @click="addBox">Add</button>
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
      confirmedList: ["Yes", "No"],
      briefList: ["Client", "Carrier"],
      statusList: ["In Progress", "Pending"],
      clientName: "",
      confirmed: "",
      briefType: "",
      setStatus: "",
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