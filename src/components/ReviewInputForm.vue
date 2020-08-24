<template>
  <form id="reviewForm" @submit.prevent="formSubmit">
    <div class="error" v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <ul>
            <li v-bind:key="error" v-for="error in errors">{{ error }}</li>
        </ul>
    </div>      
    <div>
    <label for="rating">Rating (1-5):</label>
    <input
        id="rating"
        v-model="rating"
        type="number"
        name="rating"
        min="1"
        max="5"
    >
    </div>
    <div>
    <label for="review">Leave a review:</label>
    <textarea
        id="review"
        v-model="review"
        type="text"
        name="review"
        :maxlength="maxReviewLength"
    ></textarea>
    </div>
    <div>
    <label for="variation">Device Variation:</label>
    <select id="variation" v-model="variation" name="variation">
    <option>Charcoal Fabric</option>
    <option>Sandstone Fabric</option>
    <option>Black</option>
    <option>White</option>
    <option>Walnut Finish</option>
    <option>Heather Gray Fabric</option>
    <option>Oak Finish</option>
    </select>
    
    </div>
    <input type="submit" value="Submit!"/>
  </form>
</template>

<script>
import {db, serverTimeStamp} from '@/firebase'
const reviewRef = db.ref('reviews');


export default {
  data() {
    return {
        maxReviewLength: 500,
        rating: '',
        review: '',
        variation: '',
        errors: []
    };
  },
  methods: {
    formSubmit() {
        this.errors = []
        if (!this.rating){
            this.errors.push("A rating is required.")
        }
        if (!this.review){
            this.errors.push("A review is required.")
        }
        if (!this.variation){
            this.errors.push("A device variation is required.")
        }
        if(this.errors.length == 0) {
            reviewRef.push({
                rating: this.rating,
                review: this.review,
                variation: this.variation,
                timestamp: serverTimeStamp
                });
            this.rating = '';
            this.review = '';
            this.variation = '';
        }
    }
  }
}
</script>