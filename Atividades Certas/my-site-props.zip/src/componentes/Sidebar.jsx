// Componente Sidebar
function Sidebar({ title, artigos }) {
  return (
    <aside>
      <h3>{title}</h3>
      <ul>
        {artigos.map((artigo, index) => (
          <li key={index}>{artigo}</li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
