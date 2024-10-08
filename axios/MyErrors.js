import React from "react";
import axios from "axios";
function MyErrors() {
  axios
    .get("https://reqres.in/api/users/22")
    .then((response) => {
      // manipular dados de resposta
      console.log("OK", response);
    })
    .catch((err) => {
      // manipular erros
      console.log("NOK", err);
    });
  return <p>Teste de Erros com API Axios</p>;
}
export default MyErrors;
