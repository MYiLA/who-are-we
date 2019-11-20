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
var autorizeSubmitElement = formAuthorizeElement.querySelector(".user-identification__submit");
var registerSubmitElement = formRegisterElement.querySelector(".user-identification__submit");

var openMainMenu = function () {
  mainNavElement.classList.remove("main-nav--close");
  mainNavElement.classList.add("main-nav--open");
};

var closeMainMenu = function () {
  mainNavElement.classList.remove("main-nav--open");
  mainNavElement.classList.add("main-nav--close");
};

var moveMenu = function () {
  if (mainNavElement.classList.contains("main-nav--close")) {
    openMainMenu()
  } else {
    closeMainMenu()
  };
};

menuBtnElement.addEventListener('click', moveMenu);

navEnterElement.addEventListener('click', function () {
  identificationElement.classList.remove("user-identification--close");
});

identificationCloseElement.addEventListener('click', function () {
  identificationElement.classList.add("user-identification--close");
});

navInitialsElement.addEventListener('click', function () {
  identificationElement.classList.remove("user-identification--close");
  closeMainMenu()
});

var openAutorizeForm = function () {
  if (formAuthorizeElement.classList.contains("user-identification__form--close")) {
    formAuthorizeElement.classList.remove("user-identification__form--close");
    formRegisterElement.classList.add("user-identification__form--close");
  } else return
};

var openRegisterForm = function () {
  if (formRegisterElement.classList.contains("user-identification__form--close")) {
    formRegisterElement.classList.remove("user-identification__form--close");
    formAuthorizeElement.classList.add("user-identification__form--close");
  } else return
};

sliderAuthorizeElement.addEventListener('click', openAutorizeForm);

sliderRegisterElement.addEventListener('click', openRegisterForm);

var submitFormRegister = function () {
  event.preventDefault();
};

var submitFormAutorize = function () {
  event.preventDefault();
};

registerSubmitElement.addEventListener("click", submitFormRegister);

autorizeSubmitElement.addEventListener("click", submitFormAutorize);