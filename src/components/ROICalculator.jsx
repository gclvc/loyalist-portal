import React, { useState } from 'react';

export default function ROICalculator({ nicheConfig }) {
  const [currency, setCurrency] = useState('£');
  const [monthlyCustomers, setMonthlyCustomers] = useState(nicheConfig.defaultCustomers);

  // The formula usually relies on: (Customers * IncreaseRate) * Ticket * Margin
  const additionalVisits = Math.floor(monthlyCustomers * nicheConfig.increaseRate);
  const extraRevenue = additionalVisits * nicheConfig.avgTicket;

  return (
    <section className="bg-[#0A0A0A] py-24 px-6 md:px-12 border-t border-pure-white/5" id="roi-calculator">
      <div className="max-w-4xl mx-auto glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-loyalist-purple opacity-20 blur-[100px] rounded-full"></div>
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mint-accelerator/10 border border-mint-accelerator/20 text-mint-accelerator text-xs font-bold uppercase tracking-wider mb-4">
              Real ROI
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-pure-white">See your potential growth</h2>
            <p className="text-pure-white/50 mt-2">Based on industry averages for {nicheConfig.name}.</p>
          </div>
          
          {/* Currency Toggle */}
          <div className="flex bg-stark-black border border-pure-white/10 rounded-lg p-1 z-10">
            {['£', '$', '€'].map(sym => (
              <button 
                key={sym}
                onClick={() => setCurrency(sym)}
                className={`px-4 py-2 rounded-md text-sm font-bold transition-all ${currency === sym ? 'bg-loyalist-purple text-pure-white shadow-lg' : 'text-pure-white/50 hover:text-pure-white'}`}
              >
                {sym}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 relative z-10">
          <div className="space-y-8">
            <div>
              <label className="block text-pure-white/70 font-semibold mb-2 flex justify-between">
                <span>Monthly {nicheConfig.customerLabel}</span>
                <span className="text-mint-accelerator font-bold">{monthlyCustomers}</span>
              </label>
              <input 
                type="range" 
                min={nicheConfig.minCustomers} 
                max={nicheConfig.maxCustomers} 
                step={nicheConfig.step}
                value={monthlyCustomers}
                onChange={(e) => setMonthlyCustomers(Number(e.target.value))}
                className="w-full h-2 bg-pure-white/10 rounded-lg appearance-none cursor-pointer accent-mint-accelerator"
              />
            </div>
            
            <div className="bg-stark-black/50 p-6 rounded-2xl border border-pure-white/5 space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span className="text-pure-white/50">Avg. Ticket Size</span>
                <span className="font-bold text-pure-white">{currency}{nicheConfig.avgTicket}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-pure-white/50">Expected Loyalty Boost</span>
                <span className="font-bold text-mint-accelerator">+{nicheConfig.increaseRate * 100}% visits</span>
              </div>
            </div>
          </div>

          <div className="bg-loyalist-purple/10 border border-loyalist-purple/30 rounded-2xl p-8 flex flex-col justify-center items-center text-center">
            <span className="text-pure-white/70 font-semibold mb-2">Projected Added Revenue / Mo</span>
            <div className="text-5xl md:text-6xl font-bold text-pure-white mb-4">
              {currency}{extraRevenue.toLocaleString()}
            </div>
            <p className="text-sm text-pure-white/50">
              That's an extra <span className="text-mint-accelerator font-bold">{additionalVisits}</span> {nicheConfig.customerLabel} visits generated purely by automation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
