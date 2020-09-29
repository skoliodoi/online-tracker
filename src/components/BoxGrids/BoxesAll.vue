<template>
  <div :class="{ redBod: redBackground }">
    <app-navbar></app-navbar>
    <app-box 
    :boxes="filterBoxes" 
    @boxRemoved="removeBox"></app-box>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { tableBus } from "../../main.js";
import Box from "../Boxes/Box.vue";
import Navbar from "../Navbar.vue";
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
</style>