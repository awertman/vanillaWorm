GameLogic = function() {
  this.gameStatus = true
}

GameLogic.prototype = {
  checkMarkerAndWormMatch: function(head,marker) {
    return ( ( head.column === marker.column ) && ( head.row === marker.row ) )
  },
  checkGameStatus: function(head,tail,gridLength) {
    this._checkBorder( head, gridLength )
    this._checkTail( head, tail )
    return this.gameStatus
  },
  _checkBorder: function(head,gridLength) {
    if ( (head.column < 0) || (head.row < 0) || (head.column >= gridLength) || (head.row >= gridLength) ) {
      this.gameStatus = false
    }
  },
  _checkTail: function(head,tail) {
    for (i = 0; i < tail.length-1; i++) {
      if ( ( head.column === tail[i].column ) && ( head.row === tail[i].row ) ) {
        this.gameStatus = false
      }
    }
  }
}
