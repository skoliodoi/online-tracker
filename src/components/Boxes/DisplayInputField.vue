<template>
  <div>
    <div class="box-field" v-if="!isEditable" @click="makeEditable">
      <slot> {{ display }}</slot>
    </div>
    <div v-else>
      <div v-if="input">
        <input
          class="form-control"
          :type="inputType"
          v-model="newDisplay"
          v-on:keyup.enter="changeDisplay"
        />
      </div>
      <div v-if="select">
        <select
          class="form-control"
          v-model="newDisplay"
          v-on:keyup.enter="changeDisplay"
        >
          <option value selected disabled hidden>
            Choose:
          </option>
          <option v-for="each in optionTable"
          @click="updateProgressBar(); changeDisplay()">
            {{each}}
          </option>
        </select>
      </div>
      <div v-if="textarea">
        <textarea
          class="form-control"
          style="width: 100%; height: 7em"
          :type="inputType"
          v-model="newDisplay"
        >
        </textarea>
        <button @click="changeDisplay" class="btn btn-primary">
          Save comment
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { DateTime } from 'luxon';
export default {
  data() {
    return {
      isEditable: false,
      display: "",
      newDisplay: "",
      progress: this.updateProgress
    };
  },
  computed: {
    update() {
      return this.progress
    }
  },
  props: [
    "bool",
    "displayValue",
    "id",
    "property",
    "inputType",
    "input",
    "select",
    "textarea",
    "optionTable",
    "updateProgress"
  ],
  mounted() {
    this.isEditable = this.bool;
    this.display = this.displayValue;
    this.progress = this.updateProgress;
  },
  methods: {
    makeEditable() {
      this.isEditable = !this.isEditable;
      this.newDisplay = this.display;
    },
    changeDisplay() {
      this.isEditable = !this.isEditable;
      if (this.inputType == "date") {
      this.display = DateTime.fromISO(this.newDisplay).toLocaleString(DateTime.DATE_HUGE);
      } else {
        this.display = this.newDisplay;
      }
      this.$store.commit("updateContents", {
        id: this.id,
        property: this.property,
        value: this.newDisplay,
        input: this.inputType,
      });
    },
    updateProgressBar() {
      this.$store.commit("updateProgressBar", {
        id: this.id,
        property: this.property,
        value: this.newDisplay,
        updateProgress: this.update
      });
    }
  },
};
</script>

<style scoped>
.box-field {
  cursor: pointer;
}
.box-field:hover {
  background: crimson;
  cursor: pointer;
}
.visible {
  border: 1px solid red;
}
.small {
  width: 75%;
}
</style>