
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Dashboard', icon: 'fa-gauge' },
    { path: '/forms', label: 'Forms', icon: 'fa-wpforms' },
    { path: '/dynamic', label: 'Dynamic', icon: 'fa-bolt' },
    { path: '/tables', label: 'Tables', icon: 'fa-table' },
    { path: '/ai-sandbox', label: 'AI Sandbox', icon: 'fa-robot' },
    { path: '/advanced', label: 'Advanced', icon: 'fa-microchip' },
  ];

  return (
    <nav className="bg-slate-950/60 backdrop-blur-xl sticky top-0 z-50 border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
      <div className="max-container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-4 group">
            <div className="w-11 h-11 bg-gradient-to-br from-fuchsia-600 to-indigo-700 rounded-xl flex items-center justify-center font-black text-2xl shadow-[0_0_20px_rgba(168,85,247,0.4)] group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">J</div>
            <div className="flex flex-col">
              <span className="font-black text-xl tracking-wider text-white leading-none">
                JAY'S <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400">HUB</span>
              </span>
              <span className="text-[9px] font-black tracking-[0.4em] text-slate-500 uppercase mt-1">Automation OS</span>
            </div>
          </Link>
          
          <div className="hidden lg:flex gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all flex items-center gap-2.5 group relative ${
                  location.pathname === link.path 
                    ? 'text-fuchsia-400' 
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <i className={`fa-solid ${link.icon} ${location.pathname === link.path ? 'text-fuchsia-500' : 'text-slate-600 group-hover:text-fuchsia-400'} transition-colors`}></i>
                {link.label}
                {location.pathname === link.path && (
                  <span className="absolute bottom-[-16px] left-0 w-full h-[2px] bg-gradient-to-r from-fuchsia-500 to-cyan-400 shadow-[0_0_10px_rgba(168,85,247,0.8)]"></span>
                )}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex flex-col items-end leading-none">
              <span className="text-[9px] uppercase font-black text-slate-600 tracking-[0.2em] mb-1">System Load</span>
              <div className="flex gap-1">
                {[1,2,3,4,5].map(i => (
                  <div key={i} className={`w-1 h-3 rounded-full ${i < 4 ? 'bg-fuchsia-500 shadow-[0_0_5px_rgba(217,70,239,0.5)]' : 'bg-slate-800'}`}></div>
                ))}
              </div>
            </div>
            <div className="w-10 h-10 rounded-full border-2 border-fuchsia-500/30 p-0.5 shadow-[0_0_15px_rgba(217,70,239,0.2)]">
               <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                 <i className="fa-solid fa-user text-xs text-slate-400"></i>
               </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
