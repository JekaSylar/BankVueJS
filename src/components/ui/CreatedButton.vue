<template>
  <div class="request-block-btn">
    <button type="button" class="btn btn-success">
      {{ title }}
    </button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  setup() {
    const isModal = ref(false);

    return {
      isModal,
    };
  },
};
</script>

<style>
</style>