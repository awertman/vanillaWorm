window.onload = function() {
  var gridLength = 20
  var wormStart = [ gridLength / 2 , gridLength - 1 ]
  var selectors = {canvas: '#wormGrid'}
  view = new View( selectors )
  model = new GamePlayModel( wormStart , gridLength )
  controller = new GamePlayController( model , view )
  controller.initializeGame()
  new EventBinder( controller ).bindKeyListener()
}

EventBinder = function( controller ) {
  this.controller = controller
}

EventBinder.prototype = {
  bindKeyListener: function() {
    document.onkeydown = this.controller.trackKeyPress.bind( this.controller )
  }
}