
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

function returnHome() {
    window.location.href = "index.html";
}