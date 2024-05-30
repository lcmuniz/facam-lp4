const express = require("express");
let filmes = require("../src/database");

const router = express.Router();

router.get("/", (req, res) => {
  res.json(filmes);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const filme = filmes.find((filme) => filme.id === Number(id));
  if (filme) {
    res.json(filme);
  } else {
    res.status(404).json({ erro: "Filme não encontrado" });
  }
});

router.post("/", (req, res) => {
  const filme = req.body;
  filmes.push(filme);
  res.json({ mensagem: "Filme adicionado" });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  filmes = filmes.filter((filme) => filme.id !== Number(id));
  res.json({ mensagem: "Filme removido" });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const body = req.body;
  filmes = filmes.map((filme) =>
    filme.id !== Number(id) ? filme : { ...filme, ...body }
  );
  res.json(filmes);
});

module.exports = router;
