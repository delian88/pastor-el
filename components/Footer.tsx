import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, MapPin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-royal-900 text-white pt-16 pb-8" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold leading-none">Pastor Elvis</span>
              <span className="font-sans text-xs text-gold-500 font-medium tracking-widest uppercase">Myles Forson</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering a generation to walk in the fullness of God's purpose through the Life Ministry.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Youtube size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-gold-500 transition-colors">About Pastor Elvis</a></li>
              <li><a href="#" className="hover:text-gold-500 transition-colors">Sermons</a></li>
              <li><a href="#" className="hover:text-gold-500 transition-colors">Events Calendar</a></li>
              <li><a href="#" className="hover:text-gold-500 transition-colors">Life Ministry</a></li>
              <li><a href="#" className="hover:text-gold-500 transition-colors">Give Online</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-gold-500 mt-0.5" />
                <span>123 Faith Avenue,<br/>Accra, Ghana</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-gold-500" />
                <span>info@pastorelvis.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-6">Stay Connected</h4>
            <p className="text-gray-400 text-sm mb-4">Subscribe to receive weekly teachings and updates.</p>
            <form className="space-y-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-2 bg-royal-800 border border-royal-700 rounded text-white placeholder-gray-500 focus:outline-none focus:border-gold-500"
              />
              <button type="button" className="w-full bg-gold-600 text-white py-2 rounded font-medium hover:bg-gold-500 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-royal-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Life Ministry. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;