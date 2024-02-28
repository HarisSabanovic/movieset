"use strict";
let userInput = "Blade Runner";


async function display(){
const url = `http://www.omdbapi.com/?s=${userInput}&page=1&apikey=b69bb950`;

const response = await fetch(url);
const data = await response.json();
console.log(data);
}

let openBtn = document.getElementById("open-menu");
let closeBtn = document.getElementById("close-menu");
let animationBtn = document.getElementById("animation-bt");

openBtn.addEventListener("click", toggleMenu);
closeBtn.addEventListener("click", toggleMenu);



function toggleMenu() {
    let navMenuEl = document.getElementById("nav-menu");

    let style = window.getComputedStyle(navMenuEl);

    if(style.display === "none") {
        navMenuEl.style.display = "block";
    }
    else {
        navMenuEl.style.display = "none";
    }

}