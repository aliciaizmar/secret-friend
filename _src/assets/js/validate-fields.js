
/*** Validate Fields ***/
'use strict';

const errorTexts = {
  errorName: 'El nombre debería contener caracteres A-Z',
  errorPrice: 'El importe debe ser numérico',
  errorInputs: 'Rellena el formulario',
  errorEmail: 'Email no válido',
  errorFriend: 'Tiene que haber mínimo 3 participantes',
  errorDate: 'Verifica la fecha',
  errorPastDate: 'La fecha no puede ser anterior a hoy',
  errorData: 'Hubo algún problema al enviar datos, prueba otra vez.',
};

function validateFields() {
  const currentList = document.querySelectorAll('.module__people--list');
  const date = document.getElementById('dateparty');
  const money = document.getElementById('moneyparty');
  let newDate = new Date(date.value);

  if (date.value === '' || !date.value) {
    showErrorOrSuccess(date, errorTexts.errorDate, 'error');
  } else if (validateDate(newDate)) {
    showErrorOrSuccess(date, errorTexts.errorPastDate, 'error');
  } else {
    showErrorOrSuccess(date, null, 'ok');
  }


  if (money.value.trim() === '') {
    showErrorOrSuccess(money, errorTexts.errorInputs, 'error');
  } else if (isNaN(money.value)) {
    showErrorOrSuccess(money, errorTexts.errorPrice, 'error');
  } else {
    showErrorOrSuccess(money, null, 'ok');
  }


  currentList.forEach((item) => {
    const email = item.querySelector('.email');
    const name = item.querySelector('.name');

    if (email.value.trim() === '') {
      showErrorOrSuccess(email, errorTexts.errorInputs, 'error');
    } else if (!validateEmail(email.value)) {
      showErrorOrSuccess(email, errorTexts.errorEmail, 'error');
    } else {
      showErrorOrSuccess(email, null, 'ok');
    }


    if (name.value.trim() === '') {
      showErrorOrSuccess(name, errorTexts.errorInputs, 'error');
    } else if (!validateName(name.value)) {
      showErrorOrSuccess(name, errorTexts.errorName, 'error');
    } else {
      showErrorOrSuccess(name, null, 'ok');
    }

    friends.push({name: name.value, email: email.value});
  });

  formData = {
    friends: friends,
    money: money.value,
    date: newDate.toLocaleDateString(),
  };

}

function showErrorOrSuccess(field, message, isOk) {
  const parent = field.parentElement;
  const errorInputs = parent.querySelector('.error');

  if (isOk === 'error') {
    errorInputs.innerText = message;
    field.classList.add('error--input');
  }

  if (isOk === 'ok') {
    errorInputs.innerText = '';
    field.classList.remove('error--input');
  }
}

function validateEmail(email) {
  const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regexEmail.test(email);
}

function validateName(name) {
  const regexName = /^[a-z]+$/i;
  return regexName.test(name);
}

function validateDate(date) {
  const today = new Date();
  if (date < today) {
    return true;
  }
  return false;
}
