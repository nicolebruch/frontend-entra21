// inicializa uma variavel chamada "count" que representa a imagem atual no carrossel
let count = 1;

// marca o primeiro botão de opção(radio button) p/ indicar que a primeira imagem ta sendo mostrada
document.getElementById("radio1").checked = true;

// configura um temporizador p/ chamar a funçao "proximaImagem" a cada 5 segundos
setInterval(function () {
    proximaImagem();
}, 5000);

// funcao q passa p/ a próxima imagem no carrossel
function proximaImagem() {
    // add o valor da variavel "count" p/ mudar p/ proxima imagem
    count++;

    // se "count" passar o número máximo de imagens(3 no total), volta p/ primeira imagem
    if (count > 3) {
        count = 1;
    }

    // marca o botao de opçao correspondente a imagem atual p/ indicar visualmente qual imagem ta sendo mostrada
    document.getElementById("radio" + count).checked = true;
}
