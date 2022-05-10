let input = document.querySelector("#input");
let botao = document.querySelector("#button");

botao.addEventListener("click", resultado);
input.addEventListener("keydown", tecla)

function tecla(tecla) {
    if (tecla.which == 13){
        resultado()
    }
    return tecla
}

function resultado() {
  if (input.value == input.value.length) {
    alert("por favor coloque um dado válido");
  } else {
    let paiUl = document.querySelector("#list"); /// ul

    let NovaLi = document.createElement("li"); // criando o elemento li onde vai ficar o checkbox e o conteúdo ao lado

    let content = document.createElement("span");
    let newCheckbox = document.createElement("input"); //criando o checkbox

    newCheckbox.setAttribute("type", "checkbox");
    newCheckbox.setAttribute("id", "check"); // atributos

    paiUl.appendChild(NovaLi);
    NovaLi.appendChild(newCheckbox);

    content.innerHTML = input.value; //criando o conteúdo
    NovaLi.appendChild(content);

    input.value = ""; // reinicia o valor apoś a escolha
  }
}
