'use strict';

const btnSubmit = document.getElementById('btnsend');
const btnAddFriend = document.querySelector('.addpeople');
const errorData = document.querySelector('.errorinputs');
const errorFriend = document.querySelector('.errorfriend');
const ul = document.getElementById('list');
//let posId = 3;
let friends = [];
let formData = {};


btnSubmit.addEventListener('click', (e) => {
  errorFriend.innerText = '';
  e.preventDefault();
  validateFields();

  const allInputs = document.querySelectorAll('.error--input').length;
  if(allInputs >= 1) {
    friends = [];
  } else {
    isCompleteAndSend();
  }

});

btnAddFriend.addEventListener('click', () => {
  createFriend();
});

ul.addEventListener('click', (event) => {
  event.stopPropagation();
  event.preventDefault();


  //A partir de tres amigos se pueden borras los inputs
  if (ul.children.length > 3) {
    const indexToDelete = event.target.parentElement.dataset.index;
    const childToRemove = ul.children[indexToDelete];

    if(childToRemove) {
      childToRemove.remove();
    }
    updateFriendIds(ul.children);
  } else if (!event.target.className.includes('icon')) {
    errorFriend.innerText = '';
  } else {
    errorFriend.innerText = errorTexts.errorFriend;
  }
  // ul.removeChild(childToRemove)
  // childToRemove.parent.removeChild(childToRemove)
});


