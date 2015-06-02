import DS from 'ember-data';

var attr = DS.attr;
export default DS.Model.extend({
  	title: 		attr('string'),
	date: 		attr('string'),
	place: 		attr('string'),
	price: 		attr('string'),
	review: 		attr('string'),
	visible: 	attr('boolean'),
	cover: 		attr('string'),
	main: 		attr('boolean'),
	created_at: attr('string', { defaultValue: '2 июня 2015' }) 
});
