$(document).ready(function() {
    var mensaje = '';
    $("#miEncabezado").draggable();
    $("#miEncabezado").on("create", function() {
        $("#mensaje").html(mensaje += "Evento create!!!<br>");
    });
    $("#miEncabezado").on("dragstar", function() {
        $("#mensaje").html(mensaje += "Evento start!!!<br>");
    });
    $("#miEncabezado").on("drag", function() {
        $("#mensaje").html(mensaje += "Evento drag!!!<br>");
    });
    $("#miEncabezado").on("dragstop", function() {
        $("#mensaje").html(mensaje += "Evento stop!!!<br>");
    });
});