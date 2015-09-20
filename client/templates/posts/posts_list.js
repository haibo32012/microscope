Template.postsList.helpers({
	posts: function() {
		//console.log('yes');
		return Posts.find({}, {sort: {submitted: 1}});
	}
});
