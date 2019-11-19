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

menuBtnElement.addEventListener('click', function () {
  if (mainNavElement.classList.contains("main-nav--close")) {
    mainNavElement.classList.remove("main-nav--close");
    mainNavElement.classList.add("main-nav--open");
  } else {
    mainNavElement.classList.remove("main-nav--open");
    mainNavElement.classList.add("main-nav--close");
  }
});

navEnterElement.addEventListener('click', function () {
  identificationElement.classList.remove("user-identification--close");
  mainNavElement.classList.remove("main-nav--open");
  mainNavElement.classList.add("main-nav--close");
});

identificationCloseElement.addEventListener('click', function () {
  identificationElement.classList.add("user-identification--close");
});

navInitialsElement.addEventListener('click', function () {
  identificationElement.classList.remove("user-identification--close");
});

sliderAuthorizeElement.addEventListener('click', function () {
  if (formAuthorizeElement.classList.contains("user-identification__form--close")) {
    formAuthorizeElement.classList.remove("user-identification__form--close");
    formRegisterElement.classList.add("user-identification__form--close");
  }
  else return
});

sliderRegisterElement.addEventListener('click', function () {
  if (formRegisterElement.classList.contains("user-identification__form--close")) {
    formRegisterElement.classList.remove("user-identification__form--close");
    formAuthorizeElement.classList.add("user-identification__form--close");
  }
  else return
});