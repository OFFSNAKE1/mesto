// Открывает наш попап с редактированием
const popupOpenButton = document.querySelector(".profile__edit-button");

// Форма для заполнения имя и профессия все оттуда взяли
const formPopapUser = document.querySelector(".popup_edit");
const popupCloseButton = formPopapUser.querySelector(".popup__close-button");
const popupForm = formPopapUser.querySelector(".popup__form");
const inputName = formPopapUser.querySelector("#name");
const inputAbout = formPopapUser.querySelector("#job");
const popupSaveButton = formPopapUser.querySelector(".popup__save-button");

// данные пользователя со страницы
const nameTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const containerCardItems = document.querySelector(".elements");  // Это сам контейнер куда добавляется карты

// Форма с добавлением карточек и кнопка
const popupAddButton = document.querySelector(".profile__add-button");
const formAddCart = document.querySelector(".popup_add");
const buttonCloseAddCart = formAddCart.querySelector(".popup__close-button");
const formHandlerAddCart = formAddCart.querySelector(".popup__form");
const nameCard =  formAddCart.querySelector("#nameCard");
const linkCard = formAddCart.querySelector("#linkCard");

// Увеличение картинки
const popupOpenImage = document.querySelector(".popup_size-photo");
const buttonClosePopupImage = popupOpenImage.querySelector(".popup__close-button-image");
const imagePopup = popupOpenImage.querySelector(".popup__figire-image");
const captionPopup = popupOpenImage.querySelector(".popup__figure-title");



// Открытие закрытие Попапов для всего
function openPopup (popupElement) {
  popupElement.classList.add("popup_opened")
  nameDesciptionSite();
}

function closePopup (popupElement) {
  popupElement.classList.remove("popup_opened")
}


// Слушатели событий для открытия и закрытия формы редактирования
popupOpenButton.addEventListener("click", function(evt) {
  openPopup(formPopapUser);
});

popupCloseButton.addEventListener("click", function(evt) {
  closePopup(formPopapUser);
});


// Отображения имени и описания для полей ввода
function nameDesciptionSite() {
  inputName.value = nameTitle.textContent;
  inputAbout.value = profileDescription.textContent;
}


// Изменение данных имени пользователя формы, preventDefault сбрасывает значения формы но дефолтных
function handlerFormUserSubmit(evt) {
  evt.preventDefault();
  nameTitle.textContent = inputName.value;
  profileDescription.textContent = inputAbout.value;
  closePopup(formPopapUser);
}
formPopapUser.addEventListener("submit", handlerFormUserSubmit);


// Слушатели событий для открытия и закрытия формы карточек
popupAddButton.addEventListener("click", () =>{
  openPopup(formAddCart);
});

buttonCloseAddCart.addEventListener("click", () =>{
  closePopup(formAddCart);
});


// Карточки которые должны появляться при загрузки страницы
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

initialCards.reverse().forEach(createCard);



// Добавления лайка, удаления лайка
function buttonLikeHandler(evt) {
  evt.target.classList.toggle("card__like");
}

function buttonLDeleteHandler(evt) {
  evt.target.closest(".card").remove();
}

//Для увеличенной картинки
function buttonOpenImage (evt) {
  imagePopup.src = evt.target.src;
  captionPopup.textContent = evt.target.alt;
  imagePopup.alt = evt.target.alt;
  openPopup(popupOpenImage);
}

buttonClosePopupImage.addEventListener("click", () => {
  closePopup(popupOpenImage);
});



// Функция создания карточек
function createCard (item) {
  const name = item.name;
  const link = item.link;
  const template = document.querySelector(".template").content.querySelector(".card").cloneNode(true);
  const nameCard = template.querySelector(".card__title");
  const imageCard = template.querySelector(".card__image");
  const buttonDeleteCard = template.querySelector(".card__button-delete");
  const buttonLikeCard = template.querySelector(".card__heart-button");
  buttonLikeCard.addEventListener("click", buttonLikeHandler);
  buttonDeleteCard.addEventListener("click", buttonLDeleteHandler);
  imageCard.addEventListener("click", buttonOpenImage);
  nameCard.textContent = name;
  imageCard.src = link;
  imageCard.alt = name;
  containerCardItems.prepend(template);
}


// Создание карт
function formCardHandler(evt) {
  evt.preventDefault();
    createCard({link: linkCard.value, name: nameCard.value});
   evt.target.reset();
    closePopup(formAddCart);
}
formHandlerAddCart.addEventListener("submit", formCardHandler);

