GameLogic = function() {
  this.gameStatus = true
}

GameLogic.prototype = {
  checkMarkerAndWormMatch: function(head,marker) {
    return head.toString() == marker.toString() // String compare should be ===
  },
  checkGameStatus: function(head,tail,length) {
    this._checkBorder( head, length )
    this._checkTail( head, tail )
    return this.gameStatus
  },
  _checkBorder: function(head,length) {
    // Makes me sad  to read this.  magic indices, complex conditionals.  we
    // can make that more crisp
    if ( (head[0] < 0) || (head[1] < 0) || (head[0] >= length) || (head[1] >= length) ) {
      this.gameStatus = false
    }
  },
  _checkTail: function(head,tail) {
    for (i = 0; i < tail.length-1; i++) {
      if ( head.toString() == tail[i].toString() ) {
        this.gameStatus = false
      }
    }
  }
}
