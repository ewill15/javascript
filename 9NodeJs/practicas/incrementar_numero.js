process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data',function(chunk){
    if(!isNaN(chunk)){
        var data = chunk.toString().trim();
        iniciar(parseInt(data));
    }else{
        process.stdout.write('no es un numero valido')
    }
});

process.stdin.on('end',function(){
    process.stdout.write('end');
});

function iniciar(numero){
    var max=100;
    var start=numero;
    var intervalo = setInterval(function(){
        if (start>=100){
            console.log('limite alcanzado');
            clearInterval(intervalo);
        }else{
            console.log(start);
            start += 10;
        }
    },1000);
}
