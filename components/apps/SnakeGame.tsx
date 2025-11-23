import React from 'react';

const POSTERS = [
  {
    title: "SEARCHING FOR MELODIES",
    subtitle: "Visual Interpretation",
    bg: "bg-[#2868E2]",
    textColor: "text-white",
    layout: "col-span-1 md:col-span-1"
  },
  {
    title: "THE LOST EMPIRE",
    subtitle: "Atlantis Mythos",
    bg: "bg-gray-100",
    textColor: "text-[#2868E2]",
    layout: "col-span-1 md:col-span-2",
    image: true
  },
  {
    title: "ARRIVE",
    subtitle: "Nanjing City",
    bg: "bg-black",
    textColor: "text-white",
    layout: "col-span-1 md:col-span-1"
  }
];

const Gallery: React.FC = () => {
  return (
    <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto border-l border-r border-gray-100 bg-white">
      <div className="flex items-center gap-4 mb-16">
        <span className="text-2xl">✦</span>
        <span className="text-2xl">✦</span>
        <h2 className="font-serif text-4xl md:text-5xl">排版规范与应用</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {POSTERS.map((poster, idx) => (
          <div 
            key={idx} 
            className={`${poster.layout} aspect-[3/4] ${poster.bg} ${poster.textColor} relative p-8 flex flex-col justify-between group overflow-hidden`}
          >
             {/* Decorative Graphics */}
             {poster.image ? (
               <div className="absolute inset-0 flex items-center justify-center opacity-80">
                  <div className="w-32 h-32 border-[1px] border-current rounded-full animate-[spin_10s_linear_infinite]"></div>
                  <div className="absolute w-48 h-48 border-[1px] border-current rotate-45"></div>
               </div>
             ) : (
               <div className="absolute top-8 right-8 animate-pulse">✦</div>
             )}

             <div className="z-10">
               <p className="text-[10px] tracking-[0.3em] uppercase opacity-70 mb-2">{poster.subtitle}</p>
               <h3 className="font-serif text-3xl md:text-4xl leading-none max-w-[80%]">
                 {poster.title}
               </h3>
             </div>

             <div className="z-10 border-t border-current pt-4 flex justify-between items-center">
               <span className="font-mono text-xs">NO.0{idx + 1}</span>
               <span className="font-mono text-xs">2025</span>
             </div>
          </div>
        ))}
      </div>
      
      <div className="mt-20 border-t border-black pt-8 flex flex-col md:flex-row gap-12">
        <div className="flex-1">
           <h3 className="font-serif text-3xl mb-4">Searching For Melodies</h3>
           <div className="w-12 h-1 bg-[#2868E2] mb-6"></div>
           <p className="text-gray-500 text-sm leading-relaxed mb-4">
             Around 9000 years ago in Solon, across from the Pillar of Hercules, there was a large island from which you could travel to other islands. Across from these islands was a whole land surrounded by the ocean, known as the Kingdom of Atlantis.
           </p>
           <p className="text-gray-500 text-sm leading-relaxed">
             At that time, Atlantis was about to engage in a great war with Athens, but unexpectedly encountered an earthquake and flood. In less than a day and a night, Atlantis completely sank into the sea.
           </p>
        </div>
        <div className="flex-1 flex flex-col justify-center items-center border border-gray-200 p-8 bg-gray-50">
            <div className="text-center">
              <p className="font-serif italic text-xl text-gray-400">"The Enigma of Atlantis"</p>
              <p className="font-bold text-[#2868E2] mt-2">A LOST CIVILIZATION</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;