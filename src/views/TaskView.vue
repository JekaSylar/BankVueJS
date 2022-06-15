<template>
  <app-loader v-if="loader" />
  <app-page title="Задачи" v-else>
    <app-breadcrumb page="Задачи" />
    <div class="d-flex justify-content-end">
      <created-button title="Создать" @click.prevent="isModal = true" />
    </div>
    <teleport to="body">
      <task-modal
        v-if="isModal"
        @close="isModal = false"
        @created="isModal = false"
      />
    </teleport>
    <task-accordion :tasks="tasks" @deleteTask="removeTask" />
  </app-page>
</template>

<script>
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";
import AppPage from "../components/ui/AppPage.vue";
import AppBreadcrumb from "../components/ui/AppBreadcrumb.vue";
import CreatedButton from "../components/ui/CreatedButton.vue";
import TaskAccordion from "../components/task/TaskAccordion.vue";
import TaskModal from "../components/task/TaskModal.vue";
import AppLoader from "../components/ui/AppLoader.vue";

export default {
  setup() {
    const store = useStore();
    const isModal = ref(false);
    const loader = ref(false);

    const tasks = computed(() => store.getters["task/getTask"]);

    const removeTask = async (data) => {
      await store.dispatch("task/delete", data.id);
      tasks.value.splice(data.index, 1);
    };

    onMounted(async () => {
      loader.value = true;
      await store.dispatch("task/loader");
      loader.value = false;
    });

    return {
      isModal,
      tasks,
      loader,
      removeTask,
    };
  },

  components: {
    AppPage,
    AppBreadcrumb,
    TaskAccordion,
    CreatedButton,
    TaskModal,
    AppLoader,
  },
};
</script>

<style>
</style>