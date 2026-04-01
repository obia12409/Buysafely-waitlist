"use client";
import React, { useState } from 'react';
import { ShieldCheck, MessageSquare, BarChart3, Globe, Lock, CheckCircle } from 'lucide-react';

export default function BuySafelyWaitlist() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // PASTE YOUR GOOGLE SCRIPT URL HERE
      const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbziYF5uAeD1Ewlhb556ZDjACjiWviKNnKzpGCbivQuzerXX3BVv3UH2dW6e6oYipfe7_g/exec';

      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email })
      });

      setStatus('success');
      setEmail('');
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-[#ece5dd] font-sans selection:bg-[#25D366] text-[#075E54]">
      {/* African Geometric Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" 
           style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/az-subtle.png')` }}></div>

      {/* Header */}
      <nav className="relative z-10 flex justify-between items-center p-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="bg-[#075E54] p-2 rounded-xl shadow-lg">
            <ShieldCheck className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-black tracking-tighter">BuySafely.Africa</span>
        </div>
      </nav>

      {/* Main Hero */}
      <main className="relative z-10 max-w-4xl mx-auto px-6 pt-12 pb-24 text-center">
        <div className="inline-flex items-center gap-2 bg-[#25D366]/15 px-4 py-2 rounded-full text-sm font-bold mb-8 border border-[#25D366]/30">
          <MessageSquare size={16} />
          <span>Zero Scams. Zero Downloads. Built for WhatsApp.</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight text-[#075E54]">
          The Trust <span className="text-[#25D366]">Protocol</span> <br /> For African Traders
        </h1>
        
        <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-2xl mx-auto">
          Secure your transactions with cryptographic **PoD tokens**. [span_10](start_span)[span_11](start_span)[span_12](start_span)No new apps—just the WhatsApp you already use to grow your business[span_10](end_span)[span_11](end_span)[span_12](end_span).
        </p>

        {/* Waitlist Form */}
        <div className="max-w-lg mx-auto">
          {status === 'success' ? (
            <div className="bg-white p-8 rounded-3xl shadow-xl border-2 border-[#25D366] flex flex-col items-center animate-in fade-in zoom-in duration-500">
              <CheckCircle className="text-[#25D366] w-16 h-16 mb-4" />
              <h3 className="text-2xl font-bold">You're in the Protocol!</h3>
              <p className="text-gray-600 mt-2">We'll notify you via WhatsApp when we launch.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white p-2 rounded-2xl shadow-2xl flex flex-col md:flex-row gap-2 border border-white/50">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address" 
                className="flex-1 px-6 py-4 rounded-xl focus:outline-none text-gray-800 bg-transparent"
                required
              />
              <button 
                disabled={status === 'loading'}
                className="bg-[#25D366] hover:bg-[#128C7E] disabled:opacity-50 text-white font-bold px-8 py-4 rounded-xl transition-all transform hover:scale-[1.02] shadow-lg"
              >
                {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
              </button>
            </form>
          )}
          {status === 'error' && <p className="mt-4 text-red-600 font-bold">Something went wrong. Please try again.</p>}
        </div>
      </main>

      {/* Features - Highlighting Protocol & PoD tokens */}
      <section className="relative z-10 bg-[#075E54] py-24 px-6 rounded-t-[3rem] shadow-inner">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-16 text-white">
            <div className="group">
              <div className="bg-[#128C7E] w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#25D366] transition-colors">
                <Lock className="text-white w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-4">Secure Protocol</h3>
              <p className="text-gray-300 leading-relaxed">Funds stay in the vault until you confirm. [span_13](start_span)[span_14](start_span)A layer of trust specifically for African social commerce[span_13](end_span)[span_14](end_span).</p>
            </div>
            <div className="group">
              <div className="bg-[#128C7E] w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#25D366] transition-colors">
                <ShieldCheck className="text-white w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-4">PoD token Verification</h3>
              [span_15](start_span)[span_16](start_span)<p className="text-gray-300 leading-relaxed">The Proof of Delivery (PoD) token ensures sellers only get paid once the buyer is satisfied[span_15](end_span)[span_16](end_span).</p>
            </div>
            <div className="group">
              <div className="bg-[#128C7E] w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#25D366] transition-colors">
                <BarChart3 className="text-white w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-4">Auto-Bookkeeping</h3>
              [span_17](start_span)[span_18](start_span)[span_19](start_span)<p className="text-gray-300 leading-relaxed">Every transaction via the Protocol builds your credit score and generates free business reports[span_17](end_span)[span_18](end_span)[span_19](end_span).</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 py-12 text-center text-gray-500 text-sm">
        <p>© 2026 BuySafely. [span_20](start_span)[span_21](start_span)Built for the traders of Lagos, Nairobi, and Accra[span_20](end_span)[span_21](end_span).</p>
      </footer>
    </div>
  );
}
