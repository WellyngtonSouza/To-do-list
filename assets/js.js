const buttonAdd = document.getElementById("button")
const buttonClear = document.getElementById("limpar")
const input = document.getElementById("input")

let elementSave = []
let lista;
let number;

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
    ul.appendChild(li)

    lista = document.querySelectorAll(".lists")

    lista.forEach((element, i) => {
      events(element, i)

    })

    li.children[2].addEventListener("click", (element) => {

      let elementFather = element.target.parentNode
      let elementId = element.target.id



      $(elementFather).fadeOut(500)
      setTimeout(() => {
        elementFather.remove()
        let listNew = document.querySelectorAll(".lists")
        listNew.forEach((ele, indexx) => {
          ele.children[2].id = indexx
        })
        elementSave.splice(elementId, 1)
      }, 1000)



      localStorage.setItem("value", JSON.stringify(elementSave))
    })



  })
}


function events(el, index) {

  let checkbox = el.children[0]
  let contentLi = el.children[1]
  let icon = el.children[2]

  checkbox.addEventListener("click", () => {
    if (checkbox.checked == true) {
      contentLi.style.textDecoration = "line-through"

    } else {
      contentLi.style.textDecoration = "none"

    }
  })


  // icon.addEventListener("click", (ok) => {
  //   console.log(index)
  //   $(el).fadeOut(500)
  //   setTimeout(() => {
  //     el.remove()
  //   }, 500)
  // })
}

function newObject(newObject, check) {
  return {
    valor: newObject,
    check: check
  }
}

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

    li.children[2].addEventListener("click", (element) => {
      let elementFather = element.target.parentNode
      let elementId = element.target.id

      console.log(elementId)



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

    elementSave.push(newObject(li.children[1].textContent, checkedOn))

    localStorage.setItem("value", JSON.stringify(elementSave))

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


