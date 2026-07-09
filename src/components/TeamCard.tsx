import React from 'react';
import { motion } from 'framer-motion';

interface TeamCardProps {
  name: string;
  title: string;
  practiceArea: string;
  photoSrc?: string;
  delay?: number;
}

export function TeamCard({ name, title, practiceArea, photoSrc, delay = 0 }: TeamCardProps) {
  const parts = name.replace(/Dr\.\s/g, '').split(' ');
  const firstInitial = parts[0]?.[0] || '';
  const lastInitial = parts[parts.length - 1]?.[0] || '';
  const initials = `${firstInitial}${lastInitial}`.toUpperCase();

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group glass-card border-shimmer rounded-3xl overflow-hidden transition-all duration-300"
      style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.3)' }}
    >
      {/* Square 1:1 photo */}
      <div className="w-full aspect-square overflow-hidden relative">
        {photoSrc ? (
          <img
            src={photoSrc}
            alt={name}
            className="w-full h-full object-cover object-top group-hover:scale-[1.05] transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center" style={{ background: 'rgba(124,58,237,0.12)' }}>
            <span
              className="text-4xl font-black tracking-widest"
              style={{ color: 'rgba(167,139,250,0.6)' }}
            >
              {initials}
            </span>
          </div>
        )}
        {/* Subtle bottom fade overlay */}
        <div
          className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
          style={{ background: 'linear-gradient(to top, rgba(12,5,26,0.6) 0%, transparent 100%)' }}
        />
      </div>

      {/* Info */}
      <div className="p-5">
        <span
          className="inline-block text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full mb-3"
          style={{
            background: 'rgba(124,58,237,0.18)',
            border: '1px solid rgba(167,139,250,0.25)',
            color: 'rgba(196,181,253,0.95)',
          }}
        >
          {practiceArea}
        </span>
        <h3 className="text-[15px] font-bold text-white leading-snug mb-0.5 group-hover:text-violet-200 transition-colors">{name}</h3>
        <p className="text-sm font-medium" style={{ color: 'rgba(167,139,250,0.75)' }}>{title}</p>
      </div>
    </motion.div>
  );
}
