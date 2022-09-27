const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

const firstNameError = document.querySelector('#firstNameError');
const lastNameError = document.querySelector('#lastNameError');
const emailError = document.querySelector('#emailError');
const passError = document.querySelector('#passError');

const buttom = document.querySelector('#submit');

buttom.addEventListener('click', (event) => {
    event.preventDefault();

    validateEmpty(firstName.value, firstName, firstNameError, 'First Name cannot be empty');
    validateEmpty(lastName.value, lastName, lastNameError, 'Last Name cannot be empty');
    validateEmail(email.value, email, emailError);
    validateEmpty(password.value, password, passError, 'Password cannot be empty');
});

function validateEmail(emailInput, divInput, divError) {
    let expReg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    if (expReg.test(emailInput) == true) {
        hideError(divInput, divError);
    } else {
        showError(divInput, divError, 'Looks like is not an email');
    }
}

function validateEmpty(valueInput, divInput, divError, nameImput) {
    if (valueInput.length == 0) {
        showError(divInput, divError, nameImput);
        divInput.style.color = 'hsl(0, 100%, 74%)';
    } else {
        hideError(divInput, divError);
    }
}


function showError(divInput, divError, error) {
    divInput.style.border = '1px solid hsl(0, 100%, 74%)';
    divError.innerHTML = `<img class="icon-error" src="./images/icon-error.svg" alt="icon-error">
    <p class="error">${error}</p>
    `;
}

function hideError(divInput, divError) {
    divInput.style.border = '1px solid hsl(246, 25%, 77%)';
    divError.innerHTML = ``;
}



