<template>
  <div style="padding-top: 100px">
    <nav style="height: 100px" class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item">
            <button
              class="btn btn-success"
              @click="boxesVisible=true, divBackground=true"
            >Add New Box</button>
          </li>
        </ul>
        <form class="form-inline mx-auto my-2 my-lg-0 visible">
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
          <ul class="navbar-nav ml-5">
             <router-link tag="li" 
             to="/wip"
             class="nav-item"><button class="btn btn-outline-light">
               In Progress
               </button>
             </router-link>
             <router-link tag="li" 
             to="/complete"
             class="nav-item"><button class="btn btn-outline-light">
               Completed
               </button>
             </router-link>
             <router-link tag="li" 
             to="/"
             class="nav-item"><button class="btn btn-outline-light">
               All
               </button>
             </router-link>
          </ul>
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