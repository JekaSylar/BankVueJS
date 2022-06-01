<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Онлайн Банк</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="d-flex" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Заявки</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/help">Помощь</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/currency"
              >Курс валюты</router-link
            >
          </li>

          <li class="nav-item">
            <a class="nav-link" @click.prevent="open" href="#">Сообщения</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" @click.prevent="logout" href="#">Выход</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    const store = useStore();

    const logout = () => {
      store.commit("auth/logout");

      router.push("/login");
    };

    const open = () => {
      console.log("Open");
    };

    return {
      logout,
      open,
    };
  },
};
</script>

<style>
.router-link-active,
.router-link-exact-active {
  color: black;
}
.nav-link {
  font-size: 1.25rem;
  font-weight: 600;
}
</style>