<template>
<div>
  <div class="container control" v-for="(box, index) in boxes" :key="box.id">
    <div class="accordion" :id="'accordion'+box.id">
    <div class="card">
      <div class="card-header" :id="'heading'+box.id">
        <div class="test-style">
          <button class="btn btn-link container text-left" type="button" data-toggle="collapse" :data-target="'#collapse-'+box.id" aria-expanded="false" :aria-controls="'collapse-'+box.id">
            {{ box.clientName }}
          </button>
          <button class="btn btn-link text-right" @click="removeBox(index)">X</button>

          <button class="btn btn-link text-right" @click="removeBox(index)">XXX</button>
        </div>
      </div>

    <div :id="'collapse-'+box.id" class="collapse" :aria-labelledby="'heading'+box.id" :data-parent="'#accordion'+box.id">
        <div class="card-body">
          {{ box.whoFor }}
        </div>
        <div class="card-body">{{ box.id }}</div> 
        
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
  .test-style {
    display: flex;
  }
</style>