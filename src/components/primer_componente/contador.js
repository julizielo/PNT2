import React, { useState } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);

  const aumentarContador = () => {
    setContador(contador + 1);
  };

  const disminuirContador = () => {
    setContador(contador - 1);
  };

  return (
    <div>
      <h2>Contador</h2>
      <p>{contador}</p>
      <button onClick={disminuirContador}>-</button>
      <button onClick={aumentarContador}>+</button>
    </div>
  );
}

export default Contador;