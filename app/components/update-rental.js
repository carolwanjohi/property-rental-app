import Ember from 'ember';

export default Ember.Component.extend({
    updateRentalForm: false,
    actions: {
        // Show update rental form when Update button is clicked
        updateRentalForm() {
            this.set('updateRentalForm', true);
        },

        // Update action
        update(rental) {
            // Store the user input values
            var params = {
                owner: this.get('owner'),
                city: this.get('city'),
                type: this.get('type'),
                totalRooms: this.get('totalRooms'),
                image: this.get('image'),
                bedrooms: this.get('bedrooms')
            };
            // Hide the form and show the button
            this.set('updateRentalForm', false);

            // Send the update action along with the rental object and value gathered(params)
            this.sendAction('update', rental, params);
        }
    }
});
