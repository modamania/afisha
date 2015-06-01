import DS from 'ember-data';

var attr = DS.attr;
export default DS.Model.extend({
  	title: attr('string'),
	date: attr('string'),
	place: attr('string'),
	price: attr('string'),
	description: attr('string'),
	cover: attr('string'),
	isHero: attr('boolean')
});
