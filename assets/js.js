let input = document.querySelector("#input");
let botao = document.querySelector("#button");

botao.addEventListener("click", resultado);
input.addEventListener("keydown", tecla);

function limpar() {
  localStorage.clear();
  alert("Reinicie a página (F5)")
}

let caixa = [];
let caixaSalva = [];
let conteudoSalvo;

function tecla(tecla) {
  if (tecla.which == 13) {
    resultado();
  }
  return tecla;
}

function criarElemento(conteudoFinal) {
  let paiUl = document.querySelector("#list"); /// ul

  let NovaLi = document.createElement("li"); // criando o elemento li onde vai ficar o checkbox e o conteúdo ao lado

  let content = document.createElement("p");
  let newCheckbox = document.createElement("input"); //criando o checkbox

  newCheckbox.setAttribute("type", "checkbox");
  newCheckbox.setAttribute("id", "check"); // atributos

  paiUl.appendChild(NovaLi);
  NovaLi.appendChild(newCheckbox);

  content.innerHTML = conteudoFinal; //criando o conteúdo
  NovaLi.appendChild(content);
}
let paiUl = document.querySelector("#list"); /// ul
function resultado() {
  if (input.value == input.value.length) {
    alert("por favor coloque um dado válido");
  } else {

    criarElemento(input.value);
    input.value = ""; // reinicia o valor após a escolha

    for (let i = 0; i < document.getElementsByTagName("li").length; i++) {
      let conteudo = paiUl.children[i].children[1].innerText;
      localStorage.setItem("conteudo", conteudo);

      caixa[i] = localStorage.getItem("conteudo");

      localStorage.setItem("caixa", caixa);
    }
  }
}

caixaSalva = localStorage.getItem("caixa").split(",");

if (localStorage.getItem("conteudo") !== null) {
  console.log("deu certo");
  let inputLimpar = document.getElementById("limpar")
  inputLimpar.style.display = "inline"
  
  for (let i = 0; i < caixaSalva.length; i++) {
    criarElemento(caixaSalva[i])
  }
}