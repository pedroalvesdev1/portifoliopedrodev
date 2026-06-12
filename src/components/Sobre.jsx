import fotoPerfil from '../assets/img/fotoPerfil.png';

function Sobre() {
  return (
    <section id="sobre" className="secao-container">
      <img src={fotoPerfil} alt="Foto de Pedro Alves" />
      <p>
        <span>Olá, me chamo Pedro,</span>
        Sou desenvolvedor Backend com formação em Análise e Desenvolvimento de
        Sistemas, focado na construção de aplicações robustas e bem
        estruturadas utilizando C#, .NET e PHP.<br /> <br /> 
        Possuo experiência na implementação de sistemas com padrão MVC, 
        modelagem de banco de dados relacionais e aplicação de boas práticas 
        de versionamento com Git. Busco atuar no desenvolvimento de soluções 
        escaláveis, organizadas e orientadas a regras de negócio.
      </p>
    </section>
  );
}

export default Sobre;