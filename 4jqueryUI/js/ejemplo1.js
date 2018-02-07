$(document).ready(function() {
    $("#fecha").datepicker();
    $("#mostrar").click(function(){
    	var nombre = $("#nombre").val();
    	var apellido = $("#apellido").val();
    	var fecha = $("#fecha").val();

    	if (nombre.length && apellido.length && fecha.length){
    		alert(nombre+' '+apellido +' nacio el '+fecha);
    	}else{
    		alert('Datos incompletos');
    	}

    });
});