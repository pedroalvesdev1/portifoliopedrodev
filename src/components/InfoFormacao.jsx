function InfoFormacao({ nomeInstituicao, nomeCurso, nomeDataFormacao, nivel, resumo }) {
  return (
    <article>
      <h3 className="tituloArtigo">{nomeInstituicao}</h3>
      <div className="info-cabecalho">
        <h4>{nomeCurso}</h4>
        <span>•</span>
        <h5>{nomeDataFormacao}</h5>
        <span>•</span>
        <h6>{nivel}</h6>
      </div>
      <p>{resumo}</p>
    </article>
  );
}

export default InfoFormacao;