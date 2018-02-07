$(document).ready(function(){
	$("button").click(function(){
		$( "div" ).animate({
			width: "+=100",
		    height: "+=100",
		    color: "white"
		});
	});
})