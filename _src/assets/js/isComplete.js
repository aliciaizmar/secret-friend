
/*** Form complete and send Data ***/
'use strict';

function isCompleteAndSend() {
  getData('', formData)
    .then((response) => {
      if (!response.ok) {
        const message = `Ok: ${response.status}`;
        console.log('message', message);
        createEvent();
      }
    })
    .catch((err) => {
      errorData.innerText = errorTexts.errorData;
      console.error('Error data:', err);
    });
}
