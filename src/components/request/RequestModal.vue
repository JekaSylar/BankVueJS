<template>
  <div class="row modal-row">
    <div class="d-flex justify-content-center align-content-center flex-wrap">
      <div class="col-lg-4">
        <div class="requestModal">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Создать заявку
                </h5>
                <button
                  type="button"
                  @click.prevent="$emit('close')"
                  class="btn-close"
                ></button>
              </div>
              <div class="modal-body">
                <form @submit.prevent="onSubmit">
                  <div :class="['mb-3 form-cnt', { invalid: fError }]">
                    <label for="fio" class="form-label">ФИО:</label>
                    <input
                      type="text"
                      id="fio"
                      class="form-control"
                      v-model="fio"
                      @blur="fBlur"
                    />
                    <small v-if="fError">{{ fError }}</small>
                  </div>
                  <div :class="['mb-3 form-cnt', { invalid: pError }]">
                    <label for="phone" class="form-label">Телефон:</label>
                    <input
                      type="text"
                      id="phone"
                      class="form-control"
                      v-model="phone"
                      @blur="pBlur"
                    />
                    <small v-if="pError">{{ pError }}</small>
                  </div>
                  <div :class="['mb-3 form-cnt', { invalid: aError }]">
                    <label for="amount" class="form-label">Суммы:</label>
                    <input
                      type="text"
                      id="amount"
                      name="amount"
                      class="form-control"
                      v-model="amount"
                      @blur="aBlur"
                    />
                    <small v-if="aError">{{ aError }}</small>
                  </div>
                  <div class="mb-3 form-cnt">
                    <label for="status" class="form-label">Статус</label>
                    <select v-model="status" class="form-select" id="status">
                      <option value="done">Завершен</option>
                      <option value="cancelled">Отменен</option>
                      <option value="active">Активен</option>
                      <option value="pending">Выполняется</option>
                    </select>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-danger"
                      @click.prevent="$emit('close')"
                    >
                      Закрыть
                    </button>
                    <button
                      class="btn btn-success"
                      :disabled="isSubmitting"
                      type="submit"
                    >
                      Создать
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { useRequestForm } from "../../use/request-form";
export default {
  emits: ["close", "created"],
  setup(_, { emit }) {
    const store = useStore();

    const onSubmit = async (values) => {
      await store.dispatch("request/create", values);
      emit("created");
    };

    return {
      ...useRequestForm(onSubmit),
    };
  },
};
</script>

<style>
</style>