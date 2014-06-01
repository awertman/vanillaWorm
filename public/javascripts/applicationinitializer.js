document.addEventListener("DOMContentLoaded", function() {

  document.querySelector('button').addEventListener('click', function() {
    var gridLength = 20
    var wormStartColumn = gridLength / 2
    var wormStartRow = gridLength - 1
    var selectors = { canvas: '#wormGrid', wormColor: 'lightgreen', gameOverColor: 'red' , markerColor: 'red', gridLength: gridLength}

    var view = new View( selectors )
    var worm = new Worm( wormStartColumn, wormStartRow, gridLength ) /* Yeah, i think break these into an instance of a worm and of a food.... */
    var controller = new ApplicationController( worm, view ) /* Inject the models here... */
    controller.initializeGame()
    new EventBinder( controller ).bindKeyListener() /* if you scrap this...*/
    /* you can do  new GamePlayController( model , view ).initializeGame()  --
     * seems cleaner */
  })
})

/*
 *
 * OK, i like the Binder class.  It's a good intermediary step to getting Phase
 * 2 peeps to think about how to copose apps of widgets.  But, it really
 * doesn't have much *meaning*....why not just put this on the controller.
 * esp. since it's a game, i'd expect THAT controller to handle the keypresses,
 * etc.
 *
 * Oh, and if you were going to keep it, i'd put it in another file
 */

EventBinder = function( controller ) {
  this.controller = controller
}

EventBinder.prototype = {
  bindKeyListener: function() {
    document.onkeydown = this.controller.trackKeyPress.bind( this.controller )
  }
}


