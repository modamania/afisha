import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {
   	return this.store.fetchById('event', params.event_id);
  }
});
