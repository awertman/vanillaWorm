View = function(selectors) {
  this.canvasElement = selectors["canvas"]
  this.gridDimension =  Math.floor( Math.min( window.innerWidth, window.innerHeight ) * 0.9 / 100 ) * 100
}

View.prototype = {
  renderGrid: function(length) { /* What's going on with your internal () rule?  Sometimes whitespace, sometimes not.  be consistent */

    this.context = document.querySelector( this.canvasElement ).getContext("2d")
    this.context.canvas.width = this.gridDimension
    this.context.canvas.height = this.gridDimension
    this.cellSize = this.gridDimension / length
    /* how about this.cellSize() which divides the iVar gridDimension  by the
     * iVar length?
     */
  },

  renderWormAndMarker: function(tail,marker) {
    this.context.clearRect( 0, 0, this.gridDimension, this.gridDimension )
    this.renderMarker( marker )
    this.renderWorm( tail )

  },
  renderWorm: function(tail) {
    this.context.fillStyle = "lightgreen"; // seems like this view's color should be easily configurable v. hard-coded  maybe a this.opts iVar?
    for ( i=0; i < tail.length; i++) {
      /* just a word of warning this tail[i][1] is pretty opaque.  Why is the
       * 1st element special?  it might be nice if a tail[i].yValue.  It would
       * help me understand what's going on here in fillRect
       */
      this.context.fillRect( tail[i][0] * this.cellSize, tail[i][1] * this.cellSize, this.cellSize, this.cellSize )
    }
  },
  renderMarker: function(marker) {
    this.context.fillStyle = "red"; // seems like this view's color should be easily configurable v. hard-coded
    this.context.fillRect( marker[0] * this.cellSize, marker[1] * this.cellSize, this.cellSize, this.cellSize )
  },
  renderGameOver: function(tail) {
    this.context.fillStyle = "red"; // seems like this view's color should be easily configurable v. hard-coded
    for ( i=0; i < tail.length; i++ ) {
      this.context.fillRect( tail[i][0] * this.cellSize, tail[i][1] * this.cellSize, this.cellSize, this.cellSize )
    }
  }
}
