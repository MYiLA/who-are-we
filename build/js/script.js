"use strict";var menuBtnElement=document.querySelector(".main-nav__menu-btn"),mainNavElement=document.querySelector(".main-nav"),navEnterElement=mainNavElement.querySelector(".main-nav__enter"),identificationElement=document.querySelector(".user-identification"),identificationCloseElement=identificationElement.querySelector(".user-identification__close"),navInitialsElement=document.querySelector(".main-nav__user-initials"),sliderAuthorizeElement=identificationElement.querySelector(".user-identification__slider-authorization"),sliderRegisterElement=identificationElement.querySelector(".user-identification__slider-registration"),formRegisterElement=identificationElement.querySelector("#registration"),formAuthorizeElement=identificationElement.querySelector("#authorization");menuBtnElement.addEventListener("click",function(){mainNavElement.classList.contains("main-nav--close")?(mainNavElement.classList.remove("main-nav--close"),mainNavElement.classList.add("main-nav--open")):(mainNavElement.classList.remove("main-nav--open"),mainNavElement.classList.add("main-nav--close"))}),navEnterElement.addEventListener("click",function(){identificationElement.classList.remove("user-identification--close"),mainNavElement.classList.remove("main-nav--open"),mainNavElement.classList.add("main-nav--close")}),identificationCloseElement.addEventListener("click",function(){identificationElement.classList.add("user-identification--close")}),navInitialsElement.addEventListener("click",function(){identificationElement.classList.remove("user-identification--close")}),sliderAuthorizeElement.addEventListener("click",function(){formAuthorizeElement.classList.contains("user-identification__form--close")&&(formAuthorizeElement.classList.remove("user-identification__form--close"),formRegisterElement.classList.add("user-identification__form--close"))}),sliderRegisterElement.addEventListener("click",function(){formRegisterElement.classList.contains("user-identification__form--close")&&(formRegisterElement.classList.remove("user-identification__form--close"),formAuthorizeElement.classList.add("user-identification__form--close"))});