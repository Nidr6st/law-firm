import React, { useState } from 'react';
import { Layout } from '@/components/Layout';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, CheckCircle, ArrowRight } from 'lucide-react';

const inputClass = `
  w-full px-4 py-3.5 rounded-2xl text-sm text-white placeholder:text-slate-600 outline-none transition-all duration-200
  focus:ring-1
`.trim();

const inputStyle = {
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(255,255,255,0.1)',
};

const inputFocusStyle = {
  borderColor: 'rgba(167,139,250,0.5)',
  boxShadow: '0 0 0 1px rgba(167,139,250,0.2)',
};

function FloatingInput({
  id, label, type = 'text', placeholder, required,
}: {
  id: string; label: string; type?: string; placeholder: string; required?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        placeholder={placeholder}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={inputClass}
        style={focused ? { ...inputStyle, ...inputFocusStyle } : inputStyle}
      />
    </div>
  );
}

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectFocused, setSelectFocused] = useState(false);
  const [textareaFocused, setTextareaFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => { setIsSubmitting(false); setSubmitted(true); }, 1500);
  };

  const contactItems = [
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Kantor Utama",
      value: "Gedung Fiat Justitia Lt. 25\nJl. Jend. Sudirman Kav. 52-53\nJakarta Selatan 12190",
      multiline: true,
    },
    { icon: <Phone className="w-5 h-5" />, label: "Telepon", value: "+62 21 5150 8888" },
    { icon: <Mail className="w-5 h-5" />, label: "Email", value: "info@fiatjustitia.co.id" },
    { icon: <Clock className="w-5 h-5" />, label: "Jam Operasional", value: "Senin–Jumat: 08.00–17.00 WIB" },
  ];

  return (
    <Layout>

      {/* ─── HEADER ──────────────────────────────────────────────── */}
      <section className="pt-8 pb-20 relative">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(124,58,237,0.1) 0%, transparent 70%)' }}
        />
        <div className="max-w-7xl mx-auto px-6 relative">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p
              className="text-xs font-bold tracking-[0.3em] uppercase mb-5"
              style={{ color: 'rgba(167,139,250,0.7)' }}
            >
              Hubungi Kami
            </p>
            <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-black text-white leading-[1.05] tracking-tight mb-4">
              Jadwalkan Konsultasi
            </h1>
            <p className="text-lg text-slate-400 max-w-md">
              Diskusikan kebutuhan hukum Anda secara rahasia bersama tim advokat kami.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── MAIN CONTENT ─────────────────────────────────────────── */}
      <section className="pb-32 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 pt-16">
          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-16">

            {/* Left — contact info */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-black text-white mb-8">Informasi Kontak</h2>

              <div className="space-y-4">
                {contactItems.map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-4 p-5 rounded-2xl glass-card glass-hover border-shimmer transition-all duration-200"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{
                        background: 'rgba(124,58,237,0.12)',
                        border: '1px solid rgba(167,139,250,0.2)',
                        color: 'rgba(196,181,253,0.8)',
                      }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">{item.label}</p>
                      {item.multiline
                        ? item.value.split('\n').map((line, j) => (
                            <p key={j} className="text-sm text-slate-300">{line}</p>
                          ))
                        : <p className="text-sm text-slate-300">{item.value}</p>
                      }
                    </div>
                  </div>
                ))}
              </div>

              {/* Availability indicator */}
              <div
                className="mt-8 p-5 rounded-2xl flex items-center gap-4"
                style={{
                  background: 'rgba(16,185,129,0.06)',
                  border: '1px solid rgba(16,185,129,0.15)',
                }}
              >
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <div>
                  <p className="text-sm font-bold text-emerald-300">Tim Tersedia Sekarang</p>
                  <p className="text-xs text-slate-500">Kami biasanya merespons dalam 2–4 jam kerja</p>
                </div>
              </div>
            </motion.div>

            {/* Right — form */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div
                className="glass-card border-shimmer rounded-3xl p-8 md:p-10 relative overflow-hidden"
                style={{
                  border: '1px solid rgba(167,139,250,0.16)',
                  boxShadow: '0 8px 48px rgba(0,0,0,0.4)',
                }}
              >
                {/* Corner glow */}
                <div
                  className="absolute -top-16 -right-16 w-64 h-64 rounded-full pointer-events-none"
                  style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)' }}
                />

                <h3 className="text-xl font-black text-white mb-8 relative">Kirim Pesan</h3>

                {submitted ? (
                  <div
                    className="rounded-3xl p-10 text-center"
                    style={{
                      background: 'rgba(124,58,237,0.08)',
                      border: '1px solid rgba(167,139,250,0.2)',
                    }}
                  >
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                      style={{ background: 'rgba(124,58,237,0.2)', border: '1px solid rgba(167,139,250,0.3)' }}
                    >
                      <CheckCircle className="w-8 h-8 text-violet-300" />
                    </div>
                    <h4 className="text-xl font-black text-white mb-2">Pesan Terkirim!</h4>
                    <p className="text-sm text-slate-400 mb-6">Tim kami akan segera merespons pesan Anda dalam waktu 2–4 jam kerja.</p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-sm font-semibold transition-colors"
                      style={{ color: 'rgba(167,139,250,0.8)' }}
                    >
                      Kirim pesan lain →
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5 relative">
                    <FloatingInput id="name" label="Nama Lengkap" placeholder="Masukkan nama lengkap Anda" required />

                    <div className="grid sm:grid-cols-2 gap-5">
                      <FloatingInput id="email" label="Email" type="email" placeholder="alamat@email.com" required />
                      <FloatingInput id="phone" label="Telepon" type="tel" placeholder="0812-xxxx-xxxx" required />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                        Bidang Hukum
                      </label>
                      <select
                        id="service"
                        onFocus={() => setSelectFocused(true)}
                        onBlur={() => setSelectFocused(false)}
                        className={`${inputClass} cursor-pointer`}
                        style={selectFocused ? { ...inputStyle, ...inputFocusStyle } : inputStyle}
                      >
                        <option value="" style={{ background: '#0e0e18' }}>Pilih bidang hukum yang sesuai</option>
                        <option value="pidana" style={{ background: '#0e0e18' }}>Hukum Pidana</option>
                        <option value="perdata" style={{ background: '#0e0e18' }}>Hukum Perdata</option>
                        <option value="korporasi" style={{ background: '#0e0e18' }}>Hukum Korporasi</option>
                        <option value="ketenagakerjaan" style={{ background: '#0e0e18' }}>Hukum Ketenagakerjaan</option>
                        <option value="properti" style={{ background: '#0e0e18' }}>Hukum Properti</option>
                        <option value="keluarga" style={{ background: '#0e0e18' }}>Hukum Keluarga</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                        Pesan Singkat
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        placeholder="Jelaskan secara singkat perihal kebutuhan hukum Anda..."
                        onFocus={() => setTextareaFocused(true)}
                        onBlur={() => setTextareaFocused(false)}
                        className={`${inputClass} resize-none`}
                        style={textareaFocused ? { ...inputStyle, ...inputFocusStyle } : inputStyle}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 bg-violet-500 hover:bg-violet-400 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-4 rounded-2xl text-sm transition-all duration-200 violet-glow"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Mengirim...
                        </>
                      ) : (
                        <>
                          Kirim Pesan <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <p className="text-center text-xs text-slate-600">
                      Pesan Anda bersifat rahasia dan terlindungi oleh kerahasiaan advokat-klien.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── MAP ─────────────────────────────────────────────────── */}
      <div
        className="h-[400px] w-full border-t border-white/[0.06] relative z-10 overflow-hidden"
        style={{ background: '#07070e' }}
      >
        <iframe
          src="https://maps.google.com/maps?q=Jl.+Jend.+Sudirman+Jakarta&output=embed"
          width="100%"
          height="100%"
          style={{
            border: 0,
            filter: 'invert(92%) hue-rotate(200deg) brightness(80%) contrast(88%) saturate(60%)',
            opacity: 0.85,
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Lokasi Kantor Fiat Justitia"
        />
      </div>
    </Layout>
  );
}
