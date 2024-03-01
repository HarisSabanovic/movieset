"use strict";

let searchEl = document.getElementById("movie-input");
let resultEl = document.getElementById("result");
let searchBtn = document.getElementById("search-btn");

displayMovies();

async function displayMovies(){
    //let userInput = searchEl.value;
    let userInput = "Breaking bad";
    const url = `http://www.omdbapi.com/?s=${userInput}&page=1&apikey=b69bb950`;

        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        if (data.Response === "True") {
            // Iterate over each movie object in the "Search" array
            const movies = data.Search.slice(0, 1);
            movies.forEach(movie => {
                resultEl.innerHTML += 
                `
                    <div class="info">
                        <img src=${movie.Poster} class="poster">
                        <div>
                            <h2>${movie.Title}</h2>
                            <div class="details">
                                <p>Type: ${movie.Type}</p>
                                <p>Release Date: ${movie.Year}</p>
                            </div>
                        </div>
                    </div>
                    
                `;
            });
        } else {
            // Display a message if there are no results
            resultEl.innerHTML = "<p>No movies found</p>";
        }
}
