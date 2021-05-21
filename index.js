
const formElement=document.querySelector('.add-form')
const studentsListElement=document.querySelector(".students-list")

formElement.addEventListener('submit',event =>{
    event.preventDefault()
    const nameElement=document.querySelector("#nameInput")
    const lastnameElement=document.querySelector("#lastnameInput")
    const selectElement=document.querySelector("#interest")
    const newLiElement=document.createElement('li')
    const cardELement=document.createElement('div')
    const cardBodyElement=document.createElement("div")
    const wrapperDivElement=document.createElement("div")
    const subWrapperDivElement=document.createElement("div")
    const namePElement=document.createElement("p")
    const interestPElement=document.createElement("p")
    const deleteButtonElement=document.createElement("button")

    newLiElement.classList.add("mb-2")
    cardELement.classList.add('card')
    cardBodyElement.classList.add("card-body")
    wrapperDivElement.classList.add('d-flex')
    wrapperDivElement.classList.add('justify-content-between')
    namePElement.classList.add("h2")
    interestPElement.classList.add("h4")
    deleteButtonElement.classList.add('btn')
    deleteButtonElement.classList.add('btn-danger')
    deleteButtonElement.textContent="Delete"
    
deleteButtonElement.addEventListener("click",event => {
    event.path[4].remove()
})

    namePElement.textContent=nameElement.value + " "+ lastnameElement.value
    interestPElement.textContent=selectElement.value

subWrapperDivElement.appendChild(namePElement)
subWrapperDivElement.appendChild(interestPElement)

wrapperDivElement.appendChild(subWrapperDivElement)
wrapperDivElement.appendChild(deleteButtonElement)

cardBodyElement.appendChild(wrapperDivElement)
cardELement.appendChild(cardBodyElement)
newLiElement.appendChild(cardELement)
studentsListElement.prepend(newLiElement)
formElement.reset()
    console.log(wrapperDivElement)
})