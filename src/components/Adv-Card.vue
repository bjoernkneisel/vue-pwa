<template>
  <div v-if="loadCards" class="adv-card" :class="{'opened': this.$cards[doorNumber].solved}" @click="openCard()">
    <div class="adv-card-number">
      <slot></slot>
    </div>
  </div>
  <div v-else>
    <p>Lade Türchen-Nr.: {{doorNumber}}</p>
    <div class="lds-ripple"><div></div><div></div></div>
  </div>
</template>

<script>
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
  data() {
    return {
      loadCards: false
    }
  },
  mounted() {
    setTimeout(() => {
      this.loadCards = true
    }, 600)
  },
  methods: {
    openCard() {
      if (this.notReady == "true") {
        alert('Du darfst den Kalender noch nicht öffnen!');
      } else {
        this.$router.push({
          name: "doorInput",
          params: { id: this.doorNumber },
        });
      }
    }
  }
}   
</script>

<style lang="scss" scoped>
@media (min-width: 0px) and (max-width: 1024px) {
  .adv-card {
  height: 2rem;
  width: 2rem;
  margin: 0.2rem;
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
    height: 2.5rem;
    width: 2.5rem;
    transform: translateY(-6px);
    box-shadow: 24px 24px 44px #e1e1e3, -24px -24px 44px #ffffff;
    background-color: #00FFC5;
  }

  .adv-card-number {
    height: 100%;
    width: 100%;
    margin: 0 auto;
    font-size: 0.7rem;
    font-weight: 700;
    text-align: center;
    vertical-align: middle;
    line-height: 8.5rem;
  }

  .opened {
    background-color: #00FFC5;
  }

}

.adv-card {
  height: 7.7rem;
  width: 7.7rem;
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
  height: 8.7rem;
  width: 8.7rem;
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