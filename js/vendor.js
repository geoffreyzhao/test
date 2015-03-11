function($){
	$.fn.popwin = function(options){
		var defaultOptions = {
			flag: true
		};

		var target = $.extend(defaultOptions, options);

		return this.each(function(){
			var obj = $(this);
		});
	}

	
};