//querySelector eh usado pq so criei uma classe e nao um id p puxar aqui
let btn = document.querySelector('.fa-eye')

//espera um clique no botao do olhinho
btn.addEventListener('click', () => {
    //botao clicado, vai procurar pelo id 'senha' no html
    let inputSenha = document.getElementById('senha')

    //vai ver se a senha ta oculta
    if (inputSenha.getAttribute('type') == 'password') {
        //se tiver oculta, da de desocultar
        inputSenha.setAttribute('type', 'text')

    } else {
        //se nao tiver oculta, oculta novamente
        inputSenha.setAttribute('type', 'password')
    }
})

//declarando a funcao chamada "entrar"
function entrar() {

    //declarando as variaveis da minha funcao 
    let usuario = document.getElementById('usuario')
    let userLabel = document.getElementById('userLabel')

    let senha = document.getElementById('senha')
    let senhaLabel = document.getElementById('senhaLabel')

    let msgError = document.getElementById('msgError')

    //declaro a variavel "listaUser" fazendo com oq a lista esteja vazia
    let listaUser = []

    //declarando um objeto "userValid" com email, user e senha vazias
    let userValid = {
        email: '',
        user: '',
        senha: ''
    }

    //pego a lista de usuarios armazenada no localstorage e convirto de json p/ objeto js
    listaUser = JSON.parse(localStorage.getItem('listaUser'))

    //p/ cada item na "listaUser"
    listaUser.forEach((item) => {
        //analisa se o usuario e a senha correspondem ao oq foi armazenado
        if (usuario.value == item.userCad && senha.value == item.senhaCad) {

            //se corresponderem, vai atualiza o objeto "userValid" c/ as info do usuario
            userValid = {
                email: item.emailCad,
                user: item.userCad,
                senha: item.senhaCad
            }

        }
    })

    //olha se o usuario e a senha q foram digitados correspondem de fato ao login do usuario
    if (usuario.value == userValid.user && senha.value == userValid.senha) {

        // se corresponder, vai redirecionar p/ pg de sucesso
        window.location.href = '/TrabalhoLogin/html/sucesso.html'

        //cria uns numero e letra aleatorio, junta e depois corta 2 numeros
        let mathRandom = Math.random().toString(16).substr(2)
        //agora p/ gerar o token, junta duas copia dessa criacao feita pela variavel "mathRandom"
        //e eh gerado o token
        let token = mathRandom + mathRandom

        //token vai servir p identificar cada usuario de forma segura, pelo "id" do usuario que sao
        //varios numeros com letras aleatorias do que identidicar pelo nome dele

        //vai armazena o token no localstorage com a chave "token"
        localStorage.setItem('token', token)
        //aki armazena o usuario que foi logado com sucesso no localstorage com a chave "userLogado"
        localStorage.setItem('userLogado', JSON.stringify(userValid))

        //no else sao as validacao q vai faze ficar tudo vermelho se nao estiver inserido
        //corretamente
    } else {
        userLabel.setAttribute('style', 'color: red')
        usuario.setAttribute('style', 'border-color: red')
        senhaLabel.setAttribute('style', 'color: red')
        senha.setAttribute('style', 'border-color: red')
        msgError.setAttribute('style', 'display: block')

        //aparece um texto de erro caso o login esteja errado
        msgError.innerHTML = 'Usuário ou senha incorretos'
    }

}