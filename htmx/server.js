import express from "express";

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/teste", (req, res) => {
  res.send(`
  <div
      class="w-24 h-24 bg-blue-500 text-white"
      hx-get="/teste"
      hx-trigger="mouseenter"
    >
      Microsoft
    </div>
  `);
});
app.post("/converter", (req, res) => {
  const fahrenheit = parseFloat(req.body.fahrenheit);
  const celsius = (fahrenheit - 32) * (5 / 9);
  res.send(`
      <h1>${fahrenheit} graus Fahrenheit = ${celsius.toFixed(
    2
  )} graus Celsius</h1>
    `);
});

app.get("/usuarios", async (req, res) => {
  const limite = req.query.limite || 10;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users?_limit=${limite}`
  );
  const usuarios = await response.json();
  res.send(`
    <h2>Lista de usuários</h2>
    <ul>
        ${usuarios
          .map((usuario) => `<li>${usuario.name} - ${usuario.email}</li>`)
          .join("")}
    </ul>
  `);
});

app.post("/pesquisar", async (req, res) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const contatos = await response.json();

  const filtro = req.body.filtro;
  if (!filtro) {
    res.send("<tr></tr>");
    return;
  }
  const resultados = contatos.filter(
    (contato) =>
      contato.name.toLowerCase().includes(filtro.toLowerCase()) ||
      contato.email.toLowerCase().includes(filtro.toLowerCase())
  );

  const html = resultados
    .map(
      (contato) => `
    <tr>
        <td>${contato.name}</td>
        <td>${contato.email}</td>
    </tr>
  `
    )
    .join("");

  res.send(html);
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
