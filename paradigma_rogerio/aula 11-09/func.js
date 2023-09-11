function calcular (a, b, c){
    return a+b+c;

}

function calc(a, b){
    return function(calcular){
        (a, b, c)
    }
}

function somar(a){
    return function(calc){
        return function(calcular){
            return a+b+c
        }
    }
}

const r = somar(3)(4)(5)