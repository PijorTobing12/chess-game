//jika ingin via api

const express = require("express");
const Game = require("../chess/game");

const router = express.Router();
const game = new Game();

router.get("/board", (req, res) => {
  res.json(game.board.board);
});

router.post("/move", (req, res) => {
  try {
    const { input } = req.body;
    const result = game.makeMove(input);
    res.json({ message: result });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
