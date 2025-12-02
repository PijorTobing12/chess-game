const Game = require("../src/chess/game");

describe("Chess Game Tests", () => {
  let game;

  beforeEach(() => {
    game = new Game();
  });

  test("Board should have 8 rows", () => {
    expect(game.board.board.length).toBe(8);
  });

  test("Valid pawn move", () => {
    const result = game.makeMove("6,0 5,0");
    expect(result).toBe("Move successful");
  });

  test("Invalid move should throw error", () => {
    expect(() => game.makeMove("6,0 4,0")).toThrow();
  });
});
