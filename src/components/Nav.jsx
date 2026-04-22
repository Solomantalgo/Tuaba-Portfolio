import React from 'react';

const Nav = () => {
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '1.2rem 6%',
      background: 'rgba(8, 8, 8, 0.92)',
      backdropFilter: 'blur(24px)',
      WebkitBackdropFilter: 'blur(24px)',
      borderBottom: '1px solid var(--border2)'
    }}>
      <a href="/" style={{
        fontFamily: 'var(--font-h)',
        fontSize: '1.4rem',
        fontWeight: 800,
        color: 'var(--text)',
        letterSpacing: '-0.5px'
      }}>
        Tau<span style={{ color: 'var(--orange)' }}>best</span>
      </a>
      
      <div className="nav-links" style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
        {['Services', 'Work', 'About', 'Contact'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            style={{
              color: 'var(--muted)',
              fontSize: '0.85rem',
              fontWeight: 400,
              letterSpacing: '0.04em',
              transition: 'color 0.2s'
            }}
            onMouseEnter={(e) => e.target.style.color = 'var(--orange)'}
            onMouseLeave={(e) => e.target.style.color = 'var(--muted)'}
          >
            {item}
          </a>
        ))}
        <a
          href="https://wa.me/256754230908"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: 'var(--orange)',
            color: '#fff',
            padding: '0.6rem 1.6rem',
            borderRadius: '4px',
            fontSize: '0.82rem',
            fontWeight: 700,
            fontFamily: 'var(--font-h)',
            letterSpacing: '0.05em',
            transition: 'all 0.2s',
            marginLeft: '1rem'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = '#FF7733';
            e.target.style.transform = 'translateY(-1px)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'var(--orange)';
            e.target.style.transform = 'translateY(0)';
          }}
        >
          Hire Me →
        </a>
      </div>

      {/* Mobile menu would go here - keeping it simple for now */}
      <style>{`
        @media(max-width: 768px) {
          .nav-links { display: none !important; }
        }
      `}</style>
    </nav>
  );
};

export default Nav;
