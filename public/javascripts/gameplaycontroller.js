GamePlayController = function(model,view) {
  this.model = model
  this.view = view
}

GamePlayController.prototype = {
  trackKeyPress: function() {
    this.model.move.arrowKey = event.keyCode
  }
}