if(Meteor.isClient){
	student_context_operations = {
		// client/views/cnavi_view.js
		render_header: function(user){
			//TODO
		},
		
		// client/views/lesson_list_view.js
		get_lesson_list_item_class: function(lesson){
			//TODO
		},
		
		// client/views_submission_view.js
		render_button: function(){
			//TODO
		},
		
		// client/controllers/templates/lesson_list_controller.js
		lesson_list_item_clicked: function($this){
			//TODO
		},
		
		// client/controllers/templates/submission_controller.js
		back_button_clicked: function(){
			//TODO
		},
		
		// client/controllers/templates/submission_controller.js
		submission_button_clicked: function(){
			//TODO
		},
	};

	student_context = new Context('student', student_context_operations);
}

if(Meteor.isServer){
	student_context_operations = {
		// server/controllers/submissions_controller.js
		set_answers: function(lesson_id, user_id, answers){
			//TODO
		},
		
		// server/models/questions_model.js
		get_questions_by_lesson_id: function(user, lesson_id){
			//TODO
		}
	};
	
	student_context = new Context('student', student_context_operations);
}
