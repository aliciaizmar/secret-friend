'use strict';

const btnSubmit = document.getElementById('btnsend');
const btnAddFriend = document.querySelector('.addpeople');
const errorData = document.querySelector('.errorinputs');
const errorFriend = document.querySelector('.errorfriend');
const ulFormList = document.getElementById('list');
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

ulFormList.addEventListener('click', (event) => {
  event.stopPropagation();
  event.preventDefault();
  const indexToDelete = event.target.dataset.index;
  const childToRemove = ulFormList.children[indexToDelete];

  //A partir de tres amigos se pueden borras los inputs
  if (ulFormList.children.length > 3 && childToRemove) {   
    childToRemove.remove();
    updateFriendIds(ulFormList.children);
        
  } else if (event.target.className.includes('icon') && indexToDelete) {    
    errorFriend.innerText = errorTexts.errorFriend;

  } else {
    errorFriend.innerText = '';
  }
});


