import React from 'react';
import { Layout } from '@/components/Layout';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

const PageHeader = ({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle: string }) => (
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
          {eyebrow}
        </p>
        <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-black text-white leading-[1.05] tracking-tight mb-5">
          {title}
        </h1>
        <p className="text-lg text-slate-400 leading-relaxed">{subtitle}</p>
      </motion.div>
    </div>
  </section>
);

export default function About() {
  const milestones = [
    { year: "1998", title: "Pendirian Firma", desc: "Didirikan di Jakarta dengan fokus awal pada litigasi perdata." },
    { year: "2005", title: "Ekspansi Korporasi", desc: "Memenangkan sengketa korporasi berskala nasional pertama dan membuka divisi Hukum Korporasi." },
    { year: "2012", title: "Perluasan Jangkauan", desc: "Membuka kantor cabang di 5 kota besar di Indonesia untuk melayani klien nasional." },
    { year: "2020", title: "Transformasi Digital", desc: "Mengadopsi legal-tech terdepan untuk efisiensi penanganan kasus dan manajemen klien." },
    { year: "2024", title: "50+ Advokat Ahli", desc: "Berkembang menjadi firma hukum papan atas dengan lebih dari 50 pengacara bersertifikasi." },
  ];

  const missions = [
    "Memberikan representasi hukum yang tangguh, cerdas, dan bermartabat.",
    "Melindungi hak dan kepentingan klien melalui analisis hukum yang presisi.",
    "Mengedepankan penyelesaian masalah yang efisien tanpa mengorbankan kualitas.",
    "Berkontribusi pada perkembangan penegakan hukum yang adil di Indonesia."
  ];

  return (
    <Layout>
      <PageHeader
        eyebrow="Tentang Kami"
        title="Mengenal Fiat Justitia"
        subtitle="Sejarah, visi, dan nilai-nilai yang telah mendasari kiprah Fiat Justitia selama lebih dari dua dekade."
      />

      {/* ─── VISION & MISSION ─────────────────────────────────── */}
      <section className="py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p
                className="text-xs font-bold tracking-[0.3em] uppercase mb-5"
                style={{ color: 'rgba(167,139,250,0.7)' }}
              >
                Visi & Misi
              </p>
              <h2 className="text-3xl font-black text-white mb-8 leading-tight">
                Visi Kami
              </h2>

              <div
                className="glass-card rounded-3xl p-8 mb-12"
                style={{
                  border: '1px solid rgba(167,139,250,0.22)',
                  boxShadow: '0 4px 32px rgba(124,58,237,0.18)',
                }}
              >
                <p className="text-xl text-white font-semibold leading-relaxed italic">
                  "Menjadi firma hukum terkemuka yang memberikan solusi hukum terbaik dengan standar internasional."
                </p>
              </div>

              <h2 className="text-3xl font-black text-white mb-6 leading-tight">
                Misi Kami
              </h2>
              <ul className="space-y-4">
                {missions.map((mission, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 }}
                    className="flex gap-4 p-5 rounded-2xl glass-card glass-hover border-shimmer transition-all duration-200"
                  >
                    <CheckCircle2 className="w-5 h-5 text-violet-400 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-300 leading-relaxed">{mission}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:sticky lg:top-32"
            >
              {/* Year card */}
              <div
                className="rounded-3xl overflow-hidden relative aspect-square flex flex-col items-center justify-center text-center p-12"
                style={{
                  background: 'linear-gradient(135deg, rgba(124,58,237,0.2) 0%, rgba(109,40,217,0.08) 100%)',
                  border: '1px solid rgba(167,139,250,0.18)',
                }}
              >
                <div
                  className="absolute inset-0 pointer-events-none rounded-3xl"
                  style={{ background: 'radial-gradient(circle at 30% 30%, rgba(167,139,250,0.1) 0%, transparent 60%)' }}
                />
                <span
                  className="text-[90px] font-black leading-none mb-4"
                  style={{
                    background: 'linear-gradient(135deg, rgba(196,181,253,0.4), rgba(167,139,250,0.2))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  1998
                </span>
                <p className="text-lg text-slate-300 font-medium leading-relaxed">
                  Berdiri kuat membela keadilan selama lebih dari dua dekade.
                </p>

                {/* Stats row */}
                <div className="flex gap-8 mt-10">
                  {[{ v: "500+", l: "Kasus" }, { v: "50+", l: "Advokat" }, { v: "98%", l: "Berhasil" }].map((s, i) => (
                    <div key={i} className="text-center">
                      <div
                        className="text-2xl font-black"
                        style={{
                          background: 'linear-gradient(135deg, #c4b5fd, #a78bfa)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                        }}
                      >
                        {s.v}
                      </div>
                      <div className="text-xs text-slate-500">{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── TIMELINE ────────────────────────────────────────────── */}
      <section
        className="py-24 border-t border-white/[0.06]"
        style={{ background: 'rgba(124,58,237,0.03)' }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-16">
            <p
              className="text-xs font-bold tracking-[0.3em] uppercase mb-4"
              style={{ color: 'rgba(167,139,250,0.7)' }}
            >
              Sejarah Kami
            </p>
            <h2 className="text-4xl font-black text-white leading-tight">Perjalanan Fiat Justitia</h2>
          </div>

          <div className="relative">
            {/* vertical line */}
            <div
              className="absolute left-[19px] top-0 bottom-0 w-px"
              style={{ background: 'linear-gradient(to bottom, transparent, rgba(167,139,250,0.3) 10%, rgba(167,139,250,0.3) 90%, transparent)' }}
            />

            <div className="space-y-8 pl-12">
              {milestones.map((m, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative"
                >
                  {/* Dot */}
                  <div
                    className="absolute -left-12 top-5 w-[10px] h-[10px] rounded-full border-2 border-violet-500"
                    style={{ background: 'rgba(167,139,250,0.3)', left: '-29px' }}
                  />

                  <div className="glass-card glass-hover border-shimmer rounded-3xl p-6 transition-all duration-200">
                    <span
                      className="inline-block text-xs font-black tracking-widest px-3 py-1 rounded-full mb-4"
                      style={{
                        background: 'rgba(124,58,237,0.12)',
                        border: '1px solid rgba(167,139,250,0.2)',
                        color: 'rgba(196,181,253,0.9)',
                      }}
                    >
                      {m.year}
                    </span>
                    <h3 className="text-lg font-bold text-white mb-2">{m.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{m.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Ingin bergabung dengan kami?
          </h2>
          <p className="text-slate-400 mb-8">
            Kami selalu terbuka untuk kolaborasi dan bakat-bakat hukum terbaik Indonesia.
          </p>
          <Link
            href="/kontak"
            className="inline-flex items-center gap-2 bg-violet-500 hover:bg-violet-400 text-white px-8 py-4 rounded-full text-sm font-bold transition-all duration-200 violet-glow"
          >
            Hubungi Kami <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
