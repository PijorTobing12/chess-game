const ChessGame = require("../src/chess/game");

const game = new ChessGame();

// Print board awal
game.board.printBoard();

// Contoh gerakan
console.log(game.makeMove("6,4 5,4"));
game.board.printBoard();

console.log(game.makeMove("1,1 2,1"));
game.board.printBoard();
