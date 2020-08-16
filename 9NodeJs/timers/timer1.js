process.stdin.setEncoding('utf8');

process.stdin.on('data',function(chunk){
    if(!isNaN(chunk)){
        decremento(chunk);
    }else{
        process.stdout.write('No es un numero valido');
    }
});

process.stdin.on('',function(){
    process.stdout.write('end');
});

function decremento(numero){
    var intervalo = setInterval(function(){
        numero -=1;
        process.stdout.write(numero+'\n');
        if (numero==0){
            process.stdout.write('Secuencia terminada');
            clearInterval(intervalo);
        }    
    },1000);
}