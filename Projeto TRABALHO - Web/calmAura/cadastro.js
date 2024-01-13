document.addEventListener('DOMContentLoaded', function () {
    var inputNomeCompleto = document.querySelector('.nomeCompleto');
  
    inputNomeCompleto.addEventListener('input', function () {
      // remove caracteres não alfabéticos usando uma expressão "/[^a-zA-Z\s]/g,"
      inputNomeCompleto.value = inputNomeCompleto.value.replace(/[^a-zA-Z\s]/g, '');
    });
  
    document.addEventListener('input', function (e) {
      if (e.target.classList.contains('dia') || e.target.classList.contains('mes')) {
        // aqui eu limito para escrever os códigos com no máximo 2 dígitos
        if (e.target.value.length > 2) {
          e.target.value = e.target.value.slice(0, 2);
        }
      }
  
      if (e.target.classList.contains('ano')) {
        // aqui eu limito para escrever os códigos com no máximo 4 dígitos
        if (e.target.value.length > 4) {
          e.target.value = e.target.value.slice(0, 4);
        }
      }
  
      if (e.target.classList.contains('cpf')) {
        // aqui eu limito para escrever os códigos com no máximo 3 dígitos
        if (e.target.value.length > 3) {
          e.target.value = e.target.value.slice(0, 3);
        }
      }
  
      if (e.target.classList.contains('cpfFinal')) {
        // aqui eu limito para escrever os códigos com no máximo 2 dígitos
        if (e.target.value.length > 2) {
          e.target.value = e.target.value.slice(0, 2);
        }
      }
    });
  });
  
