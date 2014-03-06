// Tablet + Mobile Menu stuff

$(document).ready(function(){

	var windowWidth = $(window).width();

	// Hide nav when screen size is <= 800
	if (windowWidth < 801){
		$("#navToggle").css("display", "block");
		$("nav").hide();
	}

	// Slide action for hiding / unhiding menu bar
	$("#navToggle").click(function(){
		$("nav").slideToggle(500);
	});

	$(window).resize(function(){
		windowWidth = $(window).width();

		// Hide navToggle when 
		if (windowWidth > 801){
			$("#navToggle").css("display", "hide");
			$("nav").show();
		}

		else{
			$("#navToggle").css("display", "block");
			$("nav").hide();
		}

	});

});