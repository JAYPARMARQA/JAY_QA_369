
import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const cards = [
    { title: 'Forms & UI', desc: 'Inputs, Checkboxes, Radio Buttons, and Multi-selects.', icon: 'fa-square-check', color: 'from-cyan-500 to-blue-600', shadow: 'shadow-cyan-500/20', neon: 'text-cyan-400', link: '/forms' },
    { title: 'Dynamic Waits', desc: 'Handle elements that appear after delays or AJAX calls.', icon: 'fa-spinner', color: 'from-orange-500 to-amber-600', shadow: 'shadow-orange-500/20', neon: 'text-orange-400', link: '/dynamic' },
    { title: 'Data Grids', desc: 'Complex tables with sorting, pagination, and dynamic rows.', icon: 'fa-list-check', color: 'from-emerald-500 to-teal-600', shadow: 'shadow-emerald-500/20', neon: 'text-emerald-400', link: '/tables' },
    { title: 'AI Sandbox', desc: 'Challenge yourself with Gemini-generated DOM structures.', icon: 'fa-brain', color: 'from-fuchsia-500 to-purple-600', shadow: 'shadow-fuchsia-500/20', neon: 'text-fuchsia-400', link: '/ai-sandbox' },
    { title: 'Advanced DOM', desc: 'iFrames, Shadow DOM, and intercepted Modal interactions.', icon: 'fa-vials', color: 'from-rose-500 to-pink-600', shadow: 'shadow-rose-500/20', neon: 'text-rose-400', link: '/advanced' },
    { title: 'Alert Protocols', desc: 'Practice catching browser alerts and ephemeral messages.', icon: 'fa-bell', color: 'from-violet-500 to-indigo-600', shadow: 'shadow-violet-500/20', neon: 'text-violet-400', link: '/advanced' },
  ];

  return (
    <div className="space-y-12 animate-fadeIn">
      <header className="bg-slate-900/40 backdrop-blur-xl rounded-[2.5rem] p-12 border border-white/5 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(168,85,247,0.1),transparent_40%)]"></div>
        <div className="space-y-6 relative z-10 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-[10px] font-black uppercase tracking-[0.3em] text-fuchsia-400 shadow-lg">
             <span className="w-1.5 h-1.5 bg-fuchsia-500 rounded-full animate-ping"></span>
             User: Jay_Automation_Master
          </div>
          <h1 className="text-6xl lg:text-7xl font-black text-white tracking-tighter leading-none">
            ELEVATE <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-indigo-400 to-cyan-500">REALITY.</span>
          </h1>
          <p className="text-slate-400 max-w-xl text-lg font-medium leading-relaxed">
            Navigate through high-fidelity automation scenarios designed to challenge your locator precision and wait strategies.
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-4 relative z-10">
          <div className="p-6 rounded-[2rem] bg-slate-800/40 border border-white/5 backdrop-blur-md text-center group hover:border-fuchsia-500/30 transition-all">
            <div className="text-3xl font-black text-white mb-1">24</div>
            <div className="text-[9px] uppercase font-black text-slate-500 tracking-widest group-hover:text-fuchsia-400 transition-colors">Nodes Active</div>
          </div>
          <div className="p-6 rounded-[2rem] bg-slate-800/40 border border-white/5 backdrop-blur-md text-center group hover:border-cyan-500/30 transition-all">
            <div className="text-3xl font-black text-white mb-1">99.9</div>
            <div className="text-[9px] uppercase font-black text-slate-500 tracking-widest group-hover:text-cyan-400 transition-colors">System Uptime</div>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, idx) => (
          <Link 
            key={idx} 
            to={card.link}
            className={`group relative bg-slate-900/40 p-8 rounded-[2.5rem] border border-white/5 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 shadow-2xl overflow-hidden`}
          >
            {/* Hover Glow Effect */}
            <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-10 -mr-20 -mt-20 rounded-full transition-opacity duration-700 blur-3xl scale-150`}></div>
            
            <div className={`bg-gradient-to-br ${card.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-8 shadow-[0_0_25px_rgba(0,0,0,0.5)] group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 relative`}>
              <div className={`absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity`}></div>
              <i className={`fa-solid ${card.icon} text-2xl`}></i>
            </div>
            
            <h3 className="text-2xl font-black text-white mb-3 tracking-tight group-hover:text-fuchsia-400 transition-colors">{card.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed font-medium mb-6 group-hover:text-slate-300 transition-colors">{card.desc}</p>
            
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
              <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${card.neon}`}>Init Protocol</span>
              <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                <i className="fa-solid fa-chevron-right text-[10px]"></i>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="bg-slate-900 rounded-[3rem] p-12 text-white flex flex-col lg:flex-row items-center justify-between gap-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-fuchsia-500/20 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_50%,rgba(168,85,247,0.15),transparent_50%)]"></div>
        <div className="space-y-4 relative z-10 text-center lg:text-left">
          <div className="text-fuchsia-400 font-black text-xs uppercase tracking-[0.4em] mb-2">Neural Link Active</div>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tighter leading-none">AI DOM CHALLENGE</h2>
          <p className="text-slate-400 text-lg max-w-xl font-medium leading-relaxed">Synthesize random web elements in real-time. Test your scripts against the unpredictable.</p>
        </div>
        <Link 
          to="/ai-sandbox" 
          className="bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-white px-12 py-5 rounded-[2rem] font-black hover:scale-105 active:scale-95 transition-all shadow-[0_10px_30px_rgba(168,85,247,0.4)] whitespace-nowrap relative z-10 text-lg tracking-widest uppercase"
        >
          Begin Synthesis
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
