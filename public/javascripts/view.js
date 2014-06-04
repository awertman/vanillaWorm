View = function( selectors ) {
  this.canvasElement = selectors.canvas
  this.wormColor = selectors.wormColor
  this.gameOverColor = selectors.gameOverColor
  this.foodColor = selectors.foodColor
  this.gridLength = selectors.gridLength
  this.gridDimension =  Math.floor( Math.min( window.innerWidth, window.innerHeight ) * 0.85 / 100 ) * 100
  this.cellSize = this.gridDimension / this.gridLength
}

View.prototype = {
  renderGrid: function() {
    document.querySelector( this.canvasElement ).style.visibility="visible"
    document.querySelector('button').style.visibility="hidden"

    this.context = document.querySelector( this.canvasElement ).getContext("2d")
    this.context.canvas.width = this.gridDimension
    this.context.canvas.height = this.gridDimension
  },
  renderWormAndFood: function( tail, food ) {
    this.context.clearRect( 0, 0, this.gridDimension, this.gridDimension )
    this.renderfood( food )
    this.renderWorm( tail )
  },
  renderWorm: function( tail ) {
    this.context.fillStyle = this.wormColor;
    for ( i=0; i < tail.length; i++) {
      this.context.fillRect( tail[i].column * this.cellSize, tail[i].row * this.cellSize, this.cellSize, this.cellSize )
    }
  },
  renderfood: function( food ) {
    this.context.fillStyle = this.foodColor;
    this.context.fillRect( food.column * this.cellSize, food.row * this.cellSize, this.cellSize, this.cellSize )
  },
  renderGameOver: function( tail ) {
    this.context.fillStyle = this.gameOverColor;
    for ( i=0; i < tail.length; i++ ) {
      this.context.fillRect( tail[i].column * this.cellSize, tail[i].row * this.cellSize, this.cellSize, this.cellSize )
    }
    document.querySelector('button').style.visibility="visible"
  }
}
