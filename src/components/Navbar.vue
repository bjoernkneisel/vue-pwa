<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item is-size-4" href="/">CLARAFY</a>
      <a
        role="button"
        class="navbar-burger burger"
        onclick="document.querySelector('.navbar-menu').classList.toggle('is-active');"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <router-link class="navbar-item" to="/Home">Home</router-link>
        <router-link class="navbar-item" to="/Dashboard">Dashboard</router-link>
        <router-link class="navbar-item" to="/Settings">Einstellungen</router-link>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <router-link v-if="!userLoggedIn" to="/register" class="button is-info">
              <strong>Registrieren</strong>
            </router-link>
            <router-link v-if="!userLoggedIn" to="/login" class="button is-warning">Einloggen</router-link>
            <button v-else class="button is-danger" @click="logout()">Ausloggen</button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { auth } from '../firebase'
import { mapState } from 'vuex'
export default {
  name: 'Navbar',
  methods: {
    logout() {
      this.$store.dispatch('logout')
    }
  },
  computed: {
    ...mapState(["userProfile"]),
    userLoggedIn() {
      return Object.keys(this.userProfile).length > 1;
    },
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  background-color: #896978;
}
.navbar-brand {
  .navbar-item {
    color: #fff!important;
  }
}
.navbar-item {
  color: #fff;
}
a:hover {
  background-color: #dcd6f7;
  color: #242423;
}
.router-link-active {
  background-color: #dcd6f7;
  color: #242423;
}
</style>