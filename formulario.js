'use-strict'
class Formulario {
    constructor (listEmployee) {
        this.form = document.querySelector('.form-register')
        this.inputName = document.querySelector('input[name="name"]')
        this.inputLastname = document.querySelector('input[name="lastname"]')
        this.inputEmail = document.querySelector('input[name="email"]')
        this.selectCharge = document.querySelector('select[name="charge"]')
        this.listEmployee = listEmployee
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
        } else {
            const employee = new Empleado({
                name: this.inputName.value,
                lastname: this.inputLastname.value,
                email: this.inputEmail.value,
                charge: this.selectCharge.value
            })
            listEmployee.addNew(employee)
            console.log(listEmployee.list)
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

class ArrowOrder {
    constructor (listEmployee) {
        this.listEmployee = listEmployee
        this.order = document.querySelectorAll('.js-order-action')
        this.viewDetail = 'js-view-detail'
        this.actionsTab = document.querySelector('.tab')
        this.actions = this.actionsTab.children
        this.formUpdate = document.querySelector('.js-form-update')
    }

    handleClickOrder (e) {
        const element = e.currentTarget
        const property = element.dataset.property
        const order = element.dataset.order
        const listOrdered = this.listEmployee.orderBy(property, order)
        let listElements = ''
        const section = document.getElementById('employees')

        listOrdered.forEach((employee) => {
            listElements = listElements + this.templateItem(employee)
        })
        section.innerHTML = listElements
        this.loadEventViewDetail()
    }

    handleClickViewDetail (e) {
        const currentDetail = e.currentTarget
        this.formUpdate.setAttribute('data-employee', currentDetail.dataset.code)
        for (let i = 0; i < this.actions.length ; i++) {
            const action = this.actions[i]
            if (action.dataset.tab === 'filtrar') {
                action.click()
            }
        }
        //console.log(currentDetail,'currentDetauil')
        //console.log(this.listEmployee.getItemDetail(Number(currentDetail.dataset.code)))
    }

    templateItem (employee) {
        return `
            <div style="display: grid; grid-auto-flow: column; max-width: 900px;" >
                <div>${employee.code}</div>
                <div>${employee.name}</div>
                <div>${employee.lastname}</div>
                <div>${employee.email}</div>
                <div>${employee.salaryBruto}</div>
                <div>${employee.salaryNeto}</div>
                <div class="js-view-detail" style="text-decoration: underline; cursor: pointer;" data-code="${employee.code}">detalle</div>
            </div>
        `
    }

    loadEventViewDetail () {
        const viewDetail = document.querySelectorAll(`.${this.viewDetail}`)
        for (let i = 0; i < viewDetail.length ; i++) {
            viewDetail[i].addEventListener('click', (e) => this.handleClickViewDetail(e), false)
        }
    }

    loadEvents() {
        for (let i = 0; i < this.order.length ; i++) {
            const orderAction = this.order[i]
            orderAction.addEventListener('click', (e) => this.handleClickOrder(e), false)
        }
    }

    init() {
        this.loadEvents()
    }
}
