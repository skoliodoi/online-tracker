<template>
  <div>
    <div
      v-if="!isEditable"
      @click="makeEditable"
      class="btn container"
      :class="changeClasses"
    >
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
          v-on:change="changeDisplay();
          updateProgressBar(
          {id,
          property,
          value: newDisplay,
          updateProgress: update});
          "
        >
          <option value selected disabled hidden>Choose:</option>
          <option v-for="each in optionTable">
            {{ each }}
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
    <div
    v-if="showCheckbox" 
    class="form-check form-check-inline d-flex justify-content-between">
      <div>
        <input
          class="form-check-input"
          type="checkbox"
          id="inlineCheckbox1"
          value="option1"
        />
        <label class="form-check-label" for="inlineCheckbox1">Reminder 1</label>
      </div>
      <div>
        <input
          class="form-check-input"
          type="checkbox"
          id="inlineCheckbox1"
          value="option1"
        />
        <label class="form-check-label" for="inlineCheckbox1">Reminder 2</label>
      </div>
    </div>
  </div>
</template>

<script>
import { DateTime } from "luxon";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      classes: "",
      isEditable: false,
      display: "",
      newDisplay: "",
      progress: this.updateProgress,
    };
  },
  computed: {
    showCheckbox() {
      if (this.display == "No input") {
        return true
      }
    },
    update() {
      return this.progress;
    },
    changeClasses() {
      if (this.display == "Ok") {
        return {
          "btn-success": true,
        };
      } else if (this.display == "N/A") {
        return {
          "btn-secondary": true,
        };
      } else if (
        this.display == "NR" ||
        this.display == "FYA SP" ||
        this.display == "FYA Mail"
      ) {
        return {
          "btn-info": true,
        };
      } else if (this.classes) {
        return {
          "btn-outline-light": true,
          visible: true,
        };
      } else {
        return {
          "btn-outline-dark": true,
        };
      }
    },
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
    "updateProgress",
    "changeClass",
    "headerClass",
  ],
  mounted() {
    this.isEditable = this.bool;
    this.display = this.displayValue;
    this.progress = this.updateProgress;
    this.classes = this.headerClass;
  },
  methods: {
    ...mapActions(["updateProgressBar"]),
    makeEditable() {
      this.isEditable = !this.isEditable;
      this.newDisplay = this.display;
    },
    changeDisplay() {
      this.isEditable = !this.isEditable;
      if (this.inputType == "date") {
        this.display = DateTime.fromISO(this.newDisplay).toLocaleString(
          DateTime.DATE_HUGE
        );
      } else {
        this.display = this.newDisplay;
      }
      this.$store.dispatch("updateContents", {
        id: this.id,
        property: this.property,
        value: this.newDisplay,
        input: this.inputType,
      });
    },
  },
};
</script>

<style scoped>
.box-field {
  cursor: pointer;
}

.visible {
  border: 1px solid whitesmoke;
}
.small {
  width: 75%;
}
</style>