
/*** Fetch service ***/
'use strict';

function getData(url = '', data = {}) {  
  return fetch(url, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
}
