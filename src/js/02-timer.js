import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

// Кількість мілісекунд на одиницю часу

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
};

const inputEl = document.querySelector('#datetime-picker');
const buttonEl = document.querySelector('button[data-start]');
const daysEl = document.querySelector('span[data-days]');
const hoursEl = document.querySelector('span[data-hours]');
const minutesEl = document.querySelector('span[data-minutes]');
const secondsEl = document.querySelector('span[data-seconds]');

buttonEl.setAttribute('disabled', true);
let arrayOfDates = 0;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {

    let arrayOfDates = selectedDates[0];

    if (arrayOfDates < Date.now()) {
      // alert("Please choose a date in the future")
      Notiflix.Notify.failure("Please choose a date in the future");
      buttonEl.setAttribute('disabled', true);
    } else {
      Notiflix.Notify.success("Nice try, Amigo!");
      buttonEl.removeAttribute('disabled')
    };
      // console.log(selectedDates[0]);
  },
};

flatpickr(inputEl, options);

buttonEl.addEventListener('click', startTimer);

function startTimer() {
  const startInterval = setInterval(() => {
    const time = arrayOfDates - Date.now();

    if (time >= 0) {
      timerUpdate(convertMs(time));
    } else {
      clearInterval(startInterval);
    };
  }, 1000);
};

function timerUpdate({ days, hours, minutes, seconds }) {

  daysEl.textContent = addLeadingZero(days);
  hoursEl.textContent = addLeadingZero(hours);
  minutesEl.textContent = addLeadingZero(minutes);
  secondsEl.textContent = addLeadingZero(seconds);

  //  daysEl.textContent = days;
  // hoursEl.textContent = hours;
  // minutesEl.textContent = minutes;
  // secondsEl.textContent = seconds;
};

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
};



