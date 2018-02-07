$(document).ready(function(){
	$(document).mousemove(function(event){
		$("#parrafo").text("la posicion del mouse es: X::"+event.pageX+", Y:"+event.pageY);
	});
	$("#enlace").click(function(event){
		event.preventDefault();
	});
});