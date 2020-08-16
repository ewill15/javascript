process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data',function(chunk){
    if(!isNaN(chunk)){
        var data = chunk.toString().trim();
        iniciarFactorial(parseInt(data));
    }else{
        process.stdout.write('no es un numero valido')
    }
});

process.stdin.on('end',function(){
    process.stdout.write('end');
});

function iniciarFactorial(numero){
    var i=1;
    var num=2;
    var resultado=1;
    var intervalo = setInterval(function(){
        if (numero ==0 || numero == 1){
            console.log(1);
            clearInterval(intervalo);
        }else{
            if (i<numero){
                var a = resultado;
                var b = num;
                resultado *= num;
                console.log(a+'*'+b+'='+resultado);
            }else{
                clearInterval(intervalo);
            }
            i++;
            num++;
        }
    },1000);
}

function factorial(numero){
    return 0 === numero || 1 === numero ? 1 : numero*factorial(numero-1);
}
