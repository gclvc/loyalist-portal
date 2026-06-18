import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { niches } from '../data/niches';
import Header from '../components/Header';
import ROICalculator from '../components/ROICalculator';

export default function NichePage() {
  const { nicheId } = useParams();
  const config = niches[nicheId];

  if (!config) {
    return <Navigate to="/cafe" />;
  }

  return (
    <div className="w-full">
      <Header />
      
      <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-loyalist-purple/10 border border-loyalist-purple/30 text-loyalist-purple mb-6 uppercase tracking-widest text-xs font-bold">
            Loyalist for {config.name}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight">
            {config.heroTitle}
          </h1>
          <p className="text-xl md:text-2xl text-pure-white/50 mb-12">
            {config.heroSubtitle}
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-loyalist-purple text-pure-white px-8 py-4 rounded-full font-bold hover:bg-[#7626ff] transition-all shadow-[0_0_20px_rgba(95,0,234,0.4)]">
              Build your program
            </button>
            <a href="#roi-calculator" className="bg-pure-white/5 border border-pure-white/10 text-pure-white px-8 py-4 rounded-full font-bold hover:bg-pure-white/10 transition-all">
              Calculate ROI
            </a>
          </div>
        </div>
      </main>

      <section className="py-24 px-6 md:px-12 bg-stark-black border-t border-pure-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-4 text-pure-white">The Problem</h3>
            <p className="text-xl text-pure-white/50 mb-8">{config.painPoint}</p>
            <h3 className="text-3xl font-bold mb-4 text-mint-accelerator">The Loyalist Solution</h3>
            <p className="text-xl text-pure-white/80">{config.solution}</p>
          </div>
          <div className="glass-card rounded-2xl p-2 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-loyalist-purple/20 to-mint-accelerator/20 blur-3xl"></div>
            <img src="/assets/hero_dashboard.png" alt="Platform Dashboard" className="relative z-10 rounded-xl shadow-2xl" />
          </div>
        </div>
      </section>

      <ROICalculator nicheConfig={config.calculator} />
    </div>
  );
}
