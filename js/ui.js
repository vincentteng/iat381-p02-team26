$(document).ready(function(){

	// debugging code
	var debugText = "It works!";

	$("title").html("Debug: "+debugText);

	var windowWidth = $(window).width();
	$("title").html("Debug: "+windowWidth);

	if (windowWidth<500){
		$("#navToggle").css("display", "block");
		$("nav").hide();
	}

	$("#navToggle").click(function(){
		$("nav").slideToggle(500);
	});

	$(window).resize(function(){
		windowWidth = $(window).width();
		if (windowWidth>500){
			$("#navToggle").css("display", "hide");
			$("nav").show();
		}

		else{
			$("#navToggle").css("display", "block");
			$("nav").hide();
		}
	});
});