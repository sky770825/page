import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h3 className="text-white font-bold text-xl">華地產鑽石分會</h3>
            <p className="text-sm text-gray-500 mt-1">付出者收穫 · 共好利他</p>
          </div>
          
          <div className="text-center md:text-right">
             <p className="text-sm">&copy; {currentYear} 華地產鑽石分會. All rights reserved.</p>
             <p className="text-xs text-gray-600 mt-2">
                System provided by <strong className="text-gray-500">資訊長 蔡濬瑒</strong> v4.0 (React)
             </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;