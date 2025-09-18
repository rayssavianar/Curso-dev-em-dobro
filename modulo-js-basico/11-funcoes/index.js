/* SINTAXE

function nomeDaFuncao(parametros){
	<bloco de execução>
}
  nomeDaFuncao()

*/

/* 

function nomeDaFuncao(parametros1, parametro2){
	<bloco de execução>
}
  nomeDaFuncao()

*/

function incentivarQuester(nomeQuester = "Rayssa") {
  alert("Muito bem, " + nomeQuester + ", você chegou ao JS. Continue assim!");
}

incentivarQuester();

function soma(num1, num2) {
  return num1 + num2;
}

let resultadoDaSoma = soma(5, 5);

console.log(resultadoDaSoma);

resultadoDaSoma = soma(resultadoDaSoma, 5);

console.log(resultadoDaSoma);
