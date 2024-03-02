//querySelector eh usado pq so criei uma classe e nao um id p puxar aqui
let btn = document.querySelector('#verSenha')
let btnConfirm = document.querySelector('#verConfirmSenha')

//declarando as variaveis
let email = document.getElementById('email')
let labelEmail = document.getElementById('labelEmail')
//verifica se o email eh valido
let validEmail = false

let usuario = document.getElementById('usuario')
let labelUsuario = document.getElementById('labelUsuario')
//verifica se o usuario eh valido
let validUsuario = false

let senha = document.getElementById('senha')
let labelSenha = document.getElementById('labelSenha')
//verifica se a senha eh valida
let validSenha = false

let confirmSenha = document.getElementById('confirmSenha')
let labelConfirmSenha = document.getElementById('labelConfirmSenha')
//verifica se o confirmar senha eh valida
let validConfirmSenha = false

//variaveis q aparece erro ao cadastrar ou sucesso ao cadastar
let msgError = document.getElementById('msgError')
let msgSuccess = document.getElementById('msgSuccess')


//verifica o comprimento do email 
//"keyup" fica d olho quando o usuario digita no input
email.addEventListener('keyup', () => {
    //fica vermelho se estiver fora dos parametros
    if (email.value.length <= 8) {
        labelEmail.setAttribute('style', 'color: red')
        labelEmail.innerHTML = 'Email *Insira no minimo 8 caracteres'
        email.setAttribute('style', 'border-color: red')
        validEmail = false
    } else {
        //fica verde se estiver conforme os parametros
        labelEmail.setAttribute('style', 'color: green')
        labelEmail.innerHTML = 'Email'
        email.setAttribute('style', 'border-color: green')
        validEmail = true
    }
})

//verifica o comprimento do usuario
//"keyup" fica d olho quando o usuario digita no input
usuario.addEventListener('keyup', () => {
    //fica vermelho se estiver fora dos parametros
    if (usuario.value.length <= 4) {
        labelUsuario.setAttribute('style', 'color: red')
        labelUsuario.innerHTML = 'Usuário *Insira no minimo 5 caracteres'
        usuario.setAttribute('style', 'border-color: red')
        validUsuario = false
    } else {
        //fica verde se estiver conforme os parametros
        labelUsuario.setAttribute('style', 'color: green')
        labelUsuario.innerHTML = 'Usuário'
        usuario.setAttribute('style', 'border-color: green')
        validUsuario = true
    }
})

//verifica o comprimento da senha
//"keyup" fica d olho quando o usuario digita no input
senha.addEventListener('keyup', () => {
    //fica vermelho se estiver fora dos parametros
    if (senha.value.length <= 5) {
        labelSenha.setAttribute('style', 'color: red')
        labelSenha.innerHTML = 'Senha *Insira no minimo 6 caracteres'
        senha.setAttribute('style', 'border-color: red')
        validSenha = false
    } else {
        //fica verde se estiver conforme os parametros
        labelSenha.setAttribute('style', 'color: green')
        labelSenha.innerHTML = 'Senha'
        senha.setAttribute('style', 'border-color: green')
        validSenha = true
    }
})

//verifica o comprimento da confirmacao da senha
//"keyup" fica d olho quando o usuario digita no input
confirmSenha.addEventListener('keyup', () => {
    if (senha.value != confirmSenha.value) {
        //fica vermelho se estiver fora dos parametros
        labelConfirmSenha.setAttribute('style', 'color: red')
        labelConfirmSenha.innerHTML = 'Confirmar Senha *As senhas não conferem'
        confirmSenha.setAttribute('style', 'border-color: red')
        validConfirmSenha = false
    } else {
        //fica verde se estiver conforme os parametros
        labelConfirmSenha.setAttribute('style', 'color: green')
        labelConfirmSenha.innerHTML = 'Confirmar Senha'
        confirmSenha.setAttribute('style', 'border-color: green')
        validConfirmSenha = true
    }
})

//declarando a funcao chamada "cadastrar"
function cadastrar() {
    //se todos os inputs estiverem conforme os parametros
    // add os dados na lista de usuarios no localstorage
    if (validEmail && validUsuario && validSenha && validConfirmSenha) {
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

        //aki vai add na lista
        listaUser.push(
            {
                emailCad: email.value,
                userCad: usuario.value,
                senhaCad: senha.value
            }
        )
        // add os dados na "listaUser" no localstorage
        localStorage.setItem('listaUser', JSON.stringify(listaUser))

        //mostra msg de sucesso e redireciona p/ pg de login
        msgSuccess.setAttribute('style', 'display: block')
        msgSuccess.innerHTML = '<strong>Cadastrando usuário...</strong>'

        //mostra msg de erro se o cadastro nao for efetuado c sucesso
        msgError.setAttribute('style', 'display: none')
        msgError.innerHTML = '' //no caso nao mostra nada... F

        //o  tempo q vai ficar na tela "Cadastrando usuário..." e depois 
        //redireciona p tela de login
        setTimeout(() => {
            window.location.href = '/TrabalhoLogin/html/login.html'
        }, 3000)

        //se alg input estiver invalido, mostra msg de erro
    } else {
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de cadastrar</strong>'

        //no sucesso nao vai aparecer nda
        msgSuccess.innerHTML = ''
        msgSuccess.setAttribute('style', 'display: none')
    }
}

//aki mostra e oculta a senha e confirmacao de senha por meio do olhinho
//espera um clique no botao do olhinho
btn.addEventListener('click', () => {
    //botao clicado, vai procurar pelo id 'senha' no html
    let inputSenha = document.getElementById('senha')

    //vai ver se a senha ta oculta
    if (inputSenha.getAttribute('type') == 'password') {
        //se tiver oculta, da de desocultar
        inputSenha.setAttribute('type', 'text')

        //se nao tiver oculta, oculta novamente
    } else {
        inputSenha.setAttribute('type', 'password')
    }
})

//espera um clique no botao do olhinho
btnConfirm.addEventListener('click', () => {
    //botao clicado, vai procurar pelo id 'confirmSenha' no html
    let inputConfirmSenha = document.getElementById('confirmSenha')

    //vai ver se o confirmar senha ta oculta
    if (inputConfirmSenha.getAttribute('type') == 'password') {
        //se tiver oculta, da de desocultar
        inputConfirmSenha.setAttribute('type', 'text')

        //se nao tiver oculta, oculta novamente
    } else {
        inputConfirmSenha.setAttribute('type', 'password')
    }
})




