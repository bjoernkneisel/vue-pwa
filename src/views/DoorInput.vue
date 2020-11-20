<template>
  <section class="hero is-light is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container">
        <div v-if="loadCards">
          <h1 class="title">Beantworte diese Frage, trimagischer Champion!</h1>
          <h2 class="subtitle"><strong>Frage: </strong>{{$cards[doorNumber].question}}</h2>
          <form>
            <input class="input mb-5" v-model="input" placeholder="Deine Antwort..."/>
            <button class="button is-primary" @click="checkAnswer(input)">Antwort absenden</button>
          </form>
        </div>
        <div v-else>
          <p>Lade Frage für den trimagischen Champion...</p>
              <div class="lds-ripple"><div></div><div></div></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { firestore } from "../firebase";
export default {
  name: 'DoorInput',
  data() {
    return {
      input: null,
      loadCards: false,
      doorNumber: null
    }
  },
  mounted() {
    this.doorNumber = this.$route.params.id
    if (this.$cards[this.$route.params.id].solved === true) {
      this.$router.push({
        name: "doorSuccess",
        params: { id: this.$route.params.id },
      });
    } else {
      setTimeout(() => {
        this.loadCards = true
      }, 2000)
    }
  },
  methods: {
    checkAnswer(input) {
      if (this.$cards[this.doorNumber].solved === true) {
        this.$router.push({
          name: "doorSuccess",
          params: { id: this.doorNumber },
        });
      } else {
        var resp = input
        if (resp === this.$cards[this.doorNumber].password) {
          resp = null;
          firestore.collection("doors").doc(this.doorNumber).update({
            solved: true,
          });
          this.$router.push({
            name: "doorSuccess",
            params: { id: this.doorNumber },
          });
        } else {
          resp = null;
          this.$router.push({
            name: "doorFailure",
            params: { id: this.doorNumber },
          });
        }
      }
    }
  }
}
</script>