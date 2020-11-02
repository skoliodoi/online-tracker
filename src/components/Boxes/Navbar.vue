<template>
  <div style="padding-top: 75px">
    <nav
      style="height: 75px; background: #003865; z-index: 10"
      class="navbar fixed-top navbar-expand-lg navbar-dark"
    >
      <div
        class="collapse navbar-collapse d-flex"
        :class="navDisplay"
        id="navbarSupportedContent"
      >
        <div
          class="my-auto"
          style="color: white"
          v-if="!changePass.showPassChange"
        >
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
                <button
                  @click="
                    changePass.showPassChange = !changePass.showPassChange
                  "
                  class="dropdown-item"
                  type="button"
                >
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
        <div v-if="changePass.showPassChange">
          <label style="color: whitesmoke">
            <strong>New password:</strong>
          </label>
          <input
            class="mx-2"
            :class="{ 'border-danger rounded': newPassErr }"
            type="password"
            placeholder="New password"
            v-model="changePass.newPass"
          />
          <label style="color: whitesmoke">
            <strong>Confirm new password:</strong>
          </label>
          <input
            class="mx-2"
            :class="{ 'border-danger rounded': confirmPassErr }"
            type="password"
            placeholder="Confirm new password"
            v-model="changePass.confirmPass"
          />
          <button
            v-if="!changePassSuccess"
            class="btn btn-success mx-2"
            @click="changePassword"
          >
            Change your password
          </button>
          <button
            v-if="!changePassSuccess"
            @click="forgetAboutIt"
            class="btn btn-secondary mx-2"
          >
            Eh, forget about it!
          </button>
        </div>
        <div
          v-if="showError"
          class="col bg-danger d-flex justify-content-center align-items-center error-class"
        >
          <p class="my-auto">
            {{ changePassMsg }}
          </p>
        </div>
        <div
          @click="logOut"
          v-if="logoutError"
          class="col btn btn-danger d-flex justify-content-center align-items-center error-class"
        >
          <p class="my-auto">
            {{ changePassMsg }}
          </p>
        </div>
        <div
          v-if="changePassSuccess"
          @click="forgetAboutIt"
          style="cursor: pointer"
          class="col bg-success d-flex justify-content-center align-items-center error-class"
        >
          <p class="my-auto">
            Password changed successfully! Click this message to return to the
            main view.
          </p>
        </div>
        <div v-if="!changePass.showPassChange">
          <ul class="nav nav-pills">
            <li class="nav-item" @click="changeLink('In Progress')">
              <a
                class="nav-link"
                data-toggle="tab"
                style="color: whitesmoke"
                >In Progress</a
              >
            </li>
            <li class="nav-item" @click="changeLink('Pending')">
              <a class="nav-link" data-toggle="tab" style="color: whitesmoke"
                >Pending</a
              >
            </li>
            <li class="nav-item" @click="changeLink('Completed')">
              <a class="nav-link" data-toggle="tab" style="color: whitesmoke"
                >Completed</a
              >
            </li>
            <li class="nav-item" @click="changeLink('All')">
              <a class="nav-link active" data-toggle="tab" style="color: whitesmoke"
                >All</a
              >
            </li>
          </ul>
        </div>
        <div v-if="!changePass.showPassChange">
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
  data() {
    return {
      logoutError: false,
      changePassSuccess: false,
      showError: false,
      oldPassErr: false,
      newPassErr: false,
      confirmPassErr: false,
      changePassMsg: "",
      changePass: {
        showPassChange: false,
        oldPass: "",
        newPass: "",
        confirmPass: "",
      },
    };
  },
  computed: {
    navDisplay() {
      if (this.changePass.showPassChange == false) {
        return {
          "justify-content-between": true,
        };
      } else {
        return {
          "justify-content-center": true,
        };
      }
    },
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
    forgetAboutIt() {
      this.changePassSuccess = false;
      this.changePass.showPassChange = false;
      this.showError = false;
      this.newPassErr = false;
      this.confirmPassErr = false;
      this.logoutError = false;
    },
    async changePassword() {
      const newPass = this.changePass.newPass;
      const confirmPass = this.changePass.confirmPass;
      if (!newPass || newPass.length < 6) {
        this.showError = true;
        this.newPassErr = true;
        this.changePassMsg =
          "New password needs to be at least 6 characters long!";
      } else if (newPass !== confirmPass) {
        this.showError = true;
        this.newPassErr = true;
        this.confirmPassErr = true;
        this.changePassMsg = "Passwords do not match!";
      } else {
        try {
          await this.$store.dispatch("changePassword", this.changePass.newPass);
          this.changePassSuccess = true;
          this.showError = false;
          this.changePass.oldPass = "";
          this.changePass.newPass = "";
          this.changePass.confirmPass = "";
        } catch (err) {
          if (err == "Error: CREDENTIAL_TOO_OLD_LOGIN_AGAIN"){
            this.logoutError = true;
            this.showError = false;
            this.newPassErr = true;
            this.confirmPassErr = true;
            this.changePassMsg = "Session expired - you need to logout and login again. Click this notification to logout.";
          } else {
            this.showError = true;
            this.newPassErr = true;
            this.confirmPassErr = true;
            this.changePassMsg = err;            
          }
        }
      }
    },
  },
};
</script>

<style scoped>
.error-class {
  height: 3.5em;
  border-radius: 5px;
  color: whitesmoke;
  font-weight: bold;
  text-align: center;
}
a:hover {
  cursor: pointer;
}
.visible {
  border: 1px solid red;
}
</style>