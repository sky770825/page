import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: '會議資訊', href: '#meeting' },
    { name: '資源連結', href: '#resources' },
    { name: '邀請來賓', href: '#invite' },
    { name: '常見問題', href: '#faq' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-12 items-center">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center cursor-pointer group" onClick={() => window.scrollTo(0, 0)}>
              <div className="bg-primary-100 p-2 rounded-full mr-3 group-hover:bg-primary-200 transition-colors">
                <span className="text-xl">🏠</span>
              </div>
              <div>
                <h1 className="font-bold text-lg text-slate-800 tracking-tight leading-tight">華地產鑽石分會</h1>
                <p className="text-[10px] text-primary-600 font-bold uppercase tracking-wider">Diamond Chapter</p>
              </div>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-600 hover:text-primary-600 hover:bg-primary-50 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://house123.bni-checkin.com/" 
              target="_blank"
              rel="noreferrer" 
              className="ml-4 px-5 py-2 bg-primary-600 hover:bg-primary-700 text-white text-sm font-bold rounded-full shadow-lg shadow-primary-500/30 transition-all hover:-translate-y-0.5"
            >
              會議簽到
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-full text-slate-600 hover:text-primary-600 hover:bg-primary-50 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-lg`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-white shadow-xl transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 pt-2 pb-6 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 rounded-xl text-base font-medium text-slate-600 hover:text-primary-600 hover:bg-primary-50"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;