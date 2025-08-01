import React, { useEffect, useRef, useState } from 'react';
import webgazer from 'webgazer';

const PUNTO_RADIO = 48; // grande y visual
const PUNTO_MAX_ALPHA = 0.23; // opacidad máxima del "calor"
const PUNTO_COLOR = [255, 40, 0]; // rojo-anaranjado
const SHADOW_BLUR = 28;

function drawHeatPoint(ctx, x, y, r, maxAlpha, color = [255, 40, 0]) {
  // Gradiente radial tipo heatmap
  const grad = ctx.createRadialGradient(x, y, 0, x, y, r);
  grad.addColorStop(0, `rgba(${color[0]},${color[1]},${color[2]},${maxAlpha})`);
  grad.addColorStop(0.25, `rgba(${color[0]},${color[1]},${color[2]},${maxAlpha * 0.7})`);
  grad.addColorStop(0.65, `rgba(${color[0]},${color[1]},${color[2]},${maxAlpha * 0.3})`);
  grad.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.save();
  ctx.globalAlpha = 1;
  ctx.shadowColor = `rgba(${color[0]},${color[1]},${color[2]},0.28)`;
  ctx.shadowBlur = SHADOW_BLUR;
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.closePath();
  ctx.fillStyle = grad;
  ctx.fill();
  ctx.restore();
}

const HeatmapTracker = () => {
  const [tracking, setTracking] = useState(false);
  const [showHeatmap, setShowHeatmap] = useState(false);
  const gazeData = useRef([]);
  const canvasRef = useRef(null);

  // --- ESCALADO responsivo ---
  const getScale = () => {
    return {
      x: window.innerWidth / window.screen.width,
      y: window.innerHeight / window.screen.height,
    };
  };

  // Captura puntos (no cambia)
  useEffect(() => {
    let started = false;
    if (tracking) {
      webgazer.clearGazeListener();
      webgazer.setGazeListener((data, timestamp) => {
        if (data) {
          gazeData.current.push({
            x: data.x,
            y: data.y,
            value: 1,
          });
        }
      });
      webgazer.begin().then(() => {
        started = true;
      });
    } else {
      try {
        webgazer.clearGazeListener();
        webgazer.end();
      } catch {}
    }
    return () => {
      try {
        webgazer.clearGazeListener();
        if (started) webgazer.end();
      } catch {}
    };
  }, [tracking]);

  // Resize canvas
  useEffect(() => {
    const setCanvasSize = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        const dpr = window.devicePixelRatio || 1;
        canvas.width = window.innerWidth * dpr;
        canvas.height = window.innerHeight * dpr;
        canvas.style.width = '100vw';
        canvas.style.height = '100vh';
      }
    };
    if (showHeatmap) {
      setCanvasSize();
      window.addEventListener('resize', setCanvasSize);
    }
    return () => window.removeEventListener('resize', setCanvasSize);
  }, [showHeatmap]);

  // Dibuja puntos "heatmap" en canvas
  useEffect(() => {
    if (!showHeatmap) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Escala puntos según viewport actual
    const scale = getScale();
    gazeData.current.forEach(pt => {
      const x = pt.x * scale.x * dpr;
      const y = pt.y * scale.y * dpr;
      drawHeatPoint(ctx, x, y, PUNTO_RADIO * dpr, PUNTO_MAX_ALPHA, PUNTO_COLOR);
    });
  }, [showHeatmap]);

  // Redibuja al hacer resize en modo heatmap
  useEffect(() => {
    if (!showHeatmap) return;
    const handler = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const dpr = window.devicePixelRatio || 1;
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const scale = getScale();
      gazeData.current.forEach(pt => {
        const x = pt.x * scale.x * dpr;
        const y = pt.y * scale.y * dpr;
        drawHeatPoint(ctx, x, y, PUNTO_RADIO * dpr, PUNTO_MAX_ALPHA, PUNTO_COLOR);
      });
    };
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
    // eslint-disable-next-line
  }, [showHeatmap]);

  const handleStop = () => {
    setTracking(false);
    setShowHeatmap(true);
    setTimeout(() => {
      // redibuja una vez montado
      const canvas = canvasRef.current;
      if (canvas) {
        const dpr = window.devicePixelRatio || 1;
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const scale = getScale();
        gazeData.current.forEach(pt => {
          const x = pt.x * scale.x * dpr;
          const y = pt.y * scale.y * dpr;
          drawHeatPoint(ctx, x, y, PUNTO_RADIO * dpr, PUNTO_MAX_ALPHA, PUNTO_COLOR);
        });
      }
    }, 200);
  };

  const handleRestart = () => {
    gazeData.current = [];
    setShowHeatmap(false);
    setTracking(true);
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    }
  };

  return (
    <>
      <div style={{
        position: 'fixed',
        bottom: 20, right: 24, zIndex: 100000,
        pointerEvents: 'auto'
      }}>
        {!tracking && !showHeatmap && (
          <button className="btn btn-primary btn-sm shadow" onClick={() => setTracking(true)}>
            Iniciar seguimiento visual
          </button>
        )}
        {tracking && (
          <button className="btn btn-danger btn-sm shadow" onClick={handleStop}>
            Detener y mostrar mapa de calor
          </button>
        )}
      </div>
      {showHeatmap && (
        <div
          style={{
            position: 'fixed',
            left: 0,
            top: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 99999,
            pointerEvents: 'auto',
            background: 'rgba(20,22,34,0.54)', // Fondo oscuro translúcido profesional
            boxShadow: '0 0 0 100vw rgba(0,0,0,0.15) inset',
            transition: 'background 0.4s',
          }}
        >
          <canvas
            ref={canvasRef}
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: '100vw',
              height: '100vh',
              pointerEvents: 'none',
              zIndex: 99999,
              borderRadius: '8px',
              boxShadow: '0 8px 32px 0 rgba(0,0,0,0.08)',
              filter: 'contrast(110%) brightness(108%)',
              transition: 'box-shadow 0.4s'
            }}
          />
          <button
            className="btn btn-success btn-sm"
            style={{
              position: 'absolute',
              top: 30,
              right: 36,
              zIndex: 100000,
              fontWeight: 500,
              boxShadow: '0 2px 16px 0 rgba(0,0,0,0.16)'
            }}
            onClick={handleRestart}
          >
            Reiniciar seguimiento
          </button>
        </div>
      )}
    </>
  );
};

export default HeatmapTracker;
