GamePlayController = function(model,view) {
  this.model = model
  this.view = view
}

GamePlayController.prototype = {
  initializeGame: function() {
    //
    this.view.renderGrid( this.model.gridLength)
    this.beginGameCycle()
  },
  beginGameCycle: function() {
    //
    this.beginSnakeMove()
    //
  },
  beginSnakeMove: function() {
    this.model.updateGamePositions()
    this.view.renderWormAndMarker( this.model.wormTail , this.model.marker )
  },
  trackKeyPress: function() {
    this.model.move.arrowKey = event.keyCode
  }
}