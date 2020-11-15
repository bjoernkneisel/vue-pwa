<template>
  <section class="hero is-light is-fullheight-with-navbar">
    <div class="container">
      <div class="login">
        <div class="Settings">
          <h1 class="is-size-1">Einstellungen</h1>
          <div class="unauthorized">
            <h4 class="is-size-5">Uneingeloggt</h4>
            <label class="checkbox">
              <input type="checkbox" />
              Ich akzeptiere die <a href="/AGB">AGB</a>
            </label>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Settings",
};
</script>

<style lang="scss" scoped>
a:hover {
  color: orange;
}
.checkbox:hover {
color:  #00FFC5;
}
</style>
