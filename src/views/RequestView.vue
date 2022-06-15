<template>
  <app-loader v-if="loading" />
  <app-page :title="title" v-else>
    <app-breadcrumb :page="title" />
    <p><strong>Имя владельца</strong>: {{ request.fio }}</p>
    <p><strong>Телефон</strong>: {{ request.phone }}</p>
    <p><strong>Сумма</strong>: {{ currency(request.amount) }}</p>
    <p>
      <strong>Статус</strong>:
      <app-status :type="request.status" />
    </p>
    <p>Изменить статус:</p>
    <div class="form-cnt select_status">
      <select v-model="status">
        <option disabled selected>Выберите статус</option>
        <option value="done">Завершен</option>
        <option value="cancelled">Отменен</option>
        <option value="active">Активен</option>
        <option value="pending">Выполняется</option>
      </select>
    </div>
    <div class="d-flex justify-content-start request_view">
      <button
        type="button"
        @click.prevent="updateRequest"
        v-if="hasChanges"
        class="btn btn-warning"
      >
        Обновить
      </button>
      <button type="button" @click.prevent="deleteModal" class="btn btn-danger">
        Удалить
      </button>
    </div>
    <app-delete v-if="isModal" @close="isModal = false" @deletePost="remove" />
  </app-page>
</template>

<script>
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import AppStatus from "../components/ui/AppStatus.vue";
import AppPage from "../components/ui/AppPage.vue";
import AppLoader from "../components/ui/AppLoader.vue";
import AppDelete from "../components/ui/AppDelete.vue";
import AppBreadcrumb from "../components/ui/AppBreadcrumb.vue";
import currency from "../utils/currency";

export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    const store = useStore();

    const loading = ref(false);
    const request = ref({});
    const title = ref("");
    const isModal = ref(false);
    const status = ref();

    onMounted(async () => {
      loading.value = true;
      request.value = await store.dispatch(
        "request/loaderOne",
        route.params.id
      );
      loading.value = false;
      title.value = "Заявка на имя - " + request.value.fio;
    });

    const hasChanges = computed(() => request.value.status !== status.value);

    const deleteModal = () => {
      isModal.value = true;
    };

    const updateRequest = async () => {
      const data = {
        ...request.value,
        status: status.value,
        id: route.params.id,
      };
      await store.dispatch("request/update", data);
      request.value.status = status.value;
    };

    const remove = async () => {
      await store.dispatch("request/delete", route.params.id);

      isModal.value = false;

      router.push("/");
    };

    return {
      loading,
      request,
      currency,
      title,
      updateRequest,
      remove,
      isModal,
      deleteModal,
      status,
      hasChanges,
    };
  },

  components: { AppPage, AppLoader, AppStatus, AppDelete, AppBreadcrumb },
};
</script>

<style scoped>
.request_view button {
  margin-right: 20px;
}
.breadcrumb {
  margin-top: 25px;
  margin-bottom: 25px;
}

.select_status {
  margin-bottom: 20px;
}
</style>
