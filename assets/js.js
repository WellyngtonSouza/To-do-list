const buttonAdd = document.getElementById("button")
const buttonClear = document.getElementById("limpar")
const input = document.getElementById("input")





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

    let lista = document.querySelectorAll(".lists")

    lista.forEach((element) => {

      element.children[0].addEventListener("click", ()=>{
        if(element.children[0].checked == true){
          element.children[1].style.textDecoration = "line-through"
        }else{
          element.children[1].style.textDecoration = "none"
        }
      })


      element.children[2].addEventListener("click", () => {

        $(element).fadeOut(1000)
        setTimeout(()=>{
          element.remove()
        }, 1000)
        
      })
    })

    input.value = ""
    input.focus()
  }


}

input.addEventListener("keydown", (click)=>{
  if(click.which == 13){
    addElement()
  }

  return click
})

let clear = function(){

  document.querySelectorAll(".lists").forEach((element)=>{
    $(element).fadeOut(1000)
    setTimeout(()=>element.remove(), 1000)
  })
}


buttonAdd.addEventListener("click", addElement)
buttonClear.addEventListener("click", clear)


