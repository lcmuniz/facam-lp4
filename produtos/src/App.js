import "./App.css";
import { useState } from "react";

const produtos = [
  { nome: "Escova", quantidade: 5 },
  { nome: "Pente", quantidade: 3 },
  { nome: "Creme Dental", quantidade: 1 },
  { nome: "Shampoo", quantidade: 2 },
  { nome: "Condicionador", quantidade: 1 },
  { nome: "Sabonete", quantidade: 3 },
  { nome: "Toalha", quantidade: 2 },
  { nome: "Copo", quantidade: 5 },
];

export default function App() {
  const [pesquisa, setPesquisa] = useState("");
  const [pesquisados, setPesquisados] = useState(produtos);

  function buscar(pesquisa) {
    const ps = produtos.filter((p) =>
      p.nome.toLowerCase().includes(pesquisa.toLowerCase())
    );
    setPesquisa(pesquisa);
    setPesquisados(ps);
  }

  return (
    <div className="lista">
      <input
        value={pesquisa}
        onChange={(e) => {
          buscar(e.target.value);
        }}
      />
      <Produtos produtos={pesquisados} />
    </div>
  );
}

function Produtos({ produtos }) {
  return (
    <>
      <table>
        <tr>
          <th align="left">Produto</th>
          <th>Quantidade</th>
        </tr>
        {produtos.map((p) => (
          <Produto produto={p} />
        ))}
      </table>
    </>
  );
}

function Produto({ produto }) {
  return (
    <tr>
      <td>{produto.nome}</td>
      <td>{produto.quantidade}</td>
    </tr>
  );
}
