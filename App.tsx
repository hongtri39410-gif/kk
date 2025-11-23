import React from 'react';
import Hero from './components/BootScreen';
import ColorPalette from './components/apps/RetroSynth';
import Gallery from './components/apps/SnakeGame';
import BackgroundGrid from './components/CrtOverlay';
import ChatWidget from './components/apps/AiOracle';

const App: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen bg-white overflow-x-hidden selection:bg-[#2868E2] selection:text-white">
      <BackgroundGrid />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
           <div className="flex items-center gap-2">
             <span className="text-[#2868E2] text-xl">✦</span>
             <span className="font-bold tracking-wider text-sm">ATLANTIS</span>
           </div>
           <div className="hidden md:flex gap-8 text-xs font-mono uppercase tracking-widest text-gray-500">
             <a href="#" className="hover:text-[#2868E2]">Standard</a>
             <a href="#" className="hover:text-[#2868E2]">Color</a>
             <a href="#" className="hover:text-[#2868E2]">Mapping</a>
             <a href="#" className="hover:text-[#2868E2]">Composing</a>
           </div>
        </div>
      </nav>

      <main className="relative z-10 pb-32">
        <Hero />
        
        {/* Transition Text */}
        <div className="max-w-7xl mx-auto px-6 py-20 border-l border-r border-gray-100">
           <p className="font-serif text-2xl md:text-4xl text-center leading-relaxed text-gray-800 max-w-4xl mx-auto">
             "The lost melody of a civilization shrouded in mystery. We construct visual systems that resonate with the frequencies of the deep ocean."
           </p>
        </div>

        <ColorPalette />
        <Gallery />
        
        <footer className="max-w-7xl mx-auto border-t border-black py-12 px-6 flex flex-col md:flex-row justify-between items-start gap-8 bg-black text-white">
          <div>
            <h4 className="font-serif text-2xl mb-4">CLUB ATLANTIS</h4>
            <p className="text-xs text-gray-400 tracking-widest mb-1">VISUAL DIRECTOR: SiYu Zhang</p>
            <p className="text-xs text-gray-400 tracking-widest">E: atlantis@163.com</p>
          </div>
          <div className="flex flex-col items-end">
            <div className="flex gap-4 text-2xl mb-4 text-[#2868E2]">
              <span>✦</span>
              <span>✦</span>
              <span>✦</span>
            </div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500">
              Is An Standard Marka © 2025
            </p>
          </div>
        </footer>
      </main>

      <ChatWidget />
    </div>
  );
};

export default App;