//alert("you got hacked!");

let button = document.querySelector(".menu-button");
button.addEventListener("click", showMenu);
let menu = document.querySelector("nav.menu");
let layer = document.querySelector(".fade-layer");
layer.addEventListener("click", showMenu);

function showMenu() {
    menu.classList.toggle("show");
    
    layer.classList.toggle("visible");
};