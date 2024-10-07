import React from 'react';
import { useParams } from 'react-router-dom';

const gameDetails = {
  1: { name: 'The Legend of Zelda: Breath of the Wild', description: 'Un juego de mundo abierto para la consola Nintendo Switch.', source:"https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/18FAtI68uuYZ25GPj94Cfm/9dbd86409dab1ec1aee027eef12ec0c6/ACD_EMEA_KEYART_WIDE_UCS_RGB_NoLogo.jpg"},
  2: { name: 'Super Mario Odyssey', description: 'Una nueva aventura en 3D con el icónico Mario.', source: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000001130/c42553b4fd0312c31e70ec7468c6c9bccd739f340152925b9600631f2d29f8b5" },
  3: { name: 'Animal Crossing: New Horizons', description: 'Crea tu propia isla en este relajante simulador de vida.', source:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRMfQUAHWGIu-rAIrpo3bJuvu9_Jjn86prYg&s"}
};

function GameDetalle() {
  const { id } = useParams();
  const game = gameDetails[id];

  if (!game) {
    return <h2>Videojuego no encontrado</h2>;
  }

  return (
    <div className="game-detail">
      <h2>{game.name}</h2>
      <p>{game.description}</p>
      <img src={game.source} alt={game.name} ></img>
    </div>
  );
}

export default GameDetalle;
