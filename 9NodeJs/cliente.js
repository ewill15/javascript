var net = require('net');
var client = net.connect({ port: '8000' }, function() {
    client.setEncoding('UTF8');
    console.log('conectado');
    client.write('Hola Servidor');
});
process.stdin.resume();

process.stdin.on('data', function(chunck) {
    client.write(chunck);
});

client.on('data', function(chunck) {
    console.log(chunck);
});

client.on('close', function(chunck) {
    console.log('Se cerro la conexion');
});

client.on('err', function(chunck) {
    console.log('Se perdio conexion con el servidor');
});