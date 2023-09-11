
function bomDia(){
    console.log('Bom Dia!');

}
bomDia();

const boaNoite = function(){
    console.log('Boa Noite!');
}
boaNoite();

function somar(a, b){
    return a+b;
}
somar(2)

const resul = somar(2, 3);
console.log(resul);

function minhaFunc(funcao){
    if(typeof funcao === 'function'){
        funcao();
    }
}
minhaFunc(2);
minhaFunc(boaNoite);

function potencia(base, exp){
    return Math.pow(base, exp);
}

const r = potencia(2, 8)
console.log(r)

//função que retorna outra função
function potencia(base){
    return function(exp){
        return Math.pow(base, exp)
    }
}
const r1 = potencia(3)(4)
console.log(r2)