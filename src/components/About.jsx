import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  'Adobe Illustrator', 'Photoshop', 'CorelDRAW', 'Canva Pro', 
  'Logo Design', 'Typography', 'Print Design', 'Digital Graphics'
];

const About = () => {
  return (
    <section id="about" style={{ padding: '10rem 0' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(350px, 1fr) 1.2fr', gap: '6rem', alignItems: 'center' }}>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ position: 'relative' }}
          >
            <div style={{
              background: 'var(--card)',
              border: '1px solid var(--border2)',
              borderRadius: '24px',
              aspectRatio: '3/4',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{ opacity: 0.1, textAlign: 'center', padding: '2rem' }}>
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <circle cx="12" cy="8" r="5" />
                  <path d="M20 21a8 8 0 0 0-16 0" />
                </svg>
                <div style={{ marginTop: '1rem', fontSize: '0.8rem', letterSpacing: '0.1em', fontWeight: 600 }}>PHOTO COMING SOON</div>
              </div>
              
              {/* Overlapping small card for accent */}
              <div style={{
                position: 'absolute',
                bottom: '-2rem',
                right: '-2rem',
                background: 'var(--orange)',
                padding: '2rem',
                borderRadius: '16px',
                textAlign: 'center',
                boxShadow: '0 20px 40px rgba(255, 85, 0, 0.2)'
              }}>
                <div style={{ fontFamily: 'var(--font-h)', fontSize: '2.5rem', fontWeight: 800, color: '#fff', lineHeight: 1 }}>5+</div>
                <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.8)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '0.4rem' }}>
                  Yrs Experience
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="sec-label">About Me</div>
            <h2 className="sec-title">Turning Ideas into <br /><span>Bold Visuals</span></h2>
            
            <p style={{ fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.8, marginBottom: '1.5rem', fontWeight: 300 }}>
              I'm <strong style={{ color: 'var(--text)', fontWeight: 500 }}>Kawesi Tauba</strong>, a graphic designer based in Kampala, Uganda trading as <strong style={{ color: 'var(--orange)' }}>Taubest</strong>. I'm passionate about creating designs that don't just look good — they work hard for your brand.
            </p>
            
            <p style={{ fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.8, marginBottom: '2.5rem', fontWeight: 300 }}>
              No templates. No generic work. Every design is built from scratch for you. My philosophy is simple: <strong style={{ color: 'var(--text)', fontWeight: 500 }}>great design should be accessible</strong>. You don't need a big budget to have a professional brand.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
              {skills.map((skill) => (
                <span
                  key={skill}
                  style={{
                    background: 'var(--card2)',
                    border: '1px solid var(--border2)',
                    color: 'var(--muted)',
                    fontSize: '0.8rem',
                    padding: '0.5rem 1.2rem',
                    borderRadius: '50px',
                    letterSpacing: '0.02em',
                    transition: 'all 0.3s'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.borderColor = 'var(--orange)';
                    e.target.style.color = 'var(--orange)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.borderColor = 'var(--border2)';
                    e.target.style.color = 'var(--muted)';
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
      
      <style>{`
        @media(max-width: 900px) {
          #about .container > div { grid-template-columns: 1fr !important; gap: 4rem !important; }
        }
      `}</style>
    </section>
  );
};

export default About;
