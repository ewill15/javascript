var fs=require('fs');
var http=require('http');

http.createServer(function(request,response){
    var new_file = new fs.createWriteStream('nuevo_texto.txt');

    request.pipe(new_file);

    request.on('end',function(){
        response.end('Subido Exitosamente');
    });
}).listen(8000);

console.log('Servidor corriendo en el puerto 8000');