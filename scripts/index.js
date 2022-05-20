// Открывает наш попап с редактированием
const popupOpenButton = document.querySelector(".profile__edit-button");

// Форма для заполнения имя и профессия все оттуда взяли
const formUserPopup= document.querySelector(".popup_edit");
const popupEditCloseButton = formUserPopup.querySelector(".popup__close-button");
const popupUserForm = formUserPopup.querySelector(".popup__form");
const inputName = formUserPopup.querySelector("#name");
const inputAbout = formUserPopup.querySelector("#job");
const popupSaveButton = formUserPopup.querySelector(".popup__save-button");

// данные пользователя со страницы
const nameTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const containerCardItems = document.querySelector(".elements");  // Это сам контейнер куда добавляется карты

// Форма с добавлением карточек и кнопка
const popupAddButton = document.querySelector(".profile__add-button");
const formAddCard= document.querySelector(".popup_add");
const buttonCloseAddCard = formAddCard.querySelector(".popup__close-button");
const formHandlerAddCard = formAddCard.querySelector(".popup__form");
const nameCard =  formAddCard.querySelector("#nameCard");
const linkCard = formAddCard.querySelector("#linkCard");

// Увеличение картинки
const popupOpenImage = document.querySelector(".popup_size-photo");
const buttonClosePopupImage = popupOpenImage.querySelector(".popup__close-button-image");
const imagePopup = popupOpenImage.querySelector(".popup__figire-image");
const captionPopup = popupOpenImage.querySelector(".popup__figure-title");
// Добавил template
const template = document.querySelector(".template").content;


// Открытие закрытие Попапов для всего
function openPopup (popupElement) {
  popupElement.classList.add("popup_opened")
}

function closePopup (popupElement) {
  popupElement.classList.remove("popup_opened")
}


// Слушатели событий для открытия и закрытия формы редактирования
popupOpenButton.addEventListener("click", function(evt) {
  openPopup(formUserPopup);
  nameDesciptionSite();
});

popupEditCloseButton.addEventListener("click", function(evt) {
  closePopup(formUserPopup);
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
  closePopup(formUserPopup);
}
formUserPopup.addEventListener("submit", handlerFormUserSubmit);


// Слушатели событий для открытия и закрытия формы карточек
popupAddButton.addEventListener("click", () =>{
  openPopup(formAddCard);
});

buttonCloseAddCard.addEventListener("click", () =>{
  closePopup(formAddCard);
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

initialCards.reverse().forEach(x => {
  const card = createCard(x);
  renderCard(card);
});



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
function createCard ({name, link}) {
  const templateCard = template.querySelector(".card").cloneNode(true);
  const nameCard = templateCard.querySelector(".card__title");
  const imageCard = templateCard.querySelector(".card__image");
  const buttonDeleteCard = templateCard.querySelector(".card__button-delete");
  const buttonLikeCard = templateCard.querySelector(".card__heart-button");
  buttonLikeCard.addEventListener("click", buttonLikeHandler);
  buttonDeleteCard.addEventListener("click", buttonLDeleteHandler);
  imageCard.addEventListener("click", buttonOpenImage);
  nameCard.textContent = name;
  imageCard.src = link;
  imageCard.alt = name;
  return templateCard;
}


function renderCard(card) {
  containerCardItems.prepend(card);
}


// Создание карт
function formCardHandler(evt) {
  evt.preventDefault();
  const newCard = createCard({link: linkCard.value, name: nameCard.value});
  renderCard(newCard);
  evt.target.reset();
  closePopup(formAddCard);
}
formHandlerAddCard.addEventListener("submit", formCardHandler);

