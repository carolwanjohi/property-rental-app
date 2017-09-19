import Ember from 'ember';

export default Ember.Component.extend({
    isImageShowing: false,
    actions: {
        // Show image when button is clicked
        imageShow() {
            return this.set('isImageShowing', true);
        },

        // Hide image when image is clicked
        imageHide() {
            return this.set('isImageShowing', false);
        }
    }
});
