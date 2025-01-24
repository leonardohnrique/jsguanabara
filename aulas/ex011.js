var idade = 17
if (idade < 16) {
    console.log("Não Vota")
} else {
    if (idade < 18 || idade > 67) {
        console.log("Voto opcional")
    }  else {
        console.log("Vota")
    }
} 
