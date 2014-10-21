Template.cnavi.render_header = function(){
	return cnavi_view.render_header(Session.get('myself'));
};

CNaviView = function(){
	var _this = CNaviView;
	
	_this.prototype.render = function(target){
		$('.cnavi_contents').hide();
		var targetID = '#' + target;
		$(targetID).show();
	};
	
	_this.prototype.render_header = function(user){
		// TODO
	};
};

cnavi_view = new CNaviView();
