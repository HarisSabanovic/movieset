"use strict";

/*byter färgtema på klick*/

let toggleBtn = document.getElementById("toggleThemeBtn");
toggleBtn.addEventListener("click", toggleTheme);

function toggleTheme() {
    let body = document.body;
    const socialMediaIcons = document.querySelectorAll('.icons a svg');

    socialMediaIcons.forEach(icon => {
        icon.classList.toggle("light-theme");
    });

    body.classList.toggle("light-theme");
};

let loader = document.querySelector(".loading");
window.addEventListener("load", vanished);

function vanished() {
     loader.classList.add("loading--hidden");
}