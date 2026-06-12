function InfoExperiencia({ nomeFuncao, nomeEmpresa, tempoEmprego, resumo }) {
  return (
    <article>
      <h3 className="tituloArtigo">{nomeFuncao}</h3>
      <div className="info-cabecalho">
        <h4>{nomeEmpresa}</h4>
        <span>•</span>
        <h5>{tempoEmprego}</h5>
      </div>
      <p>{resumo}</p>
    </article>
  );
}

export default InfoExperiencia;