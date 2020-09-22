<template>
  <div>
    <h1>This is where the In Progress Boxes will be</h1>
    <p>({{ displayText }})</p>
    <h3>{{ newText }}</h3>

  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  export default {
    computed: {
      ...mapGetters([
        'displayText',
        'newText',
        'boxContents'
      ])
    }
  }
</script>