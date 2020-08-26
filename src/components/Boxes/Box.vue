<template>
<div>
  <div class="container" v-for="(box, index) in boxes" :key="box.id">
    <div class="accordion" :id="'accordion'+box.id">
    <div class="card">
      <div class="card-header" :id="'heading'+box.id">
        <div class="test-style">
          <button class="btn btn-link container text-left" type="button" data-toggle="collapse" :data-target="'#collapse-'+box.id" aria-expanded="false" :aria-controls="'collapse-'+box.id">
            {{ box.clientName }} {{ index }}
          </button>
          <button class="btn btn-link text-right" @click="removeBox(box.id)">X</button>
        </div>
      </div>
      
      <div :id="'collapse-'+box.id" class="collapse" :aria-labelledby="'heading'+box.id" :data-parent="'#accordion'+box.id">
          <div class="card-body">
            <label>Confirmed?</label>
              <display-input-field
              :bool="false"
              :displayValue="box.confirmed">
              </display-input-field>
          </div>
          <div class="card-body">
            <display-input-field
            :bool="false"
            :displayValue="box.clientName"> 
            </display-input-field>
          </div>

          <div class="card-body">
            <display-input-field
            :bool="false"
            :displayValue="box.startDate"> 
            </display-input-field>
          </div>

          <div class="card-body">
            <label>GC Client:</label>
            <display-input-field
            :bool="true">
            </display-input-field>
          </div>
          
          <div class="card-body">{{ box.id }}</div> 
      </div>
    </div>
    </div>
  </div>
  
</div>
</template>

<script>
import DisplayInputField from './DisplayInputField.vue'
export default {
  props: ['boxes'],
  data() {
    return {
      isEditable: false
    }
  },
  methods: {
    removeBox(idNumber) {
      this.$emit('boxRemoved', idNumber)
    },
  },
    components: {
    DisplayInputField,
  }
}
</script>

<style  scoped>
  .test-style {
    display: flex;
  }
</style>