import React from 'react';
import { ColorSpec } from '../../types';

const COLORS: ColorSpec[] = [
  {
    name: "SEA BLUE",
    hex: "#2868E2",
    pantone: "Pantone 2935c",
    cmyk: "C100 M52 Y0 K0",
    description: "Standard Brand Color / Digital Primary",
    textColor: "text-white"
  },
  {
    name: "GRAY",
    hex: "#D8D8D8",
    pantone: "Cool Gray 1c",
    cmyk: "C19 M14 Y14 K0",
    description: "Secondary / Background Elements",
    textColor: "text-black"
  },
  {
    name: "CARBON",
    hex: "#111111",
    pantone: "Black 6c",
    description: "Typography / Keylines",
    textColor: "text-white"
  },
  {
    name: "PURE",
    hex: "#FFFFFF",
    pantone: "White",
    description: "Negative Space / Canvas",
    textColor: "text-black"
  }
];

const ColorPalette: React.FC = () => {
  return (
    <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto border-l border-r border-gray-100 bg-white">
      <div className="flex items-center gap-4 mb-16">
        <span className="text-2xl">✦</span>
        <span className="text-2xl">✦</span>
        <h2 className="font-serif text-4xl md:text-5xl">颜色应用规范</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-gray-200">
        {COLORS.map((color) => (
          <div 
            key={color.name} 
            className="aspect-square md:aspect-[16/9] relative group overflow-hidden transition-all hover:z-10"
            style={{ backgroundColor: color.hex }}
          >
            <div className={`absolute inset-0 p-8 flex flex-col justify-between ${color.textColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
              <div>
                <h3 className="text-xl font-bold tracking-wider">{color.name}</h3>
                <p className="text-xs opacity-70 mt-1">{color.pantone}</p>
                {color.cmyk && <p className="text-xs opacity-70">{color.cmyk}</p>}
              </div>
              
              <div className="flex justify-between items-end border-t border-current pt-4">
                <span className="font-mono text-sm">{color.hex}</span>
                <span className="text-[10px] uppercase tracking-widest max-w-[150px] text-right">
                  {color.description}
                </span>
              </div>
            </div>
            
            {/* Default Label visible when not hovering */}
            <div className={`absolute bottom-4 right-4 ${color.textColor} font-mono text-sm group-hover:opacity-0 transition-opacity`}>
              {color.hex}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex flex-col md:flex-row justify-between gap-8 text-gray-600">
        <div className="flex-1">
          <h4 className="font-serif text-xl text-black mb-2">线下印刷配色</h4>
          <p className="text-sm leading-relaxed">
            使用 Pantone 色值作为标准，确保品牌颜色在印刷品中的一致性。
            CMYK 色值适用于广告印刷，物料制作，服饰饰品、包装等线下物料。
          </p>
        </div>
        <div className="flex-1">
          <h4 className="font-serif text-xl text-black mb-2">线上使用配色</h4>
          <p className="text-sm leading-relaxed">
            使用 RGB 色彩模式，适用于数字媒体（如网站、社交媒体、APP等）。
            RGB 模式是屏幕显示的标准，确保品牌颜色在数字环境中的准确呈现。
          </p>
        </div>
      </div>
    </section>
  );
};

export default ColorPalette;