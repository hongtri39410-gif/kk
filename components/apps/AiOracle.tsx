import React, { useState, useRef, useEffect } from 'react';
import { getBrandConsultation } from '../../services/geminiService';
import { ChatMessage } from '../../types';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'I am the curator of the Atlantis archives. How may I assist your brand journey today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userText = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setIsLoading(true);

    const response = await getBrandConsultation(userText);
    
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-80 md:w-96 bg-white border border-[#2868E2] shadow-[8px_8px_0_rgba(40,104,226,0.2)] flex flex-col h-[400px] animate-in slide-in-from-bottom-4 duration-200">
          <div className="p-4 border-b border-gray-100 bg-[#2868E2] text-white flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="text-lg">✦</span>
              <span className="text-sm font-bold tracking-wider">BRAND STRATEGY</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:text-gray-200">✕</button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`
                  max-w-[85%] p-3 text-sm
                  ${msg.role === 'user' 
                    ? 'bg-[#2868E2] text-white rounded-tl-lg rounded-bl-lg rounded-tr-lg' 
                    : 'bg-white border border-gray-200 text-gray-800 rounded-tr-lg rounded-br-lg rounded-tl-lg shadow-sm'}
                `}>
                  <p className="leading-relaxed">{msg.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                 <div className="bg-white border border-gray-200 p-3 rounded-lg shadow-sm">
                    <div className="flex gap-1">
                      <div className="w-1 h-1 bg-[#2868E2] rounded-full animate-bounce"></div>
                      <div className="w-1 h-1 bg-[#2868E2] rounded-full animate-bounce delay-100"></div>
                      <div className="w-1 h-1 bg-[#2868E2] rounded-full animate-bounce delay-200"></div>
                    </div>
                 </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="p-3 bg-white border-t border-gray-100">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a query..."
                className="w-full pl-3 pr-10 py-2 text-sm border border-gray-200 focus:border-[#2868E2] outline-none transition-colors bg-white text-black"
                autoFocus
              />
              <button 
                type="submit" 
                disabled={isLoading}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#2868E2] disabled:opacity-50 font-bold"
              >
                →
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-3 bg-black text-white px-6 py-3 shadow-lg hover:bg-[#2868E2] transition-colors duration-300"
      >
        <span className="font-bold tracking-wider text-sm">ASK ORACLE</span>
        <span className="text-lg group-hover:rotate-90 transition-transform duration-300">✦</span>
      </button>
    </div>
  );
};

export default ChatWidget;