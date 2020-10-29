<template>
  <div class="register">
    <p>Bitte erstell dir einen Account</p>
    <input type="text" placeholder="E-Mail" v-model="email">
    <input type="password" placeholder ="Passwort" v-model ="password">
    <button class="button" @click="signUp()">Registrieren</button>
  </div>
</template>

<script>
import { auth } from '../firebase'
export default {
  name: 'Register',
  data() {
    return {
      email: '',
      password: ''
    } 
  },
  methods: {
    signUp() {
      auth.createUserWithEmailAndPassword(this.email, this.password)
        .then(data => {
          data.user
            .updateProfile({
              displayName: this.form.name
            })
            .then(() => {
              alert('Account wurde erstellt');
              this.$router.replace('home');
            });
        })
        .catch(err => {
          this.error = err.message;
        });
    }
  }
}
</script>