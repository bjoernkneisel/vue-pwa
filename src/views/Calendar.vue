\ Clara's Adventskalender
<template>
  <section class="hero is-light is-fullheight-with-navbar">
    <div class="hero-body">
      <div v-if="loadCards" class="columns">
        <div class="column is-3 center-vertically">
        <h1 class="harry">Der trimagische Adventskalender</h1>
        <div class="countdown">
          <br>
          <div class="hidewhendone" v-if="(this.days + this.hours + this.minutes + this.seconds) > 0">
          <p class="tag is-danger mx-2">Tage: {{this.days}}</p>
          <p class="tag is-warning mx-2">Stunden: {{this.hours}}</p>
          <p class="tag is-info mx-2">Min.: {{this.minutes}}</p>
          <p class="tag is-success mx-2">Sek.: {{this.seconds}}</p>
          <br>
          <br>
          <p class="size-is-5">Sei gespannt, mein Engel...</p>
          <div class="love">
            <p class="size-is-5">Dein Björn 💕</p>
          </div>
          </div>
          <div v-else class="done"></div>
        </div>
        </div>
        <div class="column is-9">
          <div class="container" v-if="((this.days + this.hours + this.minutes + this.seconds) <= 0) && this.$calendarConfig.enabled">
              <AdvCard doorNumber="1">1</AdvCard>
              <AdvCard doorNumber="2">2</AdvCard>
              <AdvCard doorNumber="3">3</AdvCard>
              <AdvCard doorNumber="4">4</AdvCard>
              <AdvCard doorNumber="5">5</AdvCard>
              <AdvCard doorNumber="6">6</AdvCard>
              <AdvCard doorNumber="7">7</AdvCard>
              <AdvCard doorNumber="8">8</AdvCard>
              <AdvCard doorNumber="9">9</AdvCard>
              <AdvCard doorNumber="10">10</AdvCard>
              <AdvCard doorNumber="11">11</AdvCard>
              <AdvCard doorNumber="12">12</AdvCard>
              <AdvCard doorNumber="13">13</AdvCard>
              <AdvCard doorNumber="14">14</AdvCard>
              <AdvCard doorNumber="15">15</AdvCard>
              <AdvCard doorNumber="16">16</AdvCard>
              <AdvCard doorNumber="17">17</AdvCard>
              <AdvCard doorNumber="18">18</AdvCard>
              <AdvCard doorNumber="19">19</AdvCard>
              <AdvCard doorNumber="20">20</AdvCard>
              <AdvCard doorNumber="21">21</AdvCard>
              <AdvCard doorNumber="22">22</AdvCard>
              <AdvCard doorNumber="23">23</AdvCard>
              <AdvCard doorNumber="24">24</AdvCard>
      </div>
      <div v-else class="hideonmobile">
          <AdvCard notReady="true" doorNumber="1">1</AdvCard>
          <AdvCard notReady="true" doorNumber="2">2</AdvCard>
          <AdvCard notReady="true" doorNumber="3">3</AdvCard>
          <AdvCard notReady="true" doorNumber="4">4</AdvCard>
          <AdvCard notReady="true" doorNumber="5">5</AdvCard>
          <AdvCard notReady="true" doorNumber="6">6</AdvCard>
          <AdvCard notReady="true" doorNumber="7">7</AdvCard>
          <AdvCard notReady="true" doorNumber="8">8</AdvCard>
          <AdvCard notReady="true" doorNumber="9">9</AdvCard>
          <AdvCard notReady="true" doorNumber="10">10</AdvCard>
          <AdvCard notReady="true" doorNumber="11">11</AdvCard>
          <AdvCard notReady="true" doorNumber="12">12</AdvCard>
          <AdvCard notReady="true" doorNumber="13">13</AdvCard>
          <AdvCard notReady="true" doorNumber="14">14</AdvCard>
          <AdvCard notReady="true" doorNumber="15">15</AdvCard>
          <AdvCard notReady="true" doorNumber="16">16</AdvCard>
          <AdvCard notReady="true" doorNumber="17">17</AdvCard>
          <AdvCard notReady="true" doorNumber="18">18</AdvCard>
          <AdvCard notReady="true" doorNumber="19">19</AdvCard>
          <AdvCard notReady="true" doorNumber="20">20</AdvCard>
          <AdvCard notReady="true" doorNumber="21">21</AdvCard>
          <AdvCard notReady="true" doorNumber="22">22</AdvCard>
          <AdvCard notReady="true" doorNumber="23">23</AdvCard>
          <AdvCard notReady="true" doorNumber="24">24</AdvCard>
      </div>
        </div>
      </div>
      <div v-else>
        <p>Lade deinen Adventskalender ...</p>
        <div class="lds-ripple"><div></div><div></div></div>
      </div>
      </div>
  </section>
</template>

<script>
import AdvCard from "../components/Adv-Card";
import { firestore } from "../firebase";
export default {
  name: "Calendar",
  data() {
    return {
      loadCards: false,
      days: null,
      hours: null,
      minutes: null,
      seconds: null,
    };
  },
  components: {
    AdvCard,
  },
  mounted() {
    var cards = this.$cards;
    firestore
      .collection("doors")
      .where("doorNumber", "!=", "")
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          cards[doc.id] = doc.data();
        });
      });
    firestore
      .collection("doors")
      .doc("calendarConfig")
      .get()
      .then((doc) => {
        this.$calendarConfig = doc.data();
      });
    setTimeout(() => {
      // Delay to show fancy css loader :)
      this.loadCards = true;
    }, 1200);
    this.interval = setInterval(() => {
      this.timerCount();
    }, 1000);
  },
  methods: {
    timerCount() {
      var countDownDate = this.$calendarConfig.countDownDate.toDate();
      var now = new Date().getTime();
      var distance = countDownDate - now;
      this.calcTime(distance);
    },
    calcTime(dist) {
      // Time calculations for days, hours, minutes and seconds
      this.days = Math.floor(dist / (1000 * 60 * 60 * 24));
      this.hours = Math.floor(
        (dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      this.minutes = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((dist % (1000 * 60)) / 1000);
    },
    notReady() {
      console.log('Not ready');
    }
  },
};
</script>

<style lang="scss" scoped>
.hero-body {
  padding: 1rem;
}
.harry {
  margin-top: 0.75rem;
  font-family: "Harry-Potter";
  font-weight: 500;
  font-size: 3rem;
  text-shadow: 3px 3px 3px rgba(150, 150, 150, 1);
}
@font-face {
  font-family: "Harry-Potter";
  src: url("../assets/Harry-Potter.ttf.eot"); /* IE9 Compat Modes */
  src: url("../assets/Harry-Potter.ttf.eot?#iefix") format("embedded-opentype"),
    /* IE6-IE8 */ url("../assets/Harry-Potter.ttf.woff") format("woff"),
    /* Modern Browsers */ url("../assets/harryp.ttf") format("truetype"),
    /* Safari, Android, iOS */ url("../assets/Harry-Potter.ttf.svg")
      format("svg"); /* Legacy iOS */
}

@media (min-width: 0px) and (max-width: 1024px) {
  .hideonmobile { display: none!important; }   /* hide it elsewhere */
}

.center-vertically {
  align-items: center;
}

</style>