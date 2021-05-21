const formElement=document.querySelector('.add-form')

formElement.addEventListener('submit',event =>{
    event.preventDefault()
    const nameElement=document.querySelector("#nameInput")
    const lastnameElement=document.querySelector("#lastnameInput")
    const selectElement=document.querySelector("#interest")
    
    console.log(nameElement.value, lastnameElement.value, selectElement.value)
})