var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;
var ImageModel = require('../../scripts/models/image-model.js')

module.exports = Backbone.Collection.extend({
		model: ImageModel,
		url: 'http://tiy-fee-rest.herokuapp.com/collections/images-mona4'
})