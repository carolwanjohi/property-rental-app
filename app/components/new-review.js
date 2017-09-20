import Ember from 'ember';

export default Ember.Component.extend({
    addNewReview: false,

    actions: {
        
        addNewReview() {
            this.set('addNewReview', true);
        },

        saveReview() {
            var params = {
                rating: this.get('rating'),
                content: this.get('content'),
                author: this.get('author')
            };
            this.set('addNewReview', false);
            this.sendAction('saveReview', params)
        }
    }
});
