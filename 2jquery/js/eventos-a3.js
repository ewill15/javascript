$(document).ready(function(){
	$("#txt1").focus(function(){
		$(this).css("background-color","#FFBF01");
	});
	$("#txt1").blur(function(){
		$(this).css("backgroundColor","#FFFFFF");
	});
});