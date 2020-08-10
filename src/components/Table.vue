<template>
<div>
   <thead>
        <tr>
          <th class="intro">Name</th>
          <th class="intro">Confirmed?</th>
          <th class="intro">Type</th>
          <th class="intro">Status</th>
          <th class="intro">For:</th>
          <th class="intro">Who is the meeting with:</th>
          <th class="time-related">Start</th>
          <th class="time-related">Meeting date</th>
          <th class="time-related">Days till meeting</th>
          <th class="time-related">OpCo Deadline</th>
          <th class="time-related">Delivery Date</th>
          <th class="time-related">Rem 1</th>
          <th class="time-related">Rem 2</th>
          <th class="rest">Warsaw Status</th>
          <th class="cl">Marsh CL</th>
          <th class="ca">Marsh CA</th>
          <th class="cl">Mercer CL</th>
          <th class="ca">Mercer CA</th>
          <th class="ca">Mercer Wealth (Lindsey)</th>
          <th class="ca">MMB (Jeffrey)</th>
          <th class="cl">GC CL</th>
          <th class="ca">GC CA/RE</th>
          <th class="cl">OW CL</th>
          <th class="ca">OW CA</th>
          <th class="cl">B2B</th>
          <th class="ca">MMC</th>
          <th class="rest">BIO</th>
        </tr>
      </thead>
      <tbody>
          <app-row 
          :name="name"
          :cells="cells"></app-row>
      </tbody>

</div>
</template>

<script>
  import AddRow from './AddRow.vue'
  import Row from './Row.vue'
  import { tableBus } from '../main'
  export default {
    props: ['cells', 'name'],
    components: {
      appRow: Row,
      appNewRow: AddRow
    }
  }
</script>

<style scoped>
th, td {
  border: 1px solid black;
  border-collapse: collapse;
}

th {
  font-family: Arial, Helvetica, sans-serif;
  padding: 3px;
  
}

.intro {
  background-color: rgb(151, 10, 10);
  color: whitesmoke
}

.time-related {
  background-color: darkcyan;
  color: whitesmoke;
}

.ca {
  background-color: rgb(48, 146, 226);
  color: whitesmoke;
}

.cl {
  background-color: rgb(15, 92, 155);
  color: whitesmoke;
}

.rest {
  background-color: seagreen;
  color: whitesmoke;
}
</style>