let popup = document.querySelector(".popup")

let popupOpenButton = document.querySelector(".profile__edit-button");
let popupCloseButton = document.querySelector (".popup__close-button");

let popupSaveButton = document.querySelector (".popup__save-button");
let popupForm = document.querySelector (".popup__form");

let profileName = document.querySelector (".profile__title");
let profileAbout = document.querySelector ("profile__description");

let popupName = document.querySelector ("#name");
let popupAbout = document.querySelector ("#job");


function OpenPopup () {
  popup.classList.add("popup__opened");

}

function ClosePopup () {
  popup.classList.remove("popup__opened");
}


popupOpenButton.addEventListener("click", OpenPopup);

popupCloseButton.addEventListener("click", ClosePopup);
