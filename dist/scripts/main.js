var $ = require('jquery');
var _ = require('backbone/node_modules/underscore');
var Backbone = require('backbone');
Backbone.$ = $;
var ImageModel = require('./models/image-model.js');
var ImageCollection = require('./collections/image-collection.js');
var Comment = require('./models/comment.js');
var PostCollection = require('./collections/post-collection.js');

$(document).ready(function(){
	
	var imageList = new ImageCollection();
	var commentList = new PostCollection();

	var buildImageTemplate = _.template($('.img-template').html());
	var buildCommentTemplate = _.template($('.comment-template').html());

	imageList.fetch({
		success: function(imageObj){
			commentList.fetch();
		}
	});
	
	$('#form-info').on('submit', function(e){
		e.preventDefault();

		var newImage = new ImageModel({
			url: $('#input-img').val(),
			caption: $('#input-caption').val()
		});
		console.log(newImage.get('_id'))
		
			imageList.add(newImage);
			newImage.save();
	 	

			 $('#input-img').val('');
			 $('#input-caption').val('');				
	});

	imageList.on('add', function(imageModel){
		$('.inner').append(buildImageTemplate({model: imageModel}));


		$('[data-form="'+imageModel.cid+'"]').on('submit', function(e){
			e.preventDefault();
			var string = '<span><strong>User: </strong></span>';
			var commentToAdd = new Comment({
				message: string + $(this).find('.comment-input').val(),
			    ImgID: imageModel.get('_id')
			})
			$('.comment-input').val('');
			commentList.add(commentToAdd);
			commentToAdd.save();
		});
	});
	commentList.on('add', function(commentModel){
		var html = buildCommentTemplate({model: commentModel});
		var imageId = commentModel.get('ImgID');
		var imageModel = imageList.get(imageId);
		$('[data-form="'+imageModel.cid+'"] .comment-list').append(html);
	})

	$('.circle').click(function(e){
		$('#form-info').slideToggle('slow');
	})
	$('#cancel-btn').click(function(e){
		e.preventDefault(e);
		$('#input-img').val('');
		$('#input-caption').val('');
	})

});