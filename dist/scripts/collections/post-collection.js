var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;
var Comment = require('../../scripts/models/comment.js');

module.exports = Backbone.Collection.extend({
		model: Comment,
		url: 'http://tiy-fee-rest.herokuapp.com/collections/mona-comments2'
})