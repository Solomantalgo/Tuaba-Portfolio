import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, PenTool, RefreshCw, Box } from 'lucide-react';

const steps = [
  {
    num: "1",
    title: "Brief & Chat",
    desc: "You reach out on WhatsApp. We talk about your brand, your vision, your audience, and what you need.",
    icon: <MessageSquare size={32} color="var(--orange)" />
  },
  {
    num: "2",
    title: "Concept & Design",
    desc: "I get to work creating your design concept — bold, intentional, and on-brand. Usually within 24–48 hours.",
    icon: <PenTool size={32} color="var(--orange)" />
  },
  {
    num: "3",
    title: "Review & Revise",
    desc: "You review the work and I refine until it's exactly right. Your satisfaction is the only finish line.",
    icon: <RefreshCw size={32} color="var(--orange)" />
  },
  {
    num: "4",
    title: "Deliver & Done",
    desc: "Final files delivered in all formats you need — AI, SVG, PNG, PDF. Print-ready and web-ready.",
    icon: <Box size={32} color="var(--orange)" />
  }
];

const Process = () => {
  return (
    <section id="process" style={{ padding: '8rem 0', borderTop: '1px solid var(--border2)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 5rem' }}>
          <div className="sec-label" style={{ justifyContent: 'center' }}>How It Works</div>
          <h2 className="sec-title">Simple Process, <br /><span>Smooth Results</span></h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '3rem'
        }}>
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              style={{
                position: 'relative',
                padding: '3rem 2rem',
                background: 'var(--bg2)',
                borderRadius: '12px',
                border: '1px solid var(--border2)'
              }}
            >
              <div style={{
                position: 'absolute',
                top: '-1rem',
                right: '1.5rem',
                fontFamily: 'var(--font-h)',
                fontSize: '4rem',
                fontWeight: 900,
                color: 'rgba(255, 85, 0, 0.06)',
                lineHeight: 1
              }}>
                {step.num}
              </div>
              
              <div style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>{step.icon}</div>
              <h3 style={{
                fontFamily: 'var(--font-h)',
                fontSize: '1.1rem',
                fontWeight: 700,
                marginBottom: '1rem',
                color: 'var(--text)'
              }}>
                {step.title}
              </h3>
              <p style={{
                fontSize: '0.85rem',
                color: 'var(--muted)',
                lineHeight: 1.7,
                fontWeight: 300
              }}>
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
