let num = [5 ,8 ,9 ,2 ,4 ,3]

num.push(1)
num.sort()

console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(4)

console.log(`O valor 4 está na posição ${pos}`)