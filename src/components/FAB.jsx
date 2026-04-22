import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Phone, X, MessageSquare } from 'lucide-react';
import { InstagramIcon, WhatsAppIcon } from './icons';

const FAB = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  const fabItems = [
    { label: 'WhatsApp Me', icon: <WhatsAppIcon size={22} color="white" />, href: 'https://wa.me/256754230908', color: '#25D366' },
    { label: 'Call Me', icon: <Phone size={20} color="white" />, href: 'tel:+256754230908', color: 'var(--orange)' },
    { label: 'Instagram', icon: <InstagramIcon size={20} color="white" />, href: 'https://instagram.com', color: '#E1306C' }
  ];

  return (
    <div style={{
      position: 'fixed',
      bottom: '2rem',
      right: '2rem',
      zIndex: 2000,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: '0.8rem'
    }}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', alignItems: 'flex-end' }}
          >
            {fabItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.8rem',
                  textDecoration: 'none',
                  cursor: 'none'
                }}
              >
                <span style={{
                  background: 'rgba(8, 8, 8, 0.9)',
                  color: 'var(--text)',
                  fontSize: '0.75rem',
                  padding: '0.4rem 1rem',
                  borderRadius: '6px',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid var(--border2)',
                  whiteSpace: 'nowrap',
                  fontFamily: 'var(--font-h)',
                  fontWeight: 600
                }}>
                  {item.label}
                </span>
                <div style={{
                  width: '44px',
                  height: '44px',
                  background: item.color,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
                }}>
                  {item.icon}
                </div>
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={toggleOpen}
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: isOpen ? '#FF4757' : 'var(--orange)',
          border: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'none',
          boxShadow: '0 4px 20px rgba(255, 85, 0, 0.4)',
          transition: 'background 0.3s'
        }}
      >
        {isOpen ? (
          <X size={24} color="white" />
        ) : (
          <MessageSquare size={24} color="white" />
        )}
      </button>
    </div>
  );
};

export default FAB;
