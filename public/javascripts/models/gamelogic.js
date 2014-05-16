GameLogic = function() {
  this.gameStatus = true
}

GameLogic.prototype = {
  checkMarkerAndWormMatch: function(head,marker) {
    return head.toString() == marker.toString()
  },
  checkGameStatus: function(head,tail,length) {
    this._checkTail( head, tail )
    return this.gameStatus
  },
  _checkTail: function(head,tail) {
    for (i = 0; i < tail.length-1; i++) {
      if ( head == tail[i][0] + "," + tail[i][1] ) {
        this.gameStatus = false
      }
    }
  }
}