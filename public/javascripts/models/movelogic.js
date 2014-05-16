Move = function(model) {
  this.model = model
  this.arrowKey = 38 // game starts with worm moving up
  this.moveDirection = [ this._left, this._up, this._right, this._down ]
}

Move.prototype = {
  wormHead: function() {
    for (i=0; i< this.moveDirection.length; i++) {
      this.moveDirection[i].bind(this)()
    }
  },
  _left: function() {
    if (this.arrowKey== 37) {
      this.model.wormHead[0] -= 1
    }
  },
  _up: function() {
    if (this.arrowKey== 38) {
      this.model.wormHead[1] -= 1
    }
  },
  _right: function() {
    if ( this.arrowKey== 39 ) {
      this.model.wormHead[0] += 1
    }
  },
  _down: function() {
    if ( this.arrowKey== 40 ) {
      this.model.wormHead[1] += 1
    }
  }
}