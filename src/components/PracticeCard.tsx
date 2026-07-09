import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';

interface PracticeCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

export function PracticeCard({ title, description, icon, delay = 0 }: PracticeCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group glass-card glass-hover border-shimmer rounded-3xl p-8 flex flex-col h-full transition-all duration-300"
    >
      {/* Icon container */}
      <div
        className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
        style={{
          background: 'rgba(124,58,237,0.20)',
          border: '1px solid rgba(167,139,250,0.28)',
          color: 'rgba(196,181,253,0.95)',
          boxShadow: '0 0 20px rgba(124,58,237,0.20)',
        }}
      >
        {icon}
      </div>

      <h3 className="text-lg font-bold text-white mb-3 group-hover:text-violet-200 transition-colors">{title}</h3>
      <p className="text-sm text-slate-400 leading-relaxed flex-grow mb-6">
        {description}
      </p>

      <Link
        href="/layanan"
        className="inline-flex items-center gap-1.5 text-sm font-semibold transition-all mt-auto"
        style={{ color: 'rgba(167,139,250,0.85)' }}
      >
        Pelajari Lebih
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </motion.div>
  );
}
