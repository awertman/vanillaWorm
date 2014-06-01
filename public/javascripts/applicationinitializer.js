document.addEventListener("DOMContentLoaded", function() {

  document.querySelector('button').addEventListener('click', function() {
    var gridLength = 20
    var wormStartColumn = gridLength / 2
    var wormStartRow = gridLength - 1
    var selectors = { canvas: '#wormGrid', wormColor: 'lightgreen', gameOverColor: 'red' , foodColor: 'red', gridLength: gridLength}

    var worm = new Worm( wormStartColumn, wormStartRow )
    var view = new View( selectors )
    var gameState = new GameState( gridLength)
    new ApplicationController( worm, gameState, view , gridLength).initializeGame()
  })

})

