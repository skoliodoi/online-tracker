<template>
  <div class="container">
    <div class="overlay" @click="cancelBox"></div>
    <div class="add-box">
      <form action>
        <div
          class="d-flex text-light add-box-buttons justify-content-between align-items-center"
        >
          <div class="pl-2">Add a new brief information</div>
          <button class="btn btn-danger" @click="cancelBox">X</button>
        </div>
        <div style="margin-top: 5px" class="container-fluid">
          <fieldset class="form-group">
            <div class="row mt-2">
              <div class="col">
                <div class="form-group">
                  <label><strong>Client name:</strong></label>
                  <input
                    v-model="clientName"
                    class="form-control"
                    type="text"
                  />
                </div>

                <div class="form-group">
                  <label><strong>For:</strong></label>
                  <input v-model="whoFor" class="form-control" type="text" />
                </div>
                <div class="form-group">
                  <label>
                    <strong> Who is the meeting with: </strong>
                  </label>
                  <input v-model="whoWith" class="form-control" type="text" />
                </div>
                <div class="form-group row">
                  <label class="col-4 my-auto">
                    <strong>Confirmed?</strong>
                  </label>
                  <div>
                    <select
                      v-model="confirmed"
                      class="custom-select"
                      style="width: 250px"
                    >
                      <option v-for="each in booleanTable">
                        {{ each }}
                      </option>
                    </select>
                  </div>
                </div>

                <div class="form-group row">
                  <label class="col-4 my-auto">
                    <strong>Brief Type:</strong>
                  </label>
                  <div>
                    <select
                      v-model="briefType"
                      class="custom-select"
                      style="width: 250px"
                    >
                      <option v-for="each in briefTable">
                        {{ each }}
                      </option>
                    </select>
                  </div>
                </div>

                <div class="form-group row">
                  <label class="col-4 my-auto">
                    <strong>Set status:</strong>
                  </label>
                  <div>
                    <select
                      v-model="setStatus"
                      class="custom-select"
                      style="width: 250px"
                    >
                      <option v-for="each in statusTable">
                        {{ each }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="form-group row">
                  <label class="col-5 my-auto">
                    <strong>Meeting date:</strong>
                  </label>
                  <input
                    v-model="meetDate"
                    class="custom-select col-6"
                    id="meetDate"
                    type="date"
                    name="meetDate"
                  />
                </div>

                <div class="form-group row">
                  <label class="col-5 my-auto">
                    <strong>Delivery date:</strong>
                  </label>
                  <input
                    v-model="delivery"
                    id="delDate"
                    class="custom-select col-6"
                    type="date"
                    name="delivery"
                  />
                </div>
                <div class="form-group row">
                  <label class="col-5 my-auto">
                    <strong>Start date:</strong>
                  </label>
                  <input
                    v-model="startDate"
                    class="custom-select col-6"
                    id="startDate"
                    type="date"
                    name="startDate"
                  />
                </div>

                <div class="form-group row">
                  <label class="col-5 my-auto">
                    <strong>OpCo deadline:</strong>
                  </label>
                  <input
                    v-model="deadline"
                    class="custom-select col-6"
                    id="deadline"
                    type="date"
                    name="deadline"
                  />
                </div>
                <div class="form-group row">
                  <label class="col-5 my-auto">
                    <strong>Reminder 1:</strong>
                  </label>
                  <input
                    v-model="reminder1"
                    class="custom-select col-6"
                    id="reminder1"
                    type="date"
                    name="reminder1"
                  />
                </div>
                <div class="form-group row">
                  <label class="col-5 my-auto">
                    <strong>Reminder 2:</strong>
                  </label>
                  <input
                    v-model="reminder2"
                    class="custom-select col-6"
                    id="reminder2"
                    type="date"
                    name="reminder2"
                  />
                </div>
                <div class="d-flex justify-content-center">
                  <button v-if="!loadingState"
                    class="btn btn-outline-success"
                    @click.prevent="addNewBox"
                  >
                    Add
                  </button>
                  <button
                  v-else 
                  class="btn btn-success" type="button" disabled>
                    <span
                      class="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    Adding...
                  </button>
                </div>
              </div>
            </div>
          </fieldset>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { DateTime } from "luxon";
import { mapActions } from "vuex";
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
      delivery: "",
      reminder1: "",
      reminder2: "",
      tillDelivery: "",
      booleanTable: ["Yes", "No"],
      briefTable: ["Client", "Carrier"],
      statusTable: ["In Progress", "Pending"],
    };
  },
  computed: {
    loadingState() {
      return this.$store.getters.loading;
    },
    timeChange() {
      if (this.delivery > DateTime.local().toISODate()) {
        return false
      } else {
        return true
      }
    },
    startDateProper() {
      if (!this.startDate == "") {
        return DateTime.fromISO(this.startDate).toLocaleString(
          DateTime.DATE_HUGE
        );
      } else {
        return "No date provided";
      }
    },
    meetDateProper() {
      if (!this.meetDate == "") {
        return DateTime.fromISO(this.meetDate).toLocaleString(
          DateTime.DATE_HUGE
        );
      } else {
        return "No date provided";
      }
    },
    deadlineProper() {
      if (!this.deadline == "") {
        return DateTime.fromISO(this.deadline).toLocaleString(
          DateTime.DATE_HUGE
        );
      } else {
        return "No date provided";
      }
    },
    deliveryProper() {
      if (!this.delivery == "") {
        return DateTime.fromISO(this.delivery).toLocaleString(
          DateTime.DATE_HUGE
        );
      } else {
        return "No date provided";
      }
    },
    reminder1Proper() {
      if (!this.reminder1 == "") {
        return DateTime.fromISO(this.reminder1).toLocaleString(
          DateTime.DATE_HUGE
        );
      } else {
        return "No date provided";
      }
    },
    reminder2Proper() {
      if (!this.reminder2 == "") {
        return DateTime.fromISO(this.reminder2).toLocaleString(
          DateTime.DATE_HUGE
        );
      } else {
        return "No date provided";
      }
    },
    deliveryDeadline() {
      if (!this.delivery == "") {
        return DateTime.fromISO(this.delivery).toRelative();
      } else {
        return "No delivery date provided";
      }
    },
  },
  methods: {
    ...mapActions(["addInput"]),
    async sendData() {
      await fetch("https://online-tracker-test.firebaseio.com/boxes.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          clientName: this.clientName,
          confirmed: this.confirmed,
          briefType: this.briefType,
          status: this.setStatus,
          whoFor: this.whoFor,
          whoWith: this.whoWith,
          startDate: this.startDateProper,
          meetDate: this.meetDateProper,
          deadline: this.deadlineProper,
          delivery: this.deliveryProper,
          reminder1: this.reminder1Proper,
          reminder2: this.reminder2Proper,
          tillDelivery: this.deliveryDeadline,
          isDeleted: false,
          progress: {
            placehold: ""
          },
          progressBar: 0,
          progressDisplay: "",
          timeVal: this.delivery,
          boolVal: this.timeChange
        }),
      }).then(response => {
        if (!response.ok) {
          throw new Error('Error number: ' + response.status + '! Please let Szymon know and try again later!')
        }
      }).catch((error) => {
        alert(error.message)
      })
    },
    async addNewBox() {
      await this.sendData();
      await this.$store.dispatch("fetchData");
      this.restart();
    },
    cancelBox() {
      this.$store.dispatch("addBoxDisplay");
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
      this.delivery = "";
      this.inputEntry = "";
      this.reminder1 = "";
      this.reminder2 = "";
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

.add-box-buttons {
  background: #003865;
}
</style>