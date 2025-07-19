import React, { useRef, useEffect } from 'react';

const IsometricCity = () => {
  const canvasRef = useRef(null);
  const dpr = Math.min(2, window.devicePixelRatio);
  const count = 10;

  const palette = [
    [74, 31.7, 75.9],
    [67, 50, 85.9],
    [52, 93.8, 93.7],
    [43, 81.8, 89.2],
    [30, 53, 64.1],
  ];

  const tileWidth = 32 * dpr;
  const tileHeight = 24 * dpr;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = '100vw';
      canvas.style.height = '100vh';
      canvas.style.imageRendering = 'pixelated';
    };

    resize();
    window.addEventListener('resize', resize);

    const toIsometric = (x, y, z) => {
      const screenX = (x - y) * (tileWidth / 2);
      const screenY = (x + y) * (tileHeight / 2) - (z) * tileHeight;
      return [
        Math.floor(screenX + canvas.width / 2),
        Math.floor(screenY + (tileHeight * count) * 2),
      ];
    };

    const drawLeftSide = (x, y, w, height) => {
      const padding = (1 - w) / 2;
      ctx.beginPath();
      ctx.moveTo(...toIsometric(x + padding, y - padding, height - 1));
      ctx.lineTo(...toIsometric(x + padding, y - padding, height));
      ctx.lineTo(...toIsometric(x + 1 - padding, y - padding, height));
      ctx.lineTo(...toIsometric(x + 1 - padding, y - padding, height - 1));
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    };

    const drawRightSide = (x, y, w, height) => {
      const padding = (1 - w) / 2;
      ctx.beginPath();
      ctx.moveTo(...toIsometric(x + 1 - padding, y - padding, height - 1));
      ctx.lineTo(...toIsometric(x + 1 - padding, y - padding, height));
      ctx.lineTo(...toIsometric(x + 1 - padding, y - 1 + padding, height));
      ctx.lineTo(...toIsometric(x + 1 - padding, y - 1 + padding, height - 1));
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    };

    const drawRoof = (x, y, w, height) => {
      const padding = (1 - w) / 2;
      ctx.beginPath();
      ctx.moveTo(...toIsometric(x + padding, y - 1 + padding, height));
      ctx.lineTo(...toIsometric(x + padding, y - padding, height));
      ctx.lineTo(...toIsometric(x + 1 - padding, y - padding, height));
      ctx.lineTo(...toIsometric(x + 1 - padding, y - 1 + padding, height));
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    };

    const drawBox = (x, y, w, height, typeIndex) => {
      const [h, s, l] = palette[typeIndex];
      ctx.fillStyle = `hsl(${h}deg ${s}% ${l * 0.75}%)`;
      drawLeftSide(x, y, w, height);
      ctx.fillStyle = `hsl(${h}deg ${s}% ${l * 0.5}%)`;
      drawRightSide(x, y, w, height);
      ctx.fillStyle = `hsl(${h}deg ${s}% ${l}%)`;
      drawRoof(x, y, w, height);
    };

    const drawTile = (x, y, typeIndex, time) => {
      let levels = (3 + Math.sin(typeIndex) * 2) + Math.sin(x + y + time / 1000);
      let type = 0;

      if ((x === 0 && y === 0) || (x === count && y === 0) || (x === count && y === count) || (x === 0 && y === count)) {
        levels = (3 + Math.sin(typeIndex) * 2);
      }

      if (y === 5) {
        levels = 6;
        type = 1;
      }
      if (y === 4 || y === 6) {
        levels = 5;
        type = 1;
      }
      if (y === 3 || y === 7) {
        levels = 4;
        type = 1;
      }

      if (x === 0 || x === count) {
        if (y === 2 || y === 8) {
          levels = 8;
          type = 0;
        }
        if (y === 4 || y === 6) {
          levels = 10;
          type = 0;
        }
      }

      if (y === 5 && x === 5) {
        levels = 20;
        type = 2;
      }
      if ((y === 2 || y === 8) && x === 5) {
        levels = 15;
        type = 2;
      }
      if ((y === 4 || y === 6) && x === 7) {
        levels = 13;
        type = 2;
      }

      if (levels > 1) {
        levels = levels / 2 + Math.sin((x * 100 + time) / 1000) * levels / 2;
      }

      for (let i = levels; i > 0; i--) {
        let width = 1;
        if (type === 0) width = 0.1 + i / levels;
        if (type === 2) width = 0.1 + (i / levels) * 3;
        drawBox(x, y, width, levels - i, Math.floor(i) % 5);
      }
    };

    const animate = (time) => {
      requestAnimationFrame(animate);

      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = 'bold 48px Courier New';
      ctx.textAlign = 'center';
      ctx.fillStyle = 'grey';

      const startYear = 1882;
      const endYear = 2034;
      const d = (endYear - startYear) / 2;
      const year = startYear + d + Math.floor(Math.sin(time / 1000) * d);

      ctx.fillText(`Sammy's heartbeat whenever I see you Undral:`, canvas.width / 2 + 38, 200);
      ctx.fillText(`${year}`, canvas.width / 2 + 38, 250);

      let index = 0;
      for (let depth = 0; depth <= count + count; depth++) {
        for (let x = 0; x <= depth; x++) {
          const y = depth - x;
          if (x <= count && y <= count) {
            const typeIndex = Math.floor(
              Math.abs(Math.sin(index + x) + Math.sin(x + y)) * palette.length
            ) % palette.length;

            drawTile(x, y, typeIndex, time);
            index++;
          }
        }
      }
    };

    animate(0);

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

export default IsometricCity;
