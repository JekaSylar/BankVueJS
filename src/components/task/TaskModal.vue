<template>
  <div class="row modal-row">
    <div class="d-flex justify-content-center align-content-center flex-wrap">
      <div class="col-lg-4">
        <div class="requestModal">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Создать задачу
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  @click.prevent="$emit('close')"
                ></button>
              </div>
              <div class="modal-body">
                <form @submit.prevent="onSubmit">
                  <div :class="['mb-3 form-cnt', { invalid: tError }]">
                    <label for="task" class="form-label">Задача:</label>
                    <input
                      type="text"
                      id="task"
                      class="form-control"
                      v-model="task"
                      @blur="tBlur"
                    />
                    <small v-if="tError">{{ tError }}</small>
                  </div>
                  <div :class="['mb-3 form-cnt', { invalid: dError }]">
                    <label for="desk" class="form-label">Описание:</label>
                    <textarea
                      class="form-control"
                      id="desk"
                      cols="30"
                      rows="10"
                      v-model="desk"
                      @blur="dBlur"
                    >
                    </textarea>
                    <small v-if="dError">{{ dError }}</small>
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
import { taskAddForm } from "../../use/task-form";

export default {
  emits: ["close", "created"],
  setup(_, { emit }) {
    const store = useStore();

    const onSubmit = async (values) => {
      await store.dispatch("task/create", values);
      emit("created");
    };

    return { ...taskAddForm(onSubmit) };
  },
};
</script>

<style scoped>
.modal-footer {
  margin-top: 30px;
}
</style>