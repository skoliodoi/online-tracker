<template>
  <div>
    <transition-group name="slide" mode="out-in">
      <div v-for="box in boxes" :key="box.id">
        <div class="accordion" :id="'accordion'+box.id">
          <div class="card">
            <div class="card-header bg-light" style="display:inline-block" :id="'heading'
            +box.id">
              <div class="visible" style="display: flex">
                <div class="col quiver visible"
                  data-toggle="collapse"
                  :data-target="'#collapse-'+box.id"
                  aria-expanded="false"
                  :aria-controls="'collapse-'+box.id"
                >
                <div
                  class="arrow"
                ></div>
                </div>
                <button
                  class="btn btn-outline-dark container text-left"
                  style="border: none"
                  type="button"
                >{{ box.clientName }}</button>
                <div class="container visible text-left my-auto">
                  <p class="my-auto">Days till meeting: 20</p>
                </div>
                <div class="container visible text-left my-auto">
                  <p class="my-auto">Progress:</p>
                </div>
                <button
                  class="btn btn-danger text-right ml-5"
                  @click="removeBox(box.id)"
                  v-html="'<strong>X</strong>'"
                ></button>
              </div>
            </div>

            <div
              :id="'collapse-'+box.id"
              class="collapse"
              :aria-labelledby="'heading'+box.id"
              :data-parent="'#accordion'+box.id"
            >
              <div class="container-fluid">
                <div class="row">
                  <div id="col-one" class="col-sm">
                    <div class="card-body">
                      <label>Confirmed?</label>
                      <display-input-field :bool="false" :displayValue="box.confirmed"></display-input-field>

                      <label>Type:</label>
                      <display-input-field :bool="false" :displayValue="box.briefType"></display-input-field>

                      <label>Status:</label>
                      <display-input-field :bool="false" :displayValue="box.setStatus"></display-input-field>

                      <label>For:</label>
                      <display-input-field :bool="false" :displayValue="box.whoFor"></display-input-field>

                      <label>Who is the meeting with:</label>
                      <display-input-field :bool="false" :displayValue="box.whoWith"></display-input-field>

                      <label>Meeting date:</label>
                      <display-input-field :bool="false" :displayValue="box.whoWith"></display-input-field>
                    </div>
                  </div>

                  <div id="col-two" class="col-sm">
                    <div class="card-body">
                      <label>Start:</label>
                      <display-input-field :bool="false" :displayValue="box.confirmed"></display-input-field>
                      <label>Delivery Date:</label>
                      <display-input-field :bool="false" :displayValue="box.confirmed"></display-input-field>
                      <label>OpCo deadline:</label>
                      <display-input-field :bool="false" :displayValue="box.confirmed"></display-input-field>
                      <label>Reminder 1:</label>
                      <display-input-field :bool="false" :displayValue="box.confirmed"></display-input-field>
                      <label>Reminder 2:</label>
                      <display-input-field :bool="false" :displayValue="box.confirmed"></display-input-field>
                    </div>
                  </div>

                  <div id="col-three" class="col-sm">
                    <div class="card-body">
                      <label>Mercer Client:</label>
                      <display-input-field :bool="true"></display-input-field>
                      <label>Marsh Client:</label>
                      <display-input-field :bool="true"></display-input-field>
                      <label>OW Client:</label>
                      <display-input-field :bool="true"></display-input-field>
                      <label>GC Client:</label>
                      <display-input-field :bool="true"></display-input-field>
                    </div>
                  </div>

                  <div id="col-four" class="col-sm">
                    <div class="card-body">
                      <label>MMB (Jeffrey):</label>
                      <display-input-field :bool="true"></display-input-field>
                      <label>Marsh Carrier:</label>
                      <display-input-field :bool="true"></display-input-field>
                      <label>OW Carrier:</label>
                      <display-input-field :bool="true"></display-input-field>
                      <label>GC Carrier:</label>
                      <display-input-field :bool="true"></display-input-field>
                    </div>
                  </div>

                  <div id="col-five" class="col-sm">
                    <div class="card-body">
                      <label>Wealth (Lindsey):</label>
                      <display-input-field :bool="true"></display-input-field>
                      <label>B2B:</label>
                      <display-input-field :bool="true"></display-input-field>
                      <label>MMC:</label>
                      <display-input-field :bool="true"></display-input-field>
                      <label>Other:</label>
                      <display-input-field :bool="true"></display-input-field>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <label>Comments</label>
                <textarea style="width: 100%; height: 7em"></textarea>
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
import DisplayInputField from "./DisplayInputField.vue";
export default {
  props: ["boxes"],
  data() {
    return {
      isEditable: false,
    };
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
  align-items:center;
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
}

.arrow:hover {
  animation: arrow 0.3s ease-out forwards;
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

@keyframes arrow {
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
</style>