
import React, { useState } from 'react';
import { TableRow } from '../types';

const TablePractice: React.FC = () => {
  const initialData: TableRow[] = [
    { id: 1, name: 'Jay Automation', email: 'jay@core.net', role: 'Archivist', status: 'Active', lastLogin: '128ms' },
    { id: 2, name: 'Selenium Robot', email: 'bot_01@node.org', role: 'Scraper', status: 'Active', lastLogin: '1.2s' },
    { id: 3, name: 'Cypress Runner', email: 'v8_engine@js.io', role: 'Validator', status: 'Inactive', lastLogin: '24h' },
    { id: 4, name: 'Playwright Pro', email: 'headless@chrome.com', role: 'Architect', status: 'Pending', lastLogin: 'Syncing' },
    { id: 5, name: 'Appium Mobile', email: 'ios_arm64@mobile.net', role: 'Inspector', status: 'Active', lastLogin: '840ms' },
  ];

  const [rows, setRows] = useState(initialData);
  const [searchTerm, setSearchTerm] = useState('');

  const deleteRow = (id: number) => {
    setRows(rows.filter(r => r.id !== id));
  };

  const filteredRows = rows.filter(r => 
    r.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    r.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-12 animate-fadeIn pb-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-2">
          <h2 className="text-5xl font-black text-white tracking-tighter leading-none">DATA GRID</h2>
          <p className="text-slate-500 font-black text-xs uppercase tracking-[0.3em]">Accessing Team Registry</p>
        </div>
        <div className="relative group w-full md:w-auto">
          <div className="absolute inset-0 bg-emerald-500/20 blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity"></div>
          <i className="fa-solid fa-search absolute left-5 top-1/2 -translate-y-1/2 text-emerald-500 group-focus-within:text-white transition-colors z-10"></i>
          <input 
            type="text" 
            placeholder="Search Protocol..." 
            className="pl-14 pr-8 py-5 rounded-2xl border-2 border-slate-800 outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 w-full md:w-96 shadow-2xl font-black text-[10px] uppercase tracking-[0.2em] text-white bg-slate-950 relative z-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            id="table-search"
          />
        </div>
      </div>

      <div className="bg-slate-900/40 rounded-[3rem] shadow-2xl border border-white/5 overflow-hidden backdrop-blur-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left" id="user-table">
            <thead className="bg-slate-950/50 border-b border-slate-800">
              <tr>
                <th className="px-10 py-8 text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">Registry Node</th>
                <th className="px-10 py-8 text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">Access Tier</th>
                <th className="px-10 py-8 text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">Ping</th>
                <th className="px-10 py-8 text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">Status</th>
                <th className="px-10 py-8 text-right text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">CMD</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/50">
              {filteredRows.map((row) => (
                <tr key={row.id} className="hover:bg-emerald-500/5 transition-colors group">
                  <td className="px-10 py-8">
                    <div className="flex items-center gap-5">
                      <div className="w-14 h-14 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center font-black shadow-inner group-hover:border-emerald-500/50 transition-colors">
                        <span className="text-transparent bg-clip-text bg-gradient-to-br from-emerald-400 to-cyan-400 text-xl">
                          {row.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <div className="font-black text-white text-base tracking-tight">{row.name}</div>
                        <div className="text-[10px] text-slate-600 font-black uppercase tracking-widest">{row.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-10 py-8">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{row.role}</span>
                  </td>
                  <td className="px-10 py-8">
                    <span className="text-xs font-black text-emerald-500 font-mono tracking-tighter">{row.lastLogin}</span>
                  </td>
                  <td className="px-10 py-8">
                    <span className={`px-5 py-2 rounded-full text-[9px] font-black uppercase tracking-widest shadow-lg ${
                      row.status === 'Active' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                      row.status === 'Pending' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' :
                      'bg-slate-800 text-slate-500 border border-slate-700'
                    }`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="px-10 py-8 text-right">
                    <button 
                      onClick={() => deleteRow(row.id)}
                      className="text-slate-700 hover:text-rose-500 transition-all p-3 rounded-2xl hover:bg-rose-500/10 hover:shadow-[0_0_15px_rgba(244,63,94,0.3)]"
                      title="Decommission Node"
                      id={`delete-user-${row.id}`}
                    >
                      <i className="fa-solid fa-power-off text-lg"></i>
                    </button>
                  </td>
                </tr>
              ))}
              {filteredRows.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-10 py-20 text-center text-slate-700 font-black uppercase tracking-[0.5em] text-xs">
                    No matching protocols found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 bg-slate-900 rounded-[3rem] p-12 text-white shadow-2xl relative overflow-hidden border border-white/5">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-cyan-500 to-indigo-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
          <h4 className="font-black text-2xl mb-8 flex items-center gap-4">
            <i className="fa-solid fa-terminal text-emerald-500"></i>
            Axis Traversal Challenge
          </h4>
          <p className="text-slate-400 mb-10 font-medium leading-relaxed">Complex tables require advanced XPath axes like <code className="bg-emerald-500/10 text-emerald-400 px-1.5 rounded">following-sibling::td</code> to find specific data cells based on row keys.</p>
          <div className="bg-slate-950 p-8 rounded-3xl font-mono text-xs text-emerald-400/80 border border-white/5 whitespace-pre overflow-x-auto shadow-inner">
{`//tr[td//div[text()='Appium Mobile']]
  //span[contains(@class, 'bg-emerald')]`}
          </div>
        </div>
        
        <div className="bg-slate-900/60 rounded-[3rem] p-10 border border-white/5 flex flex-col justify-center space-y-10">
          <div className="text-center">
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.5em]">Network Flow</span>
            <div className="mt-4 text-5xl font-black text-white tracking-tighter">8.4<span className="text-emerald-500">Gb</span></div>
          </div>
          <div className="space-y-6">
            <div className="p-6 bg-slate-950 rounded-2xl border border-white/5 flex items-center justify-between">
              <span className="text-[9px] text-slate-500 uppercase font-black tracking-widest">Active Nodes</span>
              <div className="text-2xl font-black text-emerald-500">{rows.length}</div>
            </div>
            <div className="p-6 bg-slate-950 rounded-2xl border border-white/5 flex items-center justify-between">
              <span className="text-[9px] text-slate-500 uppercase font-black tracking-widest">Load Factor</span>
              <div className="text-2xl font-black text-fuchsia-500">0.42</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TablePractice;
