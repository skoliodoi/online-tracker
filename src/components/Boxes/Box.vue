<template>
<div>
  <div class="container" v-for="(box, index) in boxes" :key="box.id">
    <div class="accordion" :id="'accordion'+box.id">
    <div class="card">
      <div class="card-header" :id="'heading'+box.id">
        <div class="test-style">
          <button class="btn btn-link container text-left" type="button" data-toggle="collapse" :data-target="'#collapse-'+box.id" aria-expanded="false" :aria-controls="'collapse-'+box.id">
            {{ box.clientName }}
          </button>
          <button class="btn btn-link text-right" @click="removeBox(index)">X</button>
        </div>
      </div>
      
      <div :id="'collapse-'+box.id" class="collapse" :aria-labelledby="'heading'+box.id" :data-parent="'#accordion'+box.id">
          <div class="card-body">
            <label>Confirmed?</label>
            {{ box.confirmed }}
          </div>
          
          <display-field
          :bool="true">
            {{ box.confirmed }}
          </display-field>

          <display-field
          :bool="false"
          :displayValue="box.clientName"> 
          </display-field>

          <display-field
          :bool="false"
          :displayValue="box.whoFor"> 
          </display-field>
        
          
          <div class="card-body">{{ box.id }}</div> 
      </div>
    </div>
    </div>
  </div>
  
</div>
</template>

<script>
import DisplayField from './DisplayField.vue'
import InputField from './InputField.vue'
export default {
  props: ['boxes'],
  data() {
    return {
      isEditable: false
    }
  },
  methods: {
    removeBox(index) {
      this.$emit('boxRemoved', index)
    },
  },
    components: {
    DisplayField,
    InputField
  }
}
</script>

<style  scoped>
  .test-style {
    display: flex;
  }
</style>