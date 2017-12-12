'use strict'

const gameBoard = document.querySelector('#gameBoard');
let imgArray = ["bilder/vodka.png", "bilder/redbull.png", "bilder/gin.png", "bilder/tonic.png", "bilder/morgan.png", "bilder/cocacola.png", "bilder/champagne.png", "bilder/strawberry.png", "bilder/malibu.png", "bilder/ananas.png", "bilder/beer_mug.png", "bilder/pizza.png", "bilder/milk.png", "bilder/licor43.png", "bilder/coffe.png", "bilder/baileys.png"];
// Loop out DIVS to the board
for (let i = 0; i < imgArray.length; i++) {
  let cards = document.createElement("div");
  cards.classList.add('card');

  gameBoard.appendChild(cards);
}

// Add content inside the divs


// Create a shufflefunction
function shuffle(imgArray) {
  for (let i = imgArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temporary = array[i];
    array[i] = array[j];
    array[j] = temporary;
  }
  return array;
}

// Add content to divs
