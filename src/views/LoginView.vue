<template>
  <div class="d-flex justify-content-center align-content-center flex-wrap">
    <div class="col-lg-6 col-sm-6 card">
      <h3 class="text-center">Войти в систему</h3>
      <form @submit.prevent>
        <div :class="['mb-3 form-cnt', { invalid: eError }]">
          <label for="exampleFormControlInput1" class="form-label"
            >Email:</label
          >
          <input
            type="email"
            class="form-control"
            v-model="email"
            @blur="eBlur"
          />
          <small v-if="eError">{{ eError }}</small>
        </div>
        <div :class="['mb-3 form-cnt', { invalid: pError }]">
          <label for="inputPassword2">Пароль:</label>
          <input
            type="password"
            class="form-control"
            v-model="password"
            @blur="pBlur"
          />
          <small v-if="pError">{{ pError }}</small>
        </div>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
          <button type="submit" class="btn btn-success btn-bank mb-3">
            Войти
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { useField } from "vee-validate";
import * as yup from "yup";

export default {
  setup() {
    const {
      value: email,
      errorMessage: eError,
      handleBlur: eBlur,
    } = useField(
      "email",
      yup
        .string()
        .trim()
        .required("Пожалуйста введите email")
        .email("Необходимо ввести корректный email")
    );

    const MIN_LENGTH = 6;

    const {
      value: password,
      errorMessage: pError,
      handleBlur: pBlur,
    } = useField(
      "password",
      yup
        .string()
        .trim()
        .required("Пожалуйста введите пароль")
        .min(MIN_LENGTH, `Пароль не может быть меньше ${MIN_LENGTH} символов`)
    );

    return {
      email,
      password,
      eError,
      pError,
      eBlur,
      pBlur,
    };
  },
};
</script>

<style>
</style>