
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
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="email">Email:</label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="Enter email"
              v-model.trim="email"
            />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="Password"
              v-model.trim="password"
            />
          </div>
          <div class="d-flex justify-content-center">
            <button type="submit" class="btn btn-primary">Signup</button>
            <button type="submit" class="btn btn-primary">Login</button>
          </div>
          <p v-if="!formIsValid">Please enter a valid email and password!</p>
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
export default {
  data() {
    return {
      email: "",
      password: "",
      formIsValid: true,
    };
  },
  methods: {
    submitForm() {
      this.formIsValid = true;
      if (
        this.email === "" ||
        !this.email.includes("@") ||
        this.email.length < 6
      ) {
        this.formIsValid = false;
        return;
      }
    },
  },
};
</script>

<style scoped>
.homeBackground {
  background-color: linear-gradient(45deg, #009ddf, #00ac42);
  border: 1px solid transparent;
}
</style>