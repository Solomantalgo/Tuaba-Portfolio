import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Tag, FileText, Smartphone, Briefcase, Target } from 'lucide-react';

const services = [
  {
    num: '01',
    icon: <Palette size={24} color="var(--orange)" />,
    title: 'Logo Design',
    desc: 'A logo that captures your brand in a single mark. Clean, memorable, and versatile across all platforms.',
    tag: 'From UGX 50,000 →'
  },
  {
    num: '02',
    icon: <Tag size={24} color="var(--orange)" />,
    title: 'Brand Identity',
    desc: 'Full brand packages — logo, color palette, typography and brand guidelines that make you look established.',
    tag: 'Full Package →'
  },
  {
    num: '03',
    icon: <FileText size={24} color="var(--orange)" />,
    title: 'Flyers & Posters',
    desc: 'High-impact marketing materials for events, promotions, and campaigns. Delivered fast.',
    tag: 'Quick Turnaround →'
  },
  {
    num: '04',
    icon: <Smartphone size={24} color="var(--orange)" />,
    title: 'Social Media',
    desc: 'Scroll-stopping posts, stories, and covers for Instagram, Facebook, and more. Consistent and engaging.',
    tag: 'Monthly Packs →'
  },
  {
    num: '05',
    icon: <Briefcase size={24} color="var(--orange)" />,
    title: 'Stationery',
    desc: 'Professional cards, letterheads, and office stationery that make a strong first impression.',
    tag: 'Print Ready →'
  },
  {
    num: '06',
    icon: <Target size={24} color="var(--orange)" />,
    title: 'Event Graphics',
    desc: 'Large-format banners, certificates, and display graphics. Designed for impact at any scale.',
    tag: 'Any Size →'
  }
];

const Services = () => {
  return (
    <section id="services" style={{ padding: '8rem 0' }}>
      <div className="container">
        <div style={{ marginBottom: '5rem' }}>
          <div className="sec-label">What I Do</div>
          <h2 className="sec-title">Creative Services <br /><span>Built to Impress</span></h2>
          <p style={{ color: 'var(--muted)', maxWidth: '400px', fontWeight: 300 }}>
            From your first logo to your full brand identity — Visuals that speak before you do.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2px',
          background: 'var(--border2)',
          border: '1px solid var(--border2)'
        }}>
          {services.map((svc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              style={{
                background: 'var(--bg)',
                padding: '3rem 2.5rem',
                position: 'relative',
                overflow: 'hidden'
              }}
              whileHover={{ backgroundColor: 'var(--card)' }}
            >
              <div style={{ 
                fontFamily: 'var(--font-h)', 
                fontSize: '0.7rem', 
                color: 'var(--muted2)', 
                fontWeight: 700, 
                marginBottom: '2rem' 
              }}>
                {svc.num}
              </div>
              <div style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>{svc.icon}</div>
              <h3 style={{ 
                fontFamily: 'var(--font-h)', 
                fontSize: '1.2rem', 
                fontWeight: 700, 
                marginBottom: '1rem' 
              }}>
                {svc.title}
              </h3>
              <p style={{ 
                fontSize: '0.88rem', 
                color: 'var(--muted)', 
                lineHeight: 1.7, 
                fontWeight: 300 
              }}>
                {svc.desc}
              </p>
              <div style={{ 
                marginTop: '1.5rem', 
                fontSize: '0.75rem', 
                color: 'var(--orange)', 
                fontWeight: 600, 
                letterSpacing: '0.05em' 
              }}>
                {svc.tag}
              </div>
              
              {/* Animated line on hover */}
              <motion.div
                className="hover-line"
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  height: '2px',
                  background: 'var(--orange)',
                  width: '0%'
                }}
                whileHover={{ width: '100%' }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
