<template>
  <h4 v-if="!tasks.length" class="text-center">Задач пока нет</h4>
  <div class="accordion accordion-flush" id="accordionFlushExample" v-else>
    <div class="accordion-item" v-for="(task, index) in tasks" :key="task.id">
      <h2 class="accordion-header" :id="`flush-heading-${task.id}`">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          :data-bs-target="`#flush-collapse-${task.id}`"
          aria-expanded="false"
          :aria-controls="`#flush-collapse-${task.id}`"
        >
          {{ task.task }}
        </button>
      </h2>
      <div
        :id="`flush-collapse-${task.id}`"
        class="accordion-collapse collapse"
        :aria-labelledby="`flush-collapse-${task.id}`"
        data-bs-parent="#accordionFlushExample"
      >
        <div class="accordion-body">{{ task.desk }}.</div>
        <div class="delete-task">
          <button
            type="button"
            @click.prevent="modalDelete = true"
            class="btn btn-danger"
          >
            Удалить
          </button>
        </div>
      </div>
      <app-delete
        v-if="modalDelete"
        @close="modalDelete = false"
        @deletePost="taskDelete(task.id, index)"
      />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import AppDelete from "../ui/AppDelete.vue";

export default {
  props: ["tasks"],
  emits: ["deleteTask"],
  setup(_, { emit }) {
    const modalDelete = ref(false);
    const taskDelete = (id, index) => {
      modalDelete.value = false;
      emit("deleteTask", { id, index });
    };

    return {
      modalDelete,
      taskDelete,
    };
  },
  components: { AppDelete },
};
</script>

<style>
.accordion {
  padding-top: 25px;
}
.delete-task {
  margin: 20px 0;
  display: flex;
  justify-content: flex-end;
}
</style>