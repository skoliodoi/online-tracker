<template>
<div>
  <div class="container control" v-for="(box, index) in boxes" :key="box.id">
    <div class="accordion" :id="'accordion'+box.id">
    <div class="card">
      <div class="card-header" :id="'heading'+box.id">
          <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" :data-target="'#collapse-'+box.id" aria-expanded="false" :aria-controls="'collapse-'+box.id">
            {{ box.clientName }}
          </button>
      </div>

    <div :id="'collapse-'+box.id" class="collapse" :aria-labelledby="'heading'+box.id" :data-parent="'#accordion'+box.id">
        <div class="card-body">
          {{ box.whoFor }}
        </div>
        <div>{{ box.id }}</div> 
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