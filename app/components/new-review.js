import Ember from 'ember';

export default Ember.Component.extend({
    addNewReview: false,

    actions: {
        
        reviewFormShow() {
            this.set('addNewReview', true);
        },

        saveReview() {
            var params = {
                author: this.get('author') ? this.get('author') : 'The Author Is Unknown',
                rating: this.get('rating') ? this.get('rating') : 'No Rating Value Provided',
                content: this.get('content') ? this.get('content') : 'The Author Has Not Provided Any Content',
                rental: this.get('rental')
            };
            this.set('addNewReview', false);
            this.sendAction('saveReview', params);
        }
    }
});
