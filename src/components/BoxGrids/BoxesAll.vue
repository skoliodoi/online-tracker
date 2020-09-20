<template>
  <div :class="{'redBod': redBackground}">
    <div>
      <app-box :boxes="filterBoxes" @boxRemoved="removeBox"></app-box>
    </div>
    <add-box v-if="boxesVisible" @addingCanceled="cancelBox"></add-box>
  </div>
</template>

<script>
import { tableBus } from "../../main.js";
import Box from "../Boxes/Box.vue";
import AddBox from "../AddBox.vue";
export default {
  data() {
    return {
      id: 0,
      greenBackground: false,
      redBackground: false,
      boxesVisible: false,
      searchForBox: "",
      boxContents: [
        {
          clientName: "Godzilla",
          id: 111,
        },
        {
          clientName: "Ghidora",
          id: 112,
        },
        {
          clientName: "Mothra",
          id: 113,
        },
        {
          clientName: "Rodan",
          id: 114,
        },
        {
          clientName: "Gundam",
          id: 115,
        },
        {
          clientName: "EVA-01",
          id: 116,
        },
        {
          clientName: "Totoro",
          id: 117,
        },
        {
          clientName: "Mechagodzilla",
          id: 118,
        },
        {
          clientName: "Bumblebee",
          id: 119,
        },
        {
          clientName: "Optimus Prime",
          id: 120,
        },
        {
          clientName: "Megatron",
          id: 121,
        },
      ],
    };
  },
  computed: {
    filterBoxes() {
      return this.boxContents.filter((element) => {
        return element.clientName.match(this.searchForBox);
      });
    },
  },
  components: {
    appBox: Box,
    addBox: AddBox,
  },
  methods: {
    removeBox(idNumber) {
      const deleteBox = this.boxContents
        .map((item) => {
          return item.id;
        })
        .indexOf(idNumber);
      if (confirm("Are you sure you want to remove this component?")) {
        this.redBackground = true;
        this.boxContents.splice(deleteBox, 1);
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
        this.boxContents.unshift({
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