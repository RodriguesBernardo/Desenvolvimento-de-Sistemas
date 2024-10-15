import React from 'react';

function App() {
  const userType = "Editor"; // Altere para "Visitante" ou "Editor" para testar diferentes casos
  return (
    <div>
      {userType === "Admin" && (
        <div>
          <h1>Bem-vindo, Admin</h1>
          <button>Gerenciar Usuários</button>
        </div>
      )}
      {userType === "Visitante" && (
        <div>
          <h1>Bem-vindo, Visitante</h1>
          <button>Fazer Login</button>
        </div>
      )}
      {userType === "Editor" && (
        <div>
          <h1>Bem-vindo, Editor</h1>
          <button>Gerenciar Artigos</button>
        </div>
      )}
    </div>
  );
}

export default App;
