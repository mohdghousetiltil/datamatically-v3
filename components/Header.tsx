
import React, { useState } from 'react';
import Logo from './Logo';

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  scrollToSection: (e: React.MouseEvent, id: string) => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleDarkMode, scrollToSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Problem', id: 'problem' },
    { name: 'How It Works', id: 'how-it-works' },
    { name: 'Case Studies', id: 'case-studies' },
    { name: 'About Us', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  const ThemeIcon = () => (
    isDarkMode ? (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h1M4 12H3m15.364-6.364l.707-.707M6.343 17.657l-.707.707m12.728 0l.707-.707M6.343 6.364l-.707-.707M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ) : (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    )
  );

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto h-16 md:h-20 px-4 md:px-12 flex items-center justify-between relative z-10">
        {/* Logo Section */}
        <a 
          href="#" 
          onClick={(e) => scrollToSection(e, 'root')} 
          className="flex items-center gap-2 md:gap-3 group transition-transform duration-300 hover:scale-[1.02]"
        >
          <Logo />
          <span className="text-lg md:text-2xl font-bold font-space tracking-tight text-slate-900 dark:text-white transition-all duration-500">
            Datamatically
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => scrollToSection(e, link.id)}
                className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-brand-blue dark:hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <div className="flex items-center gap-4 border-l border-slate-200 dark:border-slate-800 pl-8">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-400"
              aria-label="Toggle Dark Mode"
            >
              <ThemeIcon />
            </button>
            <a 
              href="https://app.datamatically.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-2 rounded-full text-sm font-bold hover:bg-slate-800 dark:hover:bg-slate-100 transition-all"
            >
              Login
            </a>
          </div>
        </div>

        {/* Mobile Actions (Right) */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-400"
            aria-label="Toggle Dark Mode"
          >
            <ThemeIcon />
          </button>
          <button 
            className="p-2 text-slate-600 dark:text-slate-400"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 px-6 py-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-300">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => {
                scrollToSection(e, link.id);
                setMobileMenuOpen(false);
              }}
              className="text-lg font-medium text-slate-600 dark:text-slate-400 font-sans"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
            <a 
              href="https://app.datamatically.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full py-3 text-center bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-bold"
            >
              Login
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
