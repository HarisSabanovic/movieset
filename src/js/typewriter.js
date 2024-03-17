"use strict";

const word = "ENTERTAINMENT";
let i = 0;

function typewriter() {
    let dynamicText = document.querySelector("h1 span");
    dynamicText.innerHTML += word[i];
    i++;
    if (i < word.length) {
        setTimeout(typewriter, 200);
    }
}

typewriter();
