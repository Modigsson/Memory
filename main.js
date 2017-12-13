'use strict'

function newGame() {
  const gameBoard = document.querySelector('#gameBoard')
  const imgArray = ["bilder/vodka.png", "bilder/gin.png", "bilder/morgan.png", "bilder/champagne.png", "bilder/malibu.png", "bilder/beer_mug.png", "bilder/licor43.png", "bilder/baileys.png", "bilder/vodka.png", "bilder/gin.png", "bilder/morgan.png", "bilder/champagne.png", "bilder/malibu.png", "bilder/beer_mug.png", "bilder/licor43.png", "bilder/baileys.png"];
  let newArr = shuffle(imgArray)
  let match = []
  let flipped = []
  let finished = 0

  window.ondragstart = function() {return false;}

  // Loop out DIVS to the board and add content.
  for (let i = 0; i < imgArray.length; i++) {
    let card = document.createElement("div")
    let img = document.createElement("img")
    img.setAttribute("id", i)

    img.addEventListener('click', function(event) {
      if (flipped.length < 2 ) {
        event.target.style.webkitFilter = 'brightness(100%)'
        flipped.push(event.target.attributes["id"].value)
        match.push(event.target.attributes["src"].value)
      }
      if (match.length === 2) {
        if (match[0] !== match[1]) {
          setTimeout(function(){
            document.getElementById(flipped[1]).style.webkitFilter = "brightness(50%)"
            document.getElementById(flipped[0]).style.webkitFilter = "brightness(50%)"
            flipped = []
          }, 500);
        } else {
          finished++
          flipped = []
          if (finished === 8) {
            document.getElementById('gameBoard').innerHTML = "";
          }
        }
        match = []
      }
    })


    card.classList.add('card')
    img.src = newArr[i]

    card.appendChild(img)
    gameBoard.appendChild(card)
  }

  // Create a shufflefunction
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      const temporary = array[i]
      array[i] = array[j]
      array[j] = temporary
    }
    return array;
  }
}

newGame()
