'use-strict'
class Formulario {
    constructor () {
        this.form = document.querySelector('.form-register')
        this.inputName = document.querySelector('input[name="name"]')
        this.inputLastname = document.querySelector('input[name="lastname"]')
        this.inputEmail = document.querySelector('input[name="email"]')
        this.selectCharge = document.querySelector('select[name="charge"]')
    }


    validateToInput(inputElement) {
        inputElement.addEventListener('input', () => {
            if (inputElement.validity.valid) {
                const error = inputElement.nextElementSibling
                error.innerText = ''
                error.className = 'error'
            } else {
                this.showError(inputElement)
            }
        })
    }

    showError(inputElement) {
        const error = inputElement.nextElementSibling
        const label = inputElement.previousElementSibling
        if (inputElement.validity.valueMissing) {
            error.textContent = `El campo ${label.innerText} es requerido`;
        } else if (inputElement.validity.tooShort) {
            error.textContent = `E-mail should be at least ${inputElement.minLength} characters; you entered ${inputElement.value.length}.`;
        } else if (inputElement.validity.patternMismatch && inputElement.type==="email") {
            error.textContent = `Intente con un formato: example@gmail.com`;
        }
        error.className = "error active";
    }

    handleSubmit (event) {
        this.form.classList.add('was-validated')
        event.preventDefault()
        if (
            !this.inputName.validity.valid ||
            !this.inputLastname.validity.valid ||
            !this.inputEmail.validity.valid ||
            !this.selectCharge.validity.valid
        ) {
            event.stopPropagation()
            this.showError(this.inputName)
            this.showError(this.inputLastname)
            this.showError(this.inputEmail)
            this.showError(this.selectCharge)
        }
    }

    loadEvents () {
        this.form.addEventListener('submit', (e) => this.handleSubmit(e), false)
        this.validateToInput(this.inputName)
        this.validateToInput(this.inputLastname)
        this.validateToInput(this.inputEmail)
        this.validateToInput(this.selectCharge)
    }

    init() {
        this.loadEvents()
    }
}

const form = new Formulario()

form.init()

/*(function() {
    'use strict'

    const form = document.querySelector('.form-register')
    const inputName = document.querySelector('input[name="name"]')
    const inputLastname = document.querySelector('input[name="lastname"]')
    const inputEmail = document.querySelector('input[name="email"]')
    const selectCharge = document.querySelector('select[name="charge"]')
    

    init()

    function init() {
        form.addEventListener('submit', handleSubmit, false)

        validateToInput(inputName)
        validateToInput(inputLastname)
        validateToInput(inputEmail)
        validateToInput(selectCharge)
    }

    function validateToInput(inputElement) {
        inputElement.addEventListener('input', () => {
            if (inputElement.validity.valid) {
                const error = inputElement.nextElementSibling
                error.innerText = ''
                error.className = 'error'
            } else {
                showError(inputElement)
            }
        })
    }

    function showError(inputElement) {
        const error = inputElement.nextElementSibling
        const label = inputElement.previousElementSibling
        if (inputElement.validity.valueMissing) {
            error.textContent = `El campo ${label.innerText} es requerido`;
        } else if (inputElement.validity.tooShort) {
            error.textContent = `E-mail should be at least ${inputName.minLength} characters; you entered ${inputElement.value.length}.`;
        } else if (inputElement.validity.patternMismatch && inputElement.type==="email") {
            error.textContent = `Intente con un formato: example@gmail.com`;
        }
        error.className = "error active";
    }

    function handleSubmit (event) {
        form.classList.add('was-validated')
        event.preventDefault()
        if (
            !inputName.validity.valid ||
            !inputLastname.validity.valid ||
            !inputEmail.validity.valid ||
            !selectCharge.validity.valid
        ) {
            event.stopPropagation()
            showError(inputName)
            showError(inputLastname)
            showError(inputEmail)
            showError(selectCharge)
        }
    }

})()*/