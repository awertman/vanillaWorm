GameLogic = function() {
  this.gameStatus = true
}

GameLogic.prototype = {
  checkMarkerAndWormMatch: function(head,marker) {
    return head.toString() == marker.toString()
  },
  checkGameStatus: function(head,tail,length) {
    return true
  }
}