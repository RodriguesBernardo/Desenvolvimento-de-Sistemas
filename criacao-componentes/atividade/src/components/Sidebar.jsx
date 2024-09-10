import React from 'react';

const Sidebar = ({ artigos }) => {
  return (
    <aside>
      <h3>Artigos Recomendados</h3>
      <ul>
        {artigos.map((artigo, index) => (
          <li key={index}>{artigo}</li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
