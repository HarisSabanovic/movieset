
let openBtn = document.getElementById("open-menu");
let closeBtn = document.getElementById("close-menu");
let animationBtn = document.getElementById("animation-bt");

let loader = document.querySelector(".loading");
window.addEventListener("load", vanished);

function vanished() {
     loader.classList.add("loading--hidden");
}

openBtn.addEventListener("click", toggleMenu);
closeBtn.addEventListener("click", toggleMenu);

// scroll effekt för navigation
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    const scrollPosition = window.scrollY;
    
    // Change background color when scrolling down
    if (scrollPosition > 50) {
      header.style.backgroundColor = 'rgba(0, 0, 0, 0.9)'; 
    } else {
      header.style.backgroundColor = 'transparent'; 
    }
  });

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




