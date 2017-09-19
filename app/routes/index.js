import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.store.findAll('rental');
    },

    actions: {
        // Save a new Rental
        saveRental3(params) {
            var newRental = this.store.createRecord('rental', params);
            newRental.save(); 
            this.transitionTo('index');
        }, 

        // Update an existing Rental
        update(rental, params) { 
            Object.keys(params).forEach( function(key) {
                if( params[key] !== undefined) {
                    rental.set(key, params[key])
                }
            });
            rental.save();
            this.transitionTo('index');
        },

        // Destroy an existing Rental
        destroyRental(rental) {
            rental.destroyRecord(); 
            this.transitionTo('index');
        }
    }
});
