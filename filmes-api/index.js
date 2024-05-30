const express = require("express");
const filmesRoutes = require("./src/routes/filmes");
const generosRoutes = require("./src/routes/generos");

const app = express();
app.use(express.json());

app.use("/filmes", filmesRoutes);
app.use("/generos", generosRoutes);

app.listen(3000, () => {
  console.log("Servidor ouvindo na porta 3000");
});
