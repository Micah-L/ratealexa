<template>
  <div id="app">
    <ReviewInputForm></ReviewInputForm>
    <ReviewDisplay v-for="review in this.$root.$data.reviews" v-bind:key="review" v-bind:timestamp="review.timestamp" v-bind:review="review.review" v-bind:variation="review.variation" v-bind:rating="review.rating"></ReviewDisplay>
  </div>
</template>

<script>
import ReviewInputForm from '@/components/ReviewInputForm.vue'
import ReviewDisplay from '@/components/ReviewDisplay.vue'


export default {
  name: 'App',
  props: ['reviews'],
  components: {
    ReviewInputForm,
    ReviewDisplay
  },
  data() {
    return null
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
