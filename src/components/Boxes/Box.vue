<template>
  <div>
    <div>
      <div class="accordion" :id="'accordion' + box.id">
        <div class="card">
          <div
            class="card-header"
            :class="timeChange"
            style="display: inline-block; background: #f6f7f8"
            :id="'heading' + box.id"
          >
            <div style="display: flex">
              <div
                class="col quiver"
                data-toggle="collapse"
                :data-target="'#collapse-' + box.id"
                aria-expanded="false"
                :aria-controls="'collapse-' + box.id"
              >
                <div class="arrow"></div>
              </div>
              <display-input-field
                class="my-auto container text-left col-xs-2"
                :displayValue="box.clientName"
                :id="box.id"
                :key="box.componentKey"
                :headerClass="box.boolVal"
                :input="true"
                :property="'clientName'"
              ></display-input-field>
              <div
                class="container text-left col-2 my-auto"
                style="display: flex"
              >
                <p class="mr-1 my-auto"><strong>Status:</strong></p>
                <display-input-field
                  class="container"
                  :select="true"
                  :displayValue="box.status"
                  :key="box.componentKey"
                  :headerClass="box.boolVal"
                  :id="box.id"
                  :optionTable="statusTable"
                  :property="'status'"
                >
                </display-input-field>
              </div>
              <div class="container text-left col-2 my-auto">
                <display-input-field
                :displayValue="timeDisplay"
                :key="refreshKey">
                  
                </display-input-field>
                <p class="my-auto">
                  <strong>Delivery: {{ timeDisplay }}</strong>
                </p>
              </div>
              <p class="my-auto"><strong>Progress:</strong></p>
              <div class="container text-left my-auto col-3">
                <div class="progress">
                  <div
                    class="progress-bar bg-success"
                    role="progressbar"
                    :style="{
                      border: '1px solid white',
                      'border-radius': '5px',
                      width: (box.progressBar / maxProgress) * 100 + '%',
                    }"
                    aria-valuemin="0"
                    aria-valuemax="120"
                  >
                    <strong>{{ box.progressDisplay }}</strong>
                  </div>
                </div>
              </div>
              <div v-if="box.isDeleted"
              class="col">
                <div class="spinner-border"
                role="status">
                </div>
              </div>
              <div v-else
              class="col">
              <button
                class="btn btn-danger"
                @click="removeBox(box.id)"
                v-html="'<strong>X</strong>'"
              ></button>
              </div>
            </div>
          </div>

          <div
            :id="'collapse-' + box.id"
            class="collapse"
            :aria-labelledby="'heading' + box.id"
            :data-parent="'#accordion' + box.id"
          >
            <div class="container-fluid">
              <div class="row">
                <div id="col-one" class="col-sm">
                  <div class="card-body">
                    <div class="form-group">
                      <label><strong>Confirmed?</strong></label>
                      <display-input-field
                        :bool="!box.confirmed"
                        :displayValue="box.confirmed"
                        :id="box.id"
                        :property="'confirmed'"
                        :select="true"
                        :optionTable="booleanTable"
                      ></display-input-field>
                    </div>
                    <div class="form-group">
                      <label><strong>Type:</strong></label>
                      <display-input-field
                        :bool="!box.briefType"
                        :displayValue="box.briefType"
                        :id="box.id"
                        :property="'briefType'"
                        :select="true"
                        :optionTable="typeTable"
                      ></display-input-field>
                    </div>

                    <div class="form-group">
                      <label><strong>For:</strong></label>
                      <display-input-field
                        :bool="!box.whoFor"
                        :displayValue="box.whoFor"
                        :id="box.id"
                        :property="'whoFor'"
                        :input="true"
                      ></display-input-field>
                    </div>

                    <div class="form-group">
                      <label><strong>Who is the meeting with:</strong></label>
                      <display-input-field
                        :bool="!box.whoWith"
                        :displayValue="box.whoWith"
                        :id="box.id"
                        :property="'whoWith'"
                        :input="true"
                      ></display-input-field>
                    </div>

                    <div class="form-group">
                      <label><strong>Meeting date:</strong></label>
                      <display-input-field
                        :bool="!box.meetDate"
                        :displayValue="box.meetDate"
                        :id="box.id"
                        :property="'meetDate'"
                        :input="true"
                        :inputType="'date'"
                      ></display-input-field>
                    </div>
                  </div>
                </div>

                <div id="col-two" class="col-sm">
                  <div class="card-body">
                    <div class="form-group">
                      <label><strong>Start:</strong></label>
                      <display-input-field
                        :bool="!box.startDate"
                        :displayValue="box.startDate"
                        :id="box.id"
                        :property="'startDate'"
                        :input="true"
                        :inputType="'date'"
                      ></display-input-field>
                    </div>

                    <div class="form-group">
                      <label><strong>Delivery Date:</strong></label>
                      <display-input-field
                        :bool="!box.delivery"
                        :displayValue="box.delivery"
                        :id="box.id"
                        :property="'delivery'"
                        :input="true"
                        :inputType="'date'"
                      ></display-input-field>
                    </div>

                    <div class="form-group">
                      <label><strong>OpCo deadline:</strong></label>
                      <display-input-field
                        :bool="!box.deadline"
                        :displayValue="box.deadline"
                        :id="box.id"
                        :property="'deadline'"
                        :input="true"
                        :inputType="'date'"
                      ></display-input-field>
                    </div>

                    <div class="form-group">
                      <label><strong>Reminder 1:</strong></label>
                      <display-input-field
                        :bool="!box.deadline"
                        :displayValue="box.reminder1"
                        :id="box.id"
                        :property="'reminder1'"
                        :input="true"
                        :inputType="'date'"
                      ></display-input-field>
                    </div>

                    <div class="form-group">
                      <label><strong>Reminder 2:</strong></label>
                      <display-input-field
                        :bool="!box.reminder2"
                        :displayValue="box.reminder2"
                        :id="box.id"
                        :property="'reminder2'"
                        :input="true"
                        :inputType="'date'"
                      ></display-input-field>
                    </div>
                  </div>
                </div>

                <div id="col-three" class="col-sm">
                  <div class="card-body">
                    <div class="form-group">
                      <label><strong>Mercer Client:</strong></label>
                      <display-input-field
                        :bool="!box.mercerClient"
                        :id="box.id"
                        :property="'mercerClient'"
                        :displayValue="box.mercerClient"
                        :select="true"
                        :optionTable="stateTable"
                        :updateProgress="true"
                        :changeClass="true"
                      >
                      </display-input-field>
                    </div>

                    <div class="form-group">
                      <label><strong>Marsh Client:</strong></label>
                      <display-input-field
                        :bool="!box.marshClient"
                        :id="box.id"
                        :property="'marshClient'"
                        :displayValue="box.marshClient"
                        :select="true"
                        :optionTable="stateTable"
                        :updateProgress="true"
                      ></display-input-field>
                    </div>

                    <div class="form-group">
                      <label><strong>OW Client:</strong></label>
                      <display-input-field
                        :bool="!box.owClient"
                        :id="box.id"
                        :property="'owClient'"
                        :displayValue="box.owClient"
                        :select="true"
                        :optionTable="stateTable"
                        :updateProgress="true"
                      ></display-input-field>
                    </div>

                    <div class="form-group">
                      <label><strong>GC Client:</strong></label>
                      <display-input-field
                        :bool="!box.gcClient"
                        :id="box.id"
                        :property="'gcClient'"
                        :displayValue="box.gcClient"
                        :select="true"
                        :optionTable="stateTable"
                        :updateProgress="true"
                      ></display-input-field>
                    </div>
                  </div>
                </div>

                <div id="col-four" class="col-sm">
                  <div class="card-body">
                    <div class="form-group">
                      <label><strong>MMB:</strong></label>
                      <display-input-field
                        :bool="!box.mmb"
                        :id="box.id"
                        :property="'mmb'"
                        :displayValue="box.mmb"
                        :select="true"
                        :optionTable="stateTable"
                        :updateProgress="true"
                      ></display-input-field>
                    </div>

                    <div class="form-group">
                      <label><strong>Marsh Carrier:</strong></label>
                      <display-input-field
                        :bool="!box.marshCarrier"
                        :id="box.id"
                        :property="'marshCarrier'"
                        :displayValue="box.marshCarrier"
                        :select="true"
                        :optionTable="stateTable"
                        :updateProgress="true"
                      ></display-input-field>
                    </div>

                    <div class="form-group">
                      <label><strong>OW Carrier:</strong></label>
                      <display-input-field
                        :bool="!box.owCarrier"
                        :id="box.id"
                        :property="'owCarrier'"
                        :displayValue="box.owCarrier"
                        :select="true"
                        :optionTable="stateTable"
                        :updateProgress="true"
                      ></display-input-field>
                    </div>

                    <div class="form-group">
                      <label><strong>GC Carrier:</strong></label>
                      <display-input-field
                        :bool="!box.gcCarrier"
                        :id="box.id"
                        :property="'gcCarrier'"
                        :displayValue="box.gcCarrier"
                        :select="true"
                        :optionTable="stateTable"
                        :updateProgress="true"
                      ></display-input-field>
                    </div>
                  </div>
                </div>

                <div id="col-five" class="col-sm">
                  <div class="card-body">
                    <div class="form-group">
                      <label><strong>Wealth:</strong></label>
                      <display-input-field
                        :bool="!box.wealth"
                        :id="box.id"
                        :property="'wealth'"
                        :displayValue="box.wealth"
                        :select="true"
                        :optionTable="stateTable"
                        :updateProgress="true"
                      ></display-input-field>
                    </div>

                    <div class="form-group">
                      <label><strong>B2B:</strong></label>
                      <display-input-field
                        :bool="!box.b2b"
                        :id="box.id"
                        :property="'b2b'"
                        :displayValue="box.b2b"
                        :select="true"
                        :optionTable="stateTable"
                        :updateProgress="true"
                      ></display-input-field>
                    </div>

                    <div class="form-group">
                      <label><strong>MMC:</strong></label>
                      <display-input-field
                        :bool="!box.mmc"
                        :id="box.id"
                        :property="'mmc'"
                        :displayValue="box.mmc"
                        :select="true"
                        :optionTable="stateTable"
                        :updateProgress="true"
                      ></display-input-field>
                    </div>

                    <div class="form-group">
                      <label><strong>Other (if necessary):</strong></label>
                      <display-input-field
                        :bool="!box.other"
                        :id="box.id"
                        :property="'other'"
                        :displayValue="box.other"
                        :select="true"
                        :optionTable="stateTable"
                        :updateProgress="true"
                      ></display-input-field>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-body">
              <label><strong>Comments</strong></label>
              <display-input-field
                :textarea="true"
                :bool="!box.comments"
                :displayValue="box.comments"
                :id="box.id"
                :property="'comments'"
              >
              </display-input-field>
            </div>
            <div class="tiny">{{ box.id }}</div>
            <div class="tiny">{{ refreshKey }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { DateTime } from "luxon";
import DisplayInputField from "./DisplayInputField.vue";
export default {
  props: ["box"],
  data() {
    return {
      isEditable: false,
      booleanTable: ["Yes", "No"],
      statusTable: ["In Progress", "Pending", "Done"],
      typeTable: ["Client", "Carrier"],
      stateTable: ["Ok", "FYA SP", "FYA Mail", "NR", "N/A", "Waiting for additional info", "Escalated"],
      maxProgress: 12,
      refreshKey: 0
    };
  },
  computed: {
    isDeleted() {
      return this.$store.getters.deleting
    },
    timeDisplay() {
      const status = this.box.status
      const time = this.box.timeVal 
      const today = DateTime.local().toISODate()
      if (time == today){
        return "Today!"
      } else {
        return this.box.tillDelivery
      }
    },
   timeChange() {
      const status = this.box.status
      const time = this.box.timeVal 
      const today = DateTime.local().toISODate()
      const inThreeDays = DateTime.local().plus({days: 3}).toISODate()
      if (time <= today && status != "Done"){
        return {
          'bg-danger': true,
          visible: true
        }
      } else if (time <= inThreeDays && status != "Done") {
        return {
          'bg-warning': true,
        }
      } else if (status == "Done"){
        return {
          'bg-success': true,
          visible: true
        }
      } 
    }
  },
  mounted() {
    setInterval(()=>{
      this.refreshKey +=1;
    },60000)
  },
  methods: {
    removeBox(idNumber) {
      this.$emit("boxRemoved", idNumber);
    },
  },
  components: {
    DisplayInputField,
  },
};
</script>

<style  scoped>
.quiver {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.arrow {
  height: 15px;
  width: 15px;
  background: transparent;
  border: 2px solid #343a40;
  border-left: transparent;
  border-top: transparent;
  transform: rotate(45deg) translate(-25%, -25%);
  animation: arrow-out 0.3s ease-out forwards;
}

.quiver:hover .arrow {
  animation: arrow-in 0.3s ease-out forwards;
}
.test-style {
  display: flex;
}
.visible {
  border: 1px solid red;
  color:whitesmoke
}
.tiny {
  text-align: center;
  font-size: smaller;
}
@keyframes arrow-in {
  from {
    border: 1px solid black;
    border-left: transparent;
    border-top: transparent;
    height: 15px;
    width: 15px;
  }
  to {
    border: 5px solid black;
    border-left: transparent;
    border-top: transparent;
    height: 20px;
    width: 20px;
  }
}
@keyframes arrow-out {
  from {
    border: 5px solid black;
    border-left: transparent;
    border-top: transparent;
    height: 20px;
    width: 20px;
  }
  to {
    border: 1px solid black;
    border-left: transparent;
    border-top: transparent;
    height: 15px;
    width: 15px;
  }
}
</style>