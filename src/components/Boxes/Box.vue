<template>
<div>
  <div class="container control" v-for="(box, index) in boxes">
    <div class="accordion" :id="'accordion'+index">
    <div class="card">
      <div class="card-header" :id="'heading'+index">
          <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" :data-target="'#collapse-'+index" aria-expanded="false" :aria-controls="'collapse-'+index">
            {{ box.clientName }}
          </button>
      </div>

    <div :id="'collapse-'+index" class="collapse" :aria-labelledby="'heading'+index" :data-parent="'#accordion'+index">
        <div class="card-body">
          {{ box.whoFor }}
        </div>
        <button @click="removeBox(index)">XXX</button>
    </div>
  </div>
</div>
  </div>
</div>
</template>

<script>
export default {
  props: ['boxes'],
  methods: {
  removeBox(index) {
    this.$emit('boxRemoved', index)
  }
}
}
</script>

<style  scoped>

</style>