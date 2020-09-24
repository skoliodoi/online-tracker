import Box from "./components/Boxes/Box.vue";
import {mapGetters} from 'vuex';

export const boxMixin = {
  components: {
    appBox: Box,
  },
  computed: {
    ...mapGetters([
      'allBoxContents',
    ]),
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
      this.refreshInput();
    },

    refreshInput() {
      this.searchForBox = "";
    },
  },
}