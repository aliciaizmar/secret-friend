
/*** Create event -- Done app ***/
'use strict';

function createEvent() {
  const createEvent = document.querySelector('.content___evento-creado');
  const btnFinal = document.querySelector('.btn-final');
  createEvent.classList.add('show--create');

  btnFinal.addEventListener('click', () => {
    createEvent.classList.remove('show--create');
    resetFields();
  });
}
