
/*** Create event -- Done app ***/
'use strict';

function createEvent() {
  const createEvent = document.querySelector('.content__evento');
  
  createEvent.classList.add('show--create');
  //crear el html
  createEvent.innerHTML = ` 
    <div class="content__evento-creado">   
      <div class="container">
        <div class="content--color">
            <h3 class="content__title--h1">
                ¡Has creado tu evento!
            </h3>
            <p class="content__text">Llegará a tu correo y al de tus amigo@s el nombre de la persona que deberás hacer un regalo.</p>
            <img
                src="/assets/images/svg/champagne.svg"
                class="content__evento-creado--img"
                alt="Felicidades has creado tu evento"
            />
            <button class="btn create-event btn-final">
                Crear un nuevo evento
            </button>
        </div>
      </div>
    </div>
`;

  const btnFinal = document.querySelector('.btn-final');
  btnFinal.addEventListener('click', () => {
    createEvent.classList.remove('show--create');
    createEvent.innerHTML = '';
    resetFields();
  });
}
