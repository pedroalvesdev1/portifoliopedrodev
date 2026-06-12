import InfoExperiencia from "./InfoExperiencia";

function Experiencia() {
  return (
    <section id="experiencia" className="secao-container">
      <h2 className="tituloSecao">Experiência</h2>
      <InfoExperiencia
        nomeFuncao="Assistente geral"
        nomeEmpresa="JL Shop"
        tempoEmprego="Mar/2021 - Ago/2021 · 6 meses" 
        resumo="Atuei no cadastro e atualização de produtos no site, atendimento ao cliente via chat, separação e embalagem de pedidos para envio, além do controle e atualização do estoque, contribuindo para a organização e eficiência das operações da empresa."
      />
    </section>
  );
}

export default Experiencia;