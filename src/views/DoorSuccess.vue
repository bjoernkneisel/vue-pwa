<template>
  <section class="hero is-light is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">Du hast erfolgreich Türchen Nr. {{this.$route.params.id}} geöffnet!</h1>
        <p class="is-size-5">Schicke Björn folgenden Lösungs-Code für deine Belohnung: <strong>{{lösungsCode}}</strong>!</p>
        <br>
        <router-link to="/Calendar" class="button is-primary">Zurück</router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'DoorSuccess',
  computed: {
    lösungsCode() {
      return this.$cards[this.$route.params.id].lösungsCode;
    }
  }
}
</script>