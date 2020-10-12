<template>
  <div>
    <div 
    v-if="!isEditable" 
    @click="makeEditable"
    class="btn container"
    :class="changeClasses">
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
          @click="updateProgressBar(
          {id,
          property,
          value: newDisplay,
          updateProgress: update}); 
          changeDisplay()">
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
import { mapActions } from "vuex";
export default {
  data() {
    return {
      classes: {
        progressMade: false,
        fya: true,
        noChange: false
      },
      isEditable: false,
      display: "",
      newDisplay: "",
      progress: this.updateProgress
    };
  },
  computed: {
    update() {
      return this.progress
    },
    changeClasses() {
      if (this.display == "Ok"){
        return {
          'btn-success': true
        }
      } else if (this.display == "NR"||this.display == "N/A"){
        return {
          'btn-secondary': true
        }
      } else if (this.display == "FYA SP"||this.display == "FYA Mail"){
        return {
          'btn-warning': true
        }
      } else {
        return {
          'btn-light': true
        }
      }
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
    "updateProgress",
    "changeClass"
  ],
  mounted() {
    this.isEditable = this.bool;
    this.display = this.displayValue;
    this.progress = this.updateProgress;
  },
  methods: {
    ...mapActions(['updateProgressBar']),
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
.box-field:hover {
  cursor: pointer;
;
}
.visible {
  border: 1px solid red;
}
.small {
  width: 75%;
}
</style>