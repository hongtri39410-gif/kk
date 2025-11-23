import React from 'react';

const BackgroundGrid: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden h-full">
      {/* Vertical Lines */}
      <div className="w-full h-full max-w-7xl mx-auto border-x border-[#f0f0f0] relative opacity-50">
        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-[#f0f0f0]"></div>
        <div className="absolute left-2/4 top-0 bottom-0 w-px bg-[#f0f0f0]"></div>
        <div className="absolute left-3/4 top-0 bottom-0 w-px bg-[#f0f0f0]"></div>
      </div>
      
      {/* Horizontal Guide (Header) */}
      <div className="absolute top-32 w-full h-px bg-[#f0f0f0] opacity-50"></div>
    </div>
  );
};

export default BackgroundGrid;