'use strict'

function newGame() {
  const gameBoard = document.querySelector('#gameBoard')
  const imgArray = ["bilder/vodka.png", "bilder/gin.png", "bilder/morgan.png", "bilder/champagne.png", "bilder/malibu.png", "bilder/beer_mug.png", "bilder/licor43.png", "bilder/baileys.png", "bilder/vodka.png", "bilder/gin.png", "bilder/morgan.png", "bilder/champagne.png", "bilder/malibu.png", "bilder/beer_mug.png", "bilder/licor43.png", "bilder/baileys.png"];
  let newArr = shuffle(imgArray)
  let match = []

  // Loop out DIVS to the board and add content.
  for (let i = 0; i < imgArray.length; i++) {
    let card = document.createElement("div")
    let img = document.createElement("img")
    img.setAttribute("id", i)
    img.addEventListener('click', function(event) {
      match.push(event.target.attributes[1].value)
      console.log(match);
      if (match.length === 2) {
        if (match[0] !== match[1]) {

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
