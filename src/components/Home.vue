
<template>
  <div class="homeBackground">
    <div
      style="
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      "
    >
      <div class="jumbotron">
        <h1 class="display-4" style="text-align: center">MMC Advantage</h1>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email:</label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="Enter email"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div class="d-flex justify-content-center">
          <button type="submit" class="btn btn-primary ">Login</button>
          </div>
        </form>
        <!-- <hr class="my-4" />

        <div style="display: flex; justify-content: space-around">
          <router-link
            to="/tracker"
            class="btn btn-outline-primary btn-lg"
            role="button"
            >MoC Tracker</router-link
          >
          <router-link
            to="/"
            class="btn btn-outline-primary btn-lg"
            role="button"
            >Team Bios</router-link
          >
          <router-link
            to="/"
            class="btn btn-outline-primary btn-lg"
            role="button"
            >Executive briefs</router-link
          >
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.homeBackground {
  background-color: linear-gradient(45deg, #009ddf, #00ac42);
  border: 1px solid transparent;
}
</style>