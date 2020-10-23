<template>
  <div style="padding-top: 75px">
    <nav
      style="height: 75px; background: #003865; z-index: 10"
      class="navbar fixed-top navbar-expand-lg navbar-dark"
    >
      <div
        class="collapse navbar-collapse  d-flex justify-content-between"
        id="navbarSupportedContent"
      >
        <div class="my-auto" style="color: white">
          <div class="dropdown">
            <div class="dropdown">
              <button
                class="btn btn-success dropdown-toggle"
                type="button"
                id="dropdownMenu2"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <strong>Welcome, {{ username }}!</strong>
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                <button
                  class="dropdown-item"
                  type="button"
                  @click="addBoxDisplay"
                >
                  Add a new brief
                </button>
                <button class="dropdown-item" type="button">
                  Change password
                </button>
                <div class="dropdown-divider"></div>
                <button class="dropdown-item" type="button" @click="logOut">
                  <strong>Logout</strong>
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- <li class="nav-item">
            <button class="btn btn-outline-light" @click="addBoxDisplay">
              Add New Brief
            </button>
          </li> -->
        <div>
          <ul class="nav nav-pills">
            <li class="nav-item" @click="changeLink('In Progress')">
              <a class="nav-link" data-toggle="tab" style="color: whitesmoke"
                >In Progress</a
              >
            </li>
            <li class="nav-item" @click="changeLink('Pending')">
              <a class="nav-link" data-toggle="tab" style="color: whitesmoke"
                >Pending</a
              >
            </li>
            <li class="nav-item" @click="changeLink('Done')">
              <a class="nav-link" data-toggle="tab" style="color: whitesmoke"
                >Completed</a
              >
            </li>
            <li class="nav-item" @click="changeLink('All')">
              <a
                class="nav-link active"
                data-toggle="tab"
                style="color: whitesmoke"
                >All</a
              >
            </li>
          </ul>
        </div>
        <div>
          <form class="form-inline my-lg-0">
            <select class="form-control" v-model="filterBoxes">
              <option value selected disabled hidden>
                Choose a client from a list:
              </option>
              <option v-for="each in boxes">
                {{ each.clientName }}
              </option>
            </select>
            <p style="margin: 10px; color: white">or</p>
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search manually"
              aria-label="Search"
              v-model="filterBoxes"
            />
            <button
              class="btn btn-danger my-2 my-sm-0"
              type="submit"
              @click.prevent="clearSearch"
            >
              Clear
            </button>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  computed: {
    boxes() {
      return this.$store.getters.filteredList;
    },
    username() {
      return this.$store.getters.displayName;
    },
    filterBoxes: {
      get() {
        return this.$store.getters.searchbar;
      },
      set(value) {
        this.$store.dispatch("updateSearch", value);
      },
    },
  },
  methods: {
    ...mapActions(["addBoxDisplay", "changeLink", "clearSearch", "logout"]),
    logOut() {
      this.logout();
      this.$router.replace("/");
    },
  },
};
</script>

<style scoped>
.visible {
  border: 1px solid red;
}
a:hover {
  cursor: pointer;
}
</style>