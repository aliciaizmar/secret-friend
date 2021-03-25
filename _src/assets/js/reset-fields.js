
/*** Reset Fields ***/
'use strict';

function resetFields() {
  const currentList = document.querySelectorAll('.module__people--list');
  const date = document.getElementById('dateparty');
  const money = document.getElementById('moneyparty');

  currentList.forEach((item) => {
    const email = item.querySelector('.email');
    const name = item.querySelector('.name');
    const arrField = [date, money, email, name];

    for (let field of arrField) {
      field.value = '';
    }
  });
}
