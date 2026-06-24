import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Loyalist",
    "operatingSystem": "Web, iOS, Android",
    "applicationCategory": "BusinessApplication",
    "offers": {
      "@type": "Offer",
      "price": "79.00",
      "priceCurrency": "GBP"
    },
    "description": "Premium digital loyalty platform for local businesses using Apple Wallet and Google Pay.",
    "url": "https://loyalist.digital"
  };

  return (
    <div className="bg-background text-pure-white w-full overflow-hidden">
      <SEO schema={schema} />
      

<div className="fixed top-6 w-full z-50 flex justify-center px-4 pointer-events-none transition-all duration-500" id="nav-wrapper">
    <nav className="pointer-events-auto flex justify-between items-center px-6 py-3 w-full max-w-5xl bg-pure-white/5 border border-pure-white/10 rounded-full backdrop-blur-2xl shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-all duration-300 group">
        <div className="flex items-center gap-3">
            <img alt="Loyalist Logo" className="h-8" src="https://cdn.digitalwallet.cards/products/16186/themes/48564/logoLight"/>
        </div>
        
        <div className="hidden md:flex items-center gap-8 px-8">
            <a className="font-label-md text-sm text-pure-white/70 hover:text-mint-accelerator transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-mint-accelerator hover:after:w-full after:transition-all after:duration-300" href="#">Card Types</a>
            <a className="font-label-md text-sm text-pure-white/70 hover:text-pure-white transition-colors" href="#">Scanner</a>
            <a className="font-label-md text-sm text-pure-white/70 hover:text-pure-white transition-colors" href="#">Push</a>
            <a className="font-label-md text-sm text-pure-white/70 hover:text-pure-white transition-colors" href="#">Pricing</a>
            <a className="font-label-md text-sm text-pure-white/70 hover:text-pure-white transition-colors" href="#">ROI Calc</a>
        </div>
        
        <div className="flex items-center gap-4">
            <a href="#" className="hidden lg:block text-sm font-bold text-pure-white/70 hover:text-pure-white transition-colors">Log in</a>
            <button className="bg-mint-accelerator text-stark-black px-6 py-2.5 rounded-full font-button text-sm hover:opacity-90 transition-all active:scale-95 mint-glow shadow-[0_0_20px_rgba(97,238,128,0.3)]">
                Start Free
            </button>
        </div>
    </nav>
</div>

<section className="purple-mesh pt-48 pb-32 px-margin-desktop text-center relative overflow-hidden min-h-[90vh] flex flex-col items-center justify-center">

<div className="absolute inset-0 bg-grid-pattern pointer-events-none z-0"></div>


<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-loyalist-purple rounded-full mix-blend-screen filter blur-[100px] opacity-40 animate-pulse"></div>
<div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#61EE80] rounded-full mix-blend-screen filter blur-[150px] opacity-10"></div>

<div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-pure-white/10 bg-pure-white/5 backdrop-blur-md mb-8">
        <span className="flex h-2 w-2 rounded-full bg-mint-accelerator animate-ping absolute"></span>
        <span className="flex h-2 w-2 rounded-full bg-mint-accelerator relative"></span>
        <span className="font-label-md text-pure-white/80 uppercase tracking-widest text-xs">V2.0 is Live • New Automation Engine</span>
    </div>
    
    <h1 className="font-display-lg text-[80px] leading-[1.05] text-pure-white mb-6 hidden md:block tracking-tighter drop-shadow-2xl">
        The simplest rewards program <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-mint-accelerator to-[#00d084]">for local businesses.</span>
    </h1>
    <h1 className="font-display-lg-mobile text-[48px] leading-[1.1] text-pure-white mb-6 md:hidden tracking-tighter">
        The simplest rewards program <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-mint-accelerator to-[#00d084]">for local businesses.</span>
    </h1>
    
    <p className="font-body-lg text-xl md:text-2xl text-pure-white/60 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
        Get a <strong className="text-pure-white font-semibold">2X increase in return rates</strong> and a <strong className="text-pure-white font-semibold">30% increase in revenue</strong>. No heavy hardware, no complex setups.
    </p>
    
    <div className="flex flex-col items-center gap-4 z-20">
        <div className="flex flex-col sm:flex-row items-center gap-6">
            <button className="bg-mint-accelerator text-stark-black px-12 py-5 rounded-2xl font-button text-lg hover:opacity-100 transition-all mint-glow flex items-center gap-2">
                Start Free Trial <span className="material-symbols-outlined">arrow_right_alt</span>
            </button>
            <a href="https://calendly.com/" target="_blank" rel="noopener noreferrer" className="glass-card text-pure-white px-10 py-5 rounded-2xl font-button text-lg hover:bg-pure-white/10 transition-all flex items-center gap-2">
                <span className="material-symbols-outlined text-mint-accelerator">calendar_month</span> Schedule Demo
            </a>
        </div>
        <div className="flex flex-col items-center gap-4 mt-6 border-t border-pure-white/10 pt-6 w-full max-w-sm mx-auto">
            <div className="flex -space-x-3">
                <img className="w-8 h-8 rounded-full border-2 border-[#050505] grayscale brightness-150" src="https://i.pravatar.cc/100?img=1" alt="User 1"/>
                <img className="w-8 h-8 rounded-full border-2 border-[#050505] grayscale brightness-150" src="https://i.pravatar.cc/100?img=2" alt="User 2"/>
                <img className="w-8 h-8 rounded-full border-2 border-[#050505] grayscale brightness-150" src="https://i.pravatar.cc/100?img=3" alt="User 3"/>
                <img className="w-8 h-8 rounded-full border-2 border-[#050505] grayscale brightness-150" src="https://i.pravatar.cc/100?img=4" alt="User 4"/>
                <div className="w-8 h-8 rounded-full border-2 border-[#050505] bg-loyalist-purple flex items-center justify-center text-[10px] font-bold text-pure-white">+5k</div>
            </div>
            <p className="text-pure-white/50 font-label-md text-xs">
                Join 30,000+ local businesses growing today.
            </p>
        </div>
        <p className="text-pure-white/40 font-label-md text-sm flex items-center gap-2 mt-2">
            <span className="material-symbols-outlined text-sm">lock</span> No credit card required. 14-day free trial.
        </p>
    </div>
    
    <div className="flex items-center gap-4 mt-12 text-pure-white/50 font-label-md uppercase tracking-wider text-xs">
        <span className="flex items-center gap-1 border border-pure-white/10 bg-pure-white/5 px-4 py-2 rounded-xl backdrop-blur-sm"><span className="material-symbols-outlined text-sm">phone_iphone</span> Apple Wallet</span>
        <span className="flex items-center gap-1 border border-pure-white/10 bg-pure-white/5 px-4 py-2 rounded-xl backdrop-blur-sm"><span className="material-symbols-outlined text-sm">android</span> Google Wallet</span>
    </div>
</div>
</section>

    
    <section className="bg-[#050505] border-y border-pure-white/5 py-10 px-margin-desktop text-center relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505] z-10 pointer-events-none w-full"></div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-0">
            <div className="flex flex-col items-center md:items-start text-left">
                <div className="flex text-[#FFD700] text-xl mb-1 drop-shadow-[0_0_10px_rgba(255,215,0,0.5)]">
                    ★★★★★
                </div>
                <p className="font-label-md text-pure-white/60 text-sm">Rated 4.9/5 by 30,000+ businesses</p>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-10 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                <div className="flex items-center gap-2 text-pure-white font-bold text-xl"><span className="material-symbols-outlined text-3xl">local_cafe</span> Brews & Co.</div>
                <div className="flex items-center gap-2 text-pure-white font-bold text-xl"><span className="material-symbols-outlined text-3xl">fitness_center</span> Iron Gym</div>
                <div className="flex items-center gap-2 text-pure-white font-bold text-xl"><span className="material-symbols-outlined text-3xl">content_cut</span> The Salon</div>
                <div className="flex items-center gap-2 text-pure-white font-bold text-xl"><span className="material-symbols-outlined text-3xl">restaurant</span> Bistro 42</div>
                <div className="flex items-center gap-2 text-pure-white font-bold text-xl"><span className="material-symbols-outlined text-3xl">shopping_bag</span> Retail POS</div>
            </div>
        </div>
    </section>


<section className="bg-[#050505] py-32 px-margin-desktop relative overflow-hidden">
    
    <div className="hidden lg:block absolute left-1/2 top-40 bottom-40 w-px bg-gradient-to-b from-mint-accelerator/50 via-loyalist-purple/50 to-transparent -translate-x-1/2"></div>
    
    <div className="max-w-6xl mx-auto">
        <div className="text-center mb-24">
            <h2 className="font-display-lg-mobile md:text-5xl tracking-tight text-pure-white mb-6">How it <span className="text-mint-accelerator">works.</span></h2>
            <p className="font-body-lg text-pure-white/50 text-xl">Three simple steps to launch your digital loyalty program today.</p>
        </div>

        <div className="space-y-24 relative z-10">
            
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 group">
                <div className="w-full lg:w-5/12 text-center lg:text-right">
                    <div className="inline-block w-12 h-12 rounded-full bg-pure-white/5 border border-pure-white/20 text-pure-white flex items-center justify-center font-bold text-xl mb-4 lg:ml-auto group-hover:bg-mint-accelerator group-hover:text-stark-black group-hover:border-mint-accelerator transition-all duration-500">1</div>
                    <h3 className="text-3xl font-bold text-pure-white mb-4">Design your cards</h3>
                    <p className="text-pure-white/50 text-lg">Use our drag-and-drop builder to create stunning digital cards. Add your logo, choose colors, and define the rewards.</p>
                </div>
                <div className="hidden lg:flex w-2/12 justify-center">
                    <div className="w-4 h-4 rounded-full bg-pure-white/20 ring-8 ring-[#050505] group-hover:bg-mint-accelerator group-hover:scale-150 transition-all duration-500 z-10"></div>
                </div>
                <div className="w-full lg:w-5/12">
                    <div className="glass-card rounded-3xl p-8 transform group-hover:translate-x-4 transition-transform duration-500">
                        <div className="flex gap-4 items-center">
                            <div className="w-16 h-24 rounded-lg bg-gradient-to-br from-[#2D2D2D] to-[#1A1A1A] border border-pure-white/10 shadow-lg"></div>
                            <div className="w-16 h-24 rounded-lg bg-gradient-to-br from-loyalist-purple to-[#4500ae] border border-mint-accelerator/30 shadow-lg transform -translate-y-4 relative z-10"></div>
                            <div className="w-16 h-24 rounded-lg bg-gradient-to-br from-[#2D2D2D] to-[#1A1A1A] border border-pure-white/10 shadow-lg"></div>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-12 group">
                <div className="w-full lg:w-5/12 text-center lg:text-left">
                    <div className="inline-block w-12 h-12 rounded-full bg-pure-white/5 border border-pure-white/20 text-pure-white flex items-center justify-center font-bold text-xl mb-4 group-hover:bg-mint-accelerator group-hover:text-stark-black group-hover:border-mint-accelerator transition-all duration-500">2</div>
                    <h3 className="text-3xl font-bold text-pure-white mb-4">Customers save to Wallet</h3>
                    <p className="text-pure-white/50 text-lg">Customers scan a QR code or tap an NFC tag to instantly save the card to their Apple or Google Wallet. No app download required.</p>
                </div>
                <div className="hidden lg:flex w-2/12 justify-center">
                    <div className="w-4 h-4 rounded-full bg-pure-white/20 ring-8 ring-[#050505] group-hover:bg-mint-accelerator group-hover:scale-150 transition-all duration-500 z-10"></div>
                </div>
                <div className="w-full lg:w-5/12">
                    <div className="glass-card rounded-3xl p-8 transform group-hover:-translate-x-4 transition-transform duration-500 text-center">
                        <div className="inline-block p-4 bg-pure-white rounded-2xl">
                            <span className="material-symbols-outlined text-[80px] text-stark-black">qr_code_2</span>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 group">
                <div className="w-full lg:w-5/12 text-center lg:text-right">
                    <div className="inline-block w-12 h-12 rounded-full bg-pure-white/5 border border-pure-white/20 text-pure-white flex items-center justify-center font-bold text-xl mb-4 lg:ml-auto group-hover:bg-mint-accelerator group-hover:text-stark-black group-hover:border-mint-accelerator transition-all duration-500">3</div>
                    <h3 className="text-3xl font-bold text-pure-white mb-4">Scan and Automate</h3>
                    <p className="text-pure-white/50 text-lg">Staff issue stamps with our free Scanner App. Automated push notifications handle the marketing while you sleep.</p>
                </div>
                <div className="hidden lg:flex w-2/12 justify-center">
                    <div className="w-4 h-4 rounded-full bg-pure-white/20 ring-8 ring-[#050505] group-hover:bg-mint-accelerator group-hover:scale-150 transition-all duration-500 z-10"></div>
                </div>
                <div className="w-full lg:w-5/12">
                    <div className="glass-card rounded-3xl p-8 transform group-hover:translate-x-4 transition-transform duration-500 overflow-hidden relative">
                        <div className="absolute inset-0 bg-mint-accelerator/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="flex items-center gap-4 bg-[#0A0A0A] p-4 rounded-xl border border-pure-white/10 relative z-10">
                            <span className="material-symbols-outlined text-mint-accelerator">notifications_active</span>
                            <div className="flex-grow">
                                <div className="text-pure-white font-bold text-sm">We missed you!</div>
                                <div className="text-pure-white/50 text-xs">Come back today for double points.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    

<section className="bg-[#050505] py-32 px-margin-desktop relative">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-20 max-w-3xl mx-auto">
<h2 className="font-display-lg-mobile md:text-[56px] text-pure-white mb-6 tracking-tight leading-tight">Build the <span className="text-mint-accelerator">perfect card</span> for any business.</h2>
<p className="font-body-lg text-xl text-pure-white/50">Our architecture supports every major loyalty framework. Combine them or use them standalone.</p>
</div>


<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="rounded-3xl bg-[#0A0A0A] border border-pure-white/10 p-8 flex flex-col justify-between hover:border-mint-accelerator/50 transition-colors group relative overflow-hidden">
<div className="absolute -right-10 -top-10 w-32 h-32 bg-mint-accelerator blur-[60px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
<div className="w-12 h-12 rounded-full bg-pure-white/5 flex items-center justify-center text-mint-accelerator mb-6 relative z-10 border border-pure-white/10">
<span className="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">approval</span>
</div>
<div className="relative z-10">
<h3 className="text-xl font-bold text-pure-white mb-2">Stamps</h3>
<p className="text-pure-white/50 text-sm">Works on the mechanics: Buy 10 and get the 11th as a gift.</p>
</div>
</div>

<div className="rounded-3xl bg-[#0A0A0A] border border-pure-white/10 p-8 flex flex-col justify-between hover:border-mint-accelerator/50 transition-colors group relative overflow-hidden">
<div className="absolute -right-10 -top-10 w-32 h-32 bg-mint-accelerator blur-[60px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
<div className="w-12 h-12 rounded-full bg-pure-white/5 flex items-center justify-center text-mint-accelerator mb-6 relative z-10 border border-pure-white/10">
<span className="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">payments</span>
</div>
<div className="relative z-10">
<h3 className="text-xl font-bold text-pure-white mb-2">Cashback</h3>
<p className="text-pure-white/50 text-sm">Give and redeem customers points for purchases instantly.</p>
</div>
</div>

<div className="rounded-3xl bg-[#0A0A0A] border border-pure-white/10 p-8 flex flex-col justify-between hover:border-loyalist-purple/50 transition-colors group relative overflow-hidden">
<div className="absolute -right-10 -top-10 w-32 h-32 bg-loyalist-purple blur-[60px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
<div className="w-12 h-12 rounded-full bg-pure-white/5 flex items-center justify-center text-loyalist-purple mb-6 relative z-10 border border-pure-white/10">
<span className="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">military_tech</span>
</div>
<div className="relative z-10">
<h3 className="text-xl font-bold text-pure-white mb-2">Reward</h3>
<p className="text-pure-white/50 text-sm">Classic discount system with several earning levels.</p>
</div>
</div>

<div className="rounded-3xl bg-[#0A0A0A] border border-pure-white/10 p-8 flex flex-col justify-between hover:border-[#FFD700]/50 transition-colors group relative overflow-hidden">
<div className="absolute -right-10 -top-10 w-32 h-32 bg-[#FFD700] blur-[60px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
<div className="w-12 h-12 rounded-full bg-pure-white/5 flex items-center justify-center text-[#FFD700] mb-6 relative z-10 border border-pure-white/10">
<span className="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">stars</span>
</div>
<div className="relative z-10">
<h3 className="text-xl font-bold text-pure-white mb-2">Membership</h3>
<p className="text-pure-white/50 text-sm">Control access to tiers and track specific member activity.</p>
</div>
</div>

<div className="rounded-3xl bg-[#0A0A0A] border border-pure-white/10 p-8 flex flex-col justify-between hover:border-[#FF4A00]/50 transition-colors group relative overflow-hidden">
<div className="absolute -right-10 -top-10 w-32 h-32 bg-[#FF4A00] blur-[60px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
<div className="w-12 h-12 rounded-full bg-pure-white/5 flex items-center justify-center text-[#FF4A00] mb-6 relative z-10 border border-pure-white/10">
<span className="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">sell</span>
</div>
<div className="relative z-10">
<h3 className="text-xl font-bold text-pure-white mb-2">Discount</h3>
<p className="text-pure-white/50 text-sm">Classic discount system with several earning levels.</p>
</div>
</div>

<div className="rounded-3xl bg-[#0A0A0A] border border-pure-white/10 p-8 flex flex-col justify-between hover:border-pure-white/50 transition-colors group relative overflow-hidden">
<div className="absolute -right-10 -top-10 w-32 h-32 bg-pure-white blur-[60px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
<div className="w-12 h-12 rounded-full bg-pure-white/5 flex items-center justify-center text-pure-white mb-6 relative z-10 border border-pure-white/10">
<span className="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">confirmation_number</span>
</div>
<div className="relative z-10">
<h3 className="text-xl font-bold text-pure-white mb-2">Coupon</h3>
<p className="text-pure-white/50 text-sm">Attract new customers with one-off digital coupons.</p>
</div>
</div>

<div className="rounded-3xl bg-[#0A0A0A] border border-pure-white/10 p-8 flex flex-col justify-between hover:border-[#00d084]/50 transition-colors group relative overflow-hidden">
<div className="absolute -right-10 -top-10 w-32 h-32 bg-[#00d084] blur-[60px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
<div className="w-12 h-12 rounded-full bg-pure-white/5 flex items-center justify-center text-[#00d084] mb-6 relative z-10 border border-pure-white/10">
<span className="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">layers</span>
</div>
<div className="relative z-10">
<h3 className="text-xl font-bold text-pure-white mb-2">Multipass</h3>
<p className="text-pure-white/50 text-sm">Sell services in bulk to your customers (e.g. 5 for the price of 4).</p>
</div>
</div>

<div className="rounded-3xl bg-[#0A0A0A] border border-pure-white/10 p-8 flex flex-col justify-between hover:border-loyalist-purple/50 transition-colors group relative overflow-hidden">
<div className="absolute -right-10 -top-10 w-32 h-32 bg-loyalist-purple blur-[60px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
<div className="w-12 h-12 rounded-full bg-pure-white/5 flex items-center justify-center text-loyalist-purple mb-6 relative z-10 border border-pure-white/10">
<span className="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">card_giftcard</span>
</div>
<div className="relative z-10">
<h3 className="text-xl font-bold text-pure-white mb-2">Gift Card</h3>
<p className="text-pure-white/50 text-sm">Sell prepaid gift cards to customers via Apple Wallet.</p>
</div>
</div>

</div>
</div>
</section>


<section className="bg-[#050505] py-32 px-margin-desktop relative overflow-hidden border-t border-pure-white/5">
    <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-mint-accelerator/10 border border-mint-accelerator/20 text-mint-accelerator mb-6 uppercase tracking-widest text-xs font-bold">
                Tailored Solutions
            </div>
            <h2 className="font-display-lg-mobile md:text-5xl tracking-tight text-pure-white mb-6">Built for <span className="text-mint-accelerator">every local business.</span></h2>
            <p className="font-body-lg text-xl text-pure-white/50 max-w-2xl mx-auto">Whether you're pouring coffee or pumping iron, our platform adapts to your exact business model.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
            
            <div className="glass-card p-10 rounded-3xl group hover:border-mint-accelerator/50 transition-colors relative overflow-hidden">
                <div className="absolute -right-20 -top-20 w-48 h-48 bg-[#FFD700] blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
                <div className="w-16 h-16 rounded-2xl bg-pure-white/5 flex items-center justify-center mb-8 border border-pure-white/10 group-hover:-translate-y-2 transition-transform">
                    <span className="material-symbols-outlined text-3xl text-pure-white">local_cafe</span>
                </div>
                <h3 className="text-2xl font-bold text-pure-white mb-4">Cafés & Restaurants</h3>
                <p className="text-pure-white/60 mb-6">Drive morning habits. Use classic Stamps (Buy 9, get 1 free), combined with automated Push Notifications offering a free pastry on their birthday.</p>
                <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-pure-white/10 text-xs text-pure-white/80">Stamps</span>
                    <span className="px-3 py-1 rounded-full bg-pure-white/10 text-xs text-pure-white/80">Birthday Push</span>
                </div>
            </div>

            
            <div className="glass-card p-10 rounded-3xl group hover:border-loyalist-purple/50 transition-colors relative overflow-hidden">
                <div className="absolute -right-20 -top-20 w-48 h-48 bg-loyalist-purple blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
                <div className="w-16 h-16 rounded-2xl bg-pure-white/5 flex items-center justify-center mb-8 border border-pure-white/10 group-hover:-translate-y-2 transition-transform">
                    <span className="material-symbols-outlined text-3xl text-pure-white">spa</span>
                </div>
                <h3 className="text-2xl font-bold text-pure-white mb-4">Salons & Spas</h3>
                <p className="text-pure-white/60 mb-6">Sell bundles of services upfront. Use Multipass to sell 5 haircuts for the price of 4, guaranteeing return visits and boosting short-term cash flow.</p>
                <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-pure-white/10 text-xs text-pure-white/80">Multipass</span>
                    <span className="px-3 py-1 rounded-full bg-pure-white/10 text-xs text-pure-white/80">Win-back Automation</span>
                </div>
            </div>

            
            <div className="glass-card p-10 rounded-3xl group hover:border-mint-accelerator/50 transition-colors relative overflow-hidden">
                <div className="absolute -right-20 -top-20 w-48 h-48 bg-mint-accelerator blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
                <div className="w-16 h-16 rounded-2xl bg-pure-white/5 flex items-center justify-center mb-8 border border-pure-white/10 group-hover:-translate-y-2 transition-transform">
                    <span className="material-symbols-outlined text-3xl text-pure-white">fitness_center</span>
                </div>
                <h3 className="text-2xl font-bold text-pure-white mb-4">Gyms & Fitness</h3>
                <p className="text-pure-white/60 mb-6">Create elite communities. Issue digital Membership cards to control access, and use Referral Programs to let members bring a friend for free.</p>
                <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-pure-white/10 text-xs text-pure-white/80">Membership Cards</span>
                    <span className="px-3 py-1 rounded-full bg-pure-white/10 text-xs text-pure-white/80">Referrals</span>
                </div>
            </div>

            
            <div className="glass-card p-10 rounded-3xl group hover:border-[#FF4A00]/50 transition-colors relative overflow-hidden">
                <div className="absolute -right-20 -top-20 w-48 h-48 bg-[#FF4A00] blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
                <div className="w-16 h-16 rounded-2xl bg-pure-white/5 flex items-center justify-center mb-8 border border-pure-white/10 group-hover:-translate-y-2 transition-transform">
                    <span className="material-symbols-outlined text-3xl text-pure-white">shopping_bag</span>
                </div>
                <h3 className="text-2xl font-bold text-pure-white mb-4">Retail Stores</h3>
                <p className="text-pure-white/60 mb-6">Gamify the shopping experience. Reward 5% Cashback on every purchase, and upgrade big spenders to VIP Gold Tiers automatically.</p>
                <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-pure-white/10 text-xs text-pure-white/80">Cashback</span>
                    <span className="px-3 py-1 rounded-full bg-pure-white/10 text-xs text-pure-white/80">VIP Tiers</span>
                </div>
            </div>
        </div>
    </div>
</section>

<section className="bg-[#050505] relative z-10">
    
    <div className="purple-mesh py-32 px-margin-desktop relative border-t border-pure-white/10 rounded-t-[3rem] mt-[-3rem] shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 relative z-20">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-mint-accelerator/10 border border-mint-accelerator/20 text-mint-accelerator mb-6 uppercase tracking-widest text-xs font-bold">
                    Hardware-Free
                </div>
                <h2 className="font-display-lg-mobile md:text-5xl text-pure-white mb-6 leading-tight tracking-tight">Scan cards <br/>with our free <span className="text-mint-accelerator">Scanner App</span></h2>
                <p className="font-body-lg text-lg text-pure-white/60 mb-10 font-light">No additional hardware is required. Download the app on any smartphone or tablet and start scanning instantly. Lightning fast processing for high-volume businesses.</p>
                <button className="bg-pure-white text-stark-black px-8 py-4 rounded-xl font-button hover:bg-mint-accelerator transition-colors flex items-center gap-2 group">
                    Download Scanner App
                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </button>
            </div>
            <div className="order-1 md:order-2 relative z-10 parallax-mouse" data-parallax-speed="20">
                <div className="absolute -inset-10 bg-mint-accelerator opacity-10 blur-[100px] rounded-full"></div>
                
                
                <div className="absolute top-10 -left-10 z-30 glass-card p-4 rounded-2xl shadow-2xl flex items-center gap-4 max-w-[200px] parallax-mouse" data-parallax-speed="-15">
                    <img className="w-10 h-10 rounded-full border border-pure-white/20 grayscale" src="https://i.pravatar.cc/100?img=5" alt="User"/>
                    <p className="text-xs text-pure-white/80 font-medium">"My staff learned it in 5 minutes. So simple!"</p>
                </div>

                
                <img className="w-full max-w-[600px] mx-auto relative z-20 drop-shadow-[0_30px_60px_rgba(0,0,0,0.8)] md:translate-y-20 scale-110 hover:scale-115 transition-transform duration-[1.5s]" alt="Scanner App" src="/assets/scanner_mockup.png"/>
            </div>
        </div>
    </div>

    
    <div className="bg-[#050505] py-24 px-margin-desktop relative overflow-hidden border-t border-pure-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2 relative parallax-mouse" data-parallax-speed="15">
                <div className="absolute -inset-10 bg-loyalist-purple opacity-20 blur-[120px] rounded-full"></div>
                <img className="w-full relative z-10 drop-shadow-2xl rounded-2xl" src="/assets/kiosk_mode.png" alt="Tablet Kiosk Mode" />
            </div>
            <div className="w-full md:w-1/2">
                <h3 className="text-3xl font-bold text-pure-white mb-4">Tablet Kiosk Mode</h3>
                <p className="text-pure-white/60 text-lg mb-8 leading-relaxed">Let your customers serve themselves. Prop a tablet on your front counter and run our app in Kiosk Mode. Customers can quickly check-in, join the program, and view their balance without interrupting your cashier.</p>
                <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-pure-white/80"><span className="material-symbols-outlined text-mint-accelerator">check_circle</span> Zero staff training required</li>
                    <li className="flex items-center gap-3 text-pure-white/80"><span className="material-symbols-outlined text-mint-accelerator">check_circle</span> Captures phone numbers automatically</li>
                    <li className="flex items-center gap-3 text-pure-white/80"><span className="material-symbols-outlined text-mint-accelerator">check_circle</span> Secure and locked to a single screen</li>
                </ul>
            </div>
        </div>
    </div>

    
    <div className="py-32 px-margin-desktop relative overflow-hidden bg-[#0A0A0A]">
        <div className="absolute inset-0 bg-grid-pattern opacity-50"></div>
        
        <div className="max-w-3xl mx-auto text-center mb-24 relative z-10">
            <h2 className="font-display-lg-mobile md:text-5xl text-pure-white mb-6 tracking-tight">Automated <span className="text-transparent bg-clip-text bg-gradient-to-r from-pure-white to-pure-white/40">Push Notifications</span></h2>
            <p className="font-body-lg text-xl text-pure-white/50">Totally free &amp; unlimited. Reach your customers exactly when it matters most, directly on their lock screen.</p>
        </div>
        
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 relative z-10">
            
            <div className="glass-card p-8 rounded-3xl group hover:border-pure-white/20 hover:-translate-y-2 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-loyalist-purple to-[#4500ae] p-[1px] mb-6">
                    <div className="w-full h-full bg-[#050505] rounded-2xl flex items-center justify-center">
                        <span className="material-symbols-outlined text-loyalist-purple">receipt_long</span>
                    </div>
                </div>
                <h4 className="text-xl font-bold mb-2 text-pure-white">Transaction</h4>
                <p className="text-sm text-pure-white/50 font-light">Notify customers instantly about their point balance after purchase.</p>
            </div>
            
            
            <div className="glass-card p-8 rounded-3xl group hover:border-pure-white/20 hover:-translate-y-2 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-mint-accelerator to-[#00d084] p-[1px] mb-6">
                    <div className="w-full h-full bg-[#050505] rounded-2xl flex items-center justify-center">
                        <span className="material-symbols-outlined text-mint-accelerator">campaign</span>
                    </div>
                </div>
                <h4 className="text-xl font-bold mb-2 text-pure-white">Marketing</h4>
                <p className="text-sm text-pure-white/50 font-light">Blast new offers and seasonal discounts to all your members at once.</p>
            </div>
            
            
            <div className="glass-card p-8 rounded-3xl group hover:border-pure-white/20 hover:-translate-y-2 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pure-white to-pure-white/20 p-[1px] mb-6">
                    <div className="w-full h-full bg-[#050505] rounded-2xl flex items-center justify-center">
                        <span className="material-symbols-outlined text-pure-white">location_on</span>
                    </div>
                </div>
                <h4 className="text-xl font-bold mb-2 text-pure-white">Geolocation</h4>
                <p className="text-sm text-pure-white/50 font-light">Trigger alerts when customers walk past your physical location.</p>
            </div>
            
            
            <div className="glass-card p-8 rounded-3xl group hover:border-pure-white/20 hover:-translate-y-2 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-loyalist-purple to-[#4500ae] p-[1px] mb-6">
                    <div className="w-full h-full bg-[#050505] rounded-2xl flex items-center justify-center">
                        <span className="material-symbols-outlined text-loyalist-purple">verified_user</span>
                    </div>
                </div>
                <h4 className="text-xl font-bold mb-2 text-pure-white">Quality Control</h4>
                <p className="text-sm text-pure-white/50 font-light">Automated feedback requests after a visit to monitor satisfaction.</p>
            </div>
            
            
            <div className="glass-card p-8 rounded-3xl group hover:border-pure-white/20 hover:-translate-y-2 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-mint-accelerator to-[#00d084] p-[1px] mb-6">
                    <div className="w-full h-full bg-[#050505] rounded-2xl flex items-center justify-center">
                        <span className="material-symbols-outlined text-mint-accelerator">event_repeat</span>
                    </div>
                </div>
                <h4 className="text-xl font-bold mb-2 text-pure-white">Reminder</h4>
                <p className="text-sm text-pure-white/50 font-light">Re-engage inactive customers who haven't visited in 30 days.</p>
            </div>
            
            
            <div className="glass-card p-8 rounded-3xl group hover:border-pure-white/20 hover:-translate-y-2 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pure-white to-pure-white/20 p-[1px] mb-6">
                    <div className="w-full h-full bg-[#050505] rounded-2xl flex items-center justify-center">
                        <span className="material-symbols-outlined text-pure-white">edit_note</span>
                    </div>
                </div>
                <h4 className="text-xl font-bold mb-2 text-pure-white">Create Your Way</h4>
                <p className="text-sm text-pure-white/50 font-light">Custom triggers and scheduling for unique business workflows.</p>
            </div>
        </div>
    </div>
</section>


<section className="bg-[#050505] py-32 px-margin-desktop relative overflow-hidden border-t border-pure-white/5">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-mint-accelerator/10 via-[#050505] to-[#050505] pointer-events-none"></div>
    
    <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row gap-16 items-center">
        
        <div className="w-full md:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-mint-accelerator/10 border border-mint-accelerator/20 text-mint-accelerator mb-6 uppercase tracking-widest text-xs font-bold">
                Calculate ROI
            </div>
            <h2 className="font-display-lg-mobile md:text-5xl tracking-tight mb-6 text-pure-white">See exactly how much you'll <span className="text-mint-accelerator">earn.</span></h2>
            <p className="font-body-lg text-pure-white/50 mb-12 text-lg">Adjust the sliders below based on your current business metrics to see the projected impact of launching a Loyalist program.</p>
            
            <div className="space-y-10">
                
                <div>
                    <div className="flex justify-between items-center mb-4">
                        <label className="font-bold text-pure-white text-lg">Monthly Customers</label>
                        <span className="font-display-lg-mobile text-2xl text-mint-accelerator" id="customers-val">1,000</span>
                    </div>
                    <input type="range" id="customers-slider" min="100" max="10000" step="100" value="1000" className="w-full h-2 bg-pure-white/20 rounded-lg appearance-none cursor-pointer accent-mint-accelerator" />
                </div>
                
                <div>
                    <div className="flex justify-between items-center mb-4">
                        <label className="font-bold text-pure-white text-lg">Average Spend (£)</label>
                        <span className="font-display-lg-mobile text-2xl text-mint-accelerator" id="spend-val">£25</span>
                    </div>
                    <input type="range" id="spend-slider" min="5" max="200" step="5" value="25" className="w-full h-2 bg-pure-white/20 rounded-lg appearance-none cursor-pointer accent-mint-accelerator" />
                </div>
            </div>
        </div>
        
        
        <div className="w-full md:w-1/2">
            <div className="glass-card p-12 rounded-[2.5rem] border border-mint-accelerator/30 shadow-[0_30px_60px_rgba(97,238,128,0.15)] relative overflow-hidden group">
                <div className="absolute -right-20 -top-20 w-64 h-64 bg-mint-accelerator rounded-full blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
                
                <p className="text-pure-white/60 font-bold tracking-widest uppercase text-sm mb-2">Projected Monthly Added Revenue</p>
                <div className="font-display-lg-mobile text-[64px] font-extrabold text-pure-white tracking-tighter mb-8" id="revenue-val">
                    £4,500
                </div>
                
                <div className="h-px w-full bg-pure-white/10 mb-8"></div>
                
                <div className="grid grid-cols-2 gap-8">
                    <div>
                        <p className="text-pure-white/50 text-sm mb-1">Return Visits</p>
                        <p className="text-2xl font-bold text-pure-white" id="visits-val">+180</p>
                    </div>
                    <div>
                        <p className="text-pure-white/50 text-sm mb-1">Estimated ROI</p>
                        <p className="text-2xl font-bold text-mint-accelerator" id="roi-percent-val">4,500%</p>
                    </div>
                </div>
                
                <div className="mt-10 bg-mint-accelerator/10 border border-mint-accelerator/20 rounded-xl p-4 text-sm text-mint-accelerator flex items-start gap-3">
                    <span className="material-symbols-outlined text-xl">info</span>
                    <p>Based on our average customer data showing an 18% increase in return visit frequency.</p>
                </div>
            </div>
        </div>
    </div>
</section>



<section className="purple-mesh py-32 px-margin-desktop text-pure-white relative overflow-hidden">
<div className="absolute inset-0 bg-grid-pattern opacity-40"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="text-center mb-24">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pure-white/5 border border-pure-white/10 text-pure-white mb-6 uppercase tracking-widest text-xs font-bold">
    Transparent Pricing
</div>
<h2 className="font-display-lg-mobile md:text-5xl tracking-tight mb-4 text-pure-white">Scale as you <span className="text-mint-accelerator">grow.</span></h2>
<p className="font-body-lg text-xl text-pure-white/50 max-w-2xl mx-auto">One flat monthly fee. No hidden transaction costs. No percentage cuts.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="glass-card p-10 rounded-[2rem] flex flex-col transition-transform duration-500 hover:-translate-y-4 hover:border-pure-white/30 group">
<h3 className="text-2xl font-bold mb-2 text-pure-white">Start</h3>
<p className="text-pure-white/50 text-sm mb-8">For single-location shops just getting started.</p>
<div className="mb-10">
<span className="text-5xl font-display-lg-mobile font-extrabold tracking-tighter">£79</span>
<span className="text-pure-white/40">/mo</span>
</div>
<ul className="space-y-5 mb-12 text-pure-white/80 flex-grow text-sm font-medium">
<li className="flex items-center gap-3"><span className="material-symbols-outlined text-mint-accelerator text-lg">check_circle</span> 1 location</li>
<li className="flex items-center gap-3"><span className="material-symbols-outlined text-mint-accelerator text-lg">check_circle</span> 1 manager</li>
<li className="flex items-center gap-3"><span className="material-symbols-outlined text-mint-accelerator text-lg">check_circle</span> Unlimited digital cards</li>
<li className="flex items-center gap-3 text-pure-white/30"><span className="material-symbols-outlined text-lg">cancel</span> Advanced analytics</li>
</ul>
<button className="w-full bg-pure-white/10 text-pure-white border border-pure-white/20 py-4 rounded-xl font-button hover:bg-pure-white/20 transition-colors">Start free trial</button>
</div>

<div className="bg-gradient-to-b from-[#1A1A1A] to-[#0A0A0A] p-10 rounded-[2rem] flex flex-col border border-mint-accelerator/30 shadow-[0_30px_60px_rgba(0,0,0,0.5)] relative transform scale-105 z-20 group hover:border-mint-accelerator/80 transition-colors duration-500">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-mint-accelerator text-stark-black text-[10px] uppercase font-bold tracking-widest px-4 py-1.5 rounded-full animate-pulse shadow-[0_0_20px_rgba(97,238,128,0.6)]">Most Popular</div>
<h3 className="text-2xl font-bold mb-2 text-mint-accelerator">Grow</h3>
<p className="text-pure-white/50 text-sm mb-8">For growing businesses with multiple staff.</p>
<div className="mb-10">
<span className="text-5xl font-display-lg-mobile font-extrabold tracking-tighter text-pure-white">£99</span>
<span className="text-pure-white/40">/mo</span>
</div>
<ul className="space-y-5 mb-12 text-pure-white w-full text-sm font-medium flex-grow">
<li className="flex items-center gap-3"><span className="material-symbols-outlined text-mint-accelerator text-lg">check_circle</span> 3 locations</li>
<li className="flex items-center gap-3"><span className="material-symbols-outlined text-mint-accelerator text-lg">check_circle</span> 5 managers</li>
<li className="flex items-center gap-3"><span className="material-symbols-outlined text-mint-accelerator text-lg">check_circle</span> Unlimited digital cards</li>
<li className="flex items-center gap-3"><span className="material-symbols-outlined text-mint-accelerator text-lg">check_circle</span> Priority support</li>
</ul>
<button className="w-full bg-mint-accelerator text-stark-black py-4 rounded-xl font-button hover:opacity-90 transition-all active:scale-95 mint-glow mb-6">Start free trial</button>
<div className="flex items-center gap-3 bg-pure-white/5 p-3 rounded-lg border border-pure-white/10">
    <img className="w-8 h-8 rounded-full grayscale" src="https://i.pravatar.cc/100?img=9" alt="Sarah"/>
    <p className="text-[10px] text-pure-white/60 font-light italic leading-tight">"Since upgrading to Grow, our return visits literally doubled in two months."</p>
</div>
</div>

<div className="glass-card p-10 rounded-[2rem] flex flex-col transition-transform duration-500 hover:-translate-y-4 hover:border-pure-white/30 group">
<h3 className="text-2xl font-bold mb-2 text-pure-white">Business</h3>
<p className="text-pure-white/50 text-sm mb-8">For franchises and large scale operations.</p>
<div className="mb-10">
<span className="text-5xl font-display-lg-mobile font-extrabold tracking-tighter">£119</span>
<span className="text-pure-white/40">/mo</span>
</div>
<ul className="space-y-5 mb-12 text-pure-white/80 w-full flex-grow text-sm font-medium">
<li className="flex items-center gap-3"><span className="material-symbols-outlined text-mint-accelerator text-lg">check_circle</span> Unlimited locations</li>
<li className="flex items-center gap-3"><span className="material-symbols-outlined text-mint-accelerator text-lg">check_circle</span> Unlimited managers</li>
<li className="flex items-center gap-3"><span className="material-symbols-outlined text-mint-accelerator text-lg">check_circle</span> Unlimited digital cards</li>
<li className="flex items-center gap-3"><span className="material-symbols-outlined text-mint-accelerator text-lg">check_circle</span> Full API Access</li>
</ul>
<button className="w-full bg-pure-white/10 text-pure-white border border-pure-white/20 py-4 rounded-xl font-button hover:bg-pure-white/20 transition-colors">Start free trial</button>
</div>
</div>
</div>
</section>


<section className="bg-[#0A0A0A] py-32 px-margin-desktop relative border-t border-pure-white/5">
    <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
            <h2 className="font-display-lg-mobile md:text-5xl tracking-tight text-pure-white mb-6">Frequently asked <span className="text-mint-accelerator">questions.</span></h2>
            <p className="font-body-lg text-pure-white/50 text-xl">Everything you need to know about the product and billing.</p>
        </div>
        
        <div className="space-y-4">
            
            <details className="group bg-[#050505] border border-pure-white/10 rounded-2xl overflow-hidden transition-all duration-300 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex justify-between items-center p-6 cursor-pointer font-bold text-lg text-pure-white hover:text-mint-accelerator transition-colors">
                    Do I need to buy any hardware to scan cards?
                    <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180">expand_more</span>
                </summary>
                <div className="p-6 pt-0 text-pure-white/60 font-light leading-relaxed">
                    No. Our platform is 100% hardware-free. You and your staff can use our free Scanner App on any iOS or Android smartphone or tablet you already own.
                </div>
            </details>
            
            
            <details className="group bg-[#050505] border border-pure-white/10 rounded-2xl overflow-hidden transition-all duration-300 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex justify-between items-center p-6 cursor-pointer font-bold text-lg text-pure-white hover:text-mint-accelerator transition-colors">
                    How do customers install the card?
                    <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180">expand_more</span>
                </summary>
                <div className="p-6 pt-0 text-pure-white/60 font-light leading-relaxed">
                    They simply scan a QR code at your checkout counter (or tap an NFC tag), enter their phone number or email, and tap "Add to Wallet". It takes less than 15 seconds and doesn't require downloading any apps.
                </div>
            </details>
            
            
            <details className="group bg-[#050505] border border-pure-white/10 rounded-2xl overflow-hidden transition-all duration-300 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex justify-between items-center p-6 cursor-pointer font-bold text-lg text-pure-white hover:text-mint-accelerator transition-colors">
                    Can I send push notifications? Does it cost extra?
                    <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180">expand_more</span>
                </summary>
                <div className="p-6 pt-0 text-pure-white/60 font-light leading-relaxed">
                    Yes, and it's completely free. We don't charge per message. You can send unlimited transactional and marketing push notifications directly to your customers' lock screens.
                </div>
            </details>
            
            
            <details className="group bg-[#050505] border border-pure-white/10 rounded-2xl overflow-hidden transition-all duration-300 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex justify-between items-center p-6 cursor-pointer font-bold text-lg text-pure-white hover:text-mint-accelerator transition-colors">
                    Is there a contract or setup fee?
                    <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180">expand_more</span>
                </summary>
                <div className="p-6 pt-0 text-pure-white/60 font-light leading-relaxed">
                    No setup fees and no long-term contracts. All plans are month-to-month and you can cancel anytime.
                </div>
            </details>
        </div>
    </div>
</section>

<section className="bg-[#050505] py-32 px-margin-desktop relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-loyalist-purple/20 via-[#050505] to-[#050505] opacity-50"></div>
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16 relative z-10">
<div className="md:w-1/2">
<h2 className="font-display-lg-mobile md:text-5xl text-pure-white mb-6 tracking-tight">Automate your <br/><span className="text-mint-accelerator">workflow.</span></h2>
<p className="font-body-lg text-xl text-pure-white/50 mb-10 leading-relaxed max-w-lg">Stop doing manual work. Connect with 5,000+ apps and let our intelligent engine run your loyalty program on autopilot.</p>
<div className="flex flex-wrap gap-4 items-center">
        <div className="glass-card hover:-translate-y-1 transition-transform border border-pure-white/10 rounded-2xl p-5 flex items-center gap-4 shadow-xl">
            <div className="bg-[#FF4A00]/20 p-2.5 rounded-xl text-[#FF4A00]"><span className="material-symbols-outlined">bolt</span></div>
            <span className="font-bold text-pure-white">Zapier</span>
        </div>
        <div className="glass-card hover:-translate-y-1 transition-transform border border-pure-white/10 rounded-2xl p-5 flex items-center gap-4 shadow-xl">
            <div className="bg-pure-white/10 p-2.5 rounded-xl text-pure-white"><span className="material-symbols-outlined">square</span></div>
            <span className="font-bold text-pure-white">Square</span>
        </div>
        <div className="glass-card hover:-translate-y-1 transition-transform border border-pure-white/10 rounded-2xl p-5 flex items-center gap-4 shadow-xl">
            <div className="bg-[#FFE01B]/20 p-2.5 rounded-xl text-[#FFE01B]"><span className="material-symbols-outlined">mail</span></div>
            <span className="font-bold text-pure-white">Mailchimp</span>
        </div>
    </div>
</div>
<div className="md:w-1/2 relative w-full">
<div className="absolute -inset-10 bg-mint-accelerator/5 blur-[120px] rounded-full"></div>
<div className="w-full aspect-[4/3] glass-card rounded-[2rem] overflow-hidden flex flex-col items-center justify-center p-8 border border-pure-white/10 relative z-10 group">
    <div className="absolute inset-0 bg-gradient-to-br from-mint-accelerator/5 to-loyalist-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
    <div className="w-full max-w-sm space-y-4 relative z-10">
        
        <div className="w-full bg-[#0A0A0A] border border-pure-white/10 p-4 rounded-xl flex items-center gap-4 opacity-50 group-hover:opacity-80 transition-opacity duration-500 hover:-translate-y-1">
            <span className="material-symbols-outlined text-pure-white/50">shopping_cart</span>
            <div className="h-2 w-32 bg-pure-white/10 rounded-full"></div>
        </div>
        <div className="w-0.5 h-6 bg-mint-accelerator/50 mx-auto group-hover:h-8 transition-all duration-500"></div>
        <div className="w-full bg-loyalist-purple border border-mint-accelerator/30 p-4 rounded-xl flex items-center gap-4 shadow-[0_0_30px_rgba(95,0,234,0.3)] transform scale-105 group-hover:scale-110 group-hover:shadow-[0_0_50px_rgba(97,238,128,0.4)] transition-all duration-500 cursor-pointer">
            <span className="material-symbols-outlined text-mint-accelerator">add_circle</span>
            <div className="flex-grow">
                <div className="h-3 w-40 bg-pure-white/90 rounded-full mb-2"></div>
                <div className="h-2 w-24 bg-pure-white/40 rounded-full"></div>
            </div>
            <div className="px-2 py-1 bg-mint-accelerator text-stark-black text-xs font-bold rounded shadow-[0_0_10px_rgba(97,238,128,0.8)]">+50 pts</div>
        </div>
        <div className="w-0.5 h-6 bg-pure-white/20 mx-auto group-hover:h-8 transition-all duration-500"></div>
        <div className="w-full bg-[#0A0A0A] border border-pure-white/10 p-4 rounded-xl flex items-center gap-4 opacity-50 group-hover:opacity-80 transition-opacity duration-500 hover:-translate-y-1">
            <span className="material-symbols-outlined text-pure-white/50">notifications_active</span>
            <div className="h-2 w-28 bg-pure-white/10 rounded-full"></div>
        </div>
    </div>
</div>
</div>
</div>
</section>


<section className="bg-[#0A0A0A] py-32 px-margin-desktop relative overflow-hidden border-t border-pure-white/5">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-1/2 relative parallax-mouse" data-parallax-speed="-10">
            <div className="absolute -inset-10 bg-mint-accelerator opacity-10 blur-[120px] rounded-full"></div>
            <img className="w-full relative z-10 drop-shadow-2xl rounded-2xl" src="/assets/integrations.png" alt="Integrations Hub" />
        </div>
        <div className="w-full md:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pure-white/5 border border-pure-white/10 text-pure-white mb-6 uppercase tracking-widest text-xs font-bold">
                Connect Everything
            </div>
            <h2 className="font-display-lg-mobile md:text-5xl tracking-tight text-pure-white mb-6">Plays nicely with <span className="text-transparent bg-clip-text bg-gradient-to-r from-mint-accelerator to-[#00d084]">your tech stack.</span></h2>
            <p className="font-body-lg text-xl text-pure-white/50 mb-10 leading-relaxed">No need to rip and replace. Loyalist integrates directly with the Point of Sale systems and Marketing CRMs you already use.</p>
            <div className="grid grid-cols-2 gap-4">
                <div className="glass-card p-4 rounded-xl flex items-center gap-3 border border-pure-white/10 hover:border-mint-accelerator/50 transition-colors">
                    <span className="material-symbols-outlined text-mint-accelerator">point_of_sale</span>
                    <span className="text-pure-white font-bold">Square POS</span>
                </div>
                <div className="glass-card p-4 rounded-xl flex items-center gap-3 border border-pure-white/10 hover:border-mint-accelerator/50 transition-colors">
                    <span className="material-symbols-outlined text-mint-accelerator">storefront</span>
                    <span className="text-pure-white font-bold">Shopify</span>
                </div>
                <div className="glass-card p-4 rounded-xl flex items-center gap-3 border border-pure-white/10 hover:border-mint-accelerator/50 transition-colors">
                    <span className="material-symbols-outlined text-mint-accelerator">restaurant</span>
                    <span className="text-pure-white font-bold">Toast POS</span>
                </div>
                <div className="glass-card p-4 rounded-xl flex items-center gap-3 border border-pure-white/10 hover:border-mint-accelerator/50 transition-colors">
                    <span className="material-symbols-outlined text-mint-accelerator">api</span>
                    <span className="text-pure-white font-bold">Open API</span>
                </div>
            </div>
        </div>
    </div>
</section>


<section className="bg-[#050505] py-32 px-margin-desktop relative overflow-hidden border-t border-pure-white/5">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-16">
        <div className="w-full md:w-1/2 relative parallax-mouse" data-parallax-speed="15">
            <div className="absolute -inset-10 bg-loyalist-purple opacity-20 blur-[120px] rounded-full"></div>
            <img className="w-full relative z-10 drop-shadow-[0_30px_60px_rgba(0,0,0,0.8)] rounded-2xl" src="/assets/crm_dashboard.png" alt="Smart CRM Dashboard" />
        </div>
        <div className="w-full md:w-1/2">
            <h2 className="font-display-lg-mobile md:text-5xl tracking-tight text-pure-white mb-6">Smart CRM & <span className="text-loyalist-purple">RFM Analysis</span></h2>
            <p className="font-body-lg text-xl text-pure-white/50 mb-8 leading-relaxed">Stop guessing who your best customers are. Our built-in CRM automatically segments your audience based on Recency, Frequency, and Monetary value (RFM).</p>
            <div className="space-y-6">
                <div className="bg-[#0A0A0A] p-6 rounded-2xl border border-pure-white/10">
                    <h4 className="text-pure-white font-bold mb-2 flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-mint-accelerator"></span> VIP Champions</h4>
                    <p className="text-pure-white/50 text-sm">Customers who buy often and spend the most. Reward them automatically.</p>
                </div>
                <div className="bg-[#0A0A0A] p-6 rounded-2xl border border-pure-white/10">
                    <h4 className="text-pure-white font-bold mb-2 flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-[#FFD700]"></span> Promising Regulars</h4>
                    <p className="text-pure-white/50 text-sm">Recent shoppers with high frequency. Send a push to upsell them.</p>
                </div>
                <div className="bg-[#0A0A0A] p-6 rounded-2xl border border-pure-white/10">
                    <h4 className="text-pure-white font-bold mb-2 flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-[#FF4A00]"></span> At-Risk (Hibernating)</h4>
                    <p className="text-pure-white/50 text-sm">Haven't visited in 60 days. Automatically trigger a "Win-Back" discount.</p>
                </div>
            </div>
        </div>
    </div>
</section>


<section className="bg-[#050505] py-24 px-margin-desktop text-center relative border-t border-pure-white/5 overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-mint-accelerator/5 via-[#050505] to-[#050505] pointer-events-none"></div>
    <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="font-display-lg-mobile md:text-5xl tracking-tight text-pure-white mb-6">Join over <span className="text-mint-accelerator">30,000 companies.</span></h2>
        <p className="font-body-lg text-xl text-pure-white/50 mb-12">Recognized globally for ease of use and ROI generation.</p>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-80 hover:opacity-100 transition-opacity duration-500">
            <div className="flex flex-col items-center gap-2">
                <div className="w-20 h-24 bg-[#0A0A0A] border border-pure-white/10 rounded-t-full rounded-b-xl flex items-center justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#FFD700]/20 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
                    <span className="material-symbols-outlined text-4xl text-[#FFD700] relative z-10 group-hover:scale-110 transition-transform">workspace_premium</span>
                </div>
                <span className="text-xs font-bold text-pure-white/60 tracking-wider">TOP RATED</span>
            </div>
            
            <div className="flex flex-col items-center gap-2">
                <div className="w-20 h-24 bg-[#0A0A0A] border border-pure-white/10 rounded-t-full rounded-b-xl flex items-center justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-b from-mint-accelerator/20 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
                    <span className="material-symbols-outlined text-4xl text-mint-accelerator relative z-10 group-hover:scale-110 transition-transform">rocket_launch</span>
                </div>
                <span className="text-xs font-bold text-pure-white/60 tracking-wider">FASTEST SETUP</span>
            </div>
            
            <div className="flex flex-col items-center gap-2">
                <div className="w-20 h-24 bg-[#0A0A0A] border border-pure-white/10 rounded-t-full rounded-b-xl flex items-center justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-b from-loyalist-purple/20 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
                    <span className="material-symbols-outlined text-4xl text-loyalist-purple relative z-10 group-hover:scale-110 transition-transform">support_agent</span>
                </div>
                <span className="text-xs font-bold text-pure-white/60 tracking-wider">BEST SUPPORT</span>
            </div>
            
            <div className="flex flex-col items-center gap-2">
                <div className="w-20 h-24 bg-[#0A0A0A] border border-pure-white/10 rounded-t-full rounded-b-xl flex items-center justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#00d084]/20 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
                    <span className="material-symbols-outlined text-4xl text-[#00d084] relative z-10 group-hover:scale-110 transition-transform">trending_up</span>
                </div>
                <span className="text-xs font-bold text-pure-white/60 tracking-wider">BEST ROI</span>
            </div>
            
            <div className="flex flex-col items-center gap-2">
                <div className="w-20 h-24 bg-[#0A0A0A] border border-pure-white/10 rounded-t-full rounded-b-xl flex items-center justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-b from-pure-white/20 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
                    <span className="material-symbols-outlined text-4xl text-pure-white relative z-10 group-hover:scale-110 transition-transform">thumb_up</span>
                </div>
                <span className="text-xs font-bold text-pure-white/60 tracking-wider">EASIEST USE</span>
            </div>
        </div>
    </div>
</section>

<footer className="bg-[#050505] w-full flex flex-col items-center relative z-20 overflow-hidden">
    
    
    <div className="w-full bg-loyalist-purple relative overflow-hidden py-32 px-margin-desktop border-y border-pure-white/10">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-mint-accelerator/20 to-transparent"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
            <h2 className="font-display-lg-mobile md:text-[80px] tracking-tighter text-pure-white mb-8 leading-[0.95]">
                Ready to turn visitors into <br/><span className="text-mint-accelerator italic">obsessed regulars?</span>
            </h2>
            <p className="font-body-lg text-pure-white/80 text-2xl mb-12 max-w-2xl mx-auto font-light">Join 30,000+ local businesses growing their revenue on autopilot. Set up takes less than 10 minutes.</p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <button className="bg-pure-white text-loyalist-purple px-12 py-6 rounded-2xl font-bold text-xl hover:bg-mint-accelerator hover:text-stark-black transition-all duration-300 shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:-translate-y-2 active:scale-95">
                    Start 14-Day Free Trial
                </button>
                <button className="bg-black/20 backdrop-blur-md text-pure-white border border-pure-white/20 px-10 py-6 rounded-2xl font-bold text-xl hover:bg-black/40 transition-all duration-300 flex items-center gap-2 active:scale-95">
                    <span className="material-symbols-outlined">calendar_today</span> Book Demo
                </button>
            </div>
            <p className="text-pure-white/50 text-sm mt-8 font-medium">No credit card required • Cancel anytime</p>
        </div>
    </div>

    
    <div className="w-full py-20 px-margin-desktop text-pure-white bg-[#0A0A0A]">
        <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-5 gap-12 mb-20">
            <div className="col-span-1 md:col-span-2">
                <div className="flex items-center gap-3 mb-6">
                    <img alt="Loyalist" className="h-10" src="https://cdn.digitalwallet.cards/products/16186/themes/48564/logoLight"/>
                </div>
                <p className="font-body-md text-pure-white/60 max-w-xs mb-8">The premium digital loyalty platform for high-growth local businesses. Built to convert.</p>
                <div className="flex gap-4">
                    <a className="w-10 h-10 rounded-full bg-pure-white/5 border border-pure-white/10 flex items-center justify-center text-pure-white/50 hover:text-mint-accelerator hover:border-mint-accelerator transition-all" href="#"><span className="material-symbols-outlined text-sm">public</span></a>
                    <a className="w-10 h-10 rounded-full bg-pure-white/5 border border-pure-white/10 flex items-center justify-center text-pure-white/50 hover:text-mint-accelerator hover:border-mint-accelerator transition-all" href="#"><span className="material-symbols-outlined text-sm">alternate_email</span></a>
                </div>
            </div>
            
            <div>
                <h4 className="font-bold text-lg mb-6 text-pure-white">Product</h4>
                <ul className="space-y-4 font-body-md text-sm">
                    <li><a className="text-pure-white/60 hover:text-mint-accelerator transition-colors" href="#">Digital Cards</a></li>
                    <li><a className="text-pure-white/60 hover:text-mint-accelerator transition-colors" href="#">Scanner App</a></li>
                    <li><a className="text-pure-white/60 hover:text-mint-accelerator transition-colors" href="#">Push Notifications</a></li>
                    <li><a className="text-pure-white/60 hover:text-mint-accelerator transition-colors" href="#">Automations</a></li>
                </ul>
            </div>
            
            <div>
                <h4 className="font-bold text-lg mb-6 text-pure-white">Resources</h4>
                <ul className="space-y-4 font-body-md text-sm">
                    <li><a className="text-pure-white/60 hover:text-mint-accelerator transition-colors" href="#">Pricing</a></li>
                    <li><a className="text-pure-white/60 hover:text-mint-accelerator transition-colors" href="#">ROI Calculator</a></li>
                    <li><a className="text-pure-white/60 hover:text-mint-accelerator transition-colors" href="#">Help Center</a></li>
                    <li><a className="text-pure-white/60 hover:text-mint-accelerator transition-colors" href="#">API Docs</a></li>
                </ul>
            </div>
            
            <div>
                <h4 className="font-bold text-lg mb-6 text-pure-white">Company</h4>
                <ul className="space-y-4 font-body-md text-sm">
                    <li><a className="text-pure-white/60 hover:text-mint-accelerator transition-colors" href="#">About Us</a></li>
                    <li><a className="text-pure-white/60 hover:text-mint-accelerator transition-colors" href="#">Privacy Policy</a></li>
                    <li><a className="text-pure-white/60 hover:text-mint-accelerator transition-colors" href="#">Terms of Service</a></li>
                    <li className="text-pure-white/40 pt-4">support@salesevo.com</li>
                </ul>
            </div>
        </div>
        
        <div className="w-full max-w-7xl mx-auto pt-8 border-t border-pure-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="font-body-md text-sm text-pure-white/40">© 2026 Sales EVO LTD. All rights reserved.</p>
            <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-mint-accelerator animate-pulse"></div>
                <span className="text-sm text-pure-white/40">All systems operational</span>
            </div>
        </div>
    </div>
</footer>


    </div>
  );
}
