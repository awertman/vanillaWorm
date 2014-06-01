View = function( selectors ) {
  this.canvasElement = selectors.canvas
  this.wormColor = selectors.wormColor
  this.gameOverColor = selectors.gameOverColor
  this.markerColor = selectors.markerColor
  this.gridLength = selectors.gridLength
  this.gridDimension =  Math.floor( Math.min( window.innerWidth, window.innerHeight ) * 0.9 / 100 ) * 100
  this.cellSize = this.gridDimension / this.gridLength
}

View.prototype = {
  renderGrid: function() {
    this.context = document.querySelector( this.canvasElement ).getContext("2d")
    this.context.canvas.width = this.gridDimension
    this.context.canvas.height = this.gridDimension
  },
  renderWormAndMarker: function( tail, marker ) {
    this.context.clearRect( 0, 0, this.gridDimension, this.gridDimension )
    this.renderMarker( marker )
    this.renderWorm( tail )
  },
  renderWorm: function( tail ) {
    this.context.fillStyle = this.wormColor;
    for ( i=0; i < tail.length; i++) {
      this.context.fillRect( tail[i].column * this.cellSize, tail[i].row * this.cellSize, this.cellSize, this.cellSize )
    }
  },
  renderMarker: function( marker ) {
    this.context.fillStyle = this.markerColor;
    this.context.fillRect( marker.column * this.cellSize, marker.row * this.cellSize, this.cellSize, this.cellSize )
  },
  renderGameOver: function( tail ) {
    this.context.fillStyle = this.gameOverColor;
    for ( i=0; i < tail.length; i++ ) {
      this.context.fillRect( tail[i].column * this.cellSize, tail[i].row * this.cellSize, this.cellSize, this.cellSize )
    }
  }
}
