import { useState } from 'react';
import logo from '../assets/img/logo.png';
import LinkNav from './LinkNav.jsx';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header>
      <img src={logo} alt="Logotipo Pedro Alves" id="logo" />
      
      <button 
        className="hamburger" 
        onClick={toggleMenu}
        aria-expanded={isMenuOpen}
        aria-controls="menu-principal"
        aria-label={isMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
      >
        <span className="barras"></span>
      </button>

      <nav id="menu-principal" className={isMenuOpen ? "nav-aberto" : ""}>
        <ul>
          <LinkNav href="#projetos" secao="Projetos" onClick={closeMenu} />
          <LinkNav href="#formacao" secao="Formação" onClick={closeMenu} />
          <LinkNav href="#experiencia" secao="Experiência" onClick={closeMenu} />
          <LinkNav href="#contatos" secao="Contatos" onClick={closeMenu} />
        </ul>
      </nav>
    </header>
  );
}

export default Header;