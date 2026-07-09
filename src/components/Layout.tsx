import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { AbstractBg } from './AbstractBg';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-background" style={{ isolation: 'isolate' }}>
      <AbstractBg />
      <Header />
      <main className="flex-grow pt-24 relative z-10" style={{ isolation: 'isolate' }}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
