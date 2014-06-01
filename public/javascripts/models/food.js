Food = function( gridLength ) {
  this.randomColumn = Math.floor( Math.random() * gridLength )
  this.randomRow = Math.floor( Math.random() * gridLength )
  this.position =  { column: this.randomColumn, row: this.randomRow }
}
