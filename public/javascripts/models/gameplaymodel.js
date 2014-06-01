Worm = function( wormHeadColumn, wormHeadRow, gridLength ) {
  this.gridLength = gridLength
  this.wormHeadColumn = wormHeadColumn
  this.wormHeadRow = wormHeadRow
  this.wormHead = { column: wormHeadColumn, row: wormHeadRow }
  this.wormTail = []

  this.gameLogic = new GameLogic()
  this.move = new Move( this )
}

Worm.prototype = {
  checkValidMove: function() {
    return this.gameLogic.checkGameStatus( this.wormHead, this.wormTail, this.gridLength )
  },
  updateGamePositions: function() {
    this._updateTail()
    this.move.wormHead()
    this.wormTail.push( { column: this.wormHead.column, row: this.wormHead.row } )
  },
  createMarker: function() {
    var randomColumn = Math.floor( Math.random() * this.gridLength )
    var randomRow = Math.floor( Math.random() * this.gridLength )
    this.marker =  { column: randomColumn, row: randomRow }
  },
  _updateTail: function() {
    if ( this.gameLogic.checkMarkerAndWormMatch( this.wormHead, this.marker ) ) {
      this.createMarker()
    } else {
      this.wormTail.shift()
    }
  }
}