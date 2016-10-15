window.addEventListener("load",function(){
	$.each($('nav[data-action="expand"]*:first-child'), function(){
		$(this).on("click", function(){
			if($(this).parent().hasClass("open") == false)$(this).parent().addClass("open");
			else $(this).parent().removeClass("open");
		});
	});
});

