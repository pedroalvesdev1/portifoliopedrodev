import InfoProjetos from "./InfoProjetos";

function Projetos() {
  return (
    <section id="projetos" className="secao-container">
      <h2 className="tituloSecao">Projetos</h2>
      <InfoProjetos
        titulo="📁 Sistema de gerenciamento de tarefas (Java CLI)"
        descricao="O objetivo do projeto é permitir que o usuário acompanhe o que precisa fazer, o que já foi feito e o que está em andamento, utilizando comandos executados diretamente no terminal. Este projeto foi desenvolvido para praticar conceitos fundamentais de programação, como manipulação de argumentos, estrutura condicional e operações CRUD."
        hrefProjeto="https://github.com/pedroalvesdev1/listaDeTarefasCLI"
      />

      <InfoProjetos
        titulo="💰 Exercícios de lógica de programação com regras de negócio (C#)"
        descricao="Este repositório contém a resolução prática de exercícios de lógica de programação baseada no material didático do autor José Augusto NG Manzano. O objetivo principal deste projeto é treinar e solidificar conhecimentos em Lógica de Programação, Sintaxe C# e Estruturas de Controle."
        hrefProjeto="https://github.com/pedroalvesdev1/ExerciciosDeLogicaDeProgramacaoManzannoCSharp"
      />

      <InfoProjetos 
        titulo="🎮 Jogo de Pedra, Papel e Tesoura"
        descricao="Hora da diversão! Este código cria um 'Árbitro Virtual' para o clássico jogo de Pedra, Papel e Tesoura. Usando o poder do JavaScript, você pode desafiar o próprio computador para um duelo mágico onde a sorte e a estratégia ditam o grande vencedor."
        hrefProjeto="https://github.com/pedroalvesdev1/jogoPedraPapelTesoura"
      />

      <InfoProjetos 
        titulo="Ludus Auratus 🎮🐕"
        descricao="A Ludus nasce com o propósito de fortalecer a indústria brasileira de jogos, valorizando a criatividade, diversidade cultural e a inovação tecnológica. Nosso símbolo é o cachorro caramelo ciborgue, um ícone do Brasil que remete à resiliência e à modernidade, representado em Pixel Art, a linguagem visual dos jogos independentes."
        hrefProjeto="https://github.com/ludus-auratus"
      />
    </section>
  );
}

export default Projetos;