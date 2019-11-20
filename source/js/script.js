'use strict';

var menuBtnElement = document.querySelector('.main-nav__menu-btn');
var mainNavElement = document.querySelector('.main-nav');
var navEnterElement = mainNavElement.querySelector('.main-nav__enter');
var identificationElement = document.querySelector('.user-identification');
var identificationCloseElement = identificationElement.querySelector('.user-identification__close');
var navInitialsElement = document.querySelector('.main-nav__user-initials');
var sliderAuthorizeElement = identificationElement.querySelector('.user-identification__slider-authorization');
var sliderRegisterElement = identificationElement.querySelector('.user-identification__slider-registration');
var formRegisterElement = identificationElement.querySelector('#registration');
var formAuthorizeElement = identificationElement.querySelector('#authorization');
var autorizeSubmitElement = formAuthorizeElement.querySelector('.user-identification__submit');
var registerSubmitElement = formRegisterElement.querySelector('.user-identification__submit');

var openMainMenu = function () {
  mainNavElement.classList.remove('main-nav--close');
  mainNavElement.classList.add('main-nav--open');
};

var closeMainMenu = function () {
  mainNavElement.classList.remove('main-nav--open');
  mainNavElement.classList.add('main-nav--close');
};

var moveMenu = function () {
  if (mainNavElement.classList.contains('main-nav--close')) {
    openMainMenu()
  } else {
    closeMainMenu()
  };
};

menuBtnElement.addEventListener('click', moveMenu);

navEnterElement.addEventListener('click', function () {
  identificationElement.classList.remove('user-identification--close');
});

var onCloseIdentification = function () {
  identificationElement.classList.add('user-identification--close');
  closeMainMenu();
}

identificationCloseElement.addEventListener('click', onCloseIdentification);

navInitialsElement.addEventListener('click', function () {
  identificationElement.classList.remove('user-identification--close');
});

var onOpenAutorizeClick = function () {
  if (formAuthorizeElement.classList.contains('user-identification__form--close')) {
    formAuthorizeElement.classList.remove('user-identification__form--close');
    formRegisterElement.classList.add('user-identification__form--close');
    formRegisterElement.reset();
    registerEmailElement.classList.remove('user-identification__input--invalid');
    registerPasswordElement.classList.remove('user-identification__input--invalid');
    registerPasswordRepeatElement.classList.remove('user-identification__input--invalid');
    invalidRegisterElement.textContent = '';
  } else return
};

var onOpenRegisterClick = function () {
  if (formRegisterElement.classList.contains('user-identification__form--close')) {
    formRegisterElement.classList.remove('user-identification__form--close');
    formAuthorizeElement.classList.add('user-identification__form--close');
    formAuthorizeElement.reset();
    autorizeEmailElement.classList.remove('user-identification__input--invalid');
    autorizePasswordElement.classList.remove('user-identification__input--invalid');
    invalidAuthorizeElement.textContent = '';
  } else return
};

sliderAuthorizeElement.addEventListener('click', onOpenAutorizeClick);

sliderRegisterElement.addEventListener('click', onOpenRegisterClick);

var registerEmailElement = formRegisterElement.querySelector('#registration-email');
var registerPasswordElement = formRegisterElement.querySelector('#registration-password');
var registerPasswordRepeatElement = formRegisterElement.querySelector('#registration-password-repeat');
var invalidRegisterElement = formRegisterElement.querySelector('.user-identification__invalid');
var invalidAuthorizeElement = formAuthorizeElement.querySelector('.user-identification__invalid');

var checkValidityEmail = function (emailInput, invalidElement) {
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  if (emailInput.value === '') {
    invalidElement.textContent = 'Введите адрес вашей электронной почты';
    emailInput.classList.add('user-identification__input--invalid');
    return false;
  }

  if (reg.test(emailInput.value) === false) {
    invalidElement.textContent = 'Введите корректный e-mail';
    emailInput.classList.add('user-identification__input--invalid');
    return false;
  } else {
    emailInput.classList.remove('user-identification__input--invalid');
    return true;
  }
};

var checkValidityPassword = function (passwordInput, invalidElement) {
  if (passwordInput.value === '') {
    invalidElement.textContent = 'Введите пароль';
    passwordInput.classList.add('user-identification__input--invalid');
    return false;
  } else {
    passwordInput.classList.remove('user-identification__input--invalid');
    return true;
  }
};

var checkValidityPasswordRepeat = function (passwordInput, passwordRepeadInput, invalidElement) {
  if (passwordRepeadInput.value === '') {
    invalidElement.textContent = 'Повторите введенный вами пароль';
    passwordRepeadInput.classList.add('user-identification__input--invalid');
    return false;
  }

  if (passwordRepeadInput.value !== passwordInput.value) {
    invalidElement.textContent = 'Введенные пароли не совпадают, повторите попытку';
    passwordInput.classList.add('user-identification__input--invalid');
    passwordRepeadInput.classList.add('user-identification__input--invalid');
    return false;
  } else {
    passwordInput.classList.remove('user-identification__input--invalid');
    passwordRepeadInput.classList.remove('user-identification__input--invalid');
    return true;
  }
};

var addInvalidEffect = function (check, input) {
  if (check) {

  } else {
    input.classList.add('user-identification__input--invalid')
  }
}

var onSubmitRegisterClick = function () {
  event.preventDefault();
  checkValidityEmail(registerEmailElement, invalidRegisterElement);
  checkValidityPassword(registerPasswordElement, invalidRegisterElement);
  checkValidityPasswordRepeat(registerPasswordElement, registerPasswordRepeatElement, invalidRegisterElement);

  var isValid = checkValidityEmail(registerEmailElement, invalidRegisterElement) && checkValidityPassword(registerPasswordElement, invalidRegisterElement) && checkValidityPasswordRepeat(registerPasswordElement, registerPasswordRepeatElement, invalidRegisterElement);

  if (isValid) {
    invalidRegisterElement.textContent = '';
    onCloseIdentification();
    showAccountCreatedPopap();
  }
};

var autorizeEmailElement = formAuthorizeElement.querySelector('#authorization-email');
var autorizePasswordElement = formAuthorizeElement.querySelector('#authorization-password');

var onSubmitAutorizeClick = function () {
  event.preventDefault();

  checkValidityEmail(autorizeEmailElement, invalidAuthorizeElement);
  checkValidityPassword(autorizePasswordElement, invalidAuthorizeElement);

  var isValid = checkValidityEmail(autorizeEmailElement, invalidAuthorizeElement) && checkValidityPassword(autorizePasswordElement, invalidAuthorizeElement);

  if (isValid) {
    invalidAuthorizeElement.textContent = '';
    onCloseIdentification();
  }
};

registerSubmitElement.addEventListener('click', onSubmitRegisterClick);

autorizeSubmitElement.addEventListener('click', onSubmitAutorizeClick);

var mainElement = document.querySelector('.project');

var showAccountCreatedPopap = function () {
  var similarPopupElement = document.querySelector('#account-created')
    .content
    .querySelector('.account-created');

  var PopupElement = similarPopupElement.cloneNode(true);
  var fragment = document.createDocumentFragment();
  fragment.appendChild(PopupElement);
  mainElement.appendChild(fragment);
  var clozeButtonElement = document.querySelector('.account-created__button');

  clozeButtonElement.addEventListener('click', function () {
    mainElement.querySelector('.account-created__inner').classList.add('account-created__inner--thanks');
  });

  mainElement.querySelector('.account-created__close').addEventListener('click', function () {
    mainElement.querySelector('.account-created__inner').remove();
  });
};