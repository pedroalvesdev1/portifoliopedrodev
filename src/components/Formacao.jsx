import InfoFormacao from "./InfoFormacao";

function Formacao() {
  return (
    <section id="formacao" className="secao-container">
      <h2 className="tituloSecao">Formação</h2>
      <InfoFormacao
        nomeInstituicao="Universidade Brasil"
        nomeCurso="Análise e Desenvolvimento de Sistemas"
        nomeDataFormacao="12/2025"
        nivel="Tecnólogo"
        resumo="Graduado em Análise e Desenvolvimento de Sistemas, com formação abrangente em programação, banco de dados, redes de computadores, engenharia de software e desenvolvimento web e mobile. Ao longo da graduação, desenvolvi conhecimentos em lógica de programação, algoritmos, estruturas de dados, programação orientada a objetos e desenvolvimento de aplicações para diferentes plataformas.

        Possuo experiência acadêmica em modelagem e administração de bancos de dados, infraestrutura e administração de redes, sistemas operacionais e arquitetura de computadores. Também adquiri conhecimentos em análise e projeto de sistemas, integração e entrega contínua, gestão de projetos de software e inovação tecnológica, compreendendo todo o ciclo de desenvolvimento de soluções de tecnologia.

        Minha formação também contemplou temas como inteligência artificial, comunicação, ética, cidadania, inclusão social e sustentabilidade, contribuindo para uma atuação profissional responsável e alinhada às demandas do mercado."
      />

      <InfoFormacao
        nomeInstituicao="Instituto PROA"
        nomeCurso="Desenvolvedor Web.NET"
        nomeDataFormacao="12/2025"
        nivel="Técnico"
        resumo="Durante minha formação no Instituto PROA em parceria com o Senac Lapa Tito, desenvolvi competências em Desenvolvimento Web Full Stack, programação com C#, banco de dados e criação de aplicações web modernas.

        Adquiri experiência no desenvolvimento de interfaces responsivas, utilizando HTML, CSS, JavaScript e React.js para construir aplicações dinâmicas e focadas na experiência do usuário. Também aprendi a integrar APIs, permitindo a comunicação eficiente entre sistemas e o consumo de dados em aplicações web.

        No desenvolvimento back end, trabalhei com a plataforma .NET, linguagem C# e SQL Server, aplicando conceitos de programação orientada a objetos, modelagem de dados e gerenciamento de bancos de dados para criar soluções completas e escaláveis."
      />
    </section>
  );
}

export default Formacao;