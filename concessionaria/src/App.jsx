import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const carros = [
  { marca: "Peugeot", modelo: "208 1.6 griffe", ano: 2019, preco: 75000.0 },
  { marca: "Peugeot", modelo: "3008 1.6 allure", ano: 2020, preco: 162900.0 },
  { marca: "Renault", modelo: "Duster 1.6 ionic", ano: 2021, preco: 112900.0 },
  { marca: "Renault", modelo: "Captur 1.6 intense", ano: 2019, preco: 90990.0 },
  { marca: "Fiat", modelo: "Strada 1.4 freedom", ano: 2020, preco: 81000.0 },
  { marca: "Fiat", modelo: "Toro 2.0 ultra", ano: 2022, preco: 202000.0 },
  { marca: "Fiat", modelo: "Mobi 1.0 trekking", ano: 2021, preco: 64990.0 },
];

const LinhasTabelaCarro = (marca) => {
  //Percorre toda a listagem de carros
  const linhas = carros.map((carro) => {
    //Define uma linha em branco
    const linha = [];
    //Caso o carro seja da marca selecionada ou não tenha um filtro de marca
    if (carro.marca.toUpperCase() === marca.toUpperCase() || marca === "") {
      //Adicionar este carro no retorno
      linha.push(
        <tr>
          <td>{carro.marca}</td>
          <td>{carro.modelo}</td>
          <td>{carro.ano}</td>
          <td>
            {carro.preco.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </td>
        </tr>
      );
    }
    return linha;
  });
  return linhas;
};

const TabelaCarros = (marca) => {
  return (
    <table border="1" style={{ boderCollapse: "collapse" }}>
      <thead>
        <tr>
          <th>Marca</th>
          <th>Modelo</th>
          <th>Ano</th>
          <th>Preço</th>
        </tr>
      </thead>
      <tbody>
        {
          // listagem dos carros
          LinhasTabelaCarro(marca)
        }
      </tbody>
    </table>
  );
};

const PesquisaPorMarca = (marca, setMarca) => (
  <div>
    <label>Digite uma marca: </label>
    <input
      type="text"
      value={marca}
      onChange={(e) => setMarca(e.target.value)}
    />
  </div>
);

function App() {
  const [marca, setMarca] = useState("");
  return (
    <>
      {PesquisaPorMarca(marca, setMarca)}
      <br></br>
      {TabelaCarros(marca)}
    </>
  );
}

export default App