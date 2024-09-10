// src/App.js
import React from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import News from './components/News';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

function App() {
  const links = [
    { href: '#home', text: 'Home' },
    { href: '#news', text: 'Notícias' },
    { href: '#contact', text: 'Contato' },
    { href: '#about', text: 'Sobre' }
  ];

  const noticias = ['Notícia 1...', 'Notícia 2...'];
  const artigos = ['Artigo 1', 'Artigo 2', 'Artigo 3'];

  return (
    <div>
      <Header />
      <Menu links={links} />
      <News noticias={noticias} />
      <Sidebar artigos={artigos} />
      <Footer />
    </div>
  );
}

export default App;
