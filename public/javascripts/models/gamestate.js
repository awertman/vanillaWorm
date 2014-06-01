GameState = function( gridLength ) {
  this.foodMatch = false
  this.playerAlive = true
  this.gridLength = gridLength
}

GameState.prototype = {
  updateGameStatus: function( head, tail, food ) {
    this._checkFoodMatch( head, food )
    this._checkGameOverState( head, tail )
  },
  _checkFoodMatch: function( head, food ) {
    this.foodMatch = (( head.column === food.column ) && ( head.row === food.row ))
  },
  _checkGameOverState: function( head, tail ) {
    this._checkTail( head, tail )
    this._checkBorder( head )
  },
  _checkTail: function( head, tail ) {
    for (i = 0; i < tail.length-1; i++) {
      if ( ( head.column === tail[i].column ) && ( head.row === tail[i].row ) ) {
        this.playerAlive = false
      }
    }
  },
  _checkBorder: function( head ) {
    if ( (head.column < 0) || (head.row < 0) || (head.column >= this.gridLength) || (head.row >= this.gridLength) ) {
      this.playerAlive = false
    }
  }
}
