"use strict";

let searchEl = document.getElementById("movie-input");
let resultEl = document.getElementById("result");
let searchBtn = document.getElementById("search-btn");


searchBtn.addEventListener("click", async () => {
    //let userInput = searchEl.value;
    let userInput = searchEl.value.trim();
    if(userInput !== ""){
    const url = `http://www.omdbapi.com/?s=${userInput}&page=1&apikey=b69bb950`;

    try{
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        resultEl.innerHTML = "";

        if (data.Response === "True") {
            // Iterate over each movie object in the "Search" array
            const movies = data.Search.slice(0, 3);
            movies.forEach(movie => {
                resultEl.innerHTML += 
                `
                    <div class="info">
                        <img src=${movie.Poster} class="poster">
                    
                            <div class="details">
                                <h2>${movie.Title}</h2>
                                <p>Type: ${movie.Type}</p>
                                <p>Release Date: ${movie.Year}</p>
                            </div>
                    </div>
                    
                `;
            });
        } else {
            // Display a message if there are no results
            resultEl.innerHTML = "<p>No movies found</p>";
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
    
}});

async function DisplayWiki() {
    let wikiInput = "Ksi"
    const wikiUrl = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=500&srsearch=${wikiInput}`;

    try {
        const res = await fetch(wikiUrl);
        const data = await res.json();

        console.log(data.query.search[0].snippet);
    } catch {
        console.log("error");
    }
}

DisplayWiki();
