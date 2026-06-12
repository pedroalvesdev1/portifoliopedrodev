function LinksContatos({ hrefContato, caminhoImagem, nomeContato }) {
  return (
    <a 
      href={hrefContato} 
      target="_blank" 
      rel="noopener noreferrer" 
      aria-label={`Abrir link para ${nomeContato}`}
    >
      <img src={caminhoImagem} alt={`Ícone do ${nomeContato}`} />
      <p>{nomeContato}</p>
    </a>
  );
}

export default LinksContatos;