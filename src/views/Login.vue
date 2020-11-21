<template>
  <section class="hero is-light is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container">
        <h1 class="is-size-1 mb-4">Login</h1>
        <form @submit="login()">
          <div class="columns is-centered">
            <div class="column is-full-mobile is-half-desktop">
              <input
                class="input"
                placeholder="E-Mail"
                type="text"
                v-model="email"
              />
            </div>
          </div>
          <div class="columns is-centered">
            <div class="column is-full-mobile is-half-desktop">
              <input
                class="input"
                placeholder="Password"
                type="password"
                v-model="password"
              />
            </div>
          </div>
          <button class="button is-warning" type="submit" @click="login()">
            Einloggen
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import { auth } from "../firebase";
export default {
  name: "Dashboard",
  data() {
    return {
      email: null,
      password: null,
    };
  },
  methods: {
    login() {
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>