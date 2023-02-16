const buttonAdd = document.getElementById("button")
const buttonClear = document.getElementById("limpar")
const input = document.getElementById("input")

let elementSave = []
let lista; 

if (localStorage.getItem("value") != null) {
  let get = JSON.parse(localStorage.getItem("value"))

  elementSave = get

  elementSave.forEach((element) => {
    console.log(element.newObject)
    let ul = document.getElementById("list")
    let li = document.createElement("li")
    li.classList = "lists"
    li.innerHTML = `
      <input type="checkbox" />
      <div class="contentLi" >${element.newObject}</div>
      <div class="buttonDelete"><div/>
    `
    ul.appendChild(li)

    let listaAdd = document.querySelectorAll(".lists")

    listaAdd.forEach((element, i)=>{
      element.children[0].addEventListener("click", () => {
        if (element.children[0].checked == true) {
          element.children[1].style.textDecoration = "line-through"
        } else {
          element.children[1].style.textDecoration = "none"
        }
      })

      lista = document.querySelectorAll(".lists")
    })

  })

  

}


function newObject(newObject) {
  return {
    newObject
  }
}

let addElement = function () {
  if (input.value == "") {
    alert("não tem nenhum conteúdo no campo!!")
  }
  else {
    let ul = document.getElementById("list")
    let li = document.createElement("li")
    li.classList = "lists"
    li.innerHTML = `
      <input type="checkbox" />
      <div class="contentLi" >${input.value}</div>
      <div class="buttonDelete"><div/>
    `
    ul.appendChild(li)

    elementSave.push(newObject(li.children[1].textContent))

    localStorage.setItem("value", JSON.stringify(elementSave))

    lista = document.querySelectorAll(".lists")

    lista.forEach((element) => {

      element.children[0].addEventListener("click", () => {
        if (element.children[0].checked == true) {
          element.children[1].style.textDecoration = "line-through"
        } else {
          element.children[1].style.textDecoration = "none"
        }
      })


      element.children[2].addEventListener("click", () => {
        
        $(element).fadeOut(1000)
        setTimeout(() => {
          element.remove()
        }, 1000)

      })
    })

    input.value = ""
    input.focus()
  }


}

input.addEventListener("keydown", (click) => {
  if (click.which == 13) {
    addElement()
  }

  return click
})

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


