import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="fixed w-full z-50 transition-all duration-300 bg-background/80 backdrop-blur-xl border-b border-pure-white/5 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-loyalist-purple flex items-center justify-center mint-glow transition-all">
            <span className="material-symbols-outlined text-pure-white group-hover:scale-110 transition-transform">view_cozy</span>
          </div>
          <span className="font-bold text-2xl tracking-tight text-pure-white">Loyalist</span>
        </Link>
        <nav className="hidden md:flex gap-8 items-center">
          <Link to="/cafe" className="text-sm font-semibold text-pure-white/70 hover:text-mint-accelerator transition-colors">Cafes</Link>
          <Link to="/salon" className="text-sm font-semibold text-pure-white/70 hover:text-mint-accelerator transition-colors">Salons</Link>
          <Link to="/gym" className="text-sm font-semibold text-pure-white/70 hover:text-mint-accelerator transition-colors">Gyms</Link>
          <Link to="/retail" className="text-sm font-semibold text-pure-white/70 hover:text-mint-accelerator transition-colors">Retail</Link>
          <button className="bg-pure-white text-stark-black px-6 py-2.5 rounded-full font-bold hover:bg-mint-accelerator transition-all shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_rgba(97,238,128,0.4)]">
            Start Free
          </button>
        </nav>
      </div>
    </header>
  );
}
