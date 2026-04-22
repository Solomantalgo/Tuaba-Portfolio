import React from 'react';
import { motion } from 'framer-motion';

const items = [
  'Logo Design', 'Brand Identity', 'Poster Design', 'Flyers & Brochures',
  'Social Media Graphics', 'Business Cards', 'T-Shirt Prints', 'Event Banners'
];

const Marquee = () => {
  return (
    <div style={{
      background: 'var(--orange)',
      padding: '1rem 0',
      overflow: 'hidden',
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      whiteSpace: 'nowrap'
    }}>
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        style={{ display: 'flex', gap: '0' }}
      >
        {[...items, ...items, ...items].map((item, idx) => (
          <span
            key={idx}
            style={{
              fontFamily: 'var(--font-h)',
              fontSize: '0.8rem',
              fontWeight: 700,
              color: '#fff',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              padding: '0 2.5rem',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            {item} <span style={{ color: 'rgba(255,255,255,0.4)', marginLeft: '2.5rem' }}>·</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
