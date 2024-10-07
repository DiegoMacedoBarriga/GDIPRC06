import React from 'react';
import { Outlet } from 'react-router-dom';
import GameList from '../componentes/GameList';

function Games() {
  return (
    <div className="games-page">
      <h1>Nuestros Videojuegos</h1>
      <GameList />
      {/* Aquí se renderizan las rutas anidadas (detalles del juego) */}
      <Outlet />
    </div>
  );
}

export default Games;
