QuestionsController = function(){
	var _this = QuestionsController;
	
	_this.prototype.set_questions = function(lesson_id, user_id, questions, answers){
		// TODO
	};
};

questions_controller = new QuestionsController();

Meteor.publish('questions', function(user, lesson_id){
	adapt_context(user.id);
	var questions = questions_model.get_questions_by_lesson_id(user, lesson_id);
	deactivate_context(user.id);
	return questions;
});

Meteor.methods({
	set_questions: function(lesson_id, user_id, questions, answers){
		adapt_context(user_id);
		questions_controller.set_questions(lesson_id, user_id, questions, answers);
		deactivate_context(user_id);
	}
});
