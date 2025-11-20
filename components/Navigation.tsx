import React, { useState } from 'react';
import { Menu, X, Heart, Video, BookOpen, User } from 'lucide-react';

interface NavigationProps {
  scrollToSection: (id: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', id: 'about', icon: <User size={18} /> },
    { name: 'Ministry', id: 'ministry', icon: <Heart size={18} /> },
    { name: 'Devotional', id: 'devotional', icon: <BookOpen size={18} /> },
    { name: 'Prayer', id: 'prayer', icon: <Video size={18} /> }, // Using Video icon loosely for "Connect"
  ];

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <div className="flex flex-col">
              <span className="font-serif text-xl md:text-2xl font-bold text-royal-900 leading-none">
                Pastor Elvis
              </span>
              <span className="font-sans text-xs text-gold-500 font-medium tracking-widest uppercase">
                Myles Forson
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.id)}
                className="flex items-center gap-2 text-gray-600 hover:text-gold-600 font-medium transition-colors text-sm tracking-wide uppercase"
              >
                {link.name}
              </button>
            ))}
            <button 
              onClick={() => handleNavClick('contact')}
              className="bg-royal-900 text-white px-6 py-2.5 rounded-full font-medium hover:bg-royal-800 transition-all shadow-lg shadow-royal-900/20 text-sm"
            >
              Partner With Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-royal-900 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.id)}
                className="flex items-center gap-3 w-full text-left px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-gold-600 hover:bg-gray-50"
              >
                {link.icon}
                {link.name}
              </button>
            ))}
            <button 
               onClick={() => handleNavClick('contact')}
               className="w-full mt-4 bg-royal-900 text-white px-3 py-3 rounded-md font-medium text-center"
            >
              Partner With Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;