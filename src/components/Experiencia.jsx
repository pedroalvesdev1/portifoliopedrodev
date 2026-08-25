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
      <InfoExperiencia
        nomeFuncao="Jovem aprendiz - Governança de TI"
        nomeEmpresa="Tokio Marine Seguradora"
        tempoEmprego="Jul/2026 - Emprego atual " 
        resumo="Atuo no suporte de TI, realizando atendimento e acompanhamento de chamados, formatação e configuração de notebooks, configuração e preparação de aparelhos corporativos, além da disponibilização e preparação de equipamentos para novos colaboradores."
      />
    </section>
  );
}

export default Experiencia;