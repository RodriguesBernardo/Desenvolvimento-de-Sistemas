// Componente News
function News({ title, noticias }) {
  return (
    <section>
      <h2>{title}</h2>
      {noticias.map((noticia, index) => (
        <p key={index}>{noticia}</p>
      ))}
    </section>
  );
}

export default News;
