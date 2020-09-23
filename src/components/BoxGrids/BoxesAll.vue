<template>
  <div :class="{'redBod': redBackground}">
      <app-box 
      :boxes="filterBoxes" 
      @boxRemoved="removeBox"></app-box>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { tableBus } from "../../main.js";
import Box from "../Boxes/Box.vue";
export default {
  data() {
    return {
      id: 0,
      greenBackground: false,
      redBackground: false,
      searchForBox: "",
    };
  },
  computed: {
    ...mapGetters([
      'allBoxContents',
    ]),
    filterBoxes() {
      return this.allBoxContents.filter((element) => {
        return element.clientName.match(this.searchForBox);
      });
    },
  },
  components: {
    appBox: Box,
  },
  methods: {
    removeBox(idNumber) {
      const deleteBox = this.allBoxContents
        .map((item) => {
          return item.id;
        })
        .indexOf(idNumber);
      if (confirm("Are you sure you want to remove this component?")) {
        this.redBackground = true;
        this.allBoxContents.splice(deleteBox, 1);
        setTimeout(() => {
          this.redBackground = false;
        }, 1000);
      }
      this.refreshInput();
    },
    cancelBox(value) {
      this.boxesVisible = value;
    },
    refreshInput() {
      this.searchForBox = "";
    },
  },
  created() {
    tableBus.$on(
      "addBox",
      (
        clientName,
        confirmed,
        briefType,
        setStatus,
        whoFor,
        whoWith,
        startDate,
        meetDate,
        deadline,
        delDate
      ) => {
        this.boxesVisible = true;
        this.allBoxContents.unshift({
          id: (this.id += 1),
          clientName,
          confirmed,
          briefType,
          setStatus,
          whoFor,
          whoWith,
          startDate,
          meetDate,
          deadline,
          delDate,
        });
      }
    );
  },
};
</script>

<style scoped>
.greenBod {
  background: #6a8d73;
}

.redBod {
  background: #f25f5c;
}
</style>