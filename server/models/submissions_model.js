SubmissionsModel = function(){
	var _this = SubmissionsModel;
	
	_this.prototype.set_submissions = function(user_id, user_name, lesson_id, answers){
		if(Submissions.find({user_id: user_id, lesson_id: lesson_id}).count() == 0){
			var date = new Date();
			var submission_date = {
				year : date.getYear() + 1900,
				month: date.getMonth() + 1,
				date: date.getDate(),
				hours: date.getHours(),
				minutes: date.getMinutes()
			};
			Submissions.insert({
				user_id: user_id,
				user_name: user_name,
				lesson_id: lesson_id,
				answers: answers,
				scores: null,
				date: submission_date
			});
		} else {
			Submissions.update({
					user_id: user_id,
					lesson_id: lesson_id
				},
				{$set: {
					answers: answers
				}}
			);
		}
	};
	
	_this.prototype.set_scores = function(user_id, user_name, lesson_id, scores){
		Submissions.update({
					user_id: user_id,
					lesson_id: lesson_id
				},
				{$set: {
					scores: scores
				}}
		);
	};
	
	_this.prototype.get_submissions_by_lesson_id = function(user, lesson_id){
		// TODO
	};
};

submissions_model = new SubmissionsModel();