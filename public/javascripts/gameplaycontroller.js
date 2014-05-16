GamePlayController = function(model,view) {
  this.model = model
  this.view = view
}

GamePlayController.prototype = {
  initializeGame: function() {

    this.view.renderGrid( this.model.gridLength)

  },
  trackKeyPress: function() {
    this.model.move.arrowKey = event.keyCode
  }
}