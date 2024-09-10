import Header from "./componentes/Header";
import Menu from "./componentes/Menu";
import News from "./componentes/News";
import Sidebar from "./componentes/Sidebar";
import Footer from "./componentes/Footer";

function App() {
  
  const links = [
    { href: "#home", text: "Home" },
    { href: "#news", text: "Notícias" },
    { href: "#contact", text: "Contato" },
    { href: "#about", text: "Sobre" },
  ];

  const noticias = ["Notícia 1...", "Notícia 2..."];

  const artigos = ["Artigo 1", "Artigo 2", "Artigo 3"];

  return (
    <div>
      <Header title="Meu Website" />
      <Menu links={links} />
      <News title="Últimas Notícias" noticias={noticias} />
      <Sidebar title="Artigos Recomendados" artigos={artigos} />
      <Footer text="© 2024 Meu Website. Todos os direitos reservados." />
    </div>
  );
}

export default App;
