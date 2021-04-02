"use strict";const btnSubmit=document.getElementById("btnsend"),btnAddFriend=document.querySelector(".addpeople"),errorData=document.querySelector(".errorinputs"),errorFriend=document.querySelector(".errorfriend"),ulFormList=document.getElementById("list");let friends=[],formData={};function createFriend(e=1){const r=document.querySelector(".module__people"),t=document.querySelector(".errorfriend");[{itemName:"namepeople",itemEmail:"emailpeople",textName:"Nombre",textEmail:"Email",classes1:"name",classes2:"email"}].forEach(t=>r.append((({itemName:r,itemEmail:t,textName:n,textEmail:o,classes1:a,classes2:l})=>{const s=document.getElementById("list"),i=parseInt(s.lastElementChild.querySelector(".remove-people").dataset.index),c=document.createElement("li");return c.setAttribute("class","module__people--list"),c.innerHTML=`<div class="${r}">\n        <label class="input--label name--label" for="${r}-${e}">${n}</label>\n        <input type="text" id="${r}-${e}" name="${r}" required="required" placeholder="${n}" class="form--input ${a}">\n        <div class="error"></div>\n    </div>\n\n    <div class="${t}">\n        <label class="input--label email--label" for="${t}-${e}">${o}</label>\n        <input type="email" id="${t}-${e}" name="${t}" required="required" placeholder="${o}" class="form--input ${l}">\n        <div class="error"></div>\n    </div>\n\n    <img class="icon icon--input remove-people" src="assets/images/svg/trash.svg" alt="Eliminar" data-index="${i+1}">`,c})(t)));let n=document.querySelectorAll(".module__people--list");for(let e=0;e<n.length;e++)updateFriendIds(n),t.innerText=""}function updateFriendIds(e,r=1){for(let t=0;t<e.length;t++)setAttributes(e[t].querySelector(".name--label"),{for:`namepeople-${r}`}),setAttributes(e[t].querySelector(".name"),{id:`namepeople-${r}`}),setAttributes(e[t].querySelector(".email--label"),{for:`emailpeople-${r}`}),setAttributes(e[t].querySelector(".email"),{id:`emailpeople-${r}`}),e[t].lastElementChild.dataset.index=t,r++}function setAttributes(e,r){for(let t in r)e.setAttribute(t,r[t])}btnSubmit.addEventListener("click",e=>{errorFriend.innerText="",e.preventDefault(),validateFields(),document.querySelectorAll(".error--input").length>=1?friends=[]:isCompleteAndSend()}),btnAddFriend.addEventListener("click",()=>{createFriend()}),ulFormList.addEventListener("click",e=>{e.stopPropagation();const r=e.target.dataset.index,t=ulFormList.children[r];ulFormList.children.length>3&&t?(t.remove(),updateFriendIds(ulFormList.children)):e.target.className.includes("remove-people")?errorFriend.innerText=errorTexts.errorFriend:errorFriend.innerText=""});const errorTexts={errorName:"El nombre debería contener caracteres A-Z",errorPrice:"El importe debe ser numérico",errorInputs:"Rellena el formulario",errorEmail:"Email no válido",errorFriend:"Tiene que haber mínimo 3 participantes",errorDate:"Verifica la fecha",errorPastDate:"La fecha no puede ser anterior a hoy",errorData:"Hubo algún problema al enviar datos, prueba otra vez."};function validateFields(){const e=document.querySelectorAll(".module__people--list"),r=document.getElementById("dateparty"),t=document.getElementById("moneyparty");let n=new Date(r.value);""!==r.value&&r.value?validateDate(n)?showErrorOrSuccess(r,errorTexts.errorPastDate,"error"):showErrorOrSuccess(r,null,"ok"):showErrorOrSuccess(r,errorTexts.errorDate,"error"),""===t.value.trim()?showErrorOrSuccess(t,errorTexts.errorInputs,"error"):isNaN(t.value)?showErrorOrSuccess(t,errorTexts.errorPrice,"error"):showErrorOrSuccess(t,null,"ok"),e.forEach(e=>{const r=e.querySelector(".email"),t=e.querySelector(".name");""===r.value.trim()?showErrorOrSuccess(r,errorTexts.errorInputs,"error"):validateEmail(r.value)?showErrorOrSuccess(r,null,"ok"):showErrorOrSuccess(r,errorTexts.errorEmail,"error"),""===t.value.trim()?showErrorOrSuccess(t,errorTexts.errorInputs,"error"):validateName(t.value)?showErrorOrSuccess(t,null,"ok"):showErrorOrSuccess(t,errorTexts.errorName,"error"),friends.push({name:t.value,email:r.value})}),formData={friends:friends,money:t.value,date:n.toLocaleDateString()}}function showErrorOrSuccess(e,r,t){const n=e.parentElement.querySelector(".error");"error"===t&&(n.innerText=r,e.classList.add("error--input")),"ok"===t&&(n.innerText="",e.classList.remove("error--input"))}function validateEmail(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)}function validateName(e){return/^[a-z]+$/i.test(e)}function validateDate(e){return e<new Date}function getData(e="",r={}){return fetch(e,{method:"POST",mode:"no-cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)})}function isCompleteAndSend(){getData("",formData).then(e=>{if(e.ok){const r=`Ok: ${e.status}`;console.log("message",r),createEvent()}}).catch(e=>{errorData.innerText=errorTexts.errorData,console.error("Error data:",e)})}function resetFields(){const e=document.querySelectorAll(".module__people--list"),r=document.getElementById("dateparty"),t=document.getElementById("moneyparty");e.forEach(e=>{const n=e.querySelector(".email"),o=e.querySelector(".name"),a=[r,t,n,o];for(let e of a)e.value=""})}function createEvent(){const e=document.querySelector(".content__evento");e.classList.add("show--create"),e.innerHTML=' \n    <div class="content__evento-creado">   \n      <div class="container">\n        <div class="content--color">\n            <h3 class="content__title--h1">\n                ¡Has creado tu evento!\n            </h3>\n            <p class="content__text">Llegará a tu correo y al de tus amigo@s el nombre de la persona que deberás hacer un regalo.</p>\n            <img\n                src="/assets/images/svg/champagne.svg"\n                class="content__evento-creado--img"\n                alt="Felicidades has creado tu evento"\n            />\n            <button class="btn create-event btn-final">\n                Crear un nuevo evento\n            </button>\n        </div>\n      </div>\n    </div>\n',document.querySelector(".btn-final").addEventListener("click",()=>{e.classList.remove("show--create"),e.innerHTML="",resetFields()})}