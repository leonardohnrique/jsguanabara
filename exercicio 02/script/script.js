function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.getElementById("res")
    if (fano.value.length <= 0 || fano.value > ano) {
        alert("Verifique os dados e tente novamente!")
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = document.createElement("img")
        img.setAttribute("id", "foto")
        if (fsex[0].checked) {
            genero = "Masculino"
            if (idade >= 0 && idade <= 15) {
                //criança
                img.setAttribute("src", "imagens/homem-crianca.png")
            } else if (idade <= 32) {
                //jovem
                img.setAttribute("src", "imagens/homem-jovem.png")
            } else if (idade <= 60) {
                //adulto
                img.setAttribute("src", "imagens/homem-adulto.png")
            } else {
                //idoso
                img.setAttribute("src", "imagens/homem-idoso.png")
            }
        } else if (fsex[1].checked) {
            genero = "Feminino"
            if (idade >= 0 && idade <= 15) {
                //criança
                img.setAttribute("src", "imagens/mulher-crianca.png")
            } else if (idade <= 32) {
                //jovem
                img.setAttribute("src", "imagens/mulher-jovem.png")
            } else if (idade <= 60) {
                //adulto
                img.setAttribute("src", "imagens/mulher-adulta.png")
            } else {
                //idoso
                img.setAttribute("src", "imagens/mulher-idosa.png")
            }
        }
        res.style.textAlign = "center"
        res.style.padding = "10px"
        res.innerHTML = `Detectamos <strong>${genero}</strong> com <strong>${idade}</strong> anos.`
        res.appendChild(img)
    }
}