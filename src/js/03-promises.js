import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');
const delayEl = document.querySelector('input[name = delay]');
const stepEl = document.querySelector('input[name = step]');
const amountEl = document.querySelector('input[name = amount]');

function createPromise(position, delay) {
    const shouldResolve = Math.random() > 0.3;
  
    return new Promise((resolve, reject) => {
      setTimeout(() => {

        if (shouldResolve) {
          resolve({ position, delay });
        } else {
          reject({ position, delay });
        };
      }, delay);
    });
  };

formEl.addEventListener('submit', submitForm);

function submitForm(event) {
  event.preventDefault();
     
  let delay = Number(delayEl.value);
  const step = Number(stepEl.value);
  const amount = Number(amountEl.value);
 
  for (let position = 1; position <= amount; position++) {
    createPromise(position, delay)
        
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`,)
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`,)
      })
    delay += step;
  };
};
  







