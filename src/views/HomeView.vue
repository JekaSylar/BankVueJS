<template>
  <app-loader v-if="loading" />
  <app-page title="Список заявок" v-else>
    <div class="request-block d-flex justify-content-between">
      <request-filter v-model="filter" />
      <div class="request-block-btn">
        <button
          type="button"
          @click.prevent="isModal = true"
          class="btn btn-success"
        >
          Создать
        </button>
      </div>
    </div>

    <request-table :requests="requests" />
    <teleport to="body">
      <request-modal
        v-if="isModal"
        @close="isModal = false"
        @created="isModal = false"
      />
    </teleport>
  </app-page>
</template>

<script>
import { computed, ref, onMounted } from "vue";
import { useStore } from "vuex";
import AppPage from "../components/ui/AppPage.vue";
import RequestTable from "../components/request/RequestTable.vue";
import RequestModal from "../components/request/RequestModal.vue";
import AppLoader from "../components/ui/AppLoader.vue";
import RequestFilter from "../components/request/RequestFilter.vue";
export default {
  setup() {
    const store = useStore();

    const loading = ref(false);

    const isModal = ref(false);

    const filter = ref({});

    const requests = computed(() =>
      store.getters["request/getRequests"]
        .filter((request) => {
          if (filter.value.name) {
            return request.fio.includes(filter.value.name);
          }
          return request;
        })
        .filter((request) => {
          if (filter.value.status) {
            return filter.value.status === request.status;
          }
          return request;
        })
    );

    onMounted(async () => {
      loading.value = true;
      await store.dispatch("request/loader");
      loading.value = false;
    });

    return {
      loading,
      requests,
      isModal,
      filter,
    };
  },

  components: { AppPage, RequestTable, RequestModal, AppLoader, RequestFilter },
};
</script>

<style>
.request-block {
  margin-top: 25px;
}
</style>

