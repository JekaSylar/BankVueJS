<template>
  <div class="d-flex justify-content-center align-content-center flex-wrap">
    <div class="col-lg-10 card">
      <h3 class="text-center">{{ title }}</h3>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    document.title = `${props.title} | Онлайн Банка`;
  },
};
</script>

<style>
</style>