import "./App.css";
import Header from "./components/Header.jsx";
import Sobre from "./components/Sobre.jsx";
import Projetos from "./components/Projetos.jsx";
import Formacao from "./components/Formacao.jsx";
import Experiencia from "./components/Experiencia.jsx";
import Contatos from "./components/Contatos.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <Sobre />
        <Projetos />
        <Formacao />
        <Experiencia />
      </main>
      <Contatos />
    </>
  );
}

export default App;