<template>
  <div class="d-flex justify-content-center align-content-center flex-wrap">
    <div class="col-lg-8 card">
      <h3 class="text-center">Курс валют</h3>
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
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();

    const currencys = computed(() => store.getters["bank/getCurrency"]);

    onMounted(async () => {
      await store.dispatch("bank/loaderCurrency");
      console.log(currencys.value);
    });

    return {
      currencys,
    };
  },
};
</script>

<style>
</style>