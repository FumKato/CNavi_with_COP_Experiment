SubmissionView = function(){
	var _this = SubmissionView;
	
	_this.prototype.get_lesson_name = function(){
		// TODO
	};
	
	_this.prototype.render_answer = function(num, question){
		// TODO
	};
	
	_this.prototype.render_button = function(){
		// TODO
	};
};

submission_view = new SubmissionView();

Template.submission.helpers({
	get_lesson_name : function(){
		return submission_view.get_lesson_name();
	},
	
	get_questions: function(){
		var questions = questions_model.get_questions_by_lesson_id(Session.get('lesson_id'));
		if(questions.length == 0) return;
		return questions[0].questions;
	},
	
	render_answer: function(num, question){
		return submission_view.render_answer(num, question);
	},
	
	render_button: function(){
		return submission_view.render_button(Session.get('myself'));
	}
});
