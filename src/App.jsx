import "./App.css";
import { useState } from "react";

const App = () => {
  const reyes = [
    { nombre: "Enrique V", apellido: "Claudio", edad: 72 },
    { nombre: "Lisandro", apellido: "Garnacho", edad: 32 },
    { nombre: "Anfield", apellido: "Rose", edad: 44 },
    { nombre: "Dinhe", apellido: "Harrison", edad: 22 },
    { nombre: "Barkly", apellido: "Julian", edad: 17 },
  ];
  const [menores, setMenores] = useState([]);

  const mostrar = () => {
    const resultado = reyes
      .filter((valor) => valor.edad < 30)
      .map((valor) => (
        <div
          key={valor.nombre}
          style={{ textAlign: "center", background: "blue", color: "yellow" }}
        >
          <h2>{valor.nombre}</h2>
          <h2>{valor.apellido}</h2>
          <h4>{valor.edad}</h4>
        </div>
      ));
    setMenores(resultado);
  };

  const mostrarM = () => {
    const resultado = reyes
      .filter((valor) => valor.edad > 30)
      .map((valor) => (
        <div
          key={valor.nombre}
          style={{ textAlign: "center", background: "yellow", color: "blue" }}
        >
          <h2>{valor.nombre}</h2>
          <h3>{valor.apellido}</h3>
          <h4>{valor.edad}</h4>
        </div>
      ));
    setMenores(resultado);
  };

  return (
    <div>
      <button onClick={mostrar}>Menor de 30</button>
      <button onClick={mostrarM}>Mayor de 30</button>
      <div>{menores}</div>
    </div>
  );
};

export default App;
