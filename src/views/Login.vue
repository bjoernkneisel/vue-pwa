<template>
  <section class="hero is-light is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container">
        <div class="login">
          <h1 class="is-size-1 mb-4">Login</h1>
          <form @submit="login()">
          <input class="input mb-4 is-rounded" placeholder="E-Mail" type="text" v-model="email" />
          <input class="input mb-4 is-rounded" placeholder="Password" type="password" v-model="password" />
          <button class="button is-warning" type="submit" @click="login()">
            Einloggen
          </button>
          </form>
        </div>
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
      this.$store.dispatch('login', {
        email: this.email,
        password: this.password
    })
  }
  },
};
</script>

<style lang="scss" scoped>
.login {
  max-width: 60%;
  margin: 0 auto;
}
</style>