var http = require('http');
http.createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Hola Mundo');
}).listen(3000);
console.log('Servidor Corriendo');
console.log('Hola Mundo');