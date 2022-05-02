// write js code here corresponding to favourites.html


var favourites = JSON.parse(localStorage.getItem("favouriteMatches"));

displayMatches(mafavouritestches);
document.querySelector("#favouriteMatches") .addEventListener("change", favourites);

function displayMatches(mafavouritestches){
    localStorage.setItem("favouriteMatches", JSON.stringify(favourites));
}

  
