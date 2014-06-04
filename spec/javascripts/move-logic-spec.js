describe ( "Move Logic", function() {
  beforeEach(function() {
    var gridLength = 20
    var wormStartColumn = gridLength / 2
    var wormStartRow = gridLength - 1
    worm = new Worm( wormStartColumn, wormStartRow )

    move = new Move( worm )

    left = 37
    up = 38
    right = 39
    down = 40
    wormHead = [10,19]
  })


  it("should start the game movement as up", function() {
    expect(move.arrowKey).toEqual( up )
  })
  it("should start the game head at wormHead origin", function() {
    expect(worm.head.row).toEqual(19)
    expect(worm.head.column).toEqual(10)
  })
  it("should move the head up (index 1 is one less) on first move", function() {
    move.wormHead()
    expect(worm.head.row).toEqual(18)
    expect(worm.head.column).toEqual(10)
  })
  it("should move the head down (index 1 is one greater) on down keystroke", function() {
    move.arrowKey = down
    move.wormHead()
    expect(worm.head.row).toEqual(20)
    expect(worm.head.column).toEqual(10)
  })
  it("should move the head left (index 0 is one less) on left keystroke", function() {
    move.arrowKey = left
    move.wormHead()
    expect(worm.head.row).toEqual(19)
    expect(worm.head.column).toEqual(9)
  })
  it("should move the head right (index 0 is one greater) on right keystroke", function() {
    move.arrowKey = right
    move.wormHead()
    expect(worm.head.row).toEqual(19)
    expect(worm.head.column).toEqual(11)
  })

})

