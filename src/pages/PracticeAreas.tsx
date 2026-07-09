import React from 'react';
import { Layout } from '@/components/Layout';
import { PracticeCard } from '@/components/PracticeCard';
import { Shield, Scale, Building2, Users, HomeIcon, Heart, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';

export default function PracticeAreas() {
  const practices = [
    {
      title: "Hukum Pidana",
      desc: "Pembelaan dan pendampingan hukum komprehensif untuk berbagai kasus pidana umum, tindak pidana korupsi, dan pidana khusus lainnya dari tingkat penyidikan hingga kasasi.",
      icon: <Shield className="w-6 h-6" />,
    },
    {
      title: "Hukum Perdata",
      desc: "Penyelesaian sengketa perdata, wanprestasi, perbuatan melawan hukum, dan sengketa komersial dengan pendekatan mediasi strategis maupun litigasi di pengadilan.",
      icon: <Scale className="w-6 h-6" />,
    },
    {
      title: "Hukum Korporasi",
      desc: "Konsultasi hukum harian, merger & akuisisi, kepatuhan regulasi, tata kelola perusahaan yang baik (GCG), dan penyelesaian perselisihan antar pemegang saham.",
      icon: <Building2 className="w-6 h-6" />,
    },
    {
      title: "Hukum Ketenagakerjaan",
      desc: "Pembuatan kontrak kerja, peraturan perusahaan, pendampingan PHK, penyelesaian perselisihan hubungan industrial (PHI), dan negosiasi serikat pekerja.",
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: "Hukum Properti",
      desc: "Uji tuntas hukum (legal due diligence) aset properti, sengketa kepemilikan tanah, perizinan pembangunan, dan pendampingan transaksi real estate komersial.",
      icon: <HomeIcon className="w-6 h-6" />,
    },
    {
      title: "Hukum Keluarga",
      desc: "Penanganan kasus perceraian, hak asuh anak, pembagian harta gono-gini, waris, dan adopsi anak dengan pendekatan empati dan perlindungan privasi maksimal.",
      icon: <Heart className="w-6 h-6" />,
    },
  ];

  return (
    <Layout>
      {/* ─── PAGE HEADER ─────────────────────────────────────────── */}
      <section className="pt-8 pb-24 relative">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(124,58,237,0.1) 0%, transparent 70%)' }}
        />
        <div className="max-w-7xl mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p
              className="text-xs font-bold tracking-[0.3em] uppercase mb-5"
              style={{ color: 'rgba(167,139,250,0.7)' }}
            >
              Bidang Keahlian
            </p>
            <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-black text-white leading-[1.05] tracking-tight mb-5">
              Layanan Praktik Kami
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
              Keahlian hukum komprehensif untuk melindungi kepentingan Anda dalam berbagai aspek legal di Indonesia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── GRID ─────────────────────────────────────────────────── */}
      <section className="py-8 pb-32 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6">

          {/* Top decorative row */}
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-grow" style={{ background: 'rgba(255,255,255,0.06)' }} />
            <span className="text-xs text-slate-600 font-medium tracking-widest uppercase">
              {practices.length} Bidang Keahlian
            </span>
            <div className="h-px flex-grow" style={{ background: 'rgba(255,255,255,0.06)' }} />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {practices.map((practice, idx) => (
              <PracticeCard
                key={idx}
                title={practice.title}
                description={practice.desc}
                icon={practice.icon}
                delay={idx * 0.08}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS SECTION ──────────────────────────────────────── */}
      <section
        className="py-24 border-t border-white/[0.06]"
        style={{ background: 'rgba(124,58,237,0.03)' }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <p
              className="text-xs font-bold tracking-[0.3em] uppercase mb-4"
              style={{ color: 'rgba(167,139,250,0.7)' }}
            >
              Cara Kerja Kami
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
              Proses Penanganan Kasus
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Konsultasi Awal", desc: "Diskusi rahasia tentang permasalahan hukum Anda bersama advokat senior kami." },
              { step: "02", title: "Analisis Kasus", desc: "Tim kami menganalisis fakta dan menyusun strategi hukum yang optimal." },
              { step: "03", title: "Penyusunan Strategi", desc: "Presentasi strategi dan estimasi waktu penyelesaian yang realistis." },
              { step: "04", title: "Eksekusi & Pelaporan", desc: "Penanganan aktif dengan laporan perkembangan berkala kepada klien." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card glass-hover border-shimmer rounded-3xl p-7 transition-all duration-200"
              >
                <span
                  className="text-[11px] font-black tracking-[0.3em] mb-4 block"
                  style={{ color: 'rgba(167,139,250,0.4)' }}
                >
                  {item.step}
                </span>
                <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Butuh Bantuan Hukum Sekarang?
          </h2>
          <p className="text-slate-400 mb-8 max-w-md mx-auto">
            Tim advokat kami siap mendampingi Anda. Mulai dengan konsultasi gratis tanpa kewajiban.
          </p>
          <Link
            href="/kontak"
            className="inline-flex items-center gap-2 bg-violet-500 hover:bg-violet-400 text-white px-8 py-4 rounded-full text-sm font-bold transition-all duration-200 violet-glow"
          >
            Jadwalkan Konsultasi <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
