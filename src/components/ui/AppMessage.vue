<template>
  <div
    v-if="message"
    class="d-flex justify-content-center align-content-center flex-wrap"
  >
    <div :class="['alert col-lg-6 col-sm-6 ', message.type]" role="alert">
      {{ message.value }}
    </div>
    <button
      type="button"
      class="btn-close"
      data-bs-dismiss="alert"
      aria-label="Close"
      @click.prevent="close"
    ></button>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    const message = computed(() => store.state.message);

    const close = () => {
      store.commit("clearMessage");
    };

    return {
      message,
      close,
    };
  },
};
</script>

<style>
</style>