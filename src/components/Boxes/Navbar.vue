<template>
  <div style="padding-top: 100px">
    <nav
      style="height: 100px; background: #003865"
      class="navbar fixed-top navbar-expand-lg navbar-dark"
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
                class="nav-link"
                style="color: white"
                active-class="active"
                exact
                >Pending</a
              >
            </li>
            <li class="nav-item" @click="changeLink('Done')">
              <a
                class="nav-link"
                style="color: white"
                active-class="active"
                exact
                >Done</a
              >
            </li>

            <li class="nav-item" @click="changeLink('All')">
              <a
                class="nav-link"
                style="color: white"
                active-class="active"
                exact
                >All</a
              >
            </li>
          </ul>
          <select class="form-control" v-model="filterBoxes">
            <option value selected disabled hidden>
              Choose a client from a dropdown list:
            </option>
            <option v-for="each in boxes">
              {{ each.clientName }}
            </option>
          </select>
          <p style="margin: 10px; color: white">or</p>
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            v-model="filterBoxes"
          />
          <button
            class="btn btn-outline-danger my-2 my-sm-0"
            type="submit"
            @click.prevent="clearSearch"
          >
            Clear
          </button>
        </form>
        <router-link tag="button" to="/" class="btn btn-danger">Log out</router-link>
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
        <li class="nav-link" style="color: red">THIS WILL GET DELETED LATER</li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";
export default {
  computed: {
    boxes() {
      return this.$store.getters.filteredList;
    },
    filterBoxes: {
      get() {
        return this.$store.getters.searchbar
      },
      set(value) {
        this.$store.dispatch('updateSearch', value)
      }
    },
  },
  methods: {
    ...mapActions([
      'addBoxDisplay',
      'changeLink',
      'clearSearch'
      ]),
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