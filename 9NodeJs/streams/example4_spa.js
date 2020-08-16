var fs=require('fs');
var http=require('http');
var url=require('url');

var server=http.createServer(function(req,res){
    var stream = null;
    var params = url.parse(req.url,true).query;

    var tipo = params.tipo;
    console.log(__dirname);
    switch (tipo) {
        case 'image':
            stream = fs.createReadStream(__dirname+'/nueva_imagen.jpg');
            req.pipe(stream);
            break;
        case 'texto':
            stream = fs.createReadStream(__dirname+'/nuevo_texto.txt');
            req.pipe(stream);
            break;
        case 'video':
            stream = fs.createReadStream(__dirname+'/nuevo_video.mp4');
            req.pipe(stream);
            break;
        default:
            res.end('Sin datos');
            break;
    }
});

server.listen(8000);
console.log('server corriendo en puerto 8000');