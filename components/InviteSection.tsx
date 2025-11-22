import React, { useState } from 'react';
import { INVITE_TEXT } from '../constants';

const InviteSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(INVITE_TEXT).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <section id="invite" className="py-24 bg-gradient-to-br from-primary-900 to-primary-800 relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -ml-20 -mb-20"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block py-1 px-3 rounded-full bg-primary-700/50 border border-primary-600 text-blue-200 text-xs font-semibold mb-4 backdrop-blur-sm">
             OPEN INVITATION
          </span>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">邀請朋友一起成長</h2>
          <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
            分享這段邀請函，讓更多優秀的房地產夥伴加入我們的線上聚會
          </p>
        </div>

        <div className="relative">
            {/* Card Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-purple-500 rounded-3xl transform rotate-1 opacity-20 scale-105"></div>
            
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/20 relative">
                <div className="p-8 md:p-12">
                    <div className="bg-white/90 rounded-xl p-6 mb-8 shadow-inner text-left relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-1 h-full bg-primary-500"></div>
                        <pre className="whitespace-pre-wrap font-sans text-slate-700 leading-relaxed text-base md:text-lg">
                            {INVITE_TEXT}
                        </pre>
                    </div>
                    
                    <div className="text-center">
                        <button
                            onClick={handleCopy}
                            className={`inline-flex items-center px-8 py-4 border border-transparent text-lg font-bold rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary-900 focus:ring-white ${
                                copied 
                                ? 'bg-green-500 text-white hover:bg-green-600' 
                                : 'bg-white text-primary-700 hover:bg-blue-50'
                            }`}
                        >
                            <i className={`fas ${copied ? 'fa-check' : 'fa-copy'} mr-3`}></i>
                            {copied ? '已複製成功' : '一鍵複製邀請文'}
                        </button>
                        <p className="mt-4 text-sm text-blue-200/60">
                            點擊按鈕複製文字，可直接貼上至 LINE 或 Messenger
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default InviteSection;