function InfoProjetos({ titulo, descricao, hrefProjeto }) {
  return (
    <article>
      <h3 className="tituloArtigo">{titulo}</h3>
      <p>{descricao}</p>
      <div className="link-projeto">
        <a href={hrefProjeto} target="_blank" rel="noopener noreferrer">
          Link do repositório
        </a>
      </div>
    </article>
  );
}

export default InfoProjetos;