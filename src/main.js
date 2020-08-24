import Vue from 'vue';
//import VueFire from 'vuefire';

import App from '@/App.vue';
import {db} from '@/firebase';

const max_displayed_reviews = 3;

//Vue.use(VueFire);
Vue.config.productionTip = false;
Vue.config.devtools = true;

var vm = new Vue({
  data: () => ({ reviews: [] }),
  created() {
    const reviewRef = db.ref('reviews');
    reviewRef.on('child_added',
      (snapshot) => {
        // remove extra reviews
        this.reviews.splice(max_displayed_reviews-1, 1);
        // insert this review at the beginning
        this.reviews.splice(0,0,snapshot.val());
      });
  },
  render: h => h(App),
});


vm.$mount('#app');