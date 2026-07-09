import React from 'react';
import { Layout } from '@/components/Layout';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Scale, Building2, CheckCircle, ChevronRight } from 'lucide-react';
import { PracticeCard } from '@/components/PracticeCard';

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
};

export default function Home() {
  const stats = [
    { value: "500+", label: "Kasus Diselesaikan" },
    { value: "25+", label: "Tahun Pengalaman" },
    { value: "98%", label: "Tingkat Keberhasilan" },
    { value: "50+", label: "Pengacara Ahli" },
  ];

  const practices = [
    { title: "Hukum Pidana", desc: "Pembelaan dan pendampingan hukum komprehensif untuk berbagai kasus pidana umum dan khusus.", icon: <Shield className="w-6 h-6" /> },
    { title: "Hukum Perdata", desc: "Penyelesaian sengketa perdata, wanprestasi, dan gugatan dengan pendekatan strategis.", icon: <Scale className="w-6 h-6" /> },
    { title: "Hukum Korporasi", desc: "Konsultasi merger, akuisisi, kepatuhan regulasi, dan litigasi korporasi berskala besar.", icon: <Building2 className="w-6 h-6" /> },
  ];

  const values = [
    {
      number: "01",
      title: "Integritas Tanpa Kompromi",
      desc: "Kami menjunjung tinggi etika profesi dan kerahasiaan klien sebagai prioritas absolut dalam setiap penugasan.",
    },
    {
      number: "02",
      title: "Keahlian Terdepan",
      desc: "Tim pengacara kami terdiri dari para ahli yang diakui dengan spesialisasi mendalam di bidangnya masing-masing.",
    },
    {
      number: "03",
      title: "Dedikasi Penuh",
      desc: "Kami tidak sekadar menangani kasus; kami menjadi mitra strategis yang melindungi kepentingan jangka panjang Anda.",
    },
  ];

  return (
    <Layout>

      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex items-center pt-8 pb-24 overflow-hidden">
        {/* Top glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(124,58,237,0.14) 0%, transparent 70%)' }}
        />

        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left — copy */}
            <div>
              <motion.div
                {...fadeUp}
                transition={{ duration: 0.6 }}
              >
                {/* Pill badge */}
                <div
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-8"
                  style={{
                    background: 'rgba(124,58,237,0.1)',
                    border: '1px solid rgba(167,139,250,0.2)',
                    color: 'rgba(196,181,253,0.9)',
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
                  Firma Hukum Terkemuka Indonesia
                </div>

                <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-black leading-[1.05] tracking-tight text-white mb-6">
                  Keadilan adalah{' '}
                  <span
                    className="inline-block"
                    style={{
                      background: 'linear-gradient(135deg, #c4b5fd 0%, #a78bfa 50%, #8b5cf6 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    Fondasi Kami,
                  </span>
                  <br />
                  Kemenangan adalah{' '}
                  <span
                    style={{
                      background: 'linear-gradient(135deg, #c4b5fd 0%, #a78bfa 50%, #8b5cf6 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    Komitmen.
                  </span>
                </h1>

                <p className="text-[17px] text-slate-400 leading-relaxed mb-10 max-w-[500px]">
                  Selama lebih dari 25 tahun, Fiat Justitia mendampingi klien dalam menghadapi
                  tantangan hukum paling kompleks di Indonesia dengan keteguhan dan integritas.
                </p>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/kontak"
                    className="inline-flex items-center gap-2 bg-violet-500 hover:bg-violet-400 text-white px-6 py-3.5 rounded-full text-sm font-bold transition-all duration-200 violet-glow"
                  >
                    Konsultasi Gratis <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/layanan"
                    className="inline-flex items-center gap-2 text-white px-6 py-3.5 rounded-full text-sm font-bold border transition-all duration-200 hover:bg-white/[0.05]"
                    style={{ borderColor: 'rgba(255,255,255,0.12)' }}
                  >
                    Lihat Layanan <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Trust signals */}
                <div className="flex flex-wrap items-center gap-5 mt-10">
                  {['ISO 9001 Certified', 'PERADI Member', 'Sejak 1998'].map((item) => (
                    <div key={item} className="flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-violet-400" />
                      <span className="text-xs text-slate-500 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right — floating stat cards */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              {/* Main card */}
              <div
                className="glass-card border-shimmer rounded-3xl p-8 relative"
                style={{ boxShadow: '0 8px 48px rgba(0,0,0,0.4), inset 0 1px 0 rgba(167,139,250,0.12)' }}
              >
                <div
                  className="absolute -inset-px rounded-3xl pointer-events-none"
                  style={{ background: 'linear-gradient(135deg, rgba(167,139,250,0.10) 0%, transparent 55%)' }}
                />
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                      className="rounded-2xl p-5 text-center"
                      style={{
                        background: 'rgba(124,58,237,0.14)',
                        border: '1px solid rgba(167,139,250,0.18)',
                        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04)',
                      }}
                    >
                      <div
                        className="text-4xl font-black mb-1"
                        style={{
                          background: 'linear-gradient(135deg, #e9d5ff, #c4b5fd, #a78bfa)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                        }}
                      >
                        {stat.value}
                      </div>
                      <div className="text-xs text-slate-300 font-medium leading-snug">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                <div
                  className="mt-4 rounded-2xl p-5 flex items-center gap-4"
                  style={{
                    background: 'rgba(124,58,237,0.10)',
                    border: '1px solid rgba(167,139,250,0.16)',
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(124,58,237,0.28)', boxShadow: '0 0 16px rgba(124,58,237,0.35)' }}
                  >
                    <Scale className="w-5 h-5 text-violet-200" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">Konsultasi Tersedia</p>
                    <p className="text-xs text-slate-400">Senin – Jumat, 08.00–17.00 WIB</p>
                  </div>
                  <div className="ml-auto w-2 h-2 rounded-full bg-emerald-400 animate-pulse" style={{ boxShadow: '0 0 8px rgba(52,211,153,0.8)' }} />
                </div>
              </div>

              {/* Floating pill badge */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -top-6 -right-4 glass-card rounded-2xl px-4 py-2.5 flex items-center gap-2.5"
                style={{ border: '1px solid rgba(167,139,250,0.25)', boxShadow: '0 4px 24px rgba(0,0,0,0.3)' }}
              >
                <div className="w-8 h-8 rounded-full bg-violet-500/20 flex items-center justify-center">
                  <Shield className="w-4 h-4 text-violet-300" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Terpercaya</p>
                  <p className="text-[10px] text-slate-500">1000+ Klien Puas</p>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─── STATS STRIP (mobile only / below hero) ─────────────── */}
      <section className="lg:hidden py-12 border-y border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 gap-px" style={{ background: 'rgba(255,255,255,0.06)' }}>
            {stats.map((stat, i) => (
              <div key={i} className="bg-background text-center py-8 px-4">
                <div
                  className="text-3xl font-black mb-1"
                  style={{
                    background: 'linear-gradient(135deg, #c4b5fd, #a78bfa)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {stat.value}
                </div>
                <div className="text-xs text-slate-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── VALUES ─────────────────────────────────────────────────── */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
            <div>
              <p
                className="text-xs font-bold tracking-[0.3em] uppercase mb-4"
                style={{ color: 'rgba(167,139,250,0.7)' }}
              >
                Nilai Kami
              </p>
              <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black text-white leading-tight tracking-tight">
                Mengapa Memilih<br />Fiat Justitia?
              </h2>
            </div>
            <p className="text-slate-400 text-base max-w-xs leading-relaxed">
              Dedikasi kami adalah memberikan hasil maksimal melalui pendekatan hukum yang strategis dan inovatif.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map((val, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="glass-card glass-hover border-shimmer rounded-3xl p-8 flex flex-col gap-6 transition-all duration-300"
              >
                <span
                  className="text-[11px] font-black tracking-[0.3em]"
                  style={{ color: 'rgba(167,139,250,0.4)' }}
                >
                  {val.number}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-white mb-3">{val.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{val.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRACTICE AREAS PREVIEW ─────────────────────────────── */}
      <section
        className="py-32 border-t border-white/[0.06]"
        style={{ background: 'rgba(124,58,237,0.03)' }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
            <div>
              <p
                className="text-xs font-bold tracking-[0.3em] uppercase mb-4"
                style={{ color: 'rgba(167,139,250,0.7)' }}
              >
                Bidang Keahlian
              </p>
              <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black text-white leading-tight tracking-tight">
                Layanan Praktik<br />Kami
              </h2>
            </div>
            <Link
              href="/layanan"
              className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors self-start md:self-end"
              style={{ color: 'rgba(167,139,250,0.8)' }}
            >
              Lihat Semua Layanan <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {practices.map((practice, idx) => (
              <PracticeCard
                key={idx}
                title={practice.title}
                description={practice.desc}
                icon={practice.icon}
                delay={idx * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─────────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden relative"
            style={{
              background: 'linear-gradient(135deg, rgba(124,58,237,0.25) 0%, rgba(109,40,217,0.15) 100%)',
              border: '1px solid rgba(167,139,250,0.2)',
            }}
          >
            {/* Decorative circle */}
            <div
              className="absolute -right-16 -top-16 w-64 h-64 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(167,139,250,0.12) 0%, transparent 70%)' }}
            />
            <div className="relative px-8 py-16 md:px-16 text-center">
              <p
                className="text-xs font-bold tracking-[0.3em] uppercase mb-4"
                style={{ color: 'rgba(196,181,253,0.7)' }}
              >
                Konsultasi Gratis
              </p>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
                Siap Membela Hak Anda
              </h2>
              <p className="text-slate-400 mb-10 max-w-md mx-auto">
                Bicarakan kebutuhan hukum Anda secara rahasia dengan tim advokat berpengalaman kami — tanpa biaya awal.
              </p>
              <Link
                href="/kontak"
                className="inline-flex items-center gap-2 bg-violet-500 hover:bg-violet-400 text-white px-8 py-4 rounded-full text-sm font-bold transition-all duration-200 violet-glow"
              >
                Mulai Konsultasi <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </Layout>
  );
}
