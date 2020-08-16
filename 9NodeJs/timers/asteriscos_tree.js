process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data',function(chunk){
    if(!isNaN(chunk)){
        var data = chunk.toString().trim();
        dibujarTriangulo2(parseInt(data));
    }else{
        process.stdout.write('no es un numero valido')
    }
});

process.stdin.on('end',function(){
    process.stdout.write('end');
});

function dibujarTriangulo(numero){
    var j=0;
    for (i=0;i<=numero;i++){
        for(k=numero;k>=i;k--){
            process.stdout.write('');
        }
        var a=i-(i+2);
        for(k=i;k>=a;k--){
            process.stdout.write('*');
        }
        process.stdout.write('\n');
    }
}
var i=0;
var j=0;

function dibujarTriangulo2(numero){
    setInterval(function(){
        if(i<=numero){
             for (k = numero; k>=i; k--) {
                 process.stdout.write('');                 
             }
             var a=i-(i*2);
             for(k=i;k>=a;k--){
                 process.stdout.write('*');
             }
             process.stdout.write('\n');
             i++;
        }
    },1000);
}
