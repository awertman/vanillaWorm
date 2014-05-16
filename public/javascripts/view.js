View = function(selectors) {
  this.canvasElement = selectors["canvas"]
  this.gridDimension =  Math.floor( Math.min( window.innerWidth , window.innerHeight ) * 0.9 / 100 ) * 100
}

View.prototype = {
  renderGrid: function() {
    this.context = document.querySelector (this.canvasElement ).getContext("2d")
    this.context.canvas.width = this.gridDimension
    this.context.canvas.height = this.gridDimension
    this.cellSize = this.gridDimension / length
  }
}