if(Meteor.isClient){
	teacher_context_operations = {
		// client/views/cnavi_view.js
		render_header: function(user){
			return '<div id="header" class="blue"><div id="logo">CNavi</div><div id="headerName">Welcome back <b>' + 
				user.name + '</b></div></div>';
		},
		
		// client/views/lesson_list_view.js
		render_create_button: function(){
			return '<input type="button" class="createButton" value="Create" />';
		},
		
		// client/views/submission_view.js
		get_lesson_name: function(){
			var lesson_name = this.proceeds.get_lesson_name();
			var submission = submissions_model.get_submissions_by_user_id(Session.get('lesson_id'), Session.get('student_id'));
			if(submission == null) return;
			return lesson_name + ': ' + submission.user_name;
		},
		
		// client/views_submission_view.js
		render_register_button: function(){
			return '<input type="button" class="registrationButton" value="Register" />';
		},
		
		// client/views/submission_view.js
		render_answer: function(num, question){
			var questions = questions_model.get_questions_by_lesson_id(Session.get('lesson_id'));
			var submissions = submissions_model.get_submissions_by_user_id(Session.get('lesson_id'), Session.get('student_id'));
			if(questions == null || submissions == null) return;
			var answers = '<div class="questionListAnswer">TA. ' + questions[0].answers[num] + '</div>' +
				'<div class="submittedAnswer">A. ' + submissions.answers[num] + '</div>';
			answers += '<div class="markFormBox">score:<input type="text" class="markForm" name="markForm" /></div>';
			return answers;
		},
		
		// client/controllers/templates/lesson_list_controller.js
		lesson_list_item_clicked: function($this){
			this.proceeds.lesson_list_item_clicked($this);
			Meteor.subscribe('submissions', Session.get('myself'), $this.attr('id'), function(){
				cnavi_view.render('studentList');
			});
		},
		
		// client/controllers/templates/lesson_list_controller.js
		create_button_clicked: function(){
			cnavi_view.render('lessonCreation');
		},
		
		// client/controllers/templates/submission_controller.js
		back_button_clicked: function(){
			cnavi_view.render('studentList');
		},
		
		// client/controllers/templates/submission_controller.js
		registration_button_clicked: function(){
			var scores = new Array();
			$('.markForm').each(function(){
				scores.push($(this).val());
			});
			submissions_model.set_scores(Session.get('lesson_id'), Session.get('myself').id, scores);
			alert('Score is registered');
			cnavi_view.render('lessonList');
		}
	};

	teacher_context = new Context('teacher', teacher_context_operations);
}

if(Meteor.isServer){
	teacher_context_operations = {
		// server/controllers/lessons_controller.js
		set_lessons: function(class_id, user_id, lesson_name, lesson_date){
			return lessons_model.set_lessons(class_id, lesson_name, lesson_date);
		},
		
		// server/controllers/questions_controller.js
		set_questions: function(lesson_id, user_id, questions, answers) {
			questions_model.set_questions(lesson_id, questions, answers);
		},
		
		// server/controllers/submissions_controller.js
		set_scores: function(lesson_id, user_id, scores){
			var user = this.proceeds.set_scores(lesson_id, user_id, scores);
			submissions_model.set_submissions(user_id, user.name, lesson_id, scores);
		},
		
		// server/models/questions_model.js
		get_questions_by_lesson_id: function(user, lesson_id){
			return Questions.find(
				{
					lesson_id: lesson_id
				}
			);
		},
		
		// server/models/submissions_model.js
		get_submissions_by_lesson_id: function(user, lesson_id){
			return Submissions.find({
				lesson_id: lesson_id
			});
		}
	};
	
	teacher_context = new Context('teacher', teacher_context_operations);
}
