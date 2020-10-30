<template>
  <div class="navbar">
    <router-link class="navbar-item" to="/error">Impressum</router-link>
    <router-link class="navbar-item" to="/error">Datenschutz</router-link>
  </div>
</template>

<script>
import { auth } from '../firebase'
export default {
  name: 'Footer',
  methods: {
    logout() {
      auth.signOut().then((result) => {
        alert("Erfolgreich ausgeloggt");
        this.$router.replace("login");
      });
    },
  },
}
</script>