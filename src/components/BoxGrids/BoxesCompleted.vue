<template>
  <div :class="{'redBod': redBackground}">
      <app-box 
      :boxes="filterBoxes" 
      @boxRemoved="removeBox"></app-box>
  </div>
</template>

<script>

import { boxMixin } from '../../boxMixin.js'
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
    filterBoxes() {
      return this.allBoxContents.filter((element) => {
        return element.status.match("Done");
      });
    },
  },
  mixins: [boxMixin]
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