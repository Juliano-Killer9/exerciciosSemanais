function chamaFuncao() {
  var numeros = [];
  var vetor = -1;
  var j = 0;
  var i = 0;

  while (vetor != 0) {
    var vetor = Number(prompt("digite um número"));
    if (vetor != 0) {

      numeros[j] = vetor;

      j++;
    }
    var maiorInd = numeros.indexOf(max);
    var menorInd = numeros.indexOf(min);
    var maxmin = maximo_minimo(numeros);
    var min = maxmin[0];
    var max = maxmin[1];



    resposta = `O Menor elemento é ${min} índice ${menorInd} <br>`
    resposta = resposta + `O Maior Elemento é ${max} índice ${maiorInd} <br>` +
      `${max} - ${min} = ${max - min} <br>` +
      `${max} + ${min} = ${max + min} <br>` +
      `${max} * ${min} = ${max * min} <br>` +
      `${max} / ${min} = ${max / min}`;

    document.getElementById("resultado").innerHTML = resposta;

  }

  // Esta função faz com que precisemos percorrer o array apenas uma vez
  function maximo_minimo(arr) {
    var min = Infinity;               // O maior valor possível
    var max = -Infinity;              // O menor valor possível
    for (i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    return [min, max];
  }

}