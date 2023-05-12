console.log('Step by Step JS file loaded');


// Toggle event listener
const   steps           = document.querySelectorAll('#stepByStep .app-step-nav__step');
for (const step of steps) {
    step.addEventListener('click', function handleClick() {
        let stepDetail = step.querySelector('.app-step-nav__panel');
        let stepNumberText = step;
        let stepDetailToggleText = step.querySelector('.app-step-nav__header .app-step-nav__title .js-step-title .app-step-nav__button .js-toggle-link .app-step-nav__toggle-link-focus .app-step-nav__button-text');
        let stepDetailToggleChevron = step.querySelector('.app-step-nav__header .app-step-nav__title .js-step-title .app-step-nav__button .js-toggle-link .app-step-nav__toggle-link-focus .app-step-nav__chevron');

        steps.forEach (step => { step.classList.remove('app-step-nav__step--active') });

        if (stepDetail.matches('.js-hidden')) {
            stepNumberText.classList.add('app-step-nav__step--active');
            stepDetail.classList.remove('js-hidden');
            stepDetailToggleText.innerHTML = "Hide";
            stepDetailToggleChevron.classList.remove('app-step-nav__chevron--down');
        } else {
            stepNumberText.classList.remove('app-step-nav__step--active');
            stepDetail.classList.add('js-hidden');
            stepDetailToggleText.innerHTML = "Show";
            stepDetailToggleChevron.classList.add('app-step-nav__chevron--down');
        }
    });
}

let toggleSteps = false;
function toggleAllDetails() {
    toggleSteps = !toggleSteps;
    for (i = 0; i < steps.length; i++) {
        let step = steps[i];
        let stepDetail = step.querySelector('.app-step-nav__panel');
        let controlDetailToggleText = document.querySelector('#step-by-step-navigation .app-step-nav__controls .app-step-nav__button .app-step-nav__button-text');
        let controlDetailToggleChevron = document.querySelector('#step-by-step-navigation .app-step-nav__controls .app-step-nav__button .app-step-nav__chevron');
        let stepDetailToggleText = step.querySelector('.app-step-nav__header .app-step-nav__title .js-step-title .app-step-nav__button .js-toggle-link .app-step-nav__toggle-link-focus .app-step-nav__button-text');
        let stepDetailToggleChevron = step.querySelector('.app-step-nav__header .app-step-nav__title .js-step-title .app-step-nav__button .js-toggle-link .app-step-nav__toggle-link-focus .app-step-nav__chevron');
        
        if (toggleSteps) {
            stepDetail.classList.add('js-hidden');
            controlDetailToggleText.innerHTML = "Show all steps";
            controlDetailToggleChevron.classList.add('app-step-nav__chevron--down');
            stepDetailToggleText.innerHTML = "Show";
            stepDetailToggleChevron.classList.add('app-step-nav__chevron--down');
        } else {
            stepDetail.classList.remove('js-hidden');
            controlDetailToggleText.innerHTML = "Hide all steps";
            controlDetailToggleChevron.classList.remove('app-step-nav__chevron--down');
            stepDetailToggleText.innerHTML = "Hide";
            stepDetailToggleChevron.classList.remove('app-step-nav__chevron--down');
        }
    }

}

// function toggleAllDetails() {
//     steps.forEach(step => {
//         let stepDetail = step.querySelector('.app-step-nav__panel');
//         let controlDetailToggleText = document.querySelector('#step-by-step-navigation .app-step-nav__controls .app-step-nav__button .app-step-nav__button-text');
//         let controlDetailToggleChevron = document.querySelector('#step-by-step-navigation .app-step-nav__controls .app-step-nav__button .app-step-nav__chevron');

//         if (stepDetail.matches('.js-hidden')) {
//             stepDetail.classList.remove('js-hidden');
//             controlDetailToggleText.innerHTML = "Hide all steps";
//             controlDetailToggleChevron.classList.remove('app-step-nav__chevron--down');
//         } else {
//             stepDetail.classList.add('js-hidden');
//             controlDetailToggleText.innerHTML = "Show all steps";
//             controlDetailToggleChevron.classList.add('app-step-nav__chevron--down');
//         }
//     });
// }