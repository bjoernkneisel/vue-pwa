\ Clara's Adventskalender
<template>
  <section class="hero is-light is-fullheight-with-navbar">
    <div class="hero-body">
      <div class="container">
        <h1 class="title harry">Der trimagische Adventskalender</h1>
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
    </div>
  </section>
</template>

<script>
import AdvCard from '../components/Adv-Card'
import { firestore } from '../firebase'
export default {
  name: 'Calendar',
  components: {
    AdvCard
  },
  data() {
    return {
      card: null
    }
  },
  methods: {
    openCard(number) {
      console.log('Hello')
      // access firebase and fetch question + password
      firestore.collection('doors').doc(number).onSnapshot(doc => {
      this.card = doc.data();
      console.log(this.card);
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.hero-body {
  padding: 1rem;
}
.harry {
  font-family: 'Harry-Potter';
  font-weight: 500; 
  font-size: 3rem;
  text-shadow: 3px 3px 3px rgba(150, 150, 150, 1);
}
@font-face {
  font-family: 'Harry-Potter';
  src: url('../assets/Harry-Potter.ttf.eot'); /* IE9 Compat Modes */
  src: url('../assets/Harry-Potter.ttf.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../assets/Harry-Potter.ttf.woff') format('woff'), /* Modern Browsers */
       url('../assets/harryp.ttf')  format('truetype'), /* Safari, Android, iOS */
       url('../assets/Harry-Potter.ttf.svg') format('svg'); /* Legacy iOS */
}
</style>