<template>
  <div :class="{ redBod: redBackground }">
    <div style="padding-top: 100px">
      <nav
        style="height: 100px"
        class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark"
      >
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav col-1">
            <li class="nav-item">
              <button class="btn btn-success" @click="addBoxDisplay">
                Add New Box
              </button>
            </li>
          </ul>
          <form class="form-inline mx-auto my-lg-0 col">
            <ul class="nav nav-pills mr-2">
              <li class="nav-item" @click="changeLink('In Progress')">
                <a
                  class="nav-link"
                  style="color: white"
                  active-class="active"
                  exact
                  >In Progress</a
                >
              </li>
              <li class="nav-item" @click="changeLink('Pending')">
                <a
                  :to="{ name: 'pending' }"
                  class="nav-link"
                  style="color: white"
                  active-class="active"
                  exact
                  >Pending</a
                >
              </li>
              <li class="nav-item" @click="changeLink('Done')">
                <a
                  :to="{ name: 'done' }"
                  class="nav-link"
                  style="color: white"
                  active-class="active"
                  exact
                  >Done</a
                >
              </li>

              <li class="nav-item" @click="changeLink('All')">
                <a
                  :to="{ name: 'all' }"
                  class="nav-link"
                  style="color: white"
                  active-class="active"
                  exact
                  >All</a
                >
              </li>
            </ul>
            <select class="form-control" v-model="searchForBox">
              <option value selected disabled hidden>
                Choose a client from a dropdown list:
              </option>
              <option v-for="each in filteredList">{{ each.clientName }}</option>
            </select>
            <p style="margin: 10px; color: white">or</p>
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              v-model="searchForBox"
            />
            <p>{{ searchForBox }}</p>
            <button
              class="btn btn-outline-danger my-2 my-sm-0"
              type="submit"
              @click.prevent="refreshInput"
            >
              Clear
            </button>
          </form>
          <button class="btn btn-danger">Log out</button>
        </div>
      </nav>
      <div>
        <ul class="nav nav-pills">
          <a to="/" tag="li" active-class="active" exact>
            <a class="nav-link">All</a>
          </a>
          <a to="/wip" tag="li" active-class="active">
            <a class="nav-link">WIP</a>
          </a>
          <li class="nav-link" style="color: red">
            THIS WILL GET DELETED LATER
          </li>
        </ul>
      </div>
    </div>
    <!--<app-navbar></app-navbar>-->
    <app-box :boxes="filteredList" @boxRemoved="removeBox"></app-box>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { tableBus } from "../../main.js";
import Box from "../Boxes/Box.vue";
import Navbar from "../Navbar.vue";
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
    ...mapGetters(["allBoxContents", "filteredList"]),
  },
  components: {
    appBox: Box,
    appNavbar: Navbar,
  },
  methods: {
    addBoxDisplay() {
      this.$store.dispatch("addBoxDisplay");
    },
    changeLink(value) {
      this.$store.commit("changeLink", value);
    },
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

    refreshInput() {
      this.searchForBox = "";
    },
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