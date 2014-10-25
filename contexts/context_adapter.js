if(Meteor.isClient){
	Deps.autorun(function(){
		if(Session.get('myself') != null){
			switch(Session.get('myself').role){
				case 'teacher':
					break;
				case 'assistant':
					break;
				case 'student':
					break;
			}
		}
	});
}

if(Meteor.isServer) {
	adapt_context = function(user_id){
		var user = users_model.get_users_by_user_id(user_id);
		switch(user.role){
			case 'teacher':
				break;
			case 'assistant':
				break;
			case 'student':
				break;
		}
	};
	
	deactivate_context = function(user_id){
		var user = users_model.get_users_by_user_id(user_id);
		switch(user.role){
			case 'teacher':
				break;
			case 'assistant':
				break;
			case 'student':
				break;
		}
	};
}
