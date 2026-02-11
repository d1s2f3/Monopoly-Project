import React from 'react';
import './mainMenu.css';
import GameMaster from '../../gameMaster'

export default function MainMenu({ onStart }) {
  return (
    <div className="overlay-menu">
      {/* Iconos de la parte superior derecha */}
      <div className="top-icons">
        <div className="icon">👤</div>
        <div className="icon">⚙️</div>
      </div>

      {/* Tarjeta lateral izquierda */}
      <div className="side-card">
        <div style={{fontSize: '40px'}}>💰</div>
        <h1>BOMBARDEEN MONOPOLY</h1>
        <div style={{fontSize: '40px'}}>💵</div>
      </div>

      {/* Botón de Empezar */}
      <div className="main-button-container">
        <button className="btn-play" onClick={onStart}>
          EMPEZAR A JUGAR
        </button>
      </div>
    </div>
  );
}