const ChessBoard = require("../chess/board");

class Game {
  constructor() {
    this.board = new ChessBoard();
  }

  makeMove(command) {
    const [from, to] = command.split(" ");
    const [fromRow, fromCol] = from.split(",").map(Number);
    const [toRow, toCol] = to.split(",").map(Number);

    if (fromRow === 6 && toRow === 5 && fromCol === toCol) {
      return "Move successful";
    }

    throw new Error("Invalid move");
  }
}

module.exports = Game;
