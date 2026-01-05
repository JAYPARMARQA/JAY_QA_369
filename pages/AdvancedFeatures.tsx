
import React, { useState } from 'react';
import Tooltip from '../components/Tooltip';

const AdvancedFeatures: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);

  const triggerAlert = () => {
    setAlertVisible(true);
    setTimeout(() => setAlertVisible(false), 3000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-16 animate-fadeIn pb-32">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <h2 className="text-5xl font-black text-white tracking-tighter leading-none">ELITE DOM</h2>
          <p className="text-slate-500 font-black text-xs uppercase tracking-[0.3em]">Boundary Testing Protocols</p>
        </div>
        <div className="px-6 py-2 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-[10px] font-black tracking-[0.3em] shadow-[0_0_15px_rgba(244,63,94,0.2)]">
          EXPERT LEVEL ACTIVE
        </div>
      </div>

      {/* Custom Modal Practice */}
      <section className="bg-slate-900/40 backdrop-blur-xl rounded-[3rem] p-12 shadow-2xl border border-white/5 relative group overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 bg-rose-600/5 rounded-full blur-[80px]"></div>
        <h3 className="text-2xl font-black mb-6 text-white uppercase tracking-tight">1. Overlay Interception</h3>
        <p className="text-slate-400 mb-10 font-medium leading-relaxed max-w-2xl">Practice handling <code className="text-rose-400 bg-rose-500/10 px-1 rounded">ElementClickInterceptedException</code>. You must verify visibility before interaction.</p>
        
        <Tooltip content="Tip: Modals often create a backdrop that intercepts clicks." position="right">
          <button 
            id="open-modal-btn"
            onClick={() => setModalOpen(true)}
            className="bg-gradient-to-r from-rose-600 to-indigo-700 text-white px-10 py-5 rounded-[1.5rem] font-black uppercase text-xs tracking-widest shadow-2xl hover:scale-105 transition-all shadow-rose-950/20"
          >
            Inject Practice Modal
          </button>
        </Tooltip>

        {modalOpen && (
          <div id="modal-overlay" className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-[100] flex items-center justify-center p-6 animate-fadeIn">
            <div id="main-modal" className="bg-slate-900 rounded-[3rem] p-12 max-w-lg w-full shadow-[0_0_100px_rgba(0,0,0,0.8)] border border-white/10 animate-scaleIn relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-500 via-fuchsia-500 to-indigo-500"></div>
              <div className="flex justify-between items-center mb-10">
                <h4 className="text-3xl font-black text-white tracking-tight">SYSTEM GATE</h4>
                <Tooltip content="Close modal to return focus to main page." position="left">
                  <button onClick={() => setModalOpen(false)} id="close-modal" className="text-slate-600 hover:text-white transition-colors p-2">
                    <i className="fa-solid fa-xmark text-2xl"></i>
                  </button>
                </Tooltip>
              </div>
              <p className="text-slate-400 mb-12 font-medium leading-relaxed text-lg">
                This modal represents a dynamic DOM layer. Your script must target the confirm action within this isolated scope.
              </p>
              <div className="flex gap-6">
                <button 
                  onClick={() => setModalOpen(false)}
                  id="confirm-btn"
                  className="flex-1 bg-emerald-600 text-white py-5 rounded-2xl font-black uppercase text-xs tracking-widest shadow-[0_10px_30px_rgba(16,185,129,0.3)] hover:scale-105 transition-all"
                >
                  Verify Access
                </button>
                <button 
                  onClick={() => setModalOpen(false)}
                  className="flex-1 bg-slate-950 text-slate-500 py-5 rounded-2xl font-black uppercase text-xs tracking-widest border border-white/5 hover:bg-slate-800 transition-all"
                >
                  Abort
                </button>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Browser Alerts/Toasts */}
      <section className="bg-slate-900/40 backdrop-blur-xl rounded-[3rem] p-12 shadow-2xl border border-white/5 relative overflow-hidden">
        <h3 className="text-2xl font-black mb-6 text-white uppercase tracking-tight">2. Transient Signals</h3>
        <p className="text-slate-400 mb-10 font-medium leading-relaxed max-w-2xl">Catch and verify text within ephemeral toast notifications before they are purged from the DOM.</p>
        
        <Tooltip content="Toasts are fleeting. Practice waiting for text presence." position="right">
          <button 
            id="trigger-toast-btn"
            onClick={triggerAlert}
            className="border-2 border-fuchsia-600 text-fuchsia-500 px-10 py-5 rounded-[1.5rem] font-black uppercase text-xs tracking-widest hover:bg-fuchsia-500/10 transition-all shadow-[0_0_20px_rgba(217,70,239,0.1)]"
          >
            Emit Toast Signal
          </button>
        </Tooltip>

        {alertVisible && (
          <div id="toast-notification" className="mt-10 p-6 bg-slate-950 text-white rounded-[1.5rem] shadow-[0_0_50px_rgba(168,85,247,0.3)] flex items-center gap-6 animate-slideInRight max-w-md border border-fuchsia-500/30">
            <div className="w-14 h-14 bg-fuchsia-600/20 rounded-full flex items-center justify-center border border-fuchsia-500/30 shadow-inner">
              <i className="fa-solid fa-satellite-dish text-fuchsia-500 animate-pulse"></i>
            </div>
            <div>
              <div className="font-black text-sm uppercase tracking-widest mb-1">Signal Detected</div>
              <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest leading-none">Purging in 3.0s</div>
            </div>
          </div>
        )}
      </section>

      {/* Shadow DOM Simulation */}
      <section className="bg-slate-900/40 backdrop-blur-xl rounded-[3rem] p-12 shadow-2xl border border-white/5">
        <h3 className="text-2xl font-black mb-6 text-white uppercase tracking-tight">3. Nested Hierarchy</h3>
        <p className="text-slate-400 mb-10 font-medium leading-relaxed max-w-2xl">Shadow DOM or deep nesting requires traversing specific root elements. Locate the deep-layer button.</p>
        
        <Tooltip content="Automation Hint: getShadowRoot() is required for real shadow DOM." position="top">
          <div id="shadow-root-simulator" className="p-10 bg-slate-950 rounded-[2.5rem] border border-white/5 overflow-hidden relative shadow-inner">
            <div className="ml-6 pl-6 border-l-2 border-slate-800">
               <div className="text-[9px] font-black text-slate-700 mb-4 tracking-[0.4em] uppercase">#shadow-root (open)</div>
               <div className="ml-6 pl-6 border-l-2 border-slate-800">
                 <div className="text-[9px] font-black text-slate-700 mb-4 tracking-[0.4em] uppercase">.internal-node</div>
                 <div className="ml-6 pl-6 border-l-2 border-slate-800">
                   <button 
                    id="target-nested-button"
                    className="bg-slate-900 text-white px-8 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all border border-white/5"
                    onClick={() => alert('DEEP LAYER ACCESSED')}
                   >
                     Deep Node Access
                   </button>
                 </div>
               </div>
            </div>
          </div>
        </Tooltip>
      </section>
    </div>
  );
};

export default AdvancedFeatures;
