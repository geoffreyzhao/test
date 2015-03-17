// function($){
	/*
	$.fn.popwin = function(options){
		var defaultOptions = {
			flag: true
		};

		var target = $.extend(defaultOptions, options);

		return this.each(function(){
			var obj = $(this);

			obj.tap(function(){
				$("<div class='pw-tip'></div>")
			});
		});
	}
	*/

	/*
	var PopWindow = function(settings){
		var opts = $.extend({
	        trigger: "",
	        autoHide: false
	    }, settings);

	    this.options = opts;

	};

	PopWindow.prototype = {
		init: function(){
			this.render();
		},
		render: function(){

		},
		close: function(){

		}
	};
	*/

	/*

	var PopWindow = function(settings){
		var options = $.extend({
			trigger: "",
			autoHide: false,
			template: ""
		}, settings);

		var pw = $("<div class='pw-mask-layer'>" + template + "</div>");


	};
	*/

	var PickupWindow = function(settings){
		var options = $.extend({
			trigger: "",
			title: "",
			data: [],
			width: "60%",
			height: "200px",
			position: "center"
		}, settings);

		var itemList = "";
		for (var i = 0; i < options.data.length; i++) {
			itemList += "<li>" + options.data[i]['item'] + "</li>";
		}

		var pw = $("<div class='window-container'>"
		 			+ "<div class='window-content' style='width:" + options.width 
		 			+ ";height:" + options.height + ";margin:0 auto;margin-top:200px;'>"
		 				+ "<div class='title'>" + options.title + "</div>"
						+ "<ul class='items-container'>" + itemList + "</ul>"
					+ "</div>"
				+ "</div>");

		pw.appendTo("body");

		$(options.trigger).tap(function(){
			pw.show();
			$(".window-content").animate({
				// "margin-top": "200px",
				opacity: 1
			}, 300, "ease-in");
		});
		

	};

	
// };