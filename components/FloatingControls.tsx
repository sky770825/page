import React, { useState, useEffect } from 'react';

const FloatingControls: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showContact, setShowContact] = useState(true);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-3 pointer-events-none">
      {/* Contact Button - Always check showContact */}
      <div className={`transition-all duration-300 transform ${showContact ? 'translate-x-0 opacity-100 pointer-events-auto' : 'translate-x-20 opacity-0'}`}>
         <a 
            href="https://line.me/R/ti/p/@030nlnho" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center bg-[#00B900] text-white px-4 py-3 rounded-full shadow-lg hover:bg-[#009900] hover:scale-105 transition-all"
        >
            <i className="fab fa-line text-2xl"></i>
            <span className="ml-2 font-medium">聯絡資訊長</span>
        </a>
      </div>
      
      <div className="flex space-x-2 pointer-events-auto">
        {/* Toggle Contact Visibility Button */}
        <button
            onClick={() => setShowContact(!showContact)}
            className="bg-gray-800 text-white w-12 h-12 rounded-full shadow-lg hover:bg-gray-700 flex items-center justify-center transition-all hover:scale-110"
            title={showContact ? "隱藏聯絡按鈕" : "顯示聯絡按鈕"}
        >
            <i className={`fas ${showContact ? 'fa-eye-slash' : 'fa-eye'}`}></i>
        </button>

        {/* Back to Top Button */}
        <button
            onClick={scrollToTop}
            className={`bg-primary-600 text-white w-12 h-12 rounded-full shadow-lg hover:bg-primary-700 flex items-center justify-center transition-all duration-300 hover:scale-110 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            title="返回頂部"
        >
            <i className="fas fa-chevron-up"></i>
        </button>
      </div>
    </div>
  );
};

export default FloatingControls;