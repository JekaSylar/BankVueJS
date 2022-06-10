<template>
  <the-navbar />
  <div class="container">
    <div class="row">
      <app-message />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import TheNavbar from "../components/TheNavbar.vue";
import AppMessage from "../components/ui/AppMessage.vue";
export default {
  components: { TheNavbar, AppMessage },
};
</script>

<style>
</style>