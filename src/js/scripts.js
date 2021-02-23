const form = document.getElementById("form")
let validate

const printAlert = (message, element) =>{
   const alert = document.createElement("P")
   alert.textContent = message
   alert.classList.add("form__error")
   
   element.insertAdjacentElement("afterend", alert)
}

const validateEmail = (element, message) => {
   const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

   if(!re.test(element.value.toLowerCase())){
      !element.classList.contains("form__input--error") && printAlert(message, element)
      element.classList.add("form__input--error")
      validate = false
   }else{
      element.classList.remove("form__input--error")
      element.nextElementSibling.remove()
   }
}

form.addEventListener("submit", e =>{
   e.preventDefault()

   validate = true
   validateEmail(form.email, "Please provide a valid email")
   
   validate && form.reset()
})