GamePlayModel = function(wormHead,gridLength) {
  this.gridLength = gridLength
  this.wormHead = wormHead
  this.wormTail = []
  this.marker = []
  this.gameLogic = new GameLogic()
  this.move = new Move( this )

}

GamePlayModel.prototype = {
  checkValidMove: function() {
    return this.gameLogic.checkGameStatus (this.wormHead, this.wormTail, this.gridLength )
  },
  updateGamePositions: function() {
    this._updateTail()
    this.move.wormHead()
    this.wormTail.push( this.wormHead.slice(0) )
  },
  createMarker: function() {
    var randomColumn = Math.floor( Math.random() * this.gridLength )
    var randomRow = Math.floor( Math.random() * this.gridLength )
    this.marker = [ randomColumn , randomRow ]
  },
  _updateTail: function() {
    if ( this.gameLogic.checkMarkerAndWormMatch( this.wormHead, this.marker ) ) {
      this.createMarker()
    } else {
      this.wormTail.shift()
    }
  }
}