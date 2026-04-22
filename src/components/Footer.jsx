import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      padding: '4rem 0',
      borderTop: '1px solid var(--border2)',
      textAlign: 'center',
      background: 'var(--bg)'
    }}>
      <div className="container">
        <h2 style={{
          fontFamily: 'var(--font-h)',
          fontSize: '1.8rem',
          fontWeight: 800,
          color: 'var(--text)',
          marginBottom: '1.5rem'
        }}>
          Tau<span style={{ color: 'var(--orange)' }}>best</span>
        </h2>
        
        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginBottom: '2rem' }}>
          {['WhatsApp', 'Instagram', 'Call'].map((item) => (
            <a
              key={item}
              href="#"
              style={{
                fontSize: '0.8rem',
                color: 'var(--muted)',
                letterSpacing: '0.05em',
                transition: 'color 0.2s'
              }}
              onMouseEnter={(e) => e.target.style.color = 'var(--orange)'}
              onMouseLeave={(e) => e.target.style.color = 'var(--muted)'}
            >
              {item}
            </a>
          ))}
        </div>

        <p style={{ fontSize: '0.8rem', color: 'var(--muted2)', fontWeight: 300 }}>
          © 2025 Kawesi Tauba · Taubest · Graphic Designer · Kampala, Uganda
        </p>
      </div>
    </footer>
  );
};

export default Footer;
