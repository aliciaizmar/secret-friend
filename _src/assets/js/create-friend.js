
/*** Create friend ***/
'use strict';

function createFriend(posId =+1) {
  const frienContent = document.querySelector('.module__people');
  const errorFriend = document.querySelector('.errorfriend');

  const createListEl = ({
    itemName,
    itemEmail,
    textName,
    textEmail,
    classes1,
    classes2,
  }) => {
    const ul = document.getElementById('list');
    const lastIndex = parseInt(ul.lastElementChild.querySelector('.remove-people').dataset.index);
    const friendLi = document.createElement('li');
    friendLi.setAttribute('class', 'module__people--list');
    friendLi.innerHTML =
    `<div class="${itemName}">
        <label class="input--label name--label" for="${itemName}-${posId}">${textName}</label>
        <input type="text" id="${itemName}-${posId}" name="${itemName}" required="required" placeholder="${textName}" class="form--input ${classes1}">
        <div class="error"></div>
    </div>

    <div class="${itemEmail}">
        <label class="input--label email--label" for="${itemEmail}-${posId}">${textEmail}</label>
        <input type="email" id="${itemEmail}-${posId}" name="${itemEmail}" required="required" placeholder="${textEmail}" class="form--input ${classes2}">
        <div class="error"></div>
    </div>

    <img class="icon icon--input remove-people" src="assets/images/svg/trash.svg" alt="Eliminar" data-index="${lastIndex + 1}">`;

    return friendLi;
  };

  const listEl = [{
    itemName: 'namepeople',
    itemEmail: 'emailpeople',
    textName: 'Nombre',
    textEmail: 'Email',
    classes1: 'name',
    classes2: 'email',
  }];

  listEl.forEach((item) => frienContent.append(createListEl(item)));

  // updateFriendIds when delete one/multiples and add another
  let currentList = document.querySelectorAll('.module__people--list');

  for (let i = 0; i < currentList.length; i++) {
    updateFriendIds(currentList);
    errorFriend.innerText = '';
  }
}
