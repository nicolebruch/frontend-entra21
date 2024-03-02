//olha se o token ta no localstorage
//se o token nao estiver no localstorage
if (localStorage.getItem("token") == null) {
  //vai mostrar um alerta na tela 
  alert("Você precisa estar logado para acessar essa página");
  //e redireciona p tela de login
  window.location.href = "/TrabalhoLogin/html/login.html";
}

//pega os dados do usuario logado do localstorage
const userLogado = JSON.parse(localStorage.getItem("userLogado"));

//constante que puxei via id 
const logado = document.getElementById("logado");
//e vai cumprimentar com o "nome" do usuario que ta armazenado no localstorage
logado.innerHTML = `Olá ${userLogado.user} ☻`;

//declarando a funcao chamada "sair"
function sair() {
  //remove o token, deslogando o usuario
  localStorage.removeItem("token");
  //remove informacoes do usuario que tava logado do localstorage
  localStorage.removeItem("userLogado");
  //quando clica no botao de sair, redireciona p pg de login
  window.location.href = "/TrabalhoLogin/html/login.html";
}