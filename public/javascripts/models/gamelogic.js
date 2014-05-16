GameLogic = function() {
  this.gameStatus = true
}

GameLogic.prototype = {
  checkMarkerAndWormMatch: function(head,marker) {
    return head.toString() == marker.toString()
  },
  checkGameStatus: function(head,tail,length) {
    this._checkTail( head, tail )
    this._checkBorder( head, length )
    return this.gameStatus
  },
  _checkTail: function(head,tail) {
    for (i = 0; i < tail.length-1; i++) {
      if ( head == tail[i][0] + "," + tail[i][1] ) {
        this.gameStatus = false
      }
    }
  },
  _checkBorder: function(head,length) {
    if ( (head[0] < 0) || (head[1] < 0) || (head[0] >= length) || (head[1] >= length) ) {
      this.gameStatus = false
    }
  }
}