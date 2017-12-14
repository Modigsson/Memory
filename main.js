'use strict'
// Create function for new game that activates when game restarts.
function newGame() {
  // Declare consts and lets
  const gameBoard = document.querySelector('#gameBoard')
  const imgArray = ["bilder/vodka.png", "bilder/gin.png", "bilder/morgan.png", "bilder/champagne.png", "bilder/malibu.png", "bilder/beer_mug.png", "bilder/licor43.png", "bilder/baileys.png", "bilder/vodka.png", "bilder/gin.png", "bilder/morgan.png", "bilder/champagne.png", "bilder/malibu.png", "bilder/beer_mug.png", "bilder/licor43.png", "bilder/baileys.png"];
  let newArr = shuffle(imgArray)
  let match = []
  let flipped = []
  let finished = 0
  let win = '';
  let button = '';
// Function that prevents cheating by dragging cards while turned.
  window.ondragstart = function() {return false;}
  // Loop out DIVS to the board and add content.
  for (let i = 0; i < imgArray.length; i++) {
    let card = document.createElement("div")
    let img = document.createElement("img")
    img.setAttribute("id", i)
// Add eventlisteners and push object into arrays.
    img.addEventListener('click', function(event) {
      if (flipped.length < 2 ) {
        event.target.style.webkitFilter = 'brightness(100%)'
        flipped.push(event.target.attributes["id"].value)
        match.push(event.target.attributes["src"].value)
      }
// Check if it is not a match. Flip back cards.
      if (match.length === 2) {
        if (match[0] !== match[1]) {
          setTimeout(function(){
            document.getElementById(flipped[1]).style.webkitFilter = "brightness(50%)";
            document.getElementById(flipped[0]).style.webkitFilter = "brightness(50%)";
            flipped = []
          }, 500);
// If cards match, add to variable that goes to 8 and then clear board.
        } else {
          finished++
          flipped = []
          if (finished === 8) {
            document.getElementById('gameBoard').innerHTML = ""
             win = document.createElement('h1')
            win.textContent = 'You did it =)'
            gameBoard.appendChild(win)
             button = document.createElement('button')
            gameBoard.appendChild(button)
            button.textContent = 'New game'
            button.addEventListener('click', () => {
              newGame()
              win.remove()
              button.remove()
            })
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
