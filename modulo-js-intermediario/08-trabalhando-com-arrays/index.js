let frutas = ['banana', 'maçã', 'laranja', 'pêra']
let frutasTamanho = frutas.length

frutas.push('manga') //acrescenta um novo elemento por último no array
frutas.pop() //retira o último elemento do array
frutas.shift() //retira o primeiro elemento do array
frutas.unshift()//acrescenta um novo elemento antes de todos no array
frutas.indexOf()//saber a posição de um elemento fazendo assim: let posicaoLaranja = frutas.indexOf('laranja')

console.log(frutas)

// for(let i = 0; i < frutasTamanho; i++){
//     console.log("Fruta: " + frutas[i])
// }

// frutas.forEach(function(item, indice, array){
//     console.log('Fruta: ' + item)
// })

