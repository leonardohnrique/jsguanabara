function carregar() {
    var msg = document.getElementById("msg")
    var img = document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours().toString().padStart(2, "0")
    var minuto = data.getMinutes().toString().padStart(2, "0")
    
    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = "imagens/bomdia.png"
        document.body.style.background = "#b7d5ac"
        msg.innerHTML = `Agora são: <strong>${hora}:${minuto}</strong> <br>Bom dia!`
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE
        img.src = "imagens/boatarde.png"
        document.body.style.background = "#ffc18c"
        msg.innerHTML = `Agora são: <strong>${hora}:${minuto}</strong> <br>Boa tarde!`
    } else {
        //BOA NOITE
        img.src = "imagens/boanoite.png"
        document.body.style.background = "#383854"
        msg.innerHTML = `Agora são: <strong>${hora}:${minuto}</strong> <br>Boa noite!`
    }
}