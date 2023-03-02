import { useState } from "react";

const Estado = ({ countProps, funcion }) => {
  const [contador, setContador] = useState(0);

  const handleChangeContador = () => {
    setContador(contador + 1);
  };

  return (
    <div>
      <h1 style={{ color: "green", fontSize: "1.2rem" }}>
        presionaste {contador} veces y el countProps es: {countProps}
      </h1>
      <button
        onClick={() => {
          handleChangeContador();
        }}
      >
        presioname
      </button>
      <button onClick={funcion}>yo llamo a la funcion</button>
    </div>
  );
};

export default Estado;
