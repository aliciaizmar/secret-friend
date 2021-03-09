'use strict';

function updateFriendIds(currentList, posId) {
  posId = 1;

  for (let i = 0; i < currentList.length; i++) {
    setAttributes(currentList[i].querySelector('.name--label'), {
      for: `namepeople-${posId}`,
    });
    setAttributes(currentList[i].querySelector('.name'), {
      id: `namepeople-${posId}`,
    });
    setAttributes(currentList[i].querySelector('.email--label'), {
      for: `emailpeople-${posId}`,
    });
    setAttributes(currentList[i].querySelector('.email'), {
      id: `emailpeople-${posId}`,
    });
    setAttributes(currentList[i].querySelector('.remove-people'), {
      id: `btnpeople-${posId}`,
    });
    posId++;
  }
}

function setAttributes(item, values) {
  for (let key in values) {
    item.setAttribute(key, values[key]);
  }
}