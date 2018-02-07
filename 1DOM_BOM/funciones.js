//Crear una función en JavaScript que nos permita ir dos páginas atrás del historial de navegación.
function irAtras2Pag(){
	window.history.go(-2);
}
function irAdelante() {
		window.history.go(2);
	}
	function volver(){
		window.history.back();
	}
	function adelante(){
		window.history.forward();
	}
	function obtenerCookie(nombre){
		var nuevonombre=nombre+"=";
		var verificar = document.cookie.split(';');
		for (var i =0; i<verificar.length;i++) {
			var v=verificar[i];
			while(v.charAt(0)==''){
				v=v.substring(1);
			}
			if (v.indexOf() != -1){
				return v.substring(nuevonombre.length,v.length);
			}
		}
		return "";
	}
	function ferificarCookie(){
		var usuario = obtenerCookie("edad");
		if(usuario != ""){
			document.getElementById().innerHTML = "La edad que ingreso es "+usuario;
		}else{
			usuario = prompt("Por favor ingresa tu edad","");
			if (usuario != "" && usuario != null){
				setCookie("edad",usuario,30);

			}
		}
	}