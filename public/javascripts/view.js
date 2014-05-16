View = function(selectors) {
  this.canvasElement = selectors["canvas"]
  this.gridDimension =  Math.floor( Math.min( window.innerWidth , window.innerHeight ) * 0.9 / 100 ) * 100
}

View.prototype = {
  renderGrid: function( length ) {
    this.context = document.querySelector(this.canvasElement ).getContext("2d")
    this.context.canvas.width = this.gridDimension
    this.context.canvas.height = this.gridDimension
    this.cellSize = this.gridDimension / length
  },
  renderWormAndMarker: function(tail,marker) {
    this.context.clearRect( 0 , 0 , this.gridDimension , this.gridDimension )
    this.renderMarker( marker )
    this.renderWorm( tail )

  },
  renderWorm: function(tail) {
    this.context.fillStyle = "lightgreen";
    for ( i=0; i < tail.length; i++) {
      this.context.fillRect( tail[i][0] * this.cellSize , tail[i][1] * this.cellSize , this.cellSize, this.cellSize )
    }
  },
  renderMarker: function(marker) {
    this.context.fillStyle = "red";
    this.context.fillRect( marker[0] * this.cellSize , marker[1] * this.cellSize , this.cellSize , this.cellSize )
  }

  // game over
}