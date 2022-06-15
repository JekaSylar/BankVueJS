<template>
  <app-loader v-if="loading" />
  <app-page title="Курс валют" v-else>
    <app-breadcrumb page="Курс валют" />
    <div class="table-currency">
      <table class="table table-bordered" v-if="currencys">
        <thead>
          <tr class="table-light">
            <th scope="col">#</th>
            <th scope="col">Код валюты</th>
            <th scope="col">Курс покупки</th>
            <th scope="col">Курс продажи</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(currency, idx) in currencys" :key="idx">
            <th scope="row" class="table-light">{{ idx + 1 }}</th>
            <td>{{ currency.ccy }}</td>
            <td>{{ currency.buy }}</td>
            <td>{{ currency.sale }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </app-page>
</template>

<script>
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
import AppPage from "../components/ui/AppPage.vue";
import AppLoader from "../components/ui/AppLoader.vue";
import AppBreadcrumb from "../components/ui/AppBreadcrumb.vue";

export default {
  setup() {
    const store = useStore();

    const loading = ref(false);

    const currencys = computed(() => store.getters["bank/getCurrency"]);

    onMounted(async () => {
      loading.value = true;
      await store.dispatch("bank/loaderCurrency");
      loading.value = false;
    });

    return {
      currencys,
      loading,
    };
  },
  components: { AppPage, AppLoader, AppBreadcrumb },
};
</script>

<style>
</style>