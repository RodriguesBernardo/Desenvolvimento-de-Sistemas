// src/components/News.js
import React from 'react';

const News = ({ noticias }) => {
  return (
    <section>
      <h2>Últimas Notícias</h2>
      {noticias.map((noticia, index) => (
        <p key={index}>{noticia}</p>
      ))}
    </section>
  );
};

export default News;
