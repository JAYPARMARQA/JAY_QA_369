
import React, { useState, useEffect } from 'react';

const DynamicElements: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<string | null>(null);
  const [showHidden, setShowHidden] = useState(false);
  const [timer, setTimer] = useState(5);

  const startLoading = () => {
    setLoading(true);
    setData(null);
    setTimeout(() => {
      setData("DATA SYNTHESIS COMPLETE");
      setLoading(false);
    }, 3000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    
    if (timer === 0) {
      setShowHidden(true);
    }
    
    return () => clearInterval(interval);
  }, [timer]);

  return (
    <div className="max-w-4xl mx-auto space-y-12 animate-fadeIn pb-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <h2 className="text-5xl font-black text-white tracking-tighter leading-none">TIME & STATE</h2>
          <p className="text-slate-500 font-black text-xs uppercase tracking-[0.3em]">Handling Race Conditions</p>
        </div>
        <div className="px-6 py-2 rounded-2xl bg-orange-500/10 border border-orange-500/30 text-orange-400 text-[10px] font-black tracking-[0.3em] shadow-[0_0_15px_rgba(249,115,22,0.2)]">
          ASYNC MONITOR ACTIVE
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-slate-900/40 rounded-[3rem] p-12 shadow-2xl border border-white/5 flex flex-col justify-between relative group">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-600/5 rounded-full blur-[80px]"></div>
          <div>
            <h3 className="text-2xl font-black mb-6 text-white uppercase tracking-tight">AJAX BUFFER</h3>
            <p className="text-slate-500 mb-10 font-medium leading-relaxed">Simulates delayed element injection. Test your <code className="bg-orange-500/10 px-2 rounded text-orange-400 border border-orange-500/20">WaitForElement</code> logic.</p>
            
            <button 
              id="start-ajax-btn"
              onClick={startLoading}
              disabled={loading}
              className={`w-full py-6 rounded-2xl font-black text-sm tracking-[0.4em] uppercase shadow-2xl transition-all ${
                loading ? 'bg-slate-800 text-slate-500 cursor-not-allowed border border-white/5' : 'bg-gradient-to-r from-orange-600 to-rose-600 text-white hover:scale-105 active:scale-95 shadow-orange-900/20'
              }`}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-4">
                  <i className="fa-solid fa-cog animate-spin"></i>
                  Processing...
                </span>
              ) : 'Init Async Fetch'}
            </button>
          </div>

          <div className="mt-12 h-40 flex items-center justify-center border-4 border-dashed border-slate-800 rounded-[2.5rem] bg-slate-950/50 relative overflow-hidden group-hover:border-orange-500/20 transition-colors">
            {loading && <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent animate-pulse"></div>}
            {data ? (
              <div id="dynamic-message" className="text-emerald-400 font-black flex flex-col items-center gap-4 text-center animate-scaleIn">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(52,211,153,0.3)]">
                  <i className="fa-solid fa-check text-xl"></i>
                </div>
                <span className="tracking-[0.2em] text-xs uppercase">{data}</span>
              </div>
            ) : (
              <span className="text-slate-800 font-black uppercase tracking-[0.4em] text-[10px]">Buffer Empty</span>
            )}
          </div>
        </div>

        <div className="bg-slate-900/40 rounded-[3rem] p-12 shadow-2xl border border-white/5 relative">
          <h3 className="text-2xl font-black mb-6 text-white uppercase tracking-tight">Visibility Gate</h3>
          <p className="text-slate-500 mb-10 font-medium leading-relaxed">Element is rendered but hidden until timer expiration.</p>
          
          <div className="flex items-center justify-center mb-12">
            <div className="relative w-40 h-40 flex items-center justify-center">
              <svg className="absolute inset-0 w-full h-full -rotate-90 filter drop-shadow-[0_0_10px_rgba(249,115,22,0.3)]">
                <circle cx="80" cy="80" r="72" fill="none" stroke="#0f172a" strokeWidth="12" />
                <circle 
                  cx="80" 
                  cy="80" 
                  r="72" 
                  fill="none" 
                  stroke="url(#neon-gradient)" 
                  strokeWidth="12" 
                  strokeLinecap="round"
                  strokeDasharray="452.3" 
                  strokeDashoffset={452.3 - (452.3 * (5 - timer)) / 5}
                  className="transition-all duration-1000"
                />
                <defs>
                  <linearGradient id="neon-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#f97316" />
                    <stop offset="100%" stopColor="#e11d48" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="flex flex-col items-center leading-none">
                <span id="countdown-timer" className="text-5xl font-black text-white">{timer}</span>
                <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest mt-1">SEC</span>
              </div>
            </div>
          </div>

          <div className="h-44 bg-slate-950 rounded-[2rem] flex items-center justify-center p-8 border border-white/5 shadow-inner relative overflow-hidden">
            {!showHidden ? (
              <div className="flex flex-col items-center gap-3 opacity-20">
                <i className="fa-solid fa-lock text-slate-400 text-3xl"></i>
                <span className="text-slate-400 font-black text-[9px] uppercase tracking-[0.4em]">Encrypted Layer</span>
              </div>
            ) : (
              <div id="secret-element" className="bg-gradient-to-br from-orange-600/20 via-orange-600/40 to-rose-600/20 text-white p-8 rounded-2xl shadow-[0_0_30px_rgba(249,115,22,0.2)] animate-scaleIn text-center w-full border border-orange-500/30">
                <h4 className="font-black text-xl mb-2 tracking-tighter">ACCESS GRANTED</h4>
                <div className="w-1/2 h-1 bg-orange-500 mx-auto rounded-full shadow-[0_0_10px_rgba(249,115,22,0.8)] mb-4"></div>
                <p className="text-[9px] font-black text-orange-300 uppercase tracking-[0.4em]">Locator Protocol Initialized</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicElements;
