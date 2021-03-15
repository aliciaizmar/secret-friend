
/*** Create friend ***/
'use strict';

function createFriend() {
  posId++;
  const frienContent = document.querySelector('.module__people');  

  const createListEl = ({
    itemName,
    itemEmail,
    textName,
    textEmail,
    classes1,
    classes2,
  }) => {
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

    <button type="button" class="btn remove-people"> 
      <img class="icon icon--input" src="assets/images/svg/trash.svg" alt="Eliminar">
    </button>`;

    return friendLi;
  };

  const listEl = [
    {
      itemName: 'namepeople',
      itemEmail: 'emailpeople',
      textName: 'Nombre',
      textEmail: 'Email',
      classes1: 'name',
      classes2: 'email',
    },
  ];

  listEl.forEach((item) => frienContent.append(createListEl(item)));

  // updateFriendIds when delete one/multiples and add another
  let currentList = document.querySelectorAll('.module__people--list');
  
  for (let i = 0; i < currentList.length; i++) {
    updateFriendIds(currentList);
    errorFriend.innerHTML = '';
  }
}
