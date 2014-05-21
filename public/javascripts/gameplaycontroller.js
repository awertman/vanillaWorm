/* just Controller should suffice */

GamePlayController = function(model,view) {
  this.model = model // bad name.  What is it?  Just looking at this file I have no idea what this is
  this.view = view
}

GamePlayController.prototype = {
  initializeGame: function() {
    this.model.createMarker() // 1. no idea what this does at a sight; make it easier for me
    /* second thought, pull the marker out into your binder and inject it into
     * the controller */
    this.view.renderGrid( this.model.gridLength ) /* seems wrong to pass the grid size each time you call render, should be an instance variable */
    this.beginGameCycle()
  },

  beginGameCycle: function() {
    if ( this.model.checkValidMove() ) {
      this.beginWormMove()
    } else {
      this.view.renderGameOver( this.model.wormTail )
    }
  },

  beginWormMove: function() {
    this.model.updateGamePositions()
    /* why should the controller tell the view to do this, can't the view do it
     * itself?  seems like it's none of the controller's business
     */
    this.view.renderWormAndMarker( this.model.wormTail , this.model.marker ) // 3. Oh wait, moments later I'm thinking model is the "food"
    /*
      * Maybe the right thing here to do is to pass these arguments as a
      * configuration object {worm: x, foodThing: y} ?
      *
      *
      * But wait, why not just render({worm: this.worm, marker:
      * this.marker})....prefixing things with this.model isn't quite right.
      */
    setTimeout( this.beginGameCycle.bind(this), 100 ) // 4. I like this pinging and timeout implementation for checking the game-state
  },

  trackKeyPress: function() {
    this.model.move.arrowKey = event.keyCode // 2. based on this i'm thinking that 'model' is the snake itself
  }
}
