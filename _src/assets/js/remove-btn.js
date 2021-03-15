
/*** Remove friend ***/
'use strict';

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
          : errorFriend.innerText = errorTexts.errorFriend;

        updateFriendIds(currentList);
      }
    });
  });
}
setInterval(removeBtn, 1000);