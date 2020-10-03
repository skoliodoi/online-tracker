<template>
  <div>
    <transition-group name="slide" mode="out-in">
      <div v-for="box in boxes" :key="box.id">
        <div class="accordion" :id="'accordion' + box.id">
          <div class="card">
            <div
              class="card-header"
              style="display: inline-block; background: #f6f7f8"
              :id="'heading' + box.id"
            >
              <div class="visible" style="display: flex">
                <div
                  class="col quiver visible"
                  data-toggle="collapse"
                  :data-target="'#collapse-' + box.id"
                  aria-expanded="false"
                  :aria-controls="'collapse-' + box.id"
                >
                  <div class="arrow"></div>
                </div>
                <display-input-field
                  class="btn btn-outline-dark container text-left"
                  style="border: none"
                  :displayValue="box.clientName"
                  :id="box.id"
                  :input="true"
                  :property="'clientName'"
                ></display-input-field>
                <display-input-field
                  class="container visible text-left col-2 my-auto"
                  :select="true"
                  :displayValue="box.status"
                  :id="box.id"
                  :optionTable="statusTable"
                  :property="'status'"
                >
                </display-input-field>
                <div class="container visible text-left col-2 my-auto">
                  <p class="my-auto">Delivery: {{ box.tillDelivery }}</p>
                </div>
                <div class="container visible text-left col-2 my-auto">
                  <p class="my-auto">{{ box.progress }}</p>
                </div>
                <div class="container text-left my-auto col-3">
                  <div class="progress">
                    <div
                      class="progress-bar bg-success"
                      role="progressbar"
                      style="width: 100%"
                      aria-valuemin="0"
                      aria-valuemax="120"
                    ></div>
                  </div>
                </div>
                <button
                  class="btn btn-danger text-right ml-5"
                  @click="removeBox(box.id)"
                  v-html="'<strong>X</strong>'"
                ></button>
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
                      <label>Confirmed?</label>
                      <display-input-field
                        :bool="!box.confirmed"
                        :displayValue="box.confirmed"
                        :id="box.id"
                        :property="'confirmed'"
                        :select="true"
                        :optionTable="booleanTable"
                      ></display-input-field>

                      <label>Type:</label>
                      <display-input-field
                        :bool="!box.briefType"
                        :displayValue="box.briefType"
                        :id="box.id"
                        :property="'briefType'"
                        :select="true"
                        :optionTable="typeTable"
                      ></display-input-field>

                      <label>For:</label>
                      <display-input-field
                        :bool="!box.whoFor"
                        :displayValue="box.whoFor"
                        :id="box.id"
                        :property="'whoFor'"
                        :input="true"
                      ></display-input-field>

                      <label>Who is the meeting with:</label>
                      <display-input-field
                        :bool="!box.whoWith"
                        :displayValue="box.whoWith"
                        :id="box.id"
                        :property="'whoWith'"
                        :input="true"
                      ></display-input-field>

                      <label>Meeting date:</label>
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

                  <div id="col-two" class="col-sm">
                    <div class="card-body">
                      <label>Start:</label>
                      <display-input-field
                        :bool="!box.startDate"
                        :displayValue="box.startDate"
                        :id="box.id"
                        :property="'startDate'"
                        :input="true"
                        :inputType="'date'"
                      ></display-input-field>

                      <label>Delivery Date:</label>
                      <display-input-field
                        :bool="!box.delivery"
                        :displayValue="box.delivery"
                        :id="box.id"
                        :property="'delivery'"
                        :input="true"
                        :inputType="'date'"
                      ></display-input-field>

                      <label>OpCo deadline:</label>
                      <display-input-field
                        :bool="!box.deadline"
                        :displayValue="box.deadline"
                        :id="box.id"
                        :property="'deadline'"
                        :input="true"
                        :inputType="'date'"
                      ></display-input-field>

                      <label>Reminder 1:</label>
                      <display-input-field
                        :bool="false"
                        :displayValue="box.confirmed"
                      ></display-input-field>

                      <label>Reminder 2:</label>
                      <display-input-field
                        :bool="false"
                        :displayValue="box.confirmed"
                      ></display-input-field>
                    </div>
                  </div>

                  <div id="col-three" class="col-sm">
                    <div class="card-body">
                      <label>Mercer Client:</label>
                      <display-input-field
                        :bool="!box.mercerClient"
                        :id="box.id"
                        :property="'mercerClient'"
                        :displayValue="box.mercerClient"
                        :select="true"
                        :optionTable="stateTable"
                        :updateProgress="true"
                      >
                      </display-input-field>
                      <label>Marsh Client:</label>
                      <display-input-field
                        :bool="!box.marshClient"
                        :id="box.id"
                        :property="'marshClient'"
                        :displayValue="box.marshClient"
                        :select="true"
                        :optionTable="stateTable"
                      ></display-input-field>

                      <label>OW Client:</label>
                      <display-input-field
                        :bool="!box.owClient"
                        :id="box.id"
                        :property="'owClient'"
                        :displayValue="box.owClient"
                        :select="true"
                        :optionTable="stateTable"
                      ></display-input-field>

                      <label>GC Client:</label>
                      <display-input-field
                        :bool="!box.gcClient"
                        :id="box.id"
                        :property="'gcClient'"
                        :displayValue="box.gcClient"
                        :select="true"
                        :optionTable="stateTable"
                      ></display-input-field>
                    </div>
                  </div>

                  <div id="col-four" class="col-sm">
                    <div class="card-body">
                      <label>MMB (Jeffrey):</label>
                      <display-input-field
                        :bool="!box.mmb"
                        :id="box.id"
                        :property="'mmb'"
                        :displayValue="box.mmb"
                        :select="true"
                        :optionTable="stateTable"
                      ></display-input-field>

                      <label>Marsh Carrier:</label>
                      <display-input-field
                        :bool="!box.marshCarrier"
                        :id="box.id"
                        :property="'marshCarrier'"
                        :displayValue="box.marshCarrier"
                        :select="true"
                        :optionTable="stateTable"
                      ></display-input-field>

                      <label>OW Carrier:</label>
                      <display-input-field
                        :bool="!box.owCarrier"
                        :id="box.id"
                        :property="'owCarrier'"
                        :displayValue="box.owCarrier"
                        :select="true"
                        :optionTable="stateTable"
                      ></display-input-field>

                      <label>GC Carrier:</label>
                      <display-input-field
                        :bool="!box.gcCarrier"
                        :id="box.id"
                        :property="'gcCarrier'"
                        :displayValue="box.gcCarrier"
                        :select="true"
                        :optionTable="stateTable"
                      ></display-input-field>
                    </div>
                  </div>

                  <div id="col-five" class="col-sm">
                    <div class="card-body">
                      <label>Wealth (Lindsey):</label>
                      <display-input-field
                        :bool="!box.wealth"
                        :id="box.id"
                        :property="'wealth'"
                        :displayValue="box.wealth"
                        :select="true"
                        :optionTable="stateTable"
                      ></display-input-field>

                      <label>B2B:</label>
                      <display-input-field
                        :bool="!box.b2b"
                        :id="box.id"
                        :property="'b2b'"
                        :displayValue="box.b2b"
                        :select="true"
                        :optionTable="stateTable"
                      ></display-input-field>

                      <label>MMC:</label>
                      <display-input-field
                        :bool="!box.mmc"
                        :id="box.id"
                        :property="'mmc'"
                        :displayValue="box.mmc"
                        :select="true"
                        :optionTable="stateTable"
                      ></display-input-field>

                      <label>Other (if necessary):</label>
                      <display-input-field
                        :bool="!box.other"
                        :id="box.id"
                        :property="'other'"
                        :displayValue="box.other"
                        :select="true"
                        :optionTable="stateTable"
                      ></display-input-field>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <label>Comments</label>
                <display-input-field
                  :textarea="true"
                  :bool="!box.comments"
                  :displayValue="box.comments"
                  :id="box.id"
                  :property="'comments'"
                >
                </display-input-field>
              </div>
              <div class="tiny">#{{ box.id }}</div>
            </div>
          </div>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
import { DateTime } from "luxon";
import DisplayInputField from "./DisplayInputField.vue";
export default {
  props: ["boxes"],
  data() {
    return {
      isEditable: false,
      booleanTable: ["Yes", "No"],
      statusTable: ["In Progress", "Pending", "Done"],
      typeTable: ["Client", "Carrier"],
      stateTable: ["Ok", "FYA SP", "FYA Mail", "NR", "N/A", "Escalated"],
    };
  },
  computed: {
    name() {
      return this.$store.getters.name;
    },
    formatDate(date) {
      if (date.isValid) {
        return date.toLocaleString(DateTime.DATE_MED)
      } else {
        return "N/A"
      }
    },
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
}
.tiny {
  text-align: center;
  font-size: smaller;
}
.slide-enter {
}
.slide-enter-active {
  animation: slide-in 0.7s ease-out forwards;
}
.slide-leave {
}
.slide-leave-active {
  animation: slide-out 0.7s ease-out forwards;
  position: absolute;
}

.slide-move {
  transition: transform 1s;
}

@keyframes slide-in {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes slide-out {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
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