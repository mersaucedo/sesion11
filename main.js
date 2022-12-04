(function() {
    const actionsTab = document.querySelector('.tab')
    const sectionsTab = document.querySelector('.tab-section')
    const actions = actionsTab.children
    const sections = sectionsTab.children
    
    init()

    function handleClickTab (e) {
        const currentTab = e.currentTarget
        for (let i = 0; i < sections.length; i++) {
            const section = sections[i]
            console.log(section.dataset.tab,'section')
            console.log(currentTab,'currentTab')
            if(currentTab.dataset.tab === section.dataset.tab) {
                section.classList.remove('u-hide')
            } else {
                section.classList.add('u-hide')
            }
            for (let i = 0; i < actions.length ; i++) {
                const action = actions[i]
                if (currentTab.dataset.tab === action.dataset.tab) {
                    currentTab.classList.add('tab--active')
                } else {
                    action.classList.remove('tab--active')
                }
            }
        }
    }

    function init () {
        for (let i = 0; i < actions.length ; i++) {
            actions[i].addEventListener('click', handleClickTab, false)
        }
    }
})()