<template>
  <div class="Dashboard">
    <h1>Login</h1>
    <input placeholder="E-Mail" type="text" v-model="email">
    <input placeholder="Password" type="password" v-model="password"/>
    <button class="button is-primary" type="submit" @click="login">Einloggen</button>
    <router-link class="button is-primary" to="/register">Registrieren</router-link>
  </div>
</template>

<script>
import { auth } from '../firebase'
export default {
  name: 'Dashboard',
  data() {
    return {
      email: null,
      password: null
    } 
  },
  methods: {
    login(){
      //login in firebase code
      auth.signInWithEmailAndPassword(this.email, this.password).then(data => {
        alert('Erfolgreich eingeloggt');
        this.$router.replace('Dashboard')
        }).catch(err => {
          this.error = err.message;
        });
    }
  } 
}
</script>