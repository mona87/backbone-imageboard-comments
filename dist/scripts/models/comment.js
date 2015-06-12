var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;


module.exports = Backbone.Model.extend({
	defaults: {
		ImgID: null,
		message: null,
		_id: null
	
	},
	idAttribute: '_id',
	urlRoot: 'http://tiy-fee-rest.herokuapp.com/collections/mona-comments2'
})