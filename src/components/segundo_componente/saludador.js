import React, {Component, useEffect, useState} from 'react';

function Saludador (){
     
   const [nombre, setNombre] = useState('');
   const [mensaje, setMensaje] = useState('');
    //useEffect(()=>{setNombre()})
   const handleChange = (event) => {
      setNombre(event.target.value);
    }

    const saludar = () => {
      setMensaje(`¡Hola ${nombre}, gracias por donar los fondos de tu cuenta bancaria a mi causa academica!`);
    };

    

    return (
      <div>
        <h2>Saludo</h2>
        <input
          type="text"
          placeholder="Ingresa tu nombre"
          value={nombre}
          onChange={(e)=> handleChange(e)}
        />
        <button onClick={(nombre)=> saludar(nombre)}>Aceptar</button>
        <p>{mensaje}</p>
        
      </div>
    );

    }
  
  export default Saludador;