window.addEventListener("load", ()=>{
  
  let submitButton = document.getElementById("submit")
  let list = document.querySelector('.list_items')
  let form = document.getElementById('title')
  let clearButton = document.querySelector('.btn_clear')
  
  submitButton.addEventListener('click', (e)=>{
    e.preventDefault()
    
    let input = form.value
    if(!input){
      alert("Enter title!!")
    } else {
      
      const list_div = document.createElement('div')
      list_div.classList.add('item')

      let div_heading = document.createElement('div')
      div_heading.classList.add('input_div')
      let list_heading = document.createElement('input')
      list_heading.classList.add('heading_text')
      list_heading.setAttribute('readonly','readonly')
      // list_heading.setAttribute('size','70')
      div_heading.appendChild(list_heading)
      list_heading.value = input

      let action_div = document.createElement('div')
      action_div.classList.add('actions')

      let edit_list = document.createElement('a')
      edit_list.classList.add('edit')
      edit_list.innerHTML = "EDIT"
      

      const delete_list = document.createElement('a')
      delete_list.classList.add('delete')
      delete_list.innerHTML = "DELETE"

      action_div.appendChild(edit_list)
      action_div.appendChild(delete_list)


      list_div.appendChild(div_heading)
      list_div.appendChild(action_div)
        
      list.appendChild(list_div)
      

      form.value = ""

      //editing todo text
      edit_list.addEventListener('click', ()=>{
        if (edit_list.innerText.toLowerCase() == "edit") {
          list_heading.removeAttribute('readonly')
          list_heading.focus()
          edit_list.innerText = "SAVE"
        } else {
          list_heading.setAttribute('readonly', 'readonly')
          edit_list.innerText = "EDIT"
        }
      }) 

      //removing item from list
      delete_list.addEventListener("click", ()=>{
        e.preventDefault()
        list.removeChild(list_div)
    })

    }

    clearButton.addEventListener('click', function(){
      e.preventDefault()
      if (list.hasChildNodes()) {
        while(list.hasChildNodes()){
          list.removeChild(list.firstChild)
        }
      } else {
        return false
      }
      
    })

})
  
})
