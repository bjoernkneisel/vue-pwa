<template>
  <section class="hero is-light is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">Das war leider die falsche Antwort!</h1>
        <h1 class="subtitle">Du hast leider Türchen Nr. {{this.$route.params.id}} nicht erfolgreich geöffnet!</h1>
        <p v-if="hinweis != ''" class="is-size-5">Hier ein Hinweis: {{hinweis}}</p>
        <router-link to="/Calendar" class="button is-primary">Zurück</router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'DoorSuccess',
  computed: {
    hinweis() {
      return this.$cards[this.$route.params.id].help;
    }
  }
}
</script>