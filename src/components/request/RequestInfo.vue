<template>
  <div v-if="request">
    <p><strong>Имя владельца</strong>: {{ request.fio }}</p>
    <p><strong>Телефон</strong>: {{ request.phone }}</p>
    <p><strong>Сумма</strong>: {{ currency(request.amount) }}</p>
    <p>
      <strong>Статус</strong>:
      <app-status :type="request.status" />
    </p>
  </div>
</template>

<script>
export default {
  props: ["request"],
};
</script>

<style>
</style>