'use-strict'
class Tab {
    constructor(listEmployee) {
        this.actionsTab = document.querySelector('.tab')
        this.sectionsTab = document.querySelector('.tab-section')
        this.actions = this.actionsTab.children
        this.sections = this.sectionsTab.children
        this.listEmployee = listEmployee
        
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
                <div style="text-decoration: underline;">detalle</div>
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
        }
        
    }

    loadEvents() {
        console.log(this.setTabActive, 'que es')
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
const arrowOrder = new ArrowOrder(listEmployee)
console.log(arrowOrder,'arowodr')

form.init()
tab.init()
arrowOrder.init()