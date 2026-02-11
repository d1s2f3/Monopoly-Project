import React from 'react';
import './gameMenu.css';

export default function GameMenu({ jugadores, onRoll }) {
  return (
    <div className="game-ui-container">
      {/* Panel de Dinero */}
      <div className="stats-panel">
        <h3 style={{ margin: '0 0 10px 0', fontSize: '0.9rem', opacity: 0.8 }}>BANCA</h3>
        {jugadores.map((p, index) => (
          <div key={index} className="player-money">
            <span>{p.nombre}:</span>
            <span className="money-value">${p.dinero}</span>
          </div>
        ))}
      </div>

      {/* Botón de Acción */}
      <div className="action-panel">
        <button className="btn-roll" onClick={onRoll}>
          🎲 LANZAR DADOS
        </button>
      </div>
    </div>
  );
}