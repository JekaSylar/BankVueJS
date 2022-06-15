<template>
  <div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link to="/">Главная</router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          {{ page }}
        </li>
      </ol>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    page: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
</style>