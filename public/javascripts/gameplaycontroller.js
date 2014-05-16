GamePlayController = function(model,view) {
  this.model = model
  this.view = view
}

GamePlayController.prototype = {
  initializeGame: function() {
    this.model.createMarker()
    this.view.renderGrid( this.model.gridLength )
    this.beginGameCycle()
  },
  beginGameCycle: function() {
    //
    this.beginWormMove()
    //
  },
  beginWormMove: function() {
    this.model.updateGamePositions()
    this.view.renderWormAndMarker( this.model.wormTail , this.model.marker )
    setTimeout( this.beginGameCycle.bind(this), 400 )
  },
  trackKeyPress: function() {
    this.model.move.arrowKey = event.keyCode
  }
}