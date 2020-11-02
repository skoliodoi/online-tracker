
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
        <div class="card-header bg-info">
          <h2
            class="display-5 p-4"
            style="text-align: center; font-family: 'Open Sans', sans-serif"
          >
            MMC Advantage Homepage
          </h2>
        </div>
        <div class="card-body" v-if="!goToReset">
          <div class="d-flex justify-content-center">
            <p>Login using your credentials:</p>
          </div>
          <form>
            <div class="form-group w-75 mx-auto">
              <label for="email">Email:</label>
              <input
                type="email"
                class="form-control"
                :class="{ 'border-danger rounded': !mailIsValid }"
                id="email"
                placeholder="Enter email"
                v-model.trim="email"
              />
              <p v-if="!mailIsValid" style="color: red">
                Ooops! Wrong email! Please try again!
              </p>
            </div>

            <div class="form-group w-75 mx-auto">
              <label for="password">Password:</label>
              <input
                type="password"
                class="form-control"
                :class="{ 'border-danger rounded': !passIsValid }"
                id="password"
                placeholder="Password"
                v-model.trim="password"
                required
              />
              <p v-if="!passIsValid" style="color: red">
                Ooops! Wrong password! Please try again!
              </p>
            </div>
            <div class="d-flex justify-content-center">
              <div class="d-flex flex-column">
                <button
                  v-if="!isLoading"
                  type="submit"
                  class="btn btn-primary"
                  @click.prevent="logIn"
                >
                  Login
                </button>
                <button v-else class="btn btn-primary" type="button" disabled>
                  <span
                    class="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Logging in...
                </button>
                <button
                  @click="goToReset = true"
                  class="mt-2 btn btn-secondary"
                >
                  Forgot/reset password?
                </button>
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
                <button
                  type="submit"
                  class="btn btn-secondary mt-2"
                  @click.prevent="goToReset = !goToReset"
                >
                  Return to homepage
                </button>
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
      mailIsValid: true,
      passIsValid: true,
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
      this.mailIsValid = true;
      this.passIsValid = true;
      this.isLoading = true;
      try {
        await this.$store.dispatch("login", {
          email: this.email,
          password: this.password,
        });
        this.$router.replace("/tracker");
      } catch (err) {
        if (
          (err.message == "INVALID_PASSWORD") |
          (err.message == "MISSING_PASSWORD")
        ) {
          this.passIsValid = false;
        } else if (
          err.message == "INVALID_EMAIL" ||
          err.message == "EMAIL_NOT_FOUND"
        ) {
          this.mailIsValid = false;
        } else {
          alert(err.message || "Failed to authenticate. Try again later.");
        }
      }
      this.isLoading = false;
    },
    async resetPassword() {
      await this.$store.dispatch("resetPassword", this.email);
      alert(
        "An email with the link to reset the password was sent to " +
          this.email +
          ". It should arrive in the next couple of minutes. If not - please try again."
      );
      this.passIsValid = true;
      this.goToReset = false;
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