<template>
  <div class="filter">
    <div class="form-cnt filter_name">
      <input type="text" placeholder="Начните писать имя" v-model="name" />
    </div>
    <div class="form-cnt filter_select">
      <select v-model="status">
        <option disabled selected>Выберите статус</option>
        <option value="done">Завершен</option>
        <option value="cancelled">Отменен</option>
        <option value="active">Активен</option>
        <option value="pending">Выполняется</option>
      </select>
    </div>
    <button v-if="isActive" class="btn btn-warning" @click.prevent="reset">
      Очистить
    </button>
  </div>
</template>

<script>
import { ref, computed, watch } from "vue";
export default {
  props: ["modelValue"],
  emits: ["update:modelValue"],
  setup(_, { emit }) {
    const name = ref();
    const status = ref();

    watch([name, status], (values) => {
      emit("update:modelValue", {
        name: values[0],
        status: values[1],
      });
    });

    const reset = () => {
      name.value = "";
      status.value = null;
    };

    const isActive = computed(() => name.value || status.value);

    return {
      name,
      status,
      reset,
      isActive,
    };
  },
};
</script>

<style>
.filter_name {
  margin-right: 15px;
}
.filter_select {
  margin-right: 15px;
}
</style>