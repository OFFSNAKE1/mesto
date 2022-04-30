let popup = document.querySelector(".popup")

let popupOpenButton = document.querySelector(".profile__edit-button");
let popupCloseButton = document.querySelector (".popup__close-button");

let popupSaveButton = document.querySelector (".popup__save-button");
let popupForm = document.querySelector (".popup__form");

let profileName = document.querySelector (".profile__title");
let profileAbout = document.querySelector (".profile__description");

let inputName = document.querySelector ("#name");
let inputAbout = document.querySelector ("#job");


function OpenPopup () {
  popup.classList.add("popup__opened");
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
}

function ClosePopup () {
  popup.classList.remove("popup__opened");
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  ClosePopup ();
}

popupOpenButton.addEventListener("click", OpenPopup);

popupCloseButton.addEventListener("click", ClosePopup);

popupForm.addEventListener ("submit", formSubmitHandler);
