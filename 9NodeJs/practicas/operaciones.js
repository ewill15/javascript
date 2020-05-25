var http = require('http');
var url = require('url');

http.createServer(function(request, response) {

    response.writeHead(200, { 'Content-Type': 'text/plain' });
    var params = url.parse(request.url, true).query;
    var numero1 = parseInt(params.num1);
    var numero2 = parseInt(params.num2);
    response.write('Suma ' + numero1 + ' + ' + numero2 + ' = ' + (numero1 + numero2) + '\n');
    response.write('Resta ' + numero1 + ' - ' + numero2 + ' = ' + (numero1 - numero2) + '\n');
    response.write('Multiplicacion ' + numero1 + ' * ' + numero2 + ' = ' + (numero1 * numero2) + '\n ');
    response.end();
}).listen(3000, function() {
    console.log('Servidor corriendo en el puerto 3000');
});