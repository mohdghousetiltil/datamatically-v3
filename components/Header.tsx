import React, { useState } from 'react';
import { Calendar, Sun, Moon, Menu, X } from 'lucide-react';
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

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-white/60 dark:bg-slate-950/60 backdrop-blur-xl border-b border-white/20 dark:border-slate-800/50 transition-all duration-500">
      <div className="max-w-7xl mx-auto h-16 lg:h-20 px-6 lg:px-12 flex items-center justify-between relative z-10">
        {/* Logo Section */}
        <a
          href="#"
          onClick={(e) => scrollToSection(e, 'root')}
          className="flex items-center gap-2 lg:gap-3 group transition-transform duration-300 hover:scale-[1.02]"
        >
          <Logo />
          <span className="text-xl lg:text-2xl font-bold font-space tracking-tight text-slate-900 dark:text-white transition-all duration-500">
            Datamatically
          </span>
        </a>

        {/* Desktop Navigation (lg+) */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => scrollToSection(e, link.id)}
                className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-brand-purple dark:hover:text-white transition-all duration-300 relative group/link"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-purple transition-all duration-300 group-hover/link:w-full"></span>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3 border-l border-slate-200 dark:border-slate-800/50 pl-8">
            {/* Calendly Icon Link */}
            <a
              href="https://calendly.com/datamatically"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-all text-slate-600 dark:text-slate-400 hover:text-brand-purple dark:hover:text-brand-purple"
              aria-label="Book a call"
              title="Book a call"
            >
              <Calendar className="w-5 h-5" />
            </a>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-all text-slate-600 dark:text-slate-400"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <a
              href="https://app.datamatically.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-7 py-2.5 rounded-full text-sm font-bold hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300"
            >
              Login
            </a>
          </div>
        </div>

        {/* Mobile & Tablet Actions (up to lg) */}
        <div className="flex lg:hidden items-center gap-2">
          {/* Calendly Link on Mobile */}
          <a
            href="https://calendly.com/datamatically"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-all text-slate-600 dark:text-slate-400"
            aria-label="Book a call"
          >
            <Calendar className="w-5 h-5" />
          </a>

          {/* Theme Toggle on Mobile */}
          <button
            onClick={toggleDarkMode}
            className="p-2.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-all text-slate-600 dark:text-slate-400"
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* Hamburger Menu */}
          <button
            className="p-2.5 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/50 rounded-full transition-all"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl border-b border-slate-200 dark:border-slate-800 px-8 py-8 flex flex-col gap-6 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-500">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => {
                scrollToSection(e, link.id);
                setMobileMenuOpen(false);
              }}
              className="text-xl font-space font-bold text-slate-600 dark:text-slate-400 hover:text-brand-purple transition-all"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-6 border-t border-slate-100 dark:border-slate-800/50 flex flex-col gap-4">
            <a
              href="https://app.datamatically.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-4 text-center bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-bold shadow-lg"
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