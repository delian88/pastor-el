import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  scrollToSection: (id: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <div className="relative h-[90vh] w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/seed/church_worship/1920/1080"
          alt="Worship Atmosphere"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-royal-900/90 via-royal-900/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-2xl text-white space-y-8 animate-fade-in-up">
          <div className="space-y-2">
            <p className="text-gold-400 font-medium tracking-widest uppercase text-sm md:text-base">
              Welcome to Life Ministry
            </p>
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight text-white">
              Empowering Lives <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-100 to-gold-500">
                Through Faith
              </span>
            </h1>
          </div>
          
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-xl">
            Join Pastor Elvis Myles Forson on a journey of spiritual growth, restoration, and purposeful living. Discover the life God intended for you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button 
              onClick={() => scrollToSection('ministry')}
              className="bg-gold-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-gold-600 transition-all flex items-center justify-center gap-2 shadow-lg shadow-gold-500/30"
            >
              Join the Ministry <ArrowRight size={20} />
            </button>
            <button 
              onClick={() => scrollToSection('devotional')}
              className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all"
            >
              Daily Word
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;