"use strict";

let searchEl = document.getElementById("movie-input");
let resultEl = document.getElementById("result");
let searchBtn = document.getElementById("search-btn");


searchBtn.addEventListener("click", async () => {
    let userInput = searchEl.value.trim();
    if (userInput !== "") {
        const url = `https://www.omdbapi.com/?s=${userInput}&page=1&apikey=b69bb950`;

        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);

            resultEl.innerHTML = "";

            if (data.Response === "True") {
                const movies = data.Search.slice(0, 3);
                for (const movie of movies) {
                    const trailerId = await moviesApi(movie.Title, movie.Year);
                    const trailerUrl = `https://www.youtube-nocookie.com/embed/${trailerId}`;
                    resultEl.innerHTML += 
                    `
                        <div class="info">
                            <img src=${movie.Poster} class="poster">
                            <div class="details">
                                <h2>${movie.Title}</h2>
                                <p>Type: ${movie.Type}</p>
                                <p>Release Date: ${movie.Year}</p>
                                <iframe width="560" height="315" src="${trailerUrl}" frameborder="0" allowfullscreen></iframe>
                            </div>
                        </div>
                    `;
                }
            } else {
                resultEl.innerHTML = "<p>No movies found</p>";
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
});


async function moviesApi(movieTitle, releaseYear) {
    const youtubeKey = "AIzaSyDYLEOK2NarC5Chv_5gk7wed3tOAHjdYds";
    const youtubeUrl = `https://www.googleapis.com/youtube/v3/search?key=${youtubeKey}&part=snippet&type=video&q=${movieTitle} ${releaseYear} trailer`;

    try {
        const response = await fetch(youtubeUrl);
        const data = await response.json();
        
        if (data.items && data.items.length > 0) {
            return data.items[0].id.videoId;
        } else {
            return null; 
        }
    } catch (error) {
        console.error("Error fetching trailer data:", error);
        return null;
    }
}
