<template>
  <section class="hero is-light is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container">
        <h1 v-if="messages!=null" class="title">{{messages.today}}</h1>
      </div>
    </div>
  </section>
</template>

<script>
import { firestore } from '../firebase'  
export default {
  name: "Home",
  data() {
    return {
      messages: null,
      messageOfTheDay: null
    }
  },
  mounted() {
    firestore.collection('messages').doc('message').onSnapshot(doc => {
      this.messages = doc.data();
      console.log(this.messages);
    })
  }
}
</script>