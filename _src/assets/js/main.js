'use strict';

const contentList = document.querySelector('.module__people');
const btnSubmit = document.getElementById('btnsend');
const inputMoney = document.getElementById('moneyparty');
const inputDate = document.getElementById('dateparty');
const btnAddFriend = document.querySelector('.addpeople');
const errorInputs = document.querySelector('.errorinputs');
const errorFriend = document.querySelector('.errorfriend');
const errorMoney = inputMoney.closest('.moneyparty').querySelector('.error');
const errorDate = inputDate.closest('.dateparty').querySelector('.error');
let friends = [];
let formData = {};

const errorTexts = {
  errorPrice: 'El importe debe ser numérico',
  errorInputs: 'Revisa los campos en rojo',
  errorFriend: 'Tiene que haber mínimo 3 participantes',
  errorDate: 'Verifica la fecha',
};

const contentErrors = Object.values(errorTexts);
let posId = 3;

btnSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  getDataForm(btnSubmit);
  //clearInterval(isBtnRemove);
});

btnAddFriend.addEventListener('click', () => {
  createFriend();
});

//setInterval porque tiene que estar mirando si se van creando o borrando amigos
function removeBtn() {
  const btnRemoveFriend = document.querySelectorAll('.remove-people');

  btnRemoveFriend.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const currBtn = e.currentTarget;
      const currentList = document.querySelectorAll('.module__people--list');

      for (let i = 0; i < currentList.length; i++) {
        currentList.length > 3
          ? currBtn.parentElement.remove()
          : getTexts(errorFriend, 2);

        updateFriendIds(currentList);
      }
    });
  });
} 
setInterval(removeBtn, 1000);

function getDataForm(btnSubmit) {
    const currentList = document.querySelectorAll('.module__people--list');
    const myForm = btnSubmit.closest('.form-party');
    const money = myForm.querySelector('#moneyparty');
    const date = myForm.querySelector('#dateparty');
    let newDate = new Date(date.value).toLocaleDateString('es-ES', {  day: '2-digit', month: '2-digit', year: 'numeric' });
    let isError = false;

    errorMoney.innerHTML = '';
    errorInputs.innerHTML = '';
    errorDate.innerHTML = '';

    currentList.forEach((item) => {
        const email = item.querySelector('.email');
        const name = item.querySelector('.name');   

        if (email.value.trim() == '' || !validateEmail(email.value)) {
          getTexts(errorInputs, 1);
          email.classList.add('error--input');
          isError = true; 
        }
        if(name.value.trim() == '' || !validateName(name.value)) {
          getTexts(errorInputs, 1);
         name.classList.add('error--input');
         isError = true; 
        }
        if (money.value == '') {
          getTexts(errorMoney, 0);
          money.classList.add('error--input');
          isError = true; 
        }
        if (date.value == '' ) {

          getTexts(errorDate, 3);
          date.classList.add('error--input');
          isError = true; 
        }

        if(isError) {
          friends = [];
        } else {
          removeClasses([email, name, date, money], 'error--input');
          errorMoney.innerHTML = '';
          errorInputs.innerHTML = '';
          errorDate.innerHTML = '';
          getData(email, name, money, newDate);
        }     

    });
}

function getData(email, name, money, date) {

  friends.push({'email': email.value, 'name': name.value});
  formData = {
      friends: friends,
      money: money.value,
      date: date,
  };
  const endPoint = 'https://cx57y6hii4.execute-api.eu-west-1.amazonaws.com/Prod/amigoInvisible';

  fetch(endPoint, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
  .then(function (response) {
    console.log('response:', response); //quitar
    if (response.ok) {
      console.log('formData', formData);
      return response;
    } else {
      console.log('formData ELSE', formData);
      console.log('Hubo algún problema al enviar datos, prueba otra vez.'); //quitar
    }
  })
}

function validateEmail(email) {
  const regexEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  return regexEmail.test(String(email));
}

function validateName(name) {
  const regexName = /^[a-z]+$/i;
  return regexName.test(name);
}

function validateMoney(money) {
  const regexMoney = /^[0-9]+$/;
  return regexMoney.test(money);
}

function validateDate(date) {
  date = new Date(date).toLocaleDateString('es-ES', {  day: '2-digit', month: '2-digit', year: 'numeric' });
  console.log('newDate', date)
  return date;
}



function removeClasses(items, classes) {
  let arr = [...items];

  for (let itemArr of arr) {
    itemArr.classList.remove(classes);
  }
  return arr;
}

function addClasses(items, classes) {
  let arr = [...items];

  for (let itemArr of arr) {
    itemArr.classList.add(classes);
  }
  return arr;
}


function getTexts(item, index) {
  const err = item.innerHTML = contentErrors[index];
  return err;
}


