import LinksContatos from "./LinksContatos";

import githubImg from "../assets/img/github.png";
import gmailImg from "../assets/img/gmail.png";
import linkedinImg from "../assets/img/linkedin.png";
import whatsappImg from "../assets/img/whatsapp.png";

function Contatos() {
  return (
    <footer id="contatos" className="secao-container">
      <h2 className="tituloSecao">Contatos</h2>
      <div className="contatos-grid">
        <LinksContatos
          hrefContato="https://github.com/pedroalvesdev1"
          caminhoImagem={githubImg}
          nomeContato="GitHub"
        />
        <LinksContatos
          hrefContato="mailto:pedroalves5846@gmail.com?subject=Vi%20seu%20portifolio%20gostaria%20de%20conversar%20com%20voc%C3%AA"
          caminhoImagem={gmailImg}
          nomeContato="E-mail"
        />
        <LinksContatos
          hrefContato="https://www.linkedin.com/in/pedroalvesdasilvadev/"
          caminhoImagem={linkedinImg}
          nomeContato="Linkedin"
        />
        <LinksContatos
          hrefContato="https://api.whatsapp.com/send/?phone=5511920044838&text=Ol%C3%A1%2C+vim+pelo+seu+portifolio&type=phone_number&app_absent=0"
          caminhoImagem={whatsappImg}
          nomeContato="WhatsApp"
        />
      </div>
    </footer>
  );
}

export default Contatos;