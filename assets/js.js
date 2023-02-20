const buttonAdd = document.getElementById("button")
const buttonClear = document.getElementById("limpar")
const input = document.getElementById("input")

let elementSave = []
let lista
//constructor
function newObject(newObject, check) {
  return {
    valor: newObject,
    check: check
  }
}
//style
function events(content, ind) {
  let checkbox = content.children[0]
  let contentLi = content.children[1]

  checkbox.addEventListener("click", (clicked) => {
    
    if (clicked.target.checked == true) {
      contentLi.style.textDecoration = "line-through"
      elementSave[ind].check = true
    } else {
      contentLi.style.textDecoration = "none"
      elementSave[ind].check = false
    }

    localStorage.setItem("value", JSON.stringify(elementSave))
  })

}
//delete
function evenDelete(content) {
  content.addEventListener("click", (element) => {
    let elementFather = element.target.parentNode
    let elementId = element.target.id

    $(elementFather).fadeOut(500)
    setTimeout(() => {
      elementFather.remove()
      let listNew = document.querySelectorAll(".lists")
      listNew.forEach((ele, indexx) => {
        ele.children[2].id = indexx
      })

    }, 1000)
    elementSave.splice(elementId, 1)
    localStorage.setItem("value", JSON.stringify(elementSave))
  })
}
//localStorage
if (localStorage.getItem("value") != null) {
  let get = JSON.parse(localStorage.getItem("value"))

  elementSave = get
  elementSave.forEach((element, i) => {
    let ul = document.getElementById("list")
    let li = document.createElement("li")
    li.classList = "lists"
    li.innerHTML = `
      <input type="checkbox" />
      <div class="contentLi" >${element.valor}</div>
      <div class="buttonDelete" id="${i}"><div/>
    `
    if(elementSave[i].check == true){
      li.children[0].checked = true
      li.children[1].style.textDecoration = "line-through"
    }


    ul.appendChild(li)
    lista = document.querySelectorAll(".lists")

    lista.forEach((element, ind) => {
      events(element, ind)
    })
    evenDelete(li.children[2])
  })
}
//adicionando os elementos
let addElement = function () {
  if (input.value == "") {
    alert("não tem nenhum conteúdo no campo!!")
  }
  else {
    let checkedOn = false;
    let ul = document.getElementById("list")
    let li = document.createElement("li")
    li.classList = "lists"
    li.innerHTML = `
      <input type="checkbox" />
      <div class="contentLi" >${input.value}</div>
      <div class="buttonDelete"><div/>
    `
    ul.appendChild(li)

    lista = document.querySelectorAll(".lists")

    lista.forEach((element, i) => {

      li.children[2].setAttribute("id", i)
      events(element, i)
    })

    evenDelete(li.children[2])

    elementSave.push(newObject(li.children[1].textContent, checkedOn))
    localStorage.setItem("value", JSON.stringify(elementSave))

    input.value = ""
    input.focus()
  }
}
//usando o enter pra adicionar os elementos no input
input.addEventListener("keydown", (click) => {
  if (click.which == 13) {
    addElement()
  }
  return click
})
//limpar tudo
let clearAll = function () {
  localStorage.clear("value")
  elementSave = []
  document.querySelectorAll(".lists").forEach((element) => {
    $(element).fadeOut(1000)

    setTimeout(() => element.remove(), 1000)
  })
}

buttonAdd.addEventListener("click", addElement)
buttonClear.addEventListener("click", clearAll)