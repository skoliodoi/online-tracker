
<template>
<div>
<div style="background-picture: heniogimp">
  <img src="'../assets/logo.png'" alt="">
</div>
<div
style="position:fixed; top: 50%; left: 50%; transform: translate(-50%, -50%)">
  <div class="jumbotron">
  <h1 class="display-4 ">MMC Advantage Homepage</h1>
  <p class="lead">This is a placeholder for the more advanced homepage that will possibly be added in the future.</p>
  <hr class="my-4">

  <div style="display: flex; justify-content: space-around">
    <router-link to="/tracker" class="btn btn-outline-primary btn-lg" role="button">MoC Tracker</router-link>
    <router-link to="/" class="btn btn-outline-primary btn-lg" role="button">Team Bios</router-link>
    <router-link to="/" class="btn btn-outline-primary btn-lg" role="button">Executive briefs</router-link>
  </div>
</div>
</div>
</div>

</template>

<script>

export default {

  
}
</script>

<style scoped>

</style>