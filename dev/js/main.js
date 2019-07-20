const triggerMenu = document.querySelector("#trigger-menu");
const mainMenu = document.querySelector("#main-menu");


let showMenu = (event) => {
    mainMenu.classList.toggle("is-visible");
}


let main = (event) => {
    triggerMenu.addEventListener("click", showMenu);
}
window.addEventListener("load", main);
