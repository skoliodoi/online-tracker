<template>
  <div style="padding-top: 100px">
    <nav style="height: 100px" class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav col-1">
          <li class="nav-item">
            <button
              class="btn btn-success"
              @click="boxesVisible=true, divBackground=true"
            >Add New Box</button>
          </li>
        </ul>

        <form class="form-inline mx-auto my-2 my-lg-0 col-5">
          <ul class="nav nav-pills mr-2">
            <li class="nav-item">
              <router-link to="/completed" class="nav-link"
              style="color: white;"
              active-class="active" exact>Completed</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/wip" class="nav-link"
              style="color: white;"
              active-class="active" exact>In Progress</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/" class="nav-link"
              style="color: white;"
              active-class="active" exact>All</router-link>
            </li>


          </ul>
          <select class="form-control" v-model="searchForBox">
            <option value selected disabled hidden>Choose a client from a dropdown list:</option>
            <option v-for="each in boxes">{{ each.clientName }}</option>
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
            class="btn btn-outline-danger my-2 my-sm-0"
            type="submit"
            @click.prevent="refreshInput"
          >Clear</button>
        </form>
        <button class="btn btn-danger">Log out</button>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  props: ["boxes"],
};
</script>

<style scoped>
.visible {
  border: 1px solid red;
}


</style>