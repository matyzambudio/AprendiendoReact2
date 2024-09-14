import { useState } from "react";

const AprendiendoFind = () => {
  const reyes = [
    { nombre: "Enrique V", apellido: "Claudio", edad: 72 },
    { nombre: "Lisandro", apellido: "Garnacho", edad: 32 },
    { nombre: "Anfield", apellido: "Rose", edad: 44 },
    { nombre: "Dinhe", apellido: "Harrison", edad: 22 },
    { nombre: "Barkly", apellido: "Julian", edad: 17 },
  ];

  const [resultado,setResultado] =useState(null);

  const mostrarFind = () => {
    const encontrado = reyes.find(valor => valor.edad > 30);
     setResultado(encontrado);
  };

  return (
    <div>
      <button onClick={mostrarFind}> Menor de 30 </button>
      {resultado &&(
        <div>"El resultado es {resultado.nombre}
        apellido {resultado.apellido} y su edad {resultado.edad}
        </div>
      )}
    </div>
  );
};

export default AprendiendoFind;
