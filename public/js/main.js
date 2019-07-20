"use strict";

var triggerMenu = document.querySelector("#trigger-menu");
var mainMenu = document.querySelector("#main-menu");

var showMenu = function showMenu(event) {
  mainMenu.classList.toggle("is-visible");
};

var main = function main(event) {
  triggerMenu.addEventListener("click", showMenu);
};

window.addEventListener("load", main);