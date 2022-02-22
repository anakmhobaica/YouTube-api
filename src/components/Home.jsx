import React from 'react';
import '../App.css';
import Welcome from './Welcome';
import image from '../logo/pngwing.com(1).png';

const Home = () => {
  return (
    <div className="App">
        <Welcome/>
        <div className='inicio'>
          YOUTUBE API
          <p>
            Puedes consultar información de cualquiera de tus canales favoritos de Youtube a partir de su Id. 
          </p>
        </div>
        <div className='imagen-div'>
          <img src={image} alt='imagen' className='YTlogo'/>
        </div>
        <div className='titulo'><h3>Instrucciones de uso</h3></div>
        <div className='instrucciones'>
          <ol>
            <li>Haz click en el botón "YouTube".</li><br />
            <li>Ingresa el ID del canal a consultar en el campo de "ID del canal".</li><br />
            <li>Consulta la información de tu interés.</li>
          </ol> 
        </div>
    </div>
  );
};

export default Home;

