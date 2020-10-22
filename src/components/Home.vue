
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
        <h2 class="display-5" style="text-align: center">Welcome to the MMC Advantage Homepage</h2>
        <p>Login using your credentials:</p>
        <form>
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
          <router-link tag="button" to="/tracker" class="btn btn-warning"
          >Go to trakcer</router-link>
            <button type="submit" 
            class="btn btn-primary"
            @click.prevent="logIn">Login</button>
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
      isLoading: false,
      error: null,
    };
  },
    created(){
    this.$store.dispatch('autoLogin')
    console.log('From Home: ' + this.$store.getters.isAuthenticated)
  },
  computed: {
    displayError() {
      return alert(this.error)
    },
    displayLoading() {
      return this.isLoading
    }
  },
  methods: {
    async signUp() {
      this.formIsValid = true;
      if (
        this.email === "" ||
        !this.email.includes("@") ||
        this.email.length < 6
      ) {
        this.formIsValid = false;
        return;
      }
      this.isLoading = true;
      try {
        await this.$store.dispatch("signup", {
          email: this.email,
          password: this.password,
        });
      } catch (err) {
        this.error = err.message || "Failed to authenticate. Try again later.";
      }
      this.isLoading = false;
    },
    async logIn() {
      this.formIsValid = true;
      if (
        this.email === "" ||
        !this.email.includes("@") ||
        this.email.length < 6
      ) {
        this.formIsValid = false;
        return;
      }
      this.isLoading = true;
      try {
        await this.$store.dispatch("login", {
          email: this.email,
          password: this.password,
        });
        this.$router.replace('/tracker')
      } catch (err) {
        this.error = err.message || "Failed to authenticate. Try again later.";
      }
      this.isLoading = false;
    },
  },
};
</script>

<style scoped>
.homeBackground {
  background-color: linear-gradient(45deg, #009ddf, #00ac42);
  border: 1px solid transparent;
}
.add-box {
  height: 32em;
  width: 50em;
  background-color: white;
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 100;
  opacity: 1;
  margin-top: -16em;
  margin-left: -25em;
}
</style>