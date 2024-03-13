"use strict";

/*byter färgtema på klick*/

let toggleBtn = document.getElementById("toggleThemeBtn");
toggleBtn.addEventListener("click", toggleTheme);

function toggleTheme() {
    let body = document.body;
    body.classList.toggle("light-theme");
}

window.addEventListener("load", () => {
    document.querySelector(".loading").classList.add("loading--hidden");
});