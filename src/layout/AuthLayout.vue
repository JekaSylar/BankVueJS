<template>
  <div class="container">
    <div class="row">
      <app-message />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AppMessage from "../components/ui/AppMessage.vue";
export default {
  components: { AppMessage },
};
</script>

<style>
</style>