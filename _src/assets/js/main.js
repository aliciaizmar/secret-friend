
'use strict';

const btnSubmit = document.getElementById('btnsend');
const btnAddFriend = document.querySelector('.addpeople');
const errorData = document.querySelector('.errorinputs');
const errorFriend = document.querySelector('.errorfriend');
let friends = [];
let formData = {};

const errorTexts = {
  errorName: 'El nombre debería contener caracteres A-Z',
  errorPrice: 'El importe debe ser numérico',
  errorInputs: 'Rellena el formulario',
  errorEmail: 'Email no válido',
  errorFriend: 'Tiene que haber mínimo 3 participantes',
  errorDate: 'Verifica la fecha',
  errorPastDate: 'La fecha no puede ser anterior a hoy',
  errorData: 'Hubo algún problema al enviar datos, prueba otra vez.'
};

let posId = 3;

btnSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  getFields();
  //clearInterval(isBtnRemove);
});

btnAddFriend.addEventListener('click', () => {
  createFriend();
});


function getFields() {
  const currentList = document.querySelectorAll('.module__people--list');
  const date = document.getElementById('dateparty');
  const money = document.getElementById('moneyparty');
  let newDate = new Date(date.value).toLocaleDateString('es-ES');
  let isError = false;

  if (date.value === '') {
    showErrors(date, errorTexts.errorDate);
    isError = true;
  } else if(validateDate(newDate)) {
    showErrors(date, errorTexts.errorPastDate);
    isError = true;
  } else {
    showSuccess(date);
    isError = false;
  }


  if (money.value.trim() === '') {
    showErrors(money, errorTexts.errorInputs);
    isError = true;
  } else if(isNaN(money.value)) {
    showErrors(money, errorTexts.errorPrice);
    isError = true;
  } else {
    showSuccess(money);
    isError = false;
  }

  currentList.forEach((item) => {
    const email = item.querySelector('.email');
    const name = item.querySelector('.name');

    if (email.value.trim() === '') {
      showErrors(email, errorTexts.errorInputs);
      isError = true;
    } else if(!validateEmail(email.value)) {
      showErrors(email, errorTexts.errorEmail);
      isError = true;
    } else {
      showSuccess(email);
      isError = false;
    }

    if(name.value.trim() === '') {
      showErrors(name, errorTexts.errorInputs);
      isError = true;
    } else if(!validateName(name.value)) {
      showErrors(name, errorTexts.errorName);
      isError = true;
    } else {
      showSuccess(name);
      isError = false;
    }    

    if(isError) {
      friends = [];
    } else {
      getData(newDate, money, name, email);
    }

  });
  
}

function createEvent(){
  console.log('EVENTO CREADO')
}


function showErrors(field, message) {
  const parent = field.parentElement;
  const errorInputs = parent.querySelector('.error');
  errorInputs.innerText = message;
  //add error class
  field.classList.add('error--input');
}

function showSuccess(field) {
  const parent = field.parentElement;
  const errorInputs = parent.querySelector('.error');
  errorInputs.innerText = '';
  //remove error class
  field.classList.remove('error--input');
}


function validateEmail(email) {
  const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regexEmail.test(email);
}

function validateName(name) {
  const regexName = /^[a-z]+$/i;
  return regexName.test(name);
}

function validateDate(date) {
  const today = new Date().toLocaleDateString();
  if(date < today) {
    return true;
  }
  return false;
}
