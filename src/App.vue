<template>
  <div v-if="!loading" id="app">
    <Navbar></Navbar>
    <router-view />
  </div>
  <div v-else class="loader">
    <div class="lds-ripple"><div></div><div></div></div>
  </div>
  
</template>

<script>
import Navbar from "./components/Navbar.vue";
import { auth } from "./firebase";
import { firestore } from "./firebase";
import Vue from "vue";

export default {
  name: "App",
  components: {
    Navbar
  },
  data() {
    return {
      loading: true
    } 
  },
  created() {
    this.loading = false;
  }
};
</script>

<style lang="scss">
/* Hide scrollbar for Chrome, Safari and Opera */
body::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
body {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
  max-height: 100vh
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.lds-ripple {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ripple div {
  position: absolute;
  border: 4px solid #dcd6f7;
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.lds-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}
@keyframes lds-ripple {
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
}
</style>
