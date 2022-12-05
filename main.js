'use-strict'
class Tab {
    constructor(listEmployee) {
        this.actionsTab = document.querySelector('.tab')
        this.actions = this.actionsTab.children
        this.sectionsTab = document.querySelector('.tab-section')
        this.formUpdate = document.querySelector('.js-form-update')
        this.sections = this.sectionsTab.children
        this.listEmployee = listEmployee
        this.viewDetail = 'js-view-detail'
    }

    setSectionTabActive (currentTab) {
        for (let i = 0; i < this.sections.length; i++) {
            const section = this.sections[i]
            if(currentTab.dataset.tab === section.dataset.tab) {
                section.classList.remove('u-hide')
            } else {
                section.classList.add('u-hide')
            }
        }
    }

    setTabActive (currentTab) {
        for (let i = 0; i < this.actions.length ; i++) {
            const action = this.actions[i]
            if (currentTab.dataset.tab === action.dataset.tab) {
                currentTab.classList.add('tab--active')
            } else {
                action.classList.remove('tab--active')
            }
        }
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

    buildListTable () {
        const list = this.listEmployee.getItems()
        const section = document.getElementById('employees')
        let listElements = ''
        if (list && list.length > 0) {
            list.forEach((employee) => {
                listElements = listElements + this.templateItem(employee)
            })
            section.innerHTML = listElements
        }
    }

    
    handleClickTab (e) {
        const currentTab = e.currentTarget
        this.setTabActive(currentTab)
        this.setSectionTabActive(currentTab)
        if (currentTab.dataset.tab === 'listar') {
            this.buildListTable()
            this.loadEventViewDetail()
        }
        
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

    loadEventViewDetail () {
        const viewDetail = document.querySelectorAll(`.${this.viewDetail}`)
        for (let i = 0; i < viewDetail.length ; i++) {
            viewDetail[i].addEventListener('click', (e) => this.handleClickViewDetail(e), false)
        }
    }

    loadEvents() {
        for (let i = 0; i < this.actions.length ; i++) {
            this.actions[i].addEventListener('click', (e) => this.handleClickTab(e), false)
        }
    }

    loadTab() {
        const tabActive = document.querySelector('.tab--active')
        this.setTabActive(tabActive)
        this.setSectionTabActive(tabActive)
    }

    init () {
        this.loadEvents()
        this.loadTab()
    }

}

const listEmployee = new ListaEmpleado()
const tab = new Tab(listEmployee)
const form = new Formulario(listEmployee)
const formUpdate = new FormularioUpdate(listEmployee)
const arrowOrder = new ArrowOrder(listEmployee)

form.init()
tab.init()
arrowOrder.init()
formUpdate.init()
formUpdate.loadData()