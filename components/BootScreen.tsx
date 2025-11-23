import React from 'react';

const StarIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
  </svg>
);

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col pt-32 px-6 md:px-12 max-w-7xl mx-auto border-l border-r border-gray-100 bg-white z-10">
      <div className="flex justify-between items-start mb-24 md:mb-40">
        <div className="flex flex-col gap-2">
          <StarIcon className="w-8 h-8 md:w-12 md:h-12 text-black" />
          <StarIcon className="w-8 h-8 md:w-12 md:h-12 text-black ml-8" />
        </div>
        <div className="text-right hidden md:block">
          <h2 className="font-serif text-2xl tracking-widest">ATLANTIS</h2>
          <p className="text-[10px] tracking-[0.2em] mt-1">NIGHT CLUB</p>
          <div className="mt-2 flex justify-end gap-1">
             <StarIcon className="w-3 h-3" />
             <StarIcon className="w-3 h-3" />
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <h1 className="font-serif text-6xl md:text-8xl lg:text-[9rem] leading-[0.9] tracking-tighter text-black">
          IS AN<br/>
          STANDARD<br/>
          <span className="font-bold">MARKA</span>
        </h1>
        
        <div className="w-full h-px bg-black my-8"></div>
        
        <div className="flex flex-col md:flex-row justify-between items-baseline">
          <h3 className="font-serif text-3xl md:text-4xl font-bold mb-4 md:mb-0">品牌规范</h3>
          <div className="flex flex-col text-right text-xs md:text-sm text-gray-500 font-mono tracking-widest">
            <span>MELODIC ODYSSEY</span>
            <span>BRAND INTERPRETATION</span>
            <span>BRAND DESIGN</span>
            <span className="text-black font-bold text-xl mt-2">2025</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;