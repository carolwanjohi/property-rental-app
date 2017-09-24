import Ember from 'ember';

export default Ember.Component.extend({
    addNewRental: false,

    actions : {
        rentalFormShow() {
            this.set('addNewRental', true);
        },

        saveRental1() {
            var params = {
                owner: this.get('owner') ? this.get('owner') : 'The Owner Is Unknown',
                city: this.get('city') ? this.get('city') : 'The City Is Unknown',
                type: this.get('type') ? this.get('type') : 'The Type Is Unknown',
                totalRooms: this.get('totalRooms') ? this.get('totalRooms') : 'The Total Number of Rooms Is Unknown',
                image: this.get('image') ? this.get('image') : null,
                bedrooms: this.get('bedrooms') ? this.get('bedrooms') : 'The Number of Bedrooms Is Unknown'
            }
            this.set('addNewRental', false);
            this.sendAction('saveRental2', params);
        }
    }
});
