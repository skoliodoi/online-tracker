<template>
  <div :class="{ redBod: redBackground }">
    <app-navbar></app-navbar>
    <transition-group name="slide" mode="out-in">
    <app-box
    v-for="box in filterBoxes" 
    :box="box"
    :key="box.id" 
    @boxRemoved="removeBox"></app-box>
     </transition-group>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Box from "./Box.vue";
import Navbar from "./Navbar.vue";
export default {
  data() {
    return {
      id: 0,
      greenBackground: false,
      redBackground: false,
      searchForBox: "",
    };
  },
  computed: {
    ...mapGetters(["allBoxContents", "filteredList", "searchbar"]),
    filterBoxes() {
      return this.filteredList.filter((element) => {
        return element.clientName.match(this.searchbar);
      });
    },
  },
  components: {
    appBox: Box,
    appNavbar: Navbar,
  },
  methods: {
    removeBox(idNumber) {
      const deleteBox = this.allBoxContents
        .map((item) => {
          return item.id;
        })
        .indexOf(idNumber);
      if (confirm("Are you sure you want to remove this component?")) {
        this.redBackground = true;
        this.allBoxContents.splice(deleteBox, 1);
        setTimeout(() => {
          this.redBackground = false;
        }, 1000);
      }
      this.$store.dispatch('clearSearch')
    },
  },
};
</script>

<style scoped>
.greenBod {
  background: #6a8d73;
}

.redBod {
  background: #f25f5c;
}

.slide-enter {
}
.slide-enter-active {
  animation: slide-in 0.7s ease-out forwards;
}
.slide-leave {
}
.slide-leave-active {
  animation: slide-out 0.7s ease-out forwards;
  position: absolute;
}

.slide-move {
  transition: transform 1s;
}

@keyframes slide-in {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes slide-out {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}

@keyframes arrow-in {
  from {
    border: 1px solid black;
    border-left: transparent;
    border-top: transparent;
    height: 15px;
    width: 15px;
  }
  to {
    border: 5px solid black;
    border-left: transparent;
    border-top: transparent;
    height: 20px;
    width: 20px;
  }
}

</style>