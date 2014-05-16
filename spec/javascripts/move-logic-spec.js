describe ( "MoveLogic", function() {
  beforeEach(function() {
    var gridLength = 20 // number of "squares"
    var wormStart = [ gridLength / 2 , gridLength - 1 ] // starts at bottom middle of boardz
    model = new GamePlayModel(wormStart, gridLength)
    moveLogic = new Move( model )
    left = 37
    up = 38
    right = 39
    down = 40
    wormHead = [10,19]
  })


  it("should start the game movement as up", function() {
    expect(moveLogic.arrowKey).toEqual( up )
  })
  it("should start the game head at wormHead origin", function() {
    expect(model.wormHead.toString()).toEqual("10,19")
  })
  it("should move the head up (index 1 is one less) on first move", function() {
    moveLogic.wormHead()
    expect(model.wormHead.toString()).toEqual("10,18")
  })
  it("should move the head down (index 1 is one greater) on down keystroke", function() {
    moveLogic.arrowKey = down
    moveLogic.wormHead()
    expect(model.wormHead.toString()).toEqual("10,20")
  })
  it("should move the head left (index 0 is one less) on left keystroke", function() {
    moveLogic.arrowKey = left
    moveLogic.wormHead()
    expect(model.wormHead.toString()).toEqual("9,19")
  })
  it("should move the head right (index 0 is one greater) on right keystroke", function() {
    moveLogic.arrowKey = right
    moveLogic.wormHead()
    expect(model.wormHead.toString()).toEqual("11,19")
  })

})

