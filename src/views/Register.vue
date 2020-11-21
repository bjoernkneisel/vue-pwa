<template>
  <section class="hero is-light is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container">
        <div class="register">
          <h1 class="is-size-1 mb-4">Registrierung</h1>
          <form @submit="signUp()" >
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
          <button class="button is-info" @click="signUp()">Registrieren</button>
        </form>
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
    signUp() {
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