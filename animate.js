
// Query Selectors
const lipstick = document.querySelector('#lipstick-button');
const leftSleeve = document.querySelector('.left-sleeve');
const rightSleeve = document.querySelector('.right-sleeve');
const glassesButton = document.querySelector('#glasses-button');
const leftLens = document.querySelector('.left-lens');
const rightLens = document.querySelector('.right-lens');
const lips = document.querySelector('.lips');
const hair = document.querySelector('.hair');
const hairButton = document.querySelector('#hair-button');
const gestureButton = document.querySelector('#gesture-button');
// const collarOne = document.querySelector('.colar1');
// const collarTwo = document.querySelector('.colar2');

// Listener Functions

let colorWheel = ['#FF5733','#FFBD33','#DBFF33','#75FF33', '#F5D9E2', '#FF6961', '#008080', '#33FF74'];
let i=0;
let hairStyles = ['10px', '30px', '40px', '90px'];

function lipSwitch() {

    if (i<colorWheel.length-1) {
        lips.style.background = colorWheel[i];
        lips.style.transition = '2s';
        i++;
    }
    else {
        i=7
        lips.style.background = colorWheel[i];
        lips.style.transition = '2s';
        i = 0;
    }      
}  

function glassHue() {

    if (i<colorWheel.length -1) {
        leftLens.style.background = colorWheel[i];
        rightLens.style.background = colorWheel[i];
        leftLens.style.transition = '2s';
        rightLens.style.transition = '2s';
        i++;
    }
    else {
        i=7
        leftLens.style.background = colorWheel[i];
        rightLens.style.background = colorWheel[i];
        leftLens.style.transition = '2s';
        rightLens.style.transition = '2s';
        i = 0;
    }      
} 

function hairDo() {

    if (i<hairStyles.length -1) {
        hair.style.borderRadius = hairStyles[i];
        hair.style.transition = '2s';        
        i++;
    }
    else {
        i=3
        hair.style.borderRadius = hairStyles[i];
        hair.style.transition = '2s';
        i = 0;
    }      
} 

function gestures() {
    leftSleeve.classList.toggle("left-sleeve-rotate");       
    rightSleeve.classList.toggle("right-sleeve-rotate"); 
}


// Event Listeners
lipstick.addEventListener ('click', lipSwitch);
glassesButton.addEventListener ('click', glassHue);
hairButton.addEventListener('click', hairDo);
gestureButton.addEventListener('click', gestures);





