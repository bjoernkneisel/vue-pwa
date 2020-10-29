<template>
  <div class="Dashboard">
    <h1>Login</h1>
    <form>
      <input placeholder="Username" type="text" >
      <input placeholder="Password" type="password"/>
      <button class="button" type="submit" @click="login"
    </form>
    <router-link class="button is-primary" to="/register">Registrieren</router-link>
  </div>
</template>

<script>

export default {
  name: 'Dashboard',
  methods: {
    login(){
      //login in firebase code
      this.$router.replace('home')
    } 
  }
}
</script>
