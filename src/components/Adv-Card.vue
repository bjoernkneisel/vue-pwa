<template>
  <div class="adv-card" :class="{'opened': opened}" @click="openCard()">
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
    notReady: {
      type: String,
    }
  },
  methods: {
    openCard() {
      if (this.notReady == "true") {
        alert('Du darfst den Kalender noch nicht öffnen!');
      } else {
      console.log("Opening Door " + this.doorNumber + "!");
      // access firebase and fetch question + password
      firestore
        .collection("doors")
        .doc(this.doorNumber)
        .get()
        .then((doc) => {
          this.card = doc.data();
          console.log(this.card);
          if (this.card.solved === true) {
            this.$router.push({
              name: "doorSuccess",
              params: { id: this.card.doorNumber },
            });
          } else {
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
          }
        });
    }}
  },
  computed: {
    opened() {
      console.log(this.$cards[this.doorNumber].solved);
      if (this.$cards[this.doorNumber].solved == true) {
        console.log(this.doorNumber + ' already solved');
        return true
      } else {
        console.log(this.doorNumber + ' not solved yet');
        return false
      } 
    }
  }
}   
</script>

<style lang="scss" scoped>
.adv-card {
  height: 8.5rem;
  width: 8.5rem;
  margin: 1rem;
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
.adv-card:hover {
  height: 9.2rem;
  width: 9.2rem;
  transform: translateY(-6px);
  box-shadow: 24px 24px 44px #e1e1e3, -24px -24px 44px #ffffff;
  background-color: #00FFC5;
}

.adv-card-number {
  height: 100%;
  width: 100%;
  margin: 0 auto;
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  vertical-align: middle;
  line-height: 8.5rem;
}

.opened {
  background-color: #00FFC5;
}
</style>