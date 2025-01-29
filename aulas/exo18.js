function acao(n) {
    if (n % 2 == 0) {
        return "par" 
    } else {
        return "impar"
    }
}

var n = acao(11)
console.log(`A respota é ${n}`)

function somar(n1=0, n2=0) {
    return n1 + n2
}

console.log(somar(2, 5))

var v = function(x) {
    return x*2
}

console.log(v(2))

function fatorial(n) {
    let fat = 1
    for (let c = n; c > 1; c --) {
        fat *= c    
    }
    return fat
}

console.log(`Retorno: ${fatorial(5)}`)

function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }       
}

console.log(fatorial(5))