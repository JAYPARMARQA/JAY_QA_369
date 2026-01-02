
import React, { useState } from 'react';

const FormPractice: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-12 animate-fadeIn pb-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <h2 className="text-5xl font-black text-white tracking-tighter leading-none">FORM ENGINE</h2>
          <p className="text-slate-500 font-black text-xs uppercase tracking-[0.3em]">Validation Protocol: Enabled</p>
        </div>
        <div className="flex items-center gap-2 px-6 py-2 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-[10px] font-black tracking-[0.3em] shadow-[0_0_15px_rgba(34,211,238,0.2)]">
          SECURE INPUT MODE
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 bg-slate-900/40 backdrop-blur-xl rounded-[3rem] p-12 shadow-2xl border border-white/5 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
          
          <h3 className="text-2xl font-black mb-10 text-white flex items-center gap-4">
            <div className="w-12 h-12 bg-cyan-600/20 text-cyan-400 rounded-2xl flex items-center justify-center shadow-inner border border-cyan-500/20">
              <i className="fa-solid fa-id-card-clip"></i>
            </div>
            Registry Protocol
          </h3>
          
          <form id="registration-form" onSubmit={handleSubmit} className="space-y-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label htmlFor="first_name" className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] ml-2">Identifier_01</label>
                <input 
                  type="text" 
                  id="first_name" 
                  name="firstName" 
                  placeholder="Jay"
                  className="w-full px-6 py-4 rounded-[1.5rem] border-2 border-slate-800 bg-slate-950 text-white placeholder:text-slate-700 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 outline-none transition-all font-bold"
                  data-testid="firstNameInput"
                />
              </div>
              <div className="space-y-3">
                <label htmlFor="last_name" className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] ml-2">Identifier_02</label>
                <input 
                  type="text" 
                  id="last_name" 
                  name="lastName" 
                  placeholder="Automation"
                  className="w-full px-6 py-4 rounded-[1.5rem] border-2 border-slate-800 bg-slate-950 text-white placeholder:text-slate-700 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 outline-none transition-all font-bold"
                />
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] ml-2">Tier Selection</label>
              <div className="flex flex-wrap gap-4">
                {['Junior', 'Mid', 'Elite'].map((level) => (
                  <label key={level} className="flex-1 min-w-[100px] cursor-pointer group">
                    <input type="radio" name="experience" value={level.toLowerCase()} className="sr-only peer" />
                    <div className="py-4 rounded-2xl border-2 border-slate-800 bg-slate-950 peer-checked:border-cyan-500 peer-checked:bg-cyan-500/10 peer-checked:text-cyan-400 text-slate-500 group-hover:border-slate-700 text-center font-black uppercase text-[10px] tracking-widest transition-all shadow-inner">
                      {level}
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] ml-2">System Stack</label>
              <div className="grid grid-cols-2 gap-4">
                {['Selenium', 'Playwright', 'Cypress', 'Appium'].map((tech) => (
                  <label key={tech} className="flex items-center gap-4 p-5 rounded-[1.5rem] border-2 border-slate-800 bg-slate-950 cursor-pointer hover:border-cyan-500/40 transition-all group">
                    <input type="checkbox" name="skills" value={tech.toLowerCase()} className="w-5 h-5 rounded bg-slate-900 border-slate-800 text-cyan-500 focus:ring-cyan-500 focus:ring-offset-slate-950" />
                    <span className="font-black text-xs uppercase tracking-widest text-slate-500 group-hover:text-slate-300">{tech}</span>
                  </label>
                ))}
              </div>
            </div>

            <button 
              type="submit" 
              className="w-full bg-gradient-to-r from-cyan-600 to-indigo-700 text-white font-black py-5 rounded-[1.5rem] shadow-[0_10px_30px_rgba(34,211,238,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-4 text-sm tracking-[0.3em] uppercase"
            >
              <i className="fa-solid fa-microchip"></i>
              Transmit Packet
            </button>

            {submitted && (
              <div id="success-message" className="p-6 bg-cyan-500 text-slate-950 rounded-[1.5rem] font-black text-center shadow-[0_0_40px_rgba(34,211,238,0.4)] animate-pulse tracking-widest uppercase">
                Transmission Success: Handshake Confirmed
              </div>
            )}
          </form>
        </div>

        <div className="space-y-8">
          <div className="bg-slate-900 rounded-[2.5rem] p-8 border border-white/5 shadow-2xl">
            <h4 className="font-black text-sm uppercase tracking-[0.3em] text-cyan-400 mb-6 flex items-center gap-3">
              <i className="fa-solid fa-code"></i>
              XPath Target
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed font-bold mb-6">
              Use relative paths with attribute focus for high stability scripts.
            </p>
            <div className="p-5 bg-black rounded-2xl font-mono text-[10px] text-cyan-500/80 border border-cyan-500/10 overflow-x-auto shadow-inner">
              //form[@id='registration-form']
              <br/>
              //input[@name='firstName']
            </div>
          </div>
          
          <div className="bg-slate-900/60 rounded-[2.5rem] p-8 border border-white/5">
            <h4 className="font-black text-slate-400 mb-6 tracking-[0.3em] uppercase text-[10px]">Registry Metrics</h4>
            <div className="space-y-6">
              {[
                { label: 'Latency', value: '12ms', color: 'text-emerald-400' },
                { label: 'Security', value: 'Level_04', color: 'text-cyan-400' },
                { label: 'Encryption', value: 'AES_256', color: 'text-fuchsia-400' }
              ].map(stat => (
                <div key={stat.label} className="flex justify-between items-center pb-4 border-b border-white/5">
                  <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">{stat.label}</span>
                  <span className={`text-xs font-black uppercase ${stat.color}`}>{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormPractice;
