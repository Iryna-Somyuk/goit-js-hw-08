import throttle from 'lodash.throttle';

const localKey = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const input = document.querySelector('.feedback-form input');
const mes = document.querySelector('.feedback-form textarea');

form.addEventListener('input', throttle(onFormSubmit, 500));
form.addEventListener('submit', cleanerFormLocat);
updateOutput();
function onFormSubmit(event) {
  event.preventDefault();

  const email = input.value;
  const message = mes.value;
  const formObj = {
    email,
    message,
  };
  localStorage.setItem(localKey, JSON.stringify(formObj));

  updateOutput();
}

function updateOutput() {
  const localDataSave = localStorage.getItem(localKey);
  const dataParses = JSON.parse(localDataSave);
  if (dataParses) {
    input.value = dataParses.email;
    mes.value = dataParses.message;
  }
}
function cleanerFormLocat(evn) {
  evn.preventDefault();
  if (input.value === '' || mes.value === '') {
    alert(`Заповніть всі поля!`);
  } else {
    console.log(`email: ${input.value}  massage: ${mes.value}`);
    evn.target.reset();
    localStorage.removeItem(localKey);
  }
}
