import React from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { WhatsAppIcon, InstagramIcon } from './icons';

const Contact = () => {
  return (
    <section id="contact" style={{ padding: '8rem 0', background: 'var(--bg2)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 1.2fr', gap: '6rem' }}>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="sec-label">Get in Touch</div>
            <h2 className="sec-title">Let's Create <br /><span>Something Great</span></h2>
            <p style={{ color: 'var(--muted)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '3rem', fontWeight: 300 }}>
              Have a project in mind? Drop a message or hit me up on WhatsApp. Fastest response guaranteed.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <ContactLink 
                icon={<WhatsAppIcon size={20} color="#25D366" />} 
                title="+256 754 230908" 
                subtitle="WhatsApp · Instant response" 
                href="https://wa.me/256754230908"
                color="rgba(37, 211, 102, 0.1)"
              />
              <ContactLink 
                icon={<Phone size={20} color="var(--orange)" />} 
                title="+256 754 230908" 
                subtitle="Call · Daytime available" 
                href="tel:+256754230908"
                color="rgba(255, 85, 0, 0.1)"
              />
              <ContactLink 
                icon={<InstagramIcon size={20} color="#E1306C" />} 
                title="taubest" 
                subtitle="Instagram · Portfolio & BTS" 
                href="https://instagram.com"
                color="rgba(225, 48, 108, 0.1)"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              background: 'var(--card)',
              border: '1px solid var(--border2)',
              borderRadius: '24px',
              padding: '3rem'
            }}
          >
            <h3 style={{ fontFamily: 'var(--font-h)', fontSize: '1.4rem', fontWeight: 700, marginBottom: '2.5rem' }}>Send a Message</h3>
            <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div className="fg">
                  <label style={labelStyle}>Your Name</label>
                  <input type="text" placeholder="Sarah Nakato" style={inputStyle} />
                </div>
                <div className="fg">
                  <label style={labelStyle}>WhatsApp</label>
                  <input type="tel" placeholder="0772 000 000" style={inputStyle} />
                </div>
              </div>
              <div className="fg">
                <label style={labelStyle}>Project Type</label>
                <select style={inputStyle}>
                  <option>Logo Design</option>
                  <option>Brand Identity</option>
                  <option>Flyer / Poster</option>
                  <option>Social Media</option>
                  <option>Something Else</option>
                </select>
              </div>
              <div className="fg">
                <label style={labelStyle}>Details</label>
                <textarea placeholder="Describe your brand and vision..." style={{ ...inputStyle, minHeight: '120px', resize: 'vertical' }}></textarea>
              </div>
              <button 
                type="submit"
                style={{
                  background: 'var(--orange)',
                  color: '#fff',
                  border: 'none',
                  padding: '1.2rem',
                  borderRadius: '12px',
                  fontFamily: 'var(--font-h)',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  letterSpacing: '0.05em',
                  cursor: 'none',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#FF7733';
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 10px 25px rgba(255, 85, 0, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'var(--orange)';
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                Send Message →
              </button>
            </form>
          </motion.div>

        </div>
      </div>
      <style>{`
        @media(max-width: 900px) {
          #contact .container > div { grid-template-columns: 1fr !important; gap: 4rem !important; }
        }
      `}</style>
    </section>
  );
};

const ContactLink = ({ icon, title, subtitle, href, color }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: '1.2rem',
      padding: '1.2rem 1.5rem',
      background: 'var(--card)',
      border: '1px solid var(--border2)',
      borderRadius: '16px',
      transition: 'all 0.3s'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.borderColor = 'var(--orange)';
      e.currentTarget.style.transform = 'translateX(6px)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.borderColor = 'var(--border2)';
      e.currentTarget.style.transform = 'translateX(0)';
    }}
  >
    <div style={{
      width: '48px',
      height: '48px',
      borderRadius: '12px',
      background: color,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.2rem'
    }}>
      {icon}
    </div>
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <strong style={{ fontSize: '1rem', fontWeight: 600 }}>{title}</strong>
      <span style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>{subtitle}</span>
    </div>
  </a>
);

const labelStyle = {
  display: 'block',
  fontSize: '0.75rem',
  fontWeight: 600,
  color: 'var(--muted)',
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
  marginBottom: '0.6rem'
};

const inputStyle = {
  width: '100%',
  padding: '1rem 1.2rem',
  background: 'var(--bg2)',
  border: '1px solid var(--border2)',
  borderRadius: '12px',
  color: 'var(--text)',
  fontSize: '0.9rem',
  outline: 'none',
  transition: 'border-color 0.2s',
  fontFamily: 'var(--font-b)'
};

export default Contact;
