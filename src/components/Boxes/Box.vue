<template>
  <div>
    <div v-for="(box, index) in boxes" :key="box.id">
      <div class="accordion" :id="'accordion'+box.id">
        <div class="card">
          <div class="card-header" :id="'heading'+box.id">
            <div class="test-style">
              <button
                class="btn btn-link container-fluid text-left"
                type="button"
                data-toggle="collapse"
                :data-target="'#collapse-'+box.id"
                aria-expanded="false"
                :aria-controls="'collapse-'+box.id"
              >{{ box.clientName }}</button>
              <p>Days till meeting:</p>
              <button class="btn btn-danger text-right" @click="removeBox(box.id)">X</button>
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
            <div>
              <label>Comments</label>
              <textarea style="width: 100%; height: 7em"></textarea>
            </div>
            <div class="tiny">#{{ box.id }}</div>
          </div>
        </div>
      </div>
    </div>
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
</style>