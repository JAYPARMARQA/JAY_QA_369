
import React, { useState } from 'react';
import { generateAutomationChallenge } from '../services/geminiService';
import { AICase } from '../types';

const AISandbox: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [challenge, setChallenge] = useState<AICase | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const getNewChallenge = async () => {
    setLoading(true);
    setChallenge(null);
    setShowAnswer(false);
    try {
      const data = await generateAutomationChallenge();
      setChallenge(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-12 animate-fadeIn pb-20">
      <div className="bg-slate-900 rounded-[3rem] p-12 text-white shadow-[0_20px_60px_rgba(0,0,0,0.6)] border border-fuchsia-500/20 relative overflow-hidden group">
        {/* Animated Neon Glows */}
        <div className="absolute top-0 right-0 w-[40%] h-full bg-[radial-gradient(circle_at_100%_0%,rgba(217,70,239,0.1),transparent_70%)]"></div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent shadow-[0_0_15px_rgba(217,70,239,0.8)]"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-8 text-center md:text-left">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/30 text-[9px] font-black uppercase tracking-[0.4em] text-fuchsia-400">
              <span className="w-1.5 h-1.5 bg-fuchsia-500 rounded-full animate-pulse"></span>
              Neural Core: Synthesizing
            </div>
            <h2 className="text-6xl lg:text-7xl font-black tracking-tighter leading-none">
              AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-indigo-400">DOM</span>
            </h2>
            <p className="text-slate-400 text-lg font-medium leading-relaxed max-w-lg">
              Forge unique web landscapes instantly. Challenge your script's logic against randomized, unpredictable element structures.
            </p>
            <button 
              onClick={getNewChallenge}
              disabled={loading}
              className="px-12 py-6 bg-gradient-to-r from-fuchsia-600 to-indigo-700 text-white font-black rounded-[2rem] shadow-[0_15px_40px_rgba(168,85,247,0.4)] hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:scale-100 flex items-center justify-center gap-5 text-xl tracking-[0.1em] group/btn"
            >
              {loading ? (
                <i className="fa-solid fa-sync animate-spin"></i>
              ) : (
                <i className="fa-solid fa-bolt-lightning text-amber-400 group-hover/btn:rotate-12 transition-transform"></i>
              )}
              {loading ? 'SYNTHESIZING...' : 'INIT CHALLENGE'}
            </button>
          </div>
          <div className="w-64 h-64 bg-slate-950 rounded-[3.5rem] flex items-center justify-center border border-white/5 shadow-2xl relative group-hover:scale-105 transition-transform">
            <div className="absolute inset-0 bg-fuchsia-500/5 blur-3xl rounded-full"></div>
            <i className="fa-solid fa-brain text-9xl text-white opacity-90 drop-shadow-[0_0_30px_rgba(168,85,247,0.6)]"></i>
          </div>
        </div>
      </div>

      {challenge && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 animate-fadeIn">
          <div className="space-y-10">
            <div className="bg-slate-900 rounded-[3rem] p-12 shadow-2xl border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-1 h-full bg-fuchsia-500/50"></div>
              <h3 className="text-3xl font-black text-white mb-8 tracking-tight uppercase">{challenge.title}</h3>
              <div className="p-8 bg-slate-950 rounded-[2rem] text-slate-400 font-bold text-sm leading-relaxed mb-10 border border-white/5 shadow-inner">
                <span className="text-fuchsia-500 uppercase text-[9px] font-black block mb-4 tracking-[0.4em]">Mission Parameters</span>
                {challenge.scenario}
              </div>
              
              <h4 className="text-[10px] font-black text-slate-600 uppercase mb-6 tracking-[0.4em]">Active Viewport</h4>
              <div className="p-10 border-4 border-dashed border-slate-800 rounded-[2.5rem] bg-slate-950 min-h-[250px] flex items-center justify-center relative group">
                <div className="absolute inset-0 bg-fuchsia-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div 
                  id="ai-rendered-content" 
                  dangerouslySetInnerHTML={{ __html: challenge.htmlSnippet }}
                  className="w-full relative z-10"
                />
              </div>
            </div>
          </div>

          <div className="space-y-10">
            <div className="bg-slate-950 rounded-[3rem] p-12 shadow-2xl border border-white/5 overflow-hidden flex flex-col min-h-[500px]">
              <div className="flex items-center justify-between mb-8">
                <h4 className="text-[10px] font-black text-fuchsia-500 uppercase tracking-[0.4em]">DOM Inspector</h4>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                </div>
              </div>
              
              <div className="flex-grow p-8 bg-black/40 rounded-[2rem] font-mono text-xs text-fuchsia-300/80 border border-white/5 overflow-y-auto shadow-inner mb-10 leading-relaxed scrollbar-dark">
                {challenge.htmlSnippet}
              </div>

              <div className="mt-auto">
                {!showAnswer ? (
                  <button 
                    onClick={() => setShowAnswer(true)}
                    className="w-full py-5 bg-slate-900 text-fuchsia-400 border border-fuchsia-500/20 rounded-2xl font-black uppercase text-xs tracking-[0.3em] hover:bg-fuchsia-500/10 transition-all shadow-lg"
                  >
                    Reveal Solution Protocol
                  </button>
                ) : (
                  <div className="space-y-6 animate-fadeIn">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black text-emerald-400 uppercase tracking-[0.4em]">Verified XPath:</span>
                      <button onClick={() => setShowAnswer(false)} className="text-[9px] font-black text-slate-600 hover:text-white uppercase tracking-widest transition-colors">Abort</button>
                    </div>
                    <div className="bg-emerald-500/10 border border-emerald-500/20 p-6 rounded-2xl font-mono text-emerald-300 break-all text-xs shadow-inner">
                      {challenge.targetXPath}
                    </div>
                    <p className="text-[9px] text-slate-600 font-bold italic text-center uppercase tracking-widest">
                      Cross-browser stability verified.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {!challenge && !loading && (
        <div className="text-center py-32 bg-slate-900/20 rounded-[4rem] border-4 border-dashed border-slate-800 flex flex-col items-center">
          <div className="w-24 h-24 rounded-full bg-slate-900 flex items-center justify-center mb-8 border border-white/5">
            <i className="fa-solid fa-terminal text-4xl text-slate-700"></i>
          </div>
          <h3 className="text-2xl font-black text-slate-600 uppercase tracking-[0.4em]">Interface Ready</h3>
          <p className="text-slate-700 font-bold mt-4 uppercase text-[10px] tracking-[0.2em]">Awaiting Synthesis Command</p>
        </div>
      )}
    </div>
  );
};

export default AISandbox;
