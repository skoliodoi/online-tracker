<template>
  <div>
    <div style="padding-top: 54px">
      <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <li class="nav-item">
              <button class="btn btn-success" @click="boxesVisible=true">Add New Box</button>
            </li>
          </ul>
          <form class="form-inline mx-auto my-2 my-lg-0">
            <select class="form-control"
            v-model="searchForBox">
              <option value selected disabled hidden>Choose a client from a dropdown list:</option>
              <option v-for="each in boxContents">{{ each.clientName }}</option>
            </select>
            <p style="margin: 10px; color: white">or</p>
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              v-model="searchForBox"
            />
            <button
              class="btn btn-outline-light my-2 my-sm-0"
              type="submit"
              @click.prevent="refreshInput"
            >Refresh</button>
          </form>
          <button class="btn btn-danger">Log out</button>
        </div>
      </nav>
    </div>
    <div>
      <app-box :boxes="filterBoxes" @boxRemoved="removeBox"></app-box>
    </div>
    <add-box v-if="boxesVisible" @addingCanceled="cancelBox"></add-box>
  </div>
</template>

<script>
import { tableBus } from "./main.js";
import Box from "./components/Boxes/Box.vue";
import AddBox from "./components/AddBox.vue";
export default {
  data() {
    return {
      id: 0,
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
        this.boxContents.splice(deleteBox, 1);
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
        this.boxContents.push({
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
.visible {
  border: 1px solid red;
 
}
</style>
