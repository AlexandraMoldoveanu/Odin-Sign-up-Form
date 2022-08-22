const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const phoneNumber = document.querySelector("#phone");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");

const firstErrorMessage = document.querySelector(".first-error-message");
const lastErrorMessage = document.querySelector(".last-error-message");
const emailErrorMessage = document.querySelector(".email-error-message");
const phoneErrorMessage = document.querySelector(".phone-error-message");
const passwordErrorMessage = document.querySelector(".password-error-message");
const confirmPasswordErrorMessage = document.querySelector(".confirm-password-error-message");

let regName = /^[a-zA-Z]+$/;
let regMail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
let regPhone = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;

firstName.addEventListener('focusout', validateFirstName);
lastName.addEventListener('focusout', validateLastName);
email.addEventListener('focusout', validateEmail);
phoneNumber.addEventListener('focusout', validatePhoneNumber);
password.addEventListener('focusout', validatePassword);
confirmPassword.addEventListener('focusout', validateConfirmPassword);

function validateFirstName(event) {
    validateElementWithMessage(regName, firstName, firstErrorMessage, "Please enter a valid name");
}

function validateLastName(event) {
    validateElementWithMessage(regName, lastName, lastErrorMessage, "Please enter a valid name");
}

function validateEmail(event) {
    validateElementWithMessage(regMail, email, emailErrorMessage, "Please enter a valid email");
}

function validatePhoneNumber(event) {
    validateElementWithMessage(regPhone, phoneNumber, phoneErrorMessage,  "Please enter a valid number");
}

function validatePassword(event) {

    if (!password.value) {
        passwordErrorMessage.innerHTML = "Please enter a password";
        password.classList.add("border-error");
    } else {
        passwordErrorMessage.innerHTML = "";
        password.classList.remove("border-error");
        password.classList.add("border-success");
    }
}

function validateConfirmPassword(event) {

    if (password.value !== confirmPassword.value) {
        confirmPasswordErrorMessage.innerHTML = "Please check password";
        confirmPassword.classList.add("border-error");
    } else {
        confirmPasswordErrorMessage.innerHTML = "";
        confirmPassword.classList.remove("border-error");
        confirmPassword.classList.add("border-success");
    }
}

function validateElementWithMessage(regEx, element, errorMessageElement, errorMessage){
    if (!regEx.test(element.value)) {
        errorMessageElement.innerHTML = errorMessage;
        element.classList.add("border-error");
    } else {
        errorMessageElement.innerHTML = "";
        element.classList.remove("border-error");
        element.classList.add("border-success");
    }
}



