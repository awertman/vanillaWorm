GamePlayModel = function(wormHead,gridLength) {
  this.gridLength = gridLength
  this.wormHead = wormHead
  this.wormTail = []
  this.marker = []
  this.move = new Move( this )

}

