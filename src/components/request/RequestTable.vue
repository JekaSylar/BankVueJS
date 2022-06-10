<template>
  <h4 v-if="!requests.length" class="text-center">Заявок пока нет</h4>
  <div class="table-currency" v-else>
    <table class="table table table-hover">
      <thead>
        <tr class="table-light">
          <th scope="col">#</th>
          <th scope="col">ФИО</th>
          <th scope="col">Телефон</th>
          <th scope="col">Сумма</th>
          <th scope="col">Статус</th>
          <th scope="col">Действие</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(req, ind) in requests" :key="req.id">
          <th>{{ ind + 1 }}</th>
          <td>{{ req.fio }}</td>
          <td>{{ req.phone }}</td>
          <td>{{ currency(req.amount) }}</td>
          <td><app-status :type="req.status" /></td>
          <td>
            <button
              type="button"
              @click="navigate(req.id)"
              class="btn btn-primary"
            >
              Открыть
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import AppStatus from "../../components/ui/AppStatus.vue";
import currency from "../../utils/currency";
export default {
  props: ["requests"],
  setup() {
    const router = useRouter();

    const navigate = (id) => {
      router.push({
        name: "request",
        params: { id: id },
      });
    };

    return { currency, navigate };
  },
  components: { AppStatus },
};
</script>

<style>
</style>