
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import Tooltip from '../components/Tooltip';

const AIVisions: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateImage = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setError(null);
    setImageUrl(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [
            { text: `Futuristic, high-tech, neon-lit illustration of: ${prompt}. Cinematic lighting, 4k, digital art style.` }
          ],
        },
      });

      let foundImage = false;
      if (response.candidates && response.candidates[0].content.parts) {
        for (const part of response.candidates[0].content.parts) {
          if (part.inlineData) {
            const base64 = part.inlineData.data;
            setImageUrl(`data:image/png;base64,${base64}`);
            foundImage = true;
            break;
          }
        }
      }

      if (!foundImage) {
        setError("Model returned no visual data. Try a different prompt.");
      }
    } catch (err: any) {
      console.error(err);
      setError("Synthesis failed. Check your neural link (API key) and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-12 animate-fadeIn pb-20">
      <div className="bg-slate-900 rounded-[3rem] p-12 text-white shadow-[0_20px_60px_rgba(0,0,0,0.6)] border border-emerald-500/20 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-[40%] h-full bg-[radial-gradient(circle_at_100%_0%,rgba(16,185,129,0.1),transparent_70%)]"></div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent shadow-[0_0_15px_rgba(16,185,129,0.8)]"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-8 text-center md:text-left">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[9px] font-black uppercase tracking-[0.4em] text-emerald-400">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
              Visual Synthesis Engine
            </div>
            <h2 className="text-6xl lg:text-7xl font-black tracking-tighter leading-none">
              AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">VISIONS</span>
            </h2>
            <p className="text-slate-400 text-lg font-medium leading-relaxed max-w-lg">
              Generate futuristic assets for your test environments. Practice locating non-textual elements and handling visual regression scenarios.
            </p>
            
            <div className="space-y-6">
              <div className="relative group">
                <input 
                  type="text" 
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Describe a cybernetic entity..."
                  className="w-full bg-slate-950 border-2 border-slate-800 rounded-2xl px-8 py-5 text-white font-bold outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all placeholder:text-slate-700"
                  onKeyDown={(e) => e.key === 'Enter' && generateImage()}
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2">
                   <Tooltip content="Brief descriptions work best. Try 'A neon robot kitten'." position="top">
                     <i className="fa-solid fa-circle-info text-slate-700 group-hover:text-emerald-500 transition-colors"></i>
                   </Tooltip>
                </div>
              </div>

              <button 
                onClick={generateImage}
                disabled={loading || !prompt.trim()}
                className="w-full px-12 py-6 bg-gradient-to-r from-emerald-600 to-cyan-700 text-white font-black rounded-[2rem] shadow-[0_15px_40px_rgba(16,185,129,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:scale-100 flex items-center justify-center gap-5 text-xl tracking-[0.1em]"
              >
                {loading ? (
                  <i className="fa-solid fa-atom animate-spin"></i>
                ) : (
                  <i className="fa-solid fa-sparkles text-amber-300"></i>
                )}
                {loading ? 'VISUALIZING...' : 'GENERATE ASSET'}
              </button>
            </div>
          </div>
          <div className="w-64 h-64 bg-slate-950 rounded-[3.5rem] flex items-center justify-center border border-white/5 shadow-2xl relative group-hover:scale-105 transition-transform">
            <div className="absolute inset-0 bg-emerald-500/5 blur-3xl rounded-full"></div>
            <i className="fa-solid fa-wand-magic-sparkles text-9xl text-white opacity-90 drop-shadow-[0_0_30px_rgba(16,185,129,0.6)]"></i>
          </div>
        </div>
      </div>

      {(imageUrl || loading || error) && (
        <div className="grid grid-cols-1 gap-12 animate-fadeIn">
          <div className="bg-slate-900/40 rounded-[3rem] p-12 shadow-2xl border border-white/5 relative overflow-hidden flex flex-col items-center min-h-[500px] justify-center">
            {loading ? (
              <div className="flex flex-col items-center gap-8">
                <div className="relative w-32 h-32">
                  <div className="absolute inset-0 border-4 border-emerald-500/20 rounded-full"></div>
                  <div className="absolute inset-0 border-t-4 border-emerald-500 rounded-full animate-spin"></div>
                </div>
                <div className="text-center space-y-2">
                  <h4 className="text-xl font-black text-white tracking-widest uppercase">Synthesizing Pixels</h4>
                  <p className="text-slate-500 font-bold uppercase text-[10px] tracking-[0.3em]">Allocating Neural Subnetworks...</p>
                </div>
              </div>
            ) : error ? (
              <div className="text-center space-y-6">
                <i className="fa-solid fa-triangle-exclamation text-rose-500 text-6xl"></i>
                <h4 className="text-2xl font-black text-white">{error}</h4>
              </div>
            ) : imageUrl ? (
              <div className="w-full space-y-10">
                <div className="flex items-center justify-between">
                  <h4 className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.4em]">Asset Preview: Generated_Visions_0x1</h4>
                  <div className="flex gap-4">
                    <button 
                      onClick={() => window.open(imageUrl)}
                      className="text-[10px] font-black text-slate-500 hover:text-white uppercase tracking-widest transition-colors flex items-center gap-2"
                    >
                      <i className="fa-solid fa-up-right-from-square"></i>
                      External View
                    </button>
                  </div>
                </div>
                
                <div className="relative group mx-auto max-w-2xl">
                   {/* Futuristic Image Frame */}
                   <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                   <div className="relative bg-slate-950 rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
                     <img 
                       id="generated-asset"
                       src={imageUrl} 
                       alt="AI Generated Asset" 
                       className="w-full h-auto transform transition duration-500 group-hover:scale-105"
                     />
                   </div>
                </div>

                <div className="bg-slate-950 rounded-[2rem] p-8 border border-white/5 shadow-inner">
                   <div className="flex items-center justify-between mb-6">
                     <span className="text-[10px] font-black text-slate-600 uppercase tracking-[0.4em]">Automation Protocol</span>
                     <span className="text-[9px] font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 uppercase tracking-widest">Locator Ready</span>
                   </div>
                   <p className="text-slate-400 font-bold text-sm mb-6 leading-relaxed">
                     Practice identifying this asset via its ID or tag name. In high-level frameworks, you might use visual comparison tools to ensure pixel-perfect rendering.
                   </p>
                   <div className="p-5 bg-black rounded-2xl font-mono text-xs text-emerald-500/80 border border-emerald-500/10 overflow-x-auto">
                     //img[@id='generated-asset']
                   </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      )}

      {!imageUrl && !loading && !error && (
        <div className="text-center py-32 bg-slate-900/20 rounded-[4rem] border-4 border-dashed border-slate-800 flex flex-col items-center">
          <div className="w-24 h-24 rounded-full bg-slate-900 flex items-center justify-center mb-8 border border-white/5">
            <i className="fa-solid fa-palette text-4xl text-slate-700"></i>
          </div>
          <h3 className="text-2xl font-black text-slate-600 uppercase tracking-[0.4em]">Canvas Offline</h3>
          <p className="text-slate-700 font-bold mt-4 uppercase text-[10px] tracking-[0.2em]">Awaiting Visual Instruction</p>
        </div>
      )}
    </div>
  );
};

export default AIVisions;
