import { useEffect, useReducer } from "react";
import axios from "axios";

// Reducer para manipulação do estado
const usersReducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: true, error: null };
    case "SUCCESS":
      return { ...state, loading: false, data: action.payload, error: null };
    case "ERROR":
      return { ...state, loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

// Hook para buscar usuários da API
export function useFindUsersReducer(search) {
  const [state, dispatch] = useReducer(usersReducer, {
    loading: true,
    data: [],
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "LOADING" });
      try {
        // Se o search for um ID, busca o usuário específico
        const apiUrl = search
          ? `https://jsonplaceholder.typicode.com/users/${search}` // Busca um usuário pelo ID
          : "https://jsonplaceholder.typicode.com/users"; // Busca todos os usuários

        const response = await axios.get(apiUrl);
        dispatch({ type: "SUCCESS", payload: response.data });
      } catch (error) {
        dispatch({ type: "ERROR", payload: "Erro ao carregar dados!" });
      }
    };

    fetchData();
  }, [search]);

  return { state };
}
