var $ = require('jquery');
var _ = require('backbone/node_modules/underscore');
var Backbone = require('backbone');
Backbone.$ = $;


module.exports = Backbone.Model.extend({
		defaults: {
			url:  null,
			caption: null,
			_id: null
		
		},
		urlRoot: 'http://tiy-fee-rest.herokuapp.com/collections/images-mona4',
		idAttribute: '_id'
		// validate: function(attr, options){
			
		// 	if(_.isEmpty(attr.caption) || _.isEmpty(attr.image)){
		// 		return true
		// 	}
		// 	else if(attr.image.indexOf("https://") !== 0 || attr.image.indexOf("http://") !== 0){
		// 		return false
		// 	}			
		// }
})