import React, { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Ministry from './components/Ministry';
import Devotional from './components/Devotional';
import PrayerHelper from './components/PrayerHelper';
import Footer from './components/Footer';

const App: React.FC = () => {
  // Smooth scrolling function
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Optional: Simple entrance animation observer
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => {
      section.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-10');
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50">
      <Navigation scrollToSection={scrollToSection} />
      <main className="flex-grow">
        <Hero scrollToSection={scrollToSection} />
        <About />
        <Ministry />
        <Devotional />
        <PrayerHelper />
      </main>
      <Footer />
    </div>
  );
};

export default App;