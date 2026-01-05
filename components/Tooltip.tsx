
import React, { useState } from 'react';

interface TooltipProps {
  children: React.ReactNode;
  content: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
}

const Tooltip: React.FC<TooltipProps> = ({ children, content, position = 'top' }) => {
  const [isVisible, setIsVisible] = useState(false);

  const positionClasses = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-3',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-3',
    left: 'right-full top-1/2 -translate-y-1/2 mr-3',
    right: 'left-full top-1/2 -translate-y-1/2 ml-3',
  };

  const arrowClasses = {
    top: 'top-full left-1/2 -translate-x-1/2 border-t-slate-900',
    bottom: 'bottom-full left-1/2 -translate-x-1/2 border-b-slate-900',
    left: 'left-full top-1/2 -translate-y-1/2 border-l-slate-900',
    right: 'right-full top-1/2 -translate-y-1/2 border-r-slate-900',
  };

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div className={`absolute z-[200] w-max max-w-[200px] px-3 py-2 bg-slate-900/90 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl animate-fadeIn ${positionClasses[position]}`}>
          <p className="text-[10px] font-black leading-relaxed text-slate-300 uppercase tracking-wider text-center">
            {content}
          </p>
          <div className={`absolute border-4 border-transparent ${arrowClasses[position]}`}></div>
          {/* Neon underline effect in tooltip */}
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent"></div>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
