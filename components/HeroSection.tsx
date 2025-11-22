import React, { useState } from 'react';
import { HONOR_MEMBERS, MEETING_LINKS } from '../constants';
import CountDown from './CountDown';

const HeroSection: React.FC = () => {
  const [activeModalImage, setActiveModalImage] = useState<{src: string, alt: string} | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    const cleanId = text.replace(/會議ID: /, '').trim();
    navigator.clipboard.writeText(cleanId).then(() => {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };

  return (
    <section id="meeting" className="pt-32 pb-20 bg-gradient-to-b from-slate-50 via-blue-50/50 to-white relative overflow-hidden min-h-screen">
      {/* Background decorative elements with animation */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-blue-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
      <div className="absolute top-0 left-0 -ml-20 -mt-20 w-[400px] h-[400px] bg-purple-200/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-amber-100/40 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Honor Board - Styled as a Premium Feature */}
        <div className="flex flex-col items-center mb-16 animate-fade-in-up">
            <div className="flex items-center gap-2 mb-3">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold-400"></div>
                <span className="text-gold-600 font-bold text-sm uppercase tracking-widest">Hall of Fame</span>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold-400"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-10 text-center">金質獎榮譽榜</h2>
            
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                {HONOR_MEMBERS.map((member) => (
                <div key={member.id} className="group flex flex-col items-center">
                    <div 
                        className="relative cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-translate-y-2" 
                        onClick={() => setActiveModalImage({src: member.imageUrl, alt: member.title + '-' + member.name})}
                    >
                        {/* Glow effect behind avatar */}
                        <div className="absolute inset-0 rounded-full bg-gold-400 blur-md opacity-20 group-hover:opacity-50 transition-opacity duration-300"></div>
                        
                        <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full p-1 bg-gradient-to-br from-gold-300 to-gold-600 shadow-lg">
                            <div className="w-full h-full rounded-full overflow-hidden border-4 border-white bg-white">
                                <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover" />
                            </div>
                        </div>
                        
                        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-gold-500 to-gold-600 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-md whitespace-nowrap border border-white">
                            <i className="fas fa-medal mr-1"></i> {member.title}
                        </div>
                    </div>
                    <div className="mt-5 text-center">
                        <h3 className="font-bold text-slate-800 text-lg group-hover:text-gold-600 transition-colors">{member.name}</h3>
                    </div>
                </div>
                ))}
            </div>
        </div>

        {/* Meeting Section Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start mt-12">
            
            {/* Left Col: Countdown & Checkin (5 columns) */}
            <div className="lg:col-span-5 space-y-6 animate-fade-in-up animation-delay-2000">
                <h2 className="text-xl font-bold text-slate-800 flex items-center mb-4">
                    <span className="w-8 h-8 rounded-lg bg-blue-100 text-primary-600 flex items-center justify-center mr-3 text-sm">
                        <i className="far fa-calendar-alt"></i>
                    </span>
                    會議倒數
                </h2>
                <CountDown />
                
                <a 
                    href="https://house123.bni-checkin.com/" 
                    target="_blank" 
                    rel="noreferrer"
                    className="group relative w-full flex items-center justify-between py-4 px-6 bg-slate-900 text-white rounded-2xl shadow-xl shadow-slate-900/20 overflow-hidden transition-transform hover:-translate-y-1"
                >
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
                    <div className="flex items-center z-10">
                        <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center mr-4">
                            <i className="fas fa-check text-green-400"></i>
                        </div>
                        <div>
                            <p className="text-sm text-slate-400">Ready to join?</p>
                            <p className="text-lg font-bold">立即會議簽到</p>
                        </div>
                    </div>
                    <i className="fas fa-arrow-right transform group-hover:translate-x-1 transition-transform text-slate-400 group-hover:text-white"></i>
                </a>
            </div>

            {/* Right Col: Links (7 columns) */}
            <div className="lg:col-span-7 space-y-4 animate-fade-in-up animation-delay-2000">
                <h2 className="text-xl font-bold text-slate-800 flex items-center mb-4 lg:ml-2">
                    <span className="w-8 h-8 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center mr-3 text-sm">
                        <i className="fas fa-video"></i>
                    </span>
                    Zoom 會議室連結
                </h2>
                
                {MEETING_LINKS.map((link, index) => (
                    <div 
                        key={index} 
                        className={`relative flex flex-col sm:flex-row items-center p-1 rounded-2xl transition-all duration-300 ${
                            link.isPriority 
                                ? 'bg-white ring-2 ring-primary-500 shadow-xl shadow-primary-500/10 z-10' 
                                : 'bg-white/80 border border-slate-200 hover:bg-white hover:shadow-lg'
                        }`}
                    >
                        {link.isPriority && (
                            <div className="absolute -top-3 left-6 bg-gradient-to-r from-primary-600 to-primary-500 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-md flex items-center">
                                <i className="fas fa-star text-yellow-300 mr-1"></i> 推薦連結
                            </div>
                        )}
                        
                        <div className="p-6 flex-grow w-full sm:w-auto text-center sm:text-left">
                            <h3 className={`font-bold text-lg mb-1 ${link.isPriority ? 'text-slate-900' : 'text-slate-700'}`}>{link.label}</h3>
                            <div className="flex items-center justify-center sm:justify-start gap-2 text-sm text-slate-500 font-mono bg-slate-50 inline-block px-2 py-1 rounded border border-slate-100">
                                <span>ID: {link.meetingId}</span>
                                <button 
                                    onClick={() => copyToClipboard(link.meetingId, link.meetingId)}
                                    className="hover:text-primary-600 transition-colors ml-1"
                                    title="複製 ID"
                                >
                                    <i className={`fas ${copiedId === link.meetingId ? 'fa-check text-green-500' : 'fa-copy'}`}></i>
                                </button>
                            </div>
                        </div>

                        <div className="p-4 w-full sm:w-auto">
                            <a 
                                href={link.zoomUrl} 
                                target="_blank" 
                                rel="noreferrer"
                                className={`flex items-center justify-center w-full sm:w-auto px-6 py-3 rounded-xl font-bold transition-all ${
                                    link.isPriority 
                                        ? 'bg-primary-600 hover:bg-primary-700 text-white shadow-lg hover:shadow-primary-500/30' 
                                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                                }`}
                            >
                                <i className="fas fa-video mr-2"></i>
                                進入會議
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>

      {/* Image Modal */}
      {activeModalImage && (
        <div 
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/90 backdrop-blur-sm p-4 transition-opacity duration-300" 
            onClick={() => setActiveModalImage(null)}
        >
          <div className="relative max-w-2xl w-full animate-fade-in-up" onClick={e => e.stopPropagation()}>
            <button 
                onClick={() => setActiveModalImage(null)}
                className="absolute -top-12 right-0 text-white/80 hover:text-white text-3xl transition-colors"
            >
                <i className="fas fa-times"></i>
            </button>
            <div className="bg-white p-2 rounded-2xl shadow-2xl overflow-hidden">
                <img src={activeModalImage.src} alt={activeModalImage.alt} className="w-full h-auto rounded-xl" />
            </div>
            <p className="text-center text-white/90 mt-4 text-xl font-medium tracking-wide">{activeModalImage.alt}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;