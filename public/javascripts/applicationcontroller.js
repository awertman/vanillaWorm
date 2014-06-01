ApplicationController = function( Worm, View ) {
  this.Worm = Worm
  this.View = View
}

ApplicationController.prototype = {
  initializeGame: function() {
    this.Worm.createMarker()
    this.View.renderGrid()
    this.beginGameCycle()
  },
  beginGameCycle: function() {
    if ( this.Worm.checkValidMove() ) {
      this.beginWormMove()
    } else {
      this.View.renderGameOver( this.Worm.wormTail )
    }
  },
  beginWormMove: function() {
    this.Worm.updateGamePositions()
    this.View.renderWormAndMarker( this.Worm.wormTail, this.Worm.marker )
      // * But wait, why not just render({worm: this.worm, marker:
      // * this.marker})....prefixing things with this.Worm isn't quite right.
    setTimeout( this.beginGameCycle.bind( this ), 100 )
  },
  trackKeyPress: function() {
    this.Worm.move.arrowKey = event.keyCode
  }
}
