

/*** Fetch service ***/
'use strict';

function getData(date, money, name, email) {
  friends.push({'email': email.value, 'name': name.value});
  formData = {
    friends: friends,
    money: money.value,
    date: date,
  };
  
  const endPoint = '';
  console.log(formData);

  fetch(endPoint, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      if (response.ok) {
        const message = `Ok: ${response.status}`;
        console.log(message);
        createEvent();
      } else {
        console.log('NO ESTA OK');
      }
      return response.text();
    })
    .catch((err) => {
      errorData.innerText = errorTexts.errorData;
      console.error('Error data:', err);
    });
}
