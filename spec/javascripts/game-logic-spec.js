describe ( "GameLogic", function() {
  beforeEach(function() {
    length = 20;
    gameLogic = new GameLogic()
  })

  afterEach(function() {

  })

  it("should start the game status as true", function() {
    expect(gameLogic.gameStatus).toEqual(true)
  })
  it("should return false when head index 0 is less than 0", function() {
    gameLogic._checkBorder( [-1,0] , length )
    expect(gameLogic.gameStatus).toEqual(false)
  })
  it("should return false when head index 0 is greater than length", function() {
    gameLogic._checkBorder( [21,0] , length )
    expect(gameLogic.gameStatus).toEqual(false)
  })
  it("should return false when head index 1 is less than 0", function() {
    gameLogic._checkBorder( [0,-1] , length )
    expect(gameLogic.gameStatus).toEqual(false)
  })
  it("should return false when head index 1 is greater than length", function() {
    gameLogic._checkBorder( [0,21] , length )
    expect(gameLogic.gameStatus).toEqual(false)
  })
  it("should return true when snakeHead is equal to marker", function() {
    var head = [5,5]
    var marker = [5,5]
    expect(gameLogic.checkMarkerAndWormMatch( head , marker)).toEqual(true)
  })
  it("should return false when snakeHead is not equal to marker", function() {
    var head = [5,6]
    var marker = [5,5]
    expect(gameLogic.checkMarkerAndWormMatch( head , marker)).toEqual(false)
  })
})

