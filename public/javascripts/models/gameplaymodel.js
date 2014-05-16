GamePlayModel = function(wormHead,gridLength) {
  this.gridLength = gridLength
  this.wormHead = wormHead
  this.wormTail = []
  this.marker = []
  this.move = new Move( this )

}

GamePlayModel.prototype = {
  updateGamePositions: function() {
    this._updateTail()
    this.move.wormHead()
    this.wormTail.push( this.wormHead.slice(0) )
  },
  _updateTail: function() {
    this.wormTail.shift()
  }
}