<template>
  <div class="d-flex justify-content-center align-content-center flex-wrap">
    <div class="col-lg-6 col-sm-6 card">
      <h3 class="text-center">Войти в систему</h3>
      <form @submit.prevent="onSubmit">
        <div :class="['mb-3 form-cnt', { invalid: eError }]">
          <label for="exampleFormControlInput1" class="form-label"
            >Email:</label
          >
          <input
            type="email"
            name="email"
            class="form-control"
            v-model="email"
            @blur="eBlur"
          />
          <small v-if="eError">{{ eError }}</small>
        </div>
        <div :class="['mb-3 form-cnt', { invalid: pError }]">
          <label for="inputPassword2">Пароль:</label>
          <input
            name="password"
            type="password"
            class="form-control"
            v-model="password"
            @blur="pBlur"
          />
          <small v-if="pError">{{ pError }}</small>
        </div>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
          <div class="text-danger" v-if="isTooManyAttempts">
            Вы слишком часто пытаетесь войти в систему. Попробуйте позже
          </div>
          <button
            :disabled="isSubmitting"
            type="submit"
            class="btn btn-success btn-bank mb-3"
          >
            Войти
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import useLoginForm from "../use/login-form";
export default {
  setup() {
    return { ...useLoginForm() };
  },
};
</script>

<style>
</style>