ApplicationController = function( Worm, GameState, View, gridLength ) {
  this.Worm = Worm
  this.GameState = GameState
  this.View = View
  this.food = new Food(gridLength)
  this.gridLength = gridLength
}

ApplicationController.prototype = {
  initializeGame: function() {
    this.trackKeyPress(this.Worm)
    this.View.renderGrid()
    this.beginGameCycle()
  },
  beginGameCycle: function() {
    if ( this.GameState.playerAlive ) {
      this.beginWormMove()
    } else {
      this.View.renderGameOver( this.Worm.tail )
    }
  },
  beginWormMove: function() {
    this.Worm.updateGamePositions( this.GameState.foodMatch )
    this.checkFoodMatch( this.GameState.foodMatch )
    this.View.renderWormAndFood( this.Worm.tail, this.food.position )
    this.GameState.updateGameStatus( this.Worm.head, this.Worm.tail, this.food.position )

    setTimeout( this.beginGameCycle.bind( this ), 100 )
  },
  checkFoodMatch: function( foodMatch ) {
    if (foodMatch) {
      this.food = new Food(this.gridLength)
    }
  },
  trackKeyPress: function( worm ) {
    document.onkeydown = function( event ) {
      worm.move.arrowKey = event.keyCode
    }
  }
}
