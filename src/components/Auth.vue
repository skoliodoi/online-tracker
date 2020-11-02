
<template>
  <div class="homeBackground">
    <div
      class="card"
      style="
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-51%, -50%);
      "
    >
      <div>
        <div class="card-header bg-danger" style="color: whitesmoke">
          <h1
            class="display-2 p-4"
            style="text-align: center; font-family: 'Open Sans', sans-serif"
          >
            Oops!!!
          </h1>
          <p>You might be lost. You need to be logged in to see this page!</p>
        </div>
        <div class="card-body" v-if="!goToReset">
          <div class="d-flex justify-content-center"></div>
          <form>
            <div class="form-group w-75 mx-auto">
              <label for="email">Email:</label>
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Enter email"
                v-model.trim="email"
              />
            </div>
            <div class="form-group w-75 mx-auto">
              <label for="password">Password:</label>
              <input
                type="password"
                class="form-control"
                id="password"
                placeholder="Password"
                v-model.trim="password"
                required
              />
              <p v-if="!formIsValid" style="color: red">{{ error }}</p>
            </div>
            <div class="d-flex justify-content-center">
              <div class="d-flex flex-column">
                <button
                  type="submit"
                  class="btn btn-primary"
                  @click.prevent="logIn"
                >
                  Login
                </button>
                <p
                  @click="goToReset = true"
                  class="mt-2 card-footer"
                  style="cursor: pointer"
                >
                  Forgot/reset password?
                </p>
              </div>
            </div>
          </form>
        </div>
        <div v-else class="card-body">
          <form action="">
            <div class="form-group w-75 mx-auto">
              <p for="email" style="text-align: center">
                Provide your email adress below:
              </p>
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Enter email"
                v-model.trim="email"
              />
            </div>
            <div class="d-flex justify-content-center">
              <div class="d-flex flex-column">
                <button
                  type="submit"
                  class="btn btn-danger"
                  @click.prevent="resetPassword"
                >
                  Reset password
                </button>
                <router-link
                  tag="button"
                  to="/"
                  class="btn btn-secondary mt-2"
                >
                  Return to homepage
                </router-link>
              </div>
            </div>
          </form>
        </div>
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
      goToReset: false,
    };
  },
  computed: {
    displayError() {
      return alert(this.error);
    },
    displayLoading() {
      return this.isLoading;
    },
  },
  methods: {
    async logIn() {
      this.formIsValid = true;
      this.isLoading = true;
      try {
        await this.$store.dispatch("login", {
          email: this.email,
          password: this.password,
        });
        this.$router.replace("/tracker");
      } catch (err) {
        this.formIsValid = false;
        console.log(this.formIsValid);
        if (err.message == "INVALID_PASSWORD") {
          this.error = "Ooops! Wrong password! Please try again!";
        } else {
          this.error =
            err.message || "Failed to authenticate. Try again later.";
        }
      }
      this.isLoading = false;
    },
    async resetPassword() {
      await this.$store.dispatch("resetPassword", this.email);
      alert(
        "An email with the link to reset the password was sent to " +
          this.email +
          ". It should arrive in the next couple of minutes."
      );
      this.goToReset = false;
    },
  },
};
</script>

<style scoped>
/* .visible {
  border: 1px solid whitesmoke;
} */
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