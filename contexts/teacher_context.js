if(Meteor.isClient){
	teacher_context_operations = {
		// client/views/cnavi_view.js
		render_header: function(user){
			//TODO
		},
		
		// client/views/lesson_list_view.js
		render_create_button: function(){
			//TODO
		},
		
		// client/views/submission_view.js
		get_lesson_name: function(){
			//TODO
		},
		
		// client/views_submission_view.js
		render_register_button: function(){
			//TODO
		},
		
		// client/views/submission_view.js
		render_answer: function(num, question){
			//TODO
		},
		
		// client/controllers/templates/lesson_list_controller.js
		lesson_list_item_clicked: function($this){
			//TODO
		},
		
		// client/controllers/templates/lesson_list_controller.js
		create_button_clicked: function(){
			//TODO
		},
		
		// client/controllers/templates/submission_controller.js
		back_button_clicked: function(){
			//TODO
		},
		
		// client/controllers/templates/submission_controller.js
		registration_button_clicked: function(){
			//TODO
		}
	};

	teacher_context = new Context('teacher', teacher_context_operations);
}

if(Meteor.isServer){
	teacher_context_operations = {
		// server/controllers/lessons_controller.js
		set_lessons: function(class_id, user_id, lesson_name, lesson_date){
			//TODO
		},
		
		// server/controllers/questions_controller.js
		set_questions: function(lesson_id, user_id, questions, answers) {
			//TODO
		},
		
		// server/controllers/submissions_controller.js
		set_scores: function(lesson_id, user_id, scores){
			//TODO
		},
		
		// server/models/questions_model.js
		get_questions_by_lesson_id: function(user, lesson_id){
			//TODO
		},
		
		// server/models/submissions_model.js
		get_submissions_by_lesson_id: function(user, lesson_id){
			//TODO
		}
	};
	
	teacher_context = new Context('teacher', teacher_context_operations);
}
