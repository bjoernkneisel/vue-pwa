<template>
  <div class="adv-card" @click="openCard()">
    <div class="adv-card-number">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { firestore } from "../firebase";
export default {
  name: "Adv-Card",
  props: {
    doorNumber: {
      type: String,
      required: true,
    },
  },
  methods: {
    openCard() {
      console.log("Opening Door " + this.doorNumber + "!");
      // access firebase and fetch question + password
      firestore
        .collection("doors")
        .doc(this.doorNumber)
        .get()
        .then((doc) => {
          this.card = doc.data();
          console.log(this.card);
          alert(this.card.question);
          var resp = window.prompt("Deine Antwort");
          if (resp === this.card.password) {
            resp = null;
            firestore.collection("doors").doc(this.card.doorNumber).update({
              solved: true,
            });
            this.$router.push({
              name: "doorSuccess",
              params: { id: this.card.doorNumber },
            });
          } else {
            alert("Das war leider die falsche Antwort!");
            resp = null;
          }
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.adv-card {
  height: 7rem;
  width: 7rem;
  margin: 1.2rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: inline-block;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  position: relative;
  -webkit-transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  -o-transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  border-radius: 12px;
  overflow: hidden;
  -webkit-box-shadow: 12px 12px 22px #e1e1e3, -15px -15px 22px #ffffff;
  box-shadow: 12px 12px 22px #e1e1e3, -12px -12px 22px #ffffff;
  background-color: #dcd6f7;
}

.adv-card-number {
  height: 100%;
  width: 100%;
  margin: 0 auto;
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  vertical-align: middle;
  line-height: 7rem;
}
</style>