import React from 'react';
import '../Youtube.css';

const BotonYT = (props) => {
  return (
    <>
        <button id='enviar' className='enviar' onClick={props.link}>{props.boton}</button>
    </>
  );
};

export default BotonYT;
