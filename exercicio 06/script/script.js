let num = document.querySelector("input#fnum")
let lista = document.querySelector("select#flista")
let res = document.querySelector("div#res")
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    } 
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar () {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement("option")
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ``
    } else {
        alert("Valor inválido ou já adicionado na lista!")
    }
    num.value = ""
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        alert("Adicione algum número!")
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]  
            if (valores[pos] < menor)
                menor = valores[pos]
        }

        media = soma / total

        res.innerHTML = `
            <p>Ao todo, temos <strong>${total}</strong> números cadastrados.</p>
            <p>O maior valor da lista é <strong>${maior}</strong></p>
            <p>O menor valor da lista é <strong>${menor}</strong></p>
            <p>A soma total de valores é <strong>${soma}</strong></p>
            <p>A media de valores é <strong>${media.toFixed(2)}</strong></p>
        `
    }
}