let num = document.querySelector("input#fnum")
let lista = document.querySelector("select#flista")
let res = document.querySelector("div#res")
let valores = []

num.addEventListener("keydown", function(event) {

    if (!/[0-9]/.test(event.key) && 
        event.key !== "Backspace" && 
        event.key !== "Delete" && 
        event.key !== "ArrowLeft" && 
        event.key !== "ArrowRight" && 
        event.key !== "Tab") {
        event.preventDefault()
    }

    if (event.key === "Enter") {
        adicionar();
    }
})




function adicionar () {
    let valor = Number(num.value)

    if (valor <= 0 || valor >= 101) {
        alert("Número inválido!")
        return 
    }

    if (valores.includes(valor)) {
        alert("Número já adicionado")
        return
    }

    if (valores.length === 0) {
        lista.innerHTML = ""
    }

    valores.push(valor)
    let item = document.createElement("option")
    item.text = `Foi adicionado o número: ${valor}`
    lista.appendChild(item)

    num.value = ""
    num.focus()
}

function finalizar() {
    if (valores.length === 0) {
        alert("Nenhum número foi digitado!")
        return
    }

    let ordenados = [...valores].sort((a,b) => a -b)
    let total = valores.length
    let maior = Math.max(...valores)
    let menor = Math.min(...valores)
    let soma = valores.reduce((acc, num) => acc + num, 0)
    let media = soma / total

    lista.style.display = "none"
    bfim.style.display = "none"
    div1.style.height = "15px"
    num.disabled = true
    badd.disabled = true

    res.innerHTML = `
        <p>🔢 Total de números: <strong>${total}</strong></p>
        <p>📈 Maior número: <strong>${maior}</strong></p>
        <p>📉 Menor número: <strong>${menor}</strong></p>
        <p>➕ Soma total: <strong>${soma}</strong></p>
        <p>📊 Média dos valores: <strong>${media.toFixed(2)}</strong></p>
        <p>📌 Números ordenados: <strong>[${ordenados.join(", ")}]</strong></p>
    `
    reiniciarDiv.style.display = "block"
}

function reiniciar () {
    valores = []
    lista.innerHTML = `<option value="flista">Adicione números aqui!</option>`
    lista.style.display = "block"  // Exibe novamente a lista de números
    res.innerHTML = ""            // Limpa os resultados

    // Esconde o botão de reiniciar
    reiniciarDiv.style.display = "none"

    // Limpa o campo de input e coloca o foco nele
    num.value = ""
    num.focus()

    div1.style.height = "auto"
    bfim.style.display = "block"
    num.disabled = false
    badd.disabled = false

}


