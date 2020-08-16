var numero_limite=10;
var i;
var fib= [];

fib[0]=0;
fib[1]=1;

process.stdin.setEncoding('utf8');

process.stdin.on('data',function(chunk){
    if(!isNaN(chunk)){
        iniciarFinonacci(chunk)
    }else{
        process.stdout.write('No es un numero valido');
    }
});

process.stdin.on('end',function(){
    process.stdout.write('end');
});

function iniciarFibonacci(numero){
    var i=0;
    var intervalo = serInterval(function(){
        if(i<=numero){
            var pos = i+2;
            fib[pos]= fib[pos-2]+fib[pos-1];
            process.stdout.write(fib[i]+'\n');
            i++;
        }else{
            process.nextTick(function(){
                setTimeout(function(){
                    iniciarFibonacci(i);
                },5000);
            });
            process.stdout.write('Serie fibonacci hasta el '+(i-1)+ ' finalizada!\n');
            process.stdout.write('en 5 segundos empezaremos la misma seri en el numero '+i+'\n');
            clearInterval(intervalo);
        }
    },1000);
}