import React, { useState } from 'react';
import { FAQ_ITEMS } from '../constants';

const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq1');

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">常見問題</h2>
          <div className="w-16 h-1 bg-primary-500 mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-slate-600">關於 Zoom 會議的技術支援與操作說明</p>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => (
            <div 
                key={item.id} 
                className={`rounded-2xl transition-all duration-300 overflow-hidden ${
                    openId === item.id 
                    ? 'bg-white shadow-lg ring-1 ring-primary-100' 
                    : 'bg-slate-50 hover:bg-slate-100'
                }`}
            >
              <button
                onClick={() => toggleFaq(item.id)}
                className="flex justify-between items-center w-full px-6 py-5 text-left focus:outline-none"
              >
                <span className={`text-lg font-bold flex items-center transition-colors ${openId === item.id ? 'text-primary-700' : 'text-slate-700'}`}>
                    {item.question}
                </span>
                <span className={`ml-4 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openId === item.id ? 'bg-primary-100 text-primary-600 rotate-180' : 'bg-slate-200 text-slate-500'
                }`}>
                    <i className="fas fa-chevron-down text-sm"></i>
                </span>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${openId === item.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-6 pb-6 pt-0">
                  <div className="border-t border-slate-100 pt-4 text-slate-600 leading-relaxed">
                    {item.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;