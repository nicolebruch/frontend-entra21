function alterarQuantidade(quantidade) {
  // pega o valor atual inserido com id "quantidadeInput"
  var valor = parseInt(document.getElementById("quantidadeInput").value);

  //ajusta a quantidade de produtos com base na açao (adiçaoo ou subtraçao) desejada pelo usuario, que é feita pelo botão "+" ou "-"
  valor += quantidade;

  // verifica se o valor colocado é menor que 1
  if (valor < 1) {
    // se for menor que 1, define o valor como 1 para evitar quantidades negativas
    document.getElementById("quantidadeInput").value = 1;
  } else {
    // se for maior ou igual a 1, atualiza o campo de entrada com o novo valor
    document.getElementById("quantidadeInput").value = valor;
  }
}
function validarNumero(input) {
  // remove tudo que for inserido e nao for numero
  input.value = input.value.replace(/[^0-9]/g, '');
}
