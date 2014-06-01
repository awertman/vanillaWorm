Worm = function( headColumn, headRow ) {
  this.headColumn = headColumn
  this.headRow = headRow
  this.head = { column: headColumn, row: headRow }
  this.tail = []
  this.move = new Move( this )
}

Worm.prototype = {
  updateGamePositions: function( foodStatus ) {
    this._updateTail(foodStatus)
    this.move.wormHead()
    this.tail.push( { column: this.head.column, row: this.head.row } )
  },
  _updateTail: function( foodStatus ) {
    if ( foodStatus !== true ) {
      this.tail.shift()
    }
  }
}