import * as THREE from 'three';

export const generarMaterialesDado = () => {
  const puntosPos = {
    1: [[0.5, 0.5]],
    2: [[0.25, 0.25], [0.75, 0.75]],
    3: [[0.25, 0.25], [0.5, 0.5], [0.75, 0.75]],
    4: [[0.25, 0.25], [0.25, 0.75], [0.75, 0.25], [0.75, 0.75]],
    5: [[0.25, 0.25], [0.25, 0.75], [0.5, 0.5], [0.75, 0.25], [0.75, 0.75]],
    6: [[0.25, 0.25], [0.25, 0.5], [0.25, 0.75], [0.75, 0.25], [0.75, 0.5], [0.75, 0.75]],
  };

  return [1, 2, 3, 4, 5, 6].map((num) => {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');

    // Fondo
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, 256, 256);

    // Puntos
    ctx.fillStyle = 'black';
    puntosPos[num].forEach(([x, y]) => {
      ctx.beginPath();
      ctx.arc(x * 256, y * 256, 20, 0, Math.PI * 2);
      ctx.fill();
    });

    const texture = new THREE.CanvasTexture(canvas);
    return new THREE.MeshStandardMaterial({ map: texture });
  });
};

export default { generarMaterialesDado };