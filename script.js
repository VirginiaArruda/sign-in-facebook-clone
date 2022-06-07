const inputEmail = document.querySelector('#input-email');
const inputPassword = document.querySelector('#input-password');
const errorEmail = document.querySelector('.error-email');
const errorPassword= document.querySelector('.error-password');
const buttonLogin = document.querySelector('#btn-login');

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function validatePassword(password) {
    return password.length >= 6
}

function invalidatedStyleElement(element, errorMessage) {
    element.style.borderColor = 'red'
    errorMessage.style.display = 'block'
}

function validatedStyleElement(element, errorMessage) {
    element.style.borderColor = 'green'
    errorMessage.style.display = 'none'

}

function login(event) {
    event.preventDefault()

    if(!validateEmail(inputEmail.value) && !validatePassword(inputPassword.value)) {
        invalidatedStyleElement(inputEmail, errorEmail)
        invalidatedStyleElement(inputPassword, errorPassword)
        return;
    }
    if(validateEmail(inputEmail.value) && !validatePassword(inputPassword.value)) {
        validatedStyleElement(inputEmail, errorEmail)
        invalidatedStyleElement(inputPassword, errorPassword)
        return;
    }
    if(!validateEmail(inputEmail.value) && validatePassword(inputPassword.value)) {
        invalidatedStyleElement(inputEmail, errorEmail)
        validatedStyleElement(inputPassword, errorPassword)
        return;
    }


    validatedStyleElement(inputEmail, errorEmail)
    validatedStyleElement(inputPassword, errorPassword)

    
}

buttonLogin.addEventListener('click', login);
  

