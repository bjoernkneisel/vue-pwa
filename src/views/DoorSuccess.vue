<template>
  <section class="hero is-light is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">Du hast erfolgreich Türchen Nr. {{this.$route.params.id}} geöffnet!</h1>
        <p class="is-size-5">Schicke Björn hiervon einen Screenshot für deine Belohnung!</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'DoorSuccess'
}
</script>