document.addEventListener('input', function (e) {

    //aqui eu limito pra escrever o cep com no maximo 8 digitos, seja texto ou numero
    if (e.target.classList.contains('textoCEP')) {
        e.target.value = e.target.value.replace(/\D/g, '');

        if (e.target.value.length > 8) {
            e.target.value = e.target.value.slice(0, 8);
        }
    }
    //aqui eu limito pra escrever um cupom com no maximo 5 digitos, seja texto ou numero
    if (e.target.classList.contains('textoCupom')) {
        //limita o comprimento máximo a 5 digitos
        if (e.target.value.length > 5) {
            e.target.value = e.target.value.slice(0, 5);
        }
    }
});