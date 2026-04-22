import { useState, useEffect } from 'react';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [ringPosition, setRingPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, [role="button"]')) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // Smooth ring movement
  useEffect(() => {
    let requestRef;
    const animateRing = () => {
      setRingPosition((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.15,
        y: prev.y + (position.y - prev.y) * 0.15,
      }));
      requestRef = requestAnimationFrame(animateRing);
    };
    requestRef = requestAnimationFrame(animateRing);
    return () => cancelAnimationFrame(requestRef);
  }, [position]);

  return (
    <>
      <div
        className="cursor"
        style={{
          position: 'fixed',
          left: position.x,
          top: position.y,
          width: '8px',
          height: '8px',
          backgroundColor: 'var(--orange)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 10000,
          transform: `translate(-50%, -50%) scale(${isHovered ? 2.5 : 1})`,
          transition: 'transform 0.15s ease',
          mixBlendMode: 'exclusion'
        }}
      />
      <div
        className="cursor-ring"
        style={{
          position: 'fixed',
          left: ringPosition.x,
          top: ringPosition.y,
          width: '34px',
          height: '34px',
          border: '1.5px solid rgba(255, 85, 0, 0.5)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: `translate(-50%, -50%) scale(${isHovered ? 1.4 : 1})`,
          borderColor: isHovered ? 'rgba(255, 85, 0, 0.8)' : 'rgba(255, 85, 0, 0.5)',
          transition: 'transform 0.1s ease, border-color 0.1s ease'
        }}
      />
    </>
  );
};

export default Cursor;
