Move = function(model) {
  this.model = model
  this.leftKey = 37
  this.upKey = 38
  this.rightKey = 39
  this.downKey = 40
  this.arrowKey = this.upKey // game starts with worm moving up
  this.moveDirection = [ this._left, this._up, this._right, this._down ]
}

Move.prototype = {
  wormHead: function() {
    for (i=0; i< this.moveDirection.length; i++) {
      this.moveDirection[i].bind(this)()
    }
  },
  _left: function() {
    if (this.arrowKey == this.leftKey) {
      this.model.wormHead.column -= 1
    }
  },
  _up: function() {
    if (this.arrowKey == this.upKey) {
      this.model.wormHead.row -= 1
    }
  },
  _right: function() {
    if ( this.arrowKey == this.rightKey ) {
      this.model.wormHead.column += 1
    }
  },
  _down: function() {
    if ( this.arrowKey == this.downKey ) {
      this.model.wormHead.row += 1
    }
  }
}


