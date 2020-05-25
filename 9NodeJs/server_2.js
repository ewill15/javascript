var net = require('net');
var clients = [];

net.createServer(function(socket) {
    socket.name = socket.remoteAddress + ':' + socket.remotePort;
    clients.push(socket);
    socket.write('Welcome ' + socket.name + '\n');
    broadcast(socket.name + 'joined the chat\n', socket);
    socket.on('data', function(data) {
        broadcast(socket.name + '>' + data, socket);
    });

    socket.on('end', function() {
        clients.splice(clients.indexOf(socket), 1);
        broadcast(socket.name + ' left the chat\n');
    });

    function broadcast(mensaje, remitente) {
        clients.forEach(function(client) {
            if (client === remitente) return;
            client.write(mensaje);
        });
        process.stdout.write(mensaje + '\n');
    }
}).listen(8000);
console.log('servidor corriendo\n');