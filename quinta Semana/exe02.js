//O objetivo desse código é capturar os números digitados pelo usuário, armazenar esses números em um array e no final, quanto o usuário digitar "0" o programa deve retornar: Quais numeros foram digitados?Qual deles é o maior e o menor?Qual o resultado das operações matemáticas entre esses dois números?

//Essa é a função principal que está sendo chamada pelo HTML.Ela inicialmente declara o array que armazenará os números digitados pelo usuário, uma variavel responsável por armazenar cada número e tambem declara um contador usado para estabelecer a condição de parada(o usuário digitar 0) do armazenamento das informações, ou seja enquanto os valores digitados não foram zero, o programa armazenara o numero digitado no array.
try{

function executarExercicio() {
  var listaNumero = [];
  var i = 1;
  var a;
  var r = listaNumero;
  
  while (i !== 0) {
    a = Number(prompt("Informe um número:"));

    if (a === 0) {
      break; 
    } 

  listaNumero.push(a);
  }

  var maiorNum = maximo(r);
  var menorNum = minimo(r);
  var indeceMaiorNum = listaNumero.indexOf(maiorNum);
  var indiceMenorNum = listaNumero.indexOf(menorNum); 
   
    
  document.getElementById('resultado').innerHTML = `Os números digitados foram ${r}`;
  document.getElementById('maior').innerHTML = `O maior número entre eles é ${maiorNum} e o seu índice ${indeceMaiorNum}`;
  document.getElementById('menor').innerHTML = `O menor número entre eles é ${menorNum} e o seu índice ${indiceMenorNum}`;
  document.getElementById('subtracao').innerHTML = `A subtração entre ${maiorNum} - ${menorNum} = ${maiorNum - menorNum}`;
  document.getElementById('soma').innerHTML = `A soma entre ${maiorNum} + ${menorNum} = ${maiorNum + menorNum}`;
  document.getElementById('mult').innerHTML = `A multiplicação entre ${maiorNum} * ${menorNum} = ${maiorNum * menorNum}`;
  document.getElementById('divisao').innerHTML = `A divisão entre ${maiorNum} / ${menorNum} = ${maiorNum / menorNum}`;

}

//Essa função percorrerá o array e identificará o menor valor valor presente nele.               
function minimo(arr) {
  var min = Infinity;   

  for (i = 0; i < arr.length; i++) {

    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return min;
}
//Assim como a função anterior essa irá comparar os valores entre eles e então retornará o maior valor encontrado dentro do array.
function maximo(arr) {
  var max = -Infinity;   

  for (i = 0; i < arr.length; i++) {

   if (arr[i] > max) {
      max = arr[i];
    }
  }  
              
  return max;
}