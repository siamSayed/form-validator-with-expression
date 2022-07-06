//selection from dom

const nameInput=document.querySelector("#name")
const phoneInput=document.querySelector("#phone")
const emailInput=document.querySelector("#email")
const postCodeInput=document.querySelector("#post-code")
const submitInput=document.querySelector("#submit")
const form =document.querySelector("form")
const errorIndicator=document.querySelector(".errorIndicator")



form.addEventListener("submit", e=>{
    let nameValue=e.target[0].value;
    let phoneValue=e.target[1].value;
    let emailValue=e.target[2].value;
    let postCodeValue=e.target[3].value;

    //name validation
    
    if(nameValue.length <=3){
        errorIndicator.innerHTML="name is too short"
    }
    else if(nameValue.length > 3){
        errorIndicator.innerHTML="success"
        errorIndicator.style.padding="20px 150px"
    }
    //phone number validation 
    let phoneFormat=/^[0-1]\d{10}$/
    if(phoneFormat.test(phoneValue)){
        errorIndicator.innerHTML="success"
    }
    else{
        errorIndicator.innerHTML="phone number is not valid"
    }

    //email validation
    let emailFormat=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    if(emailFormat.test(emailValue)){
        errorIndicator.innerHTML==null ?"success":null
        return true
    }
    else{
        errorIndicator.innerHTML="E-mail is invalid"
        return false
    }

})


