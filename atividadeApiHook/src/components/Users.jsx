import React, { useState } from "react";
import { useFindUsersReducer } from "../hooks/useFindUsers";

function Users() {
  // Estado para a pesquisa (ID do usuário)
  const [search, setSearch] = useState("");

  // Hook para buscar os dados da API
  const { state } = useFindUsersReducer(search);

  // Desestruturando loading, data e error
  const { data, loading, error } = state;

  return (
    <div>
      {/* Exibe a mensagem de carregando */}
      {loading && <p>Carregando...</p>}

      {/* Exibe os usuários se houver dados */}
      {!loading && data && Array.isArray(data) && data.length > 0 && (
        <ul>
          {data.map((item) => (
            // Passa o ID do usuário clicado para setSearch
            <li key={item.id} onClick={() => setSearch(item.id)}>
              {item.username}: {item.name}
            </li>
          ))}
        </ul>
      )}

      {/* Exibe um único usuário se a pesquisa for feita por ID */}
      {!loading && data && !Array.isArray(data) && (
        <div>
          <h2>{data.name}</h2>
          <p>Username: {data.username}</p>
          <p>Email: {data.email}</p>
          <p>Phone: {data.phone}</p>
        </div>
      )}

      {/* Exibe mensagem de erro se houver */}
      {error && <p>{error}</p>}

      {/* Exibe mensagem se não houver dados */}
      {!loading && data && data.length === 0 && (
        <p>Nenhum usuário encontrado.</p>
      )}
    </div>
  );
}

export default Users;
