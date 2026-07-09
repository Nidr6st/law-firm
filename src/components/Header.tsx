import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { href: '/', label: 'Beranda' },
  { href: '/tentang', label: 'Tentang' },
  { href: '/layanan', label: 'Layanan' },
  { href: '/tim', label: 'Tim' },
  { href: '/kontak', label: 'Kontak' },
];

export function Header() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'py-3'
          : 'bg-transparent py-6'
      }`}
    >
      {isScrolled && (
        <div className="absolute inset-0 glass border-b border-white/[0.06]" />
      )}

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative">
        {/* Wordmark */}
        <Link href="/" className="group flex flex-col leading-none py-1">
          <span
            className="text-[9px] font-semibold tracking-[0.45em] uppercase mb-0.5 transition-colors duration-300"
            style={{ color: 'rgba(167,139,250,0.7)' }}
          >
            Firma Hukum
          </span>
          <span className="text-[18px] font-black tracking-[0.12em] uppercase text-white group-hover:text-violet-200 transition-colors duration-300">
            Fiat Justitia
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((link) => {
            const isActive = location === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium px-4 py-2 rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-white'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-white/[0.08] border border-white/[0.1]"
                    style={{ zIndex: -1 }}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/kontak"
            className="inline-flex items-center gap-2 bg-violet-500 hover:bg-violet-400 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 violet-glow"
          >
            Konsultasi <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/[0.06] transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-4 right-4 mt-2 glass rounded-3xl border border-white/[0.08] shadow-2xl p-5 md:hidden flex flex-col gap-1"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium px-4 py-3 rounded-2xl transition-all ${
                  location === link.href
                    ? 'bg-violet-500/15 text-violet-300 border border-violet-500/20'
                    : 'text-slate-300 hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/kontak"
              className="mt-2 bg-violet-500 text-white px-6 py-3 rounded-2xl text-center text-sm font-semibold violet-glow"
            >
              Konsultasi Sekarang
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
