import React from 'react';
import { Link } from 'react-router-dom';

function NoPage() {
  return (
    <div className="not-found">
      <h1>404 - Página no encontrada</h1>
      <Link to="/" className="btn">Volver al Inicio</Link>
    </div>
  );
}

export default NoPage;
