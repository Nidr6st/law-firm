import React from 'react';
import { Layout } from '@/components/Layout';
import { TeamCard } from '@/components/TeamCard';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

import asepPhoto from '../assets/Asep_Zaenal_Mutaqin_1783276994656.jpg';
import ashilaPhoto from '../assets/Ashila_Nurul_Zakia_1783276994704.jpg';
import erikaPhoto from '../assets/Erika_Cahya_Ningrum_1783276994722.jpg';
import nauraPhoto from '../assets/Naura_Khalisya_Bilqis_1783276994743.jpg';
import nurPhoto from '../assets/Nur_Khumairah_1783276994766.jpg';
import nurulImanPhoto from '../assets/Nurul_Iman_Nisrina_Ambar_1783276994793.jpg';
import nurulInayahPhoto from '../assets/Nurul_Inayah_Abdul_1783276994818.jpg';
import kaylaPhoto from '../assets/Kayla_Sabrina_Fakhira.jpg';
import naylaPhoto from '../assets/Nayla_Alifatuzzahra.jpg';

export default function Team() {
  const team = [
    { name: "Asep Zaenal Mutaqin S.H.", title: "Managing Partner", practiceArea: "Hukum Korporasi", photo: asepPhoto },
    { name: "Nurul Iman Nisrina Ambar S.H.", title: "Senior Partner", practiceArea: "Hukum Korporasi", photo: nurulImanPhoto },
    { name: "Nur Khumairah S.H.", title: "Partner", practiceArea: "Ketenagakerjaan", photo: nurPhoto },
    { name: "Nurul Inayah Abdul S.H.", title: "Associate Partner", practiceArea: "Hukum Properti", photo: nurulInayahPhoto },
    { name: "Ashila Nurul Zakia S.H.", title: "Senior Associate", practiceArea: "Hukum Perdata", photo: ashilaPhoto },
    { name: "Erika Cahya Ningrum S.H.", title: "Associate", practiceArea: "Hukum Keluarga", photo: erikaPhoto },
    { name: "Naura Khalisya Bilqis S.H.", title: "Junior Associate", practiceArea: "Hukum Pidana", photo: nauraPhoto },
   { name: "Kayla Sabrina Fakhira S.H.", title: "Associate", practiceArea: "Hukum Keluarga", photo: kaylaPhoto },
   { name: "Nayla Alifatuzzahra S.H.", title: "Associate", practiceArea: "Hukum Keluarga", photo: naylaPhoto },
  ];

  const roles = ['Managing Partner', 'Senior Partner', 'Partner', 'Associate Partner', 'Senior Associate', 'Associate', 'Junior Associate'];

  return (
    <Layout>

      {/* ─── PAGE HEADER ─────────────────────────────────────────── */}
      <section className="pt-8 pb-20 relative">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(124,58,237,0.1) 0%, transparent 70%)' }}
        />
        <div className="max-w-7xl mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p
              className="text-xs font-bold tracking-[0.3em] uppercase mb-5"
              style={{ color: 'rgba(167,139,250,0.7)' }}
            >
              Tim Kami
            </p>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-black text-white leading-[1.05] tracking-tight">
                Para Advokat<br />Fiat Justitia
              </h1>
              <p className="text-slate-400 text-base leading-relaxed max-w-xs md:text-right">
                Profesional hukum berdedikasi tinggi dengan rekam jejak yang tak tertandingi.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── TEAM GRID ───────────────────────────────────────────── */}
      <section className="pb-32 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 pt-16">

          {/* Role legend */}
          <div className="flex flex-wrap gap-2 mb-12">
            {roles.map((role) => (
              <span
                key={role}
                className="text-[10px] font-semibold tracking-wide px-3 py-1 rounded-full"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  color: 'rgba(148,163,184,0.7)',
                }}
              >
                {role}
              </span>
            ))}
          </div>

          {/* Grid — square photos */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {team.map((member, idx) => (
              <TeamCard
                key={idx}
                name={member.name}
                title={member.title}
                practiceArea={member.practiceArea}
                photoSrc={member.photo}
                delay={idx * 0.08}
              />
            ))}

            {/* CTA card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: team.length * 0.08 }}
            >
              <Link
                href="/kontak"
                className="flex flex-col items-center justify-center text-center rounded-3xl h-full min-h-[280px] p-8 transition-all duration-300 group"
                style={{
                  background: 'rgba(124,58,237,0.06)',
                  border: '1px dashed rgba(167,139,250,0.25)',
                }}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-all duration-200 group-hover:bg-violet-500/20"
                  style={{ background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(167,139,250,0.2)' }}
                >
                  <ArrowRight className="w-5 h-5 text-violet-400" />
                </div>
                <p className="text-sm font-bold text-white mb-1">Bergabung Bersama Kami</p>
                <p className="text-xs text-slate-500">Kami membuka peluang untuk advokat berbakat</p>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── CULTURE SECTION ─────────────────────────────────────── */}
      <section
        className="py-24 border-t border-white/[0.06]"
        style={{ background: 'rgba(124,58,237,0.03)' }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Kolaborasi", desc: "Tim lintas spesialisasi bekerja bersama untuk memberikan pendekatan hukum terpadu kepada setiap klien." },
              { title: "Pertumbuhan", desc: "Kami berinvestasi pada pengembangan profesional setiap anggota tim melalui pelatihan dan mentoring berkelanjutan." },
              { title: "Dampak", desc: "Setiap kemenangan hukum kami adalah kontribusi nyata pada penegakan keadilan di Indonesia." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card glass-hover border-shimmer rounded-3xl p-8 transition-all duration-200"
              >
                <span
                  className="text-[11px] font-black tracking-[0.3em] mb-4 block"
                  style={{ color: 'rgba(167,139,250,0.4)' }}
                >
                  0{i + 1}
                </span>
                <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
