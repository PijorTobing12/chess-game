class ChessBoard {
  constructor() {
    this.board = [
      ["r","n","b","q","k","b","n","r"],
      ["p","p","p","p","p","p","p","p"],
      [" "," "," "," "," "," "," "," "],
      [" "," "," "," "," "," "," "," "],
      [" "," "," "," "," "," "," "," "],
      [" "," "," "," "," "," "," "," "],
      ["P","P","P","P","P","P","P","P"],
      ["R","N","B","Q","K","B","N","R"]
    ];
  }

  printBoard() {
    console.log("\n  a b c d e f g h");
    this.board.forEach((row, idx) => {
      console.log(8 - idx, row.join(" "));
    });
  }
}

module.exports = ChessBoard;
