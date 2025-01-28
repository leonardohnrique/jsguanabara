function contar() {
    var start = document.getElementById("start").value
    var fim = document.getElementById("fim").value
    var passos = document.getElementById("passos").value
    var res = document.getElementById("res")

    if (start === "" || fim === "" || passos === "") {
        alert("⚠️ Preencha todos os campos!")
        return;
    }

    var start = Number(start)
    var fim = Number(fim)
    var passos = Number(passos)

    if (passos <= 0) {
        res.innerHTML = "⚠️ Passo inválido! Considerando passo 1."
        passos = 1
        return
    }

    res.innerHTML = "Contando: <br>"

    if (start < fim) {
        for (let i = start; i <= fim; i += passos) {
            res.innerHTML += ` ${i} 👉`
        }
    } else {
        for (let i = start; i >= fim; i -= passos) {
            res.innerHTML += ` ${i} 👉`
        }
    }

    res.innerHTML += " 🏁"
}
