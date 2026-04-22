import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Hero = () => {
  const roles = ['Logo Design', 'Brand Identity', 'Poster Design', 'Social Graphics', 'Flyer Design', 'Business Cards'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typeSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setText(currentRole.substring(0, isDeleting ? text.length - 1 : text.length + 1));
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section id="hero" style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      padding: '10rem 6% 5rem',
      overflow: 'hidden'
    }}>
      {/* Background Blobs for Atmosphere */}
      <motion.div
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        style={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 85, 0, 0.08) 0%, transparent 70%)',
          top: '-150px',
          right: '-150px',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />
      
      <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '4rem', alignItems: 'center' }}>
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="hero-badge" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              background: 'rgba(255, 85, 0, 0.08)',
              border: '1px solid rgba(255, 85, 0, 0.2)',
              color: 'var(--orange)',
              padding: '0.5rem 1.2rem',
              borderRadius: '4px',
              fontSize: '0.7rem',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: '2.5rem'
            }}>
              <div style={{
                width: '6px',
                height: '6px',
                background: 'var(--orange)',
                borderRadius: '50%',
                boxShadow: '0 0 10px var(--orange)'
              }}></div>
              Available for Projects · Kampala
            </div>

            <h1 style={{
              fontFamily: 'var(--font-h)',
              fontSize: 'clamp(3.5rem, 8vw, 7.5rem)',
              fontWeight: 800,
              lineHeight: 0.9,
              letterSpacing: '-0.04em',
              marginBottom: '1rem'
            }}>
              Kawesi <br /> 
              <span style={{ color: 'var(--orange)', fontStyle: 'italic', fontWeight: 500 }}>Tauba.</span>
            </h1>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', margin: '2rem 0' }}>
              <div style={{ width: '40px', height: '1.5px', background: 'var(--orange)' }}></div>
              <span style={{
                fontSize: '0.9rem',
                color: 'var(--muted)',
                fontWeight: 300,
                letterSpacing: '0.1em',
                textTransform: 'uppercase'
              }}>
                Specialising in <span style={{ color: 'var(--amber)', fontWeight: 500 }}>{text}</span>
                <span style={{ borderRight: '2px solid var(--amber)', marginLeft: '2px', animation: 'blink 0.8s infinite' }}></span>
              </span>
            </div>

            <p style={{
              fontSize: '1.1rem',
              color: 'var(--muted)',
              lineHeight: 1.8,
              maxWidth: '540px',
              marginBottom: '3rem',
              fontWeight: 300
            }}>
              I craft <strong style={{ color: 'var(--text)', fontWeight: 500 }}>bold visual identities</strong> that make brands impossible to ignore. From logos to complete brand fire.
            </p>

            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              <a href="#work" className="btn-primary" style={{
                background: 'var(--orange)',
                color: '#fff',
                padding: '1rem 2.5rem',
                borderRadius: '4px',
                fontWeight: 700,
                fontSize: '0.9rem',
                fontFamily: 'var(--font-h)',
                letterSpacing: '0.04em',
                boxShadow: '0 0 35px rgba(255, 85, 0, 0.2)'
              }}>
                View Portfolio
              </a>
              <a href="#contact" className="btn-ghost" style={{
                border: '1px solid var(--border2)',
                color: 'var(--text)',
                padding: '1rem 2.5rem',
                borderRadius: '4px',
                fontSize: '0.9rem',
                fontWeight: 400,
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => e.target.style.borderColor = 'var(--orange)'}
              onMouseLeave={(e) => e.target.style.borderColor = 'var(--border2)'}
              >
                Let's Talk →
              </a>
            </div>

            {/* Restoring Stats */}
            <div className="hero-stats" style={{
              display: 'flex',
              gap: '2.5rem',
              marginTop: '4rem',
              paddingTop: '3rem',
              borderTop: '1px solid var(--border2)',
              flexWrap: 'wrap'
            }}>
              {[
                { n: '100+', l: 'Projects Done' },
                { n: '5+', l: 'Yrs Experience' },
                { n: '48hr', l: 'Turnaround' },
                { n: '∞', l: 'Revisions' }
              ].map((s, i) => (
                <div key={i} className="h-stat">
                  <strong style={{ fontFamily: 'var(--font-h)', fontSize: '1.8rem', color: 'var(--orange)', display: 'block', lineHeight: 1 }}>{s.n}</strong>
                  <span style={{ fontSize: '0.7rem', color: 'var(--muted)', letterSpacing: '0.05em', textTransform: 'uppercase', marginTop: '0.5rem', display: 'block' }}>{s.l}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Centering fix for mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            style={{ 
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              width: '100%'
            }}
          >
            <div style={{
              width: '100%',
              maxWidth: '440px', // Limiting width for better centering appearance
              aspectRatio: '1',
              background: 'var(--card)',
              border: '1px solid var(--border)',
              borderRadius: '24px',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
               <div style={{
                 padding: '2rem',
                 fontSize: '12rem',
                 color: 'rgba(255, 85, 0, 0.05)',
                 fontFamily: 'var(--font-h)',
                 fontWeight: 900
               }}>
                 ART
               </div>
               {/* Floating elements inside */}
               <motion.div
                 animate={{ rotate: 360 }}
                 transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                 style={{
                   position: 'absolute',
                   width: '120px',
                   height: '120px',
                   border: '2px dashed var(--orange)',
                   borderRadius: '50%',
                   opacity: 0.2
                 }}
               />
               <div style={{
                 position: 'absolute',
                 bottom: '2rem',
                 left: '2rem',
                 fontFamily: 'var(--font-h)',
                 fontSize: '0.7rem',
                 letterSpacing: '0.2em',
                 color: 'var(--muted2)'
               }}>
                 EST. 2020 / UG
               </div>
            </div>
          </motion.div>

        </div>
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @media(max-width: 900px) {
          .container > div { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
