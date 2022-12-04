'use-strict'
class Tab {
    constructor() {
        this.actionsTab = document.querySelector('.tab')
        this.sectionsTab = document.querySelector('.tab-section')
        this.actions = this.actionsTab.children
        this.sections = this.sectionsTab.children
        
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
        console.log(currentTab,'currentTab')
        for (let i = 0; i < this.actions.length ; i++) {
            const action = this.actions[i]
            if (currentTab.dataset.tab === action.dataset.tab) {
                currentTab.classList.add('tab--active')
            } else {
                action.classList.remove('tab--active')
            }
        }
    }
    handleClickTab (e) {
        const currentTab = e.currentTarget
        this.setTabActive(currentTab)
        this.setSectionTabActive(currentTab)
        
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

const tab = new Tab()

tab.init()
