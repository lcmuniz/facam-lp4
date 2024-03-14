import "./styles.css";

export default function Perfil({ nome, imagem, habilidades }) {
  return (
    <>
      <h2>{nome}</h2>
      <img className="avatar" src={imagem} />
      <ul>
        {habilidades.map((h) => (
          <li>{h}</li>
        ))}
      </ul>
    </>
  );
}
