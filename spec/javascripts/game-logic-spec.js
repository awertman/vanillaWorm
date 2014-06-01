describe ( "GameState", function() {
  beforeEach(function() {
    length = 20;
    gameState = new GameState(length)
  })

  it("should start the game status as true", function() {
    expect(gameState.playerAlive).toEqual(true)
  })
  it("should return false when head index 0 is less than 0", function() {
    gameState._checkBorder( {column:-1, row: 0} )
    expect(gameState.playerAlive).toEqual(false)
  })
  it("should return false when head index 0 is greater than length", function() {
    gameState._checkBorder( {column:21, row: 0} )
    expect(gameState.playerAlive).toEqual(false)
  })
  it("should return false when head index 1 is less than 0", function() {
    gameState._checkBorder( {column: 0, row: -1} )
    expect(gameState.playerAlive).toEqual(false)
  })
  it("should return false when head index 1 is greater than length", function() {
    gameState._checkBorder( {column:0, row: 21} )
    expect(gameState.playerAlive).toEqual(false)
  })
  it("should return true when wormHead is equal to food", function() {
    var head = {column:10, row: 10}
    var food = {column:10, row: 10}
    gameState._checkFoodMatch( head , food)
    expect(gameState.foodMatch).toEqual(true)
  })
  it("should return false when wormHead is not equal to food", function() {
    var head = {column:9, row: 10}
    var food = {column:10, row: 10}
    gameState._checkFoodMatch( head , food)
    expect(gameState.foodMatch).toEqual(false)
  })
})

