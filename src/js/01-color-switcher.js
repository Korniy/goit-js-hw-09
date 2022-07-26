

// Функція генерування випадкового кольору
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }


// const buttonStart = document.querySelector('[data-start]');
// const buttonStop = document.querySelector('[data-stop]');
// let changesColor;

// buttonStart.addEventListener('click', pressTheStartButton);
// function pressTheStartButton() {
//      startIsDisabled.start();
// };

// buttonStop.addEventListener('click', pressTheStopButton)
// function pressTheStopButton() {
//     startIsDisabled.stop();
// };

// const startIsDisabled = {
//     isActive: false,

//     start() {
//         if (this.isActive) {
//             return;
//         };

//         this.isActive = true;
//         changesColor = setInterval(() => {
//             document.body.style.backgroundColor = getRandomHexColor();
//         }, 1000);
//     },

//     stop() {
//         clearInterval(changesColor);
//         this.isActive = false;
//     }
// };

// Функція генерування випадкового кольору
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonStart = document.querySelector('[data-start]');
const buttonStop = document.querySelector('[data-stop]');
let changesColor;

buttonStart.addEventListener('click', pressTheStartButton);
function pressTheStartButton() {

      changesColor = setInterval(() => {
            document.body.style.backgroundColor = getRandomHexColor();
      }, 1000);
    
    buttonStart.setAttribute('disabled', true);
    buttonStop.removeAttribute('disabled', false)
};

buttonStop.addEventListener('click', pressTheStopButton)
function pressTheStopButton() {

    clearInterval(changesColor);
    
    buttonStart.removeAttribute('disabled', true)
    buttonStop.setAttribute('disabled', true);
};





