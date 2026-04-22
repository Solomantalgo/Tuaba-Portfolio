import React from 'react';
import { motion } from 'framer-motion';

const workItems = [
  {
    title: "Brand Identity",
    category: "Branding",
    size: "large",
    color: "linear-gradient(135deg, #1a0a00 0%, #3d1800 100%)",
    icon: "🔘"
  },
  {
    title: "Event Promo",
    category: "Marketing",
    size: "small",
    color: "linear-gradient(135deg, #0a0a1a 0%, #181b3d 100%)",
    icon: "⏹️"
  },
  {
    title: "Luxury Packaging",
    category: "Print",
    size: "medium",
    color: "linear-gradient(135deg, #0a1a0a 0%, #122d12 100%)",
    icon: "📐"
  },
  {
    title: "Social Campaign",
    category: "Digital",
    size: "small",
    color: "linear-gradient(135deg, #1a1a0a 0%, #2d2d12 100%)",
    icon: "📱"
  },
  {
    title: "Editorial Design",
    category: "Print",
    size: "medium",
    color: "linear-gradient(135deg, #1a0a1a 0%, #2d122d 100%)",
    icon: "📖"
  },
  {
    title: "Web Graphics",
    category: "Digital",
    size: "small",
    color: "linear-gradient(135deg, #0a1a1a 0%, #122d2d 100%)",
    icon: "🌐"
  }
];

const Work = () => {
  return (
    <section id="work" style={{ padding: '8rem 0', background: 'var(--bg2)' }}>
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '5rem', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <div className="sec-label">Portfolio</div>
            <h2 className="sec-title">Selected <span>Work</span></h2>
          </div>
          <p style={{ color: 'var(--muted)', fontStyle: 'italic', fontSize: '0.9rem' }}>
            Portfolio filling up. WhatsApp to see full samples.
          </p>
        </div>

        <div className="bento-grid">
          {workItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`work-item ${item.size}`}
              style={{
                position: 'relative',
                background: item.color,
                borderRadius: '16px',
                overflow: 'hidden',
                cursor: 'none'
              }}
            >
              <div style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '5rem',
                opacity: 0.2
              }}>
                {item.icon}
              </div>
              
              <div className="work-overlay" style={{
                position: 'absolute',
                inset: 0,
                padding: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                opacity: 0.8,
                transition: 'opacity 0.3s'
              }}>
                <span style={{
                  color: 'var(--orange)',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginBottom: '0.5rem'
                }}>
                  {item.category}
                </span>
                <h3 style={{
                  fontFamily: 'var(--font-h)',
                  fontSize: '1.4rem',
                  fontWeight: 700,
                  color: '#fff'
                }}>
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .bento-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-auto-rows: 280px;
          gap: 1.5rem;
        }
        .work-item.large {
          grid-column: span 2;
          grid-row: span 2;
        }
        .work-item.medium {
          grid-row: span 1;
        }
        .work-item.small {
          grid-row: span 1;
        }
        @media(max-width: 900px) {
          .bento-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media(max-width: 600px) {
          .bento-grid {
            grid-template-columns: 1fr;
          }
          .work-item.large {
             grid-column: span 1;
          }
        }
      `}</style>
    </section>
  );
};

export default Work;
