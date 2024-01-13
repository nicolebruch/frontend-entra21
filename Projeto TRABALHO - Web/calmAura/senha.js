document.addEventListener('input', function (e) {

    // só vai executar o comando na existencia dessas classes
    if (e.target.classList.contains('codigo1') ||
        e.target.classList.contains('codigo2') ||
        e.target.classList.contains('codigo3') ||
        e.target.classList.contains('codigo4')) {

        // limite p/ colocar no input com no máximo 1 digito
        // analisa se o valor colocado no input é maior que 1
        if (e.target.value.length > 1) {
            // se for true, corta o valor para que tenha apenas 1 digito
            e.target.value = e.target.value.slice(0, 1);
        }
    }
});
