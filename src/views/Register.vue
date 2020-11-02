<template>
  <section class="hero is-light is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container">
        <div class="register">
          <h1 class="is-size-1 mb-4">Registrierung</h1>
          <input
            class="input is-rounded mb-4"
            type="text"
            placeholder="E-Mail"
            v-model="email"
          />
          <input
            class="input is-rounded mb-4"
            type="password"
            placeholder="Passwort"
            v-model="password"
          />
          <button class="button is-info" @click="signUp()">Registrieren</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { auth, firestore } from "../firebase";

export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    signup() {
      this.$store.dispatch('signup', {
      email: this.email,
      password: this.password,
    })
    }
  }
}
</script>

<style lang="scss" scoped>
.register {
  margin: 0 auto;
  max-width: 60%;
}
</style>