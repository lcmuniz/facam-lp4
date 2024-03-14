import "./App.css";
import { useState } from "react";

import PerfilPage from "./pages/PerfilPage";
import LoginPage from "./pages/LoginPage";
import { usuarios } from "./data";

export default function App() {
  let [logado, setLogado] = useState(false);

  function logar() {
    setLogado(true);
  }

  function sair() {
    setLogado(false);
  }

  return logado ? (
    <PerfilPage usuarios={usuarios} onClick={sair} />
  ) : (
    <LoginPage onClick={logar} />
  );
}
