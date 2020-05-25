var net = require('net');
var server = net.createServer(function(con) {
    con.on('data', function(chunck) {
        console.log('Dato enviado desde el cliente:' + chunck);
        con.write('Repetimos: ' + chunck);
    });

    con.on('close', function() {
        console.log('Cliente cerro conexion!');
    });
    con.on('error', function(err) {
        console.log('se ha perdido la conexion con el cliente');
    });
}).listen(8000);
console.log('Escuchando servidor en el puerto 8000');