GamePlayModel = function(wormHead,gridLength) {
  this.gridLength = gridLength
  this.wormHead = wormHead
  this.wormTail = []

  this.move = new Move( this )

}

