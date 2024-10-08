import React from "react";
import axios from "axios";
function MyAll() {
  // executa requisições simultâneas
  axios
    .all([
      axios.get("https://reqres.in/api/users/1"),
      axios.get("https://reqres.in/api/users/2"),
    ])
    .then(
      axios.spread((user1, user2) => {
        //isso será executado apenas quando
        //todas as requisições forem concluídas
        console.log(user1.data.data);
        console.log(user2.data.data);
      })
    );
  return <p>Teste de ALL com API Axios</p>;
}
export default MyAll;
