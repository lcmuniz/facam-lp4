const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json([
    {
      id: 1,
      nome: "Ação",
    },
    {
      id: 2,
      nome: "Drama",
    },
    {
      id: 3,
      nome: "Comédia",
    },
  ]);
});

module.exports = router;
