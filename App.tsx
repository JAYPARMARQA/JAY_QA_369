
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import FormPractice from './pages/FormPractice';
import DynamicElements from './pages/DynamicElements';
import TablePractice from './pages/TablePractice';
import AISandbox from './pages/AISandbox';
import AIVisions from './pages/AIVisions';
import AdvancedFeatures from './pages/AdvancedFeatures';

/**
 * Main App Component
 * 
 * Provides navigation structure for JAY'S Automation Excellence Hub.
 * Uses HashRouter for compatibility with static environments.
 */
const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans bg-slate-950 text-slate-100 relative overflow-x-hidden selection:bg-fuchsia-500/30 selection:text-fuchsia-200">
        {/* Futuristic Background Effects */}
        <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-fuchsia-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="fixed top-[20%] right-[10%] w-[30%] h-[30%] bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none"></div>

        <Navbar />
        
        <main className="flex-grow max-container mx-auto px-4 py-8 lg:px-8 w-full max-w-7xl relative z-10">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/forms" element={<FormPractice />} />
            <Route path="/dynamic" element={<DynamicElements />} />
            <Route path="/tables" element={<TablePractice />} />
            <Route path="/ai-sandbox" element={<AISandbox />} />
            <Route path="/ai-visions" element={<AIVisions />} />
            <Route path="/advanced" element={<AdvancedFeatures />} />
          </Routes>
        </main>

        <footer className="bg-slate-950 text-slate-500 py-12 mt-12 border-t border-slate-900 relative z-10">
          <div className="max-container mx-auto px-4 text-center space-y-4">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-fuchsia-500 to-indigo-600 text-white rounded flex items-center justify-center font-bold shadow-[0_0_15px_rgba(217,70,239,0.5)]">J</div>
              <span className="font-black tracking-[0.2em] uppercase bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 via-indigo-400 to-cyan-400">JAY'S Automation Hub</span>
            </div>
            <p className="text-sm max-w-md mx-auto opacity-60 leading-relaxed font-medium">
              Master the grid. Own the locators. Practice for elite automation roles in a dark, neon-lit environment designed for the modern engineer.
            </p>
            <div className="flex justify-center gap-6 text-xl">
              <i className="fa-brands fa-github hover:text-fuchsia-400 cursor-pointer transition-colors hover:drop-shadow-[0_0_8px_rgba(217,70,239,0.8)]"></i>
              <i className="fa-brands fa-linkedin hover:text-cyan-400 cursor-pointer transition-colors hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]"></i>
              <i className="fa-solid fa-envelope hover:text-white cursor-pointer transition-colors"></i>
            </div>
            <div className="pt-8 border-t border-slate-900 text-[10px] uppercase font-black tracking-[0.4em] opacity-30">
              © {new Date().getFullYear()} Jay Automation Hub. Protocol: Neon-UI.
            </div>
          </div>
        </footer>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .animate-scaleIn {
          animation: scaleIn 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .animate-slideInRight {
          animation: slideInRight 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
        .max-container {
          width: 100%;
          max-width: 1280px;
        }
        .neon-card {
          background: rgba(15, 23, 42, 0.6);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.05);
          box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.5);
        }
        .neon-border-fuchsia:hover {
          border-color: rgba(217, 70, 239, 0.5);
          box-shadow: 0 0 20px -5px rgba(217, 70, 239, 0.3);
        }
        .neon-border-cyan:hover {
          border-color: rgba(34, 211, 238, 0.5);
          box-shadow: 0 0 20px -5px rgba(34, 211, 238, 0.3);
        }
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #020617;
        }
        ::-webkit-scrollbar-thumb {
          background: #1e293b;
          border-radius: 100px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #334155;
        }
        
        /* Smooth anti-aliasing for the advanced font */
        html {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: optimizeLegibility;
        }

        /* Improved Mono readability */
        code, pre {
          font-variant-ligatures: normal;
        }
      `}</style>
    </Router>
  );
};

export default App;
