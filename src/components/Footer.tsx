import React from 'react';
import { Link } from 'wouter';
import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/[0.06]" style={{ background: 'hsl(252 20% 3%)' }}>
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <span
                className="block text-[9px] font-semibold tracking-[0.45em] uppercase mb-1"
                style={{ color: 'rgba(167,139,250,0.6)' }}
              >
                Firma Hukum
              </span>
              <span className="text-[17px] font-black tracking-[0.12em] uppercase text-white">
                Fiat Justitia
              </span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed max-w-[220px]">
              Keadilan adalah Fondasi Kami. Mendampingi klien sejak 1998 dengan integritas tanpa kompromi.
            </p>
            <div className="flex items-center gap-1 mt-6">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-slate-500">Beroperasi Aktif</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-6">Tautan</h3>
            <ul className="space-y-3">
              {[
                { href: '/', label: 'Beranda' },
                { href: '/tentang', label: 'Tentang Kami' },
                { href: '/layanan', label: 'Bidang Praktik' },
                { href: '/tim', label: 'Tim Kami' },
                { href: '/kontak', label: 'Hubungi Kami' },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-500 hover:text-violet-300 transition-colors flex items-center gap-1.5 group"
                  >
                    {item.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity -mt-0.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-6">Layanan</h3>
            <ul className="space-y-3">
              {['Hukum Pidana', 'Hukum Perdata', 'Hukum Korporasi', 'Ketenagakerjaan', 'Hukum Properti', 'Hukum Keluarga'].map((item) => (
                <li key={item}>
                  <Link
                    href="/layanan"
                    className="text-sm text-slate-500 hover:text-violet-300 transition-colors flex items-center gap-1.5 group"
                  >
                    {item}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity -mt-0.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-6">Kontak</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 text-violet-400/60 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-500 leading-relaxed">
                  Gedung Fiat Justitia Lt. 25<br />
                  Jl. Jend. Sudirman Kav. 52-53<br />
                  Jakarta Selatan 12190
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-violet-400/60 shrink-0" />
                <span className="text-sm text-slate-500">+62 21 5150 8888</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-violet-400/60 shrink-0" />
                <span className="text-sm text-slate-500">info@fiatjustitia.co.id</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.05] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">
            &copy; {new Date().getFullYear()} Fiat Justitia. Hak Cipta Dilindungi Undang-Undang.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-slate-600 hover:text-slate-400 transition-colors">Privasi</Link>
            <Link href="#" className="text-xs text-slate-600 hover:text-slate-400 transition-colors">Syarat & Ketentuan</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
