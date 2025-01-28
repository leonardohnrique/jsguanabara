function gerarTabuada() {
    var numero = document.getElementById("numero").value
    var res = document.getElementById("res")

    if (numero === "") {
        alert("⚠️ Digite um número para gerar a tabuada!")
        return
    }

    var numero = Number(numero)
    res.innerHTML = ""

    for (let i = 0; i <= 20; i += 1) {
        let item = document.createElement("option")
        item.text = `${numero} x ${i} = ${numero * i}`
        res.appendChild(item)
    }
}