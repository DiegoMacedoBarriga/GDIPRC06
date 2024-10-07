import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <h1>Bienvenido a la Tienda de Videojuegos PiviGames</h1>
      <p>Encuentra los mejores juegos para todas las plataformas.</p>
      <Link to="/games" className="btn">Ver Videojuegos</Link>
    </div>
  );
}

export default Home;
