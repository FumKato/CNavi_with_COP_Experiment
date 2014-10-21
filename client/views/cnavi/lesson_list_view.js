Template.lesson_list.helpers({
	get_class_name: function(){
		if(Session.get('class_id') == null) return;
		return classes_model.get_classes_by_id(Session.get('class_id')).name;
	},
	
	get_lessons: function(){
		if(Session.get('class_id') == null) return;
		return lessons_model.get_lessons_by_class_id(Session.get('class_id'));
	},
	
	get_lesson_list_item_class: function(lesson){
		return lesson_list_view.get_lesson_list_item_class(lesson);
	},
	
	render_button: function(){
		return lesson_list_view.render_button(Session.get('myself'));
	}
});

LessonListView = function(){
	var _this = LessonListView;
	_this.prototype.get_lesson_list_item_class = function(lesson){
		// TODO
	};
	
	_this.prototype.render_button = function(){
		// TODO
	};
};

lesson_list_view = new LessonListView();
