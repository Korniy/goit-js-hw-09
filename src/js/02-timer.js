import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';


const inputEl = document.querySelector('#datetime-picker');
const buttonEl = document.querySelector('[type="button"]');
const daysEl = document.querySelector('span[data-days]');
const hoursEl = document.querySelector('span[data-hours]');
const minutesEl = document.querySelector('span[data-minutes]');
const secondsEl = document.querySelector('span[data-seconds]');

buttonEl.setAttribute('disabled', true);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    arrayOfDates = selectedDates[0];
    currentTime = Date.now();

    if (arrayOfDates < currentTime) {
      // alert("Please choose a date in the future")
      Notiflix.Notify.warning("Please choose a date in the future");
      buttonEl.setAttribute('disabled', true);
    } else {
      Notiflix.Notify.success("Nice try, Amigo!");
      buttonEl.removeAttribute('disabled')
    }
      console.log(selectedDates[0]);
  },
};

flatpickr(inputEl, options);


buttonEl.addEventListener('click', startTimer);

// function startTimer() {
//   const cbd = setInterval(() => {
//     const abc = arrayOfDates - currentTime;
//     if (abc >= 0) {
//         daysEl.textContent = addLeadingZero(days);
//         hoursEl.textContent = addLeadingZero(hours);
//         minutesEl.textContent = addLeadingZero(minutes);
//         secondsEl.textContent = addLeadingZero(seconds);
//     }
//   }, 1000);
// };

// function addLeadingZero(value) {
//     return value.toString().padStart(2, '0');
// }

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
}
