ApplicationController = function( Worm, GameState, View, gridLength ) {
  this.Worm = Worm
  this.GameState = GameState
  this.View = View
  this.Food = new Food(gridLength)
  this.gridLength = gridLength
}

ApplicationController.prototype = {
  initializeGame: function() {
    this.trackKeyPress()
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
    this.createFoodIfMatch( this.GameState.foodMatch )
    this.GameState.updateGameStatus( this.Worm.head, this.Worm.tail, this.Food.position )
    this.View.renderWormAndFood( this.Worm.tail, this.Food.position )

    setTimeout( this.beginGameCycle.bind( this ), 100 )
  },
  createFoodIfMatch: function( foodMatch ) {
    if (foodMatch) {
      this.Food = new Food(this.gridLength)
    }
  },
  trackKeyPress: function() {
    document.addEventListener('keydown', this.changeWormDirection.bind( this ) )
  },
  changeWormDirection: function() {
    this.Worm.move.arrowKey = event.keyCode
  }
}
