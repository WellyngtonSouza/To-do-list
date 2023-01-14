// elementos HTML

let input = document.querySelector("#input");
let botao = document.querySelector("#button");
let paiUl = document.querySelector("#list");

// contador

let cont;

if(localStorage.getItem("numero") == null){
  cont = 0;
  

}else{
  cont = Number(JSON.parse(localStorage.getItem("numero")));
  
}

//arrays

let conteudoSalvo;
let real;
if(cont == 0){
   conteudoSalvo = [];
   real = []
}else{
   conteudoSalvo = JSON.parse(localStorage.getItem("stringone"))
   real = JSON.parse(localStorage.getItem("storage"))
}


// eventos
botao.addEventListener("click", resultado);
input.addEventListener("keydown", tecla);



//funções
function tecla(tecla) {
  if (tecla.which == 13) {
    resultado();
  }
  return tecla;
}

function limpar() {
  localStorage.clear();
  alert("Reinicie a página (F5)");
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

function lstorage() {
  return {
    content: paiUl.children[i].children[1].innerText,
  };
}

// contador

function resultado() {
  if (input.value == input.value.length) {
    alert("por favor coloque um dado válido");
  }
  else {
    criarElemento(input.value);
    input.value = "";
    for (i = cont; i < document.getElementsByTagName("li").length; i++) {
      conteudoSalvo.push({
        content: paiUl.children[i].children[1].innerText,
      });
      
    }
    real.push(conteudoSalvo[conteudoSalvo.length - 1]);
    cont++;

    localStorage.setItem("stringone", JSON.stringify(conteudoSalvo));
    localStorage.setItem("storage", JSON.stringify(real));
    localStorage.setItem("numero", cont);
  }
}

if (localStorage.getItem("storage") !== null) {
  let content = JSON.parse(localStorage.getItem("storage"));

  for (let i = 0; i < content.length; i++) {
    criarElemento(content[i].content);
  }
}
