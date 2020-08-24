
<template>
<div id="review-card">
  <div> Rating: {{ rating }}/5 </div>
  <div> Model: {{ variation }} </div>
  <div> Reviewed on: {{ date }} </div>
  <div> {{ review }} </div>
</div>
</template>

<script>

export default {
  props: ['review', 'rating', 'timestamp', 'variation'],
  computed: {
    date() {
      let date = new Date(this.timestamp);
      return  date.toString();
    }
  }
};
</script>

<style>
div#review-card {
  width: 300px;
  border: 2px solid rgb(231, 150, 0);
  padding: 50px;
  margin: auto;
  overflow-wrap:break-word;
}
</style>