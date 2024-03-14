import Perfil from "../components/Perfil";

export default function PerfilPage({ usuarios, onClick }) {
  return (
    <>
      <h1>Perfil</h1>

      {usuarios.map((u) => (
        <Perfil nome={u.nome} imagem={u.imagem} habilidades={u.habilidades} />
      ))}

      <button onClick={onClick}>Sair</button>
    </>
  );
}
