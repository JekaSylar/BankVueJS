<template>
  <the-navbar />
  <div class="container">
    <div class="row">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import TheNavbar from "../components/TheNavbar.vue";
export default {
  components: { TheNavbar },
};
</script>

<style>
</style>