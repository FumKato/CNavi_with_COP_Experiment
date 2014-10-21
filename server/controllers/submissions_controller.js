Meteor.publish('submissions', function(user, lesson_id){
	adapt_context(user.id);
	var submissions = submissions_model.get_submissions_by_lesson_id(user, lesson_id);
	deactivate_context(user.id);
	return submissions;
});

SubmissionsController = function(){
	var _this = SubmissionsController;
	
	_this.prototype.set_answers = function(lesson_id, user_id, answers){
		// TODO
	};
	
	_this.prototype.set_scores = function(lesson_id, user_id, scores){
		// TODO
	};
};

submissions_controller = new SubmissionsController();

Meteor.methods({
	set_answers: function(lesson_id, user_id, answers){
		adapt_context(user_id);
		submissions_controller.set_answers(lesson_id, user_id, answers);
		deactivate_context(user_id);
	},
	
	set_scores: function(lesson_id, user_id, scores){
		adapt_context(user_id);
		submissions_controller.set_scores(lesson_id, user_id, scores);
		deactivate_context(user_id);
	}
});
