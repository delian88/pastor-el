import React from 'react';
import { Users, Book, Heart, Globe } from 'lucide-react';

const Ministry: React.FC = () => {
  const pillars = [
    {
      icon: <Book className="w-8 h-8 text-gold-500" />,
      title: "Biblical Teaching",
      desc: "Uncompromising teaching of the scripture to build a solid foundation for life."
    },
    {
      icon: <Users className="w-8 h-8 text-gold-500" />,
      title: "Community Life",
      desc: "Creating a family where everyone belongs, grows, and supports one another."
    },
    {
      icon: <Heart className="w-8 h-8 text-gold-500" />,
      title: "Outreach & Aid",
      desc: "Extending the hands of Christ to the needy through practical support and charity."
    },
    {
      icon: <Globe className="w-8 h-8 text-gold-500" />,
      title: "Global Missions",
      desc: "Taking the gospel beyond borders to reach the unreached and lost."
    }
  ];

  return (
    <section id="ministry" className="py-20 bg-royal-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-gold-400 font-bold tracking-wider uppercase text-sm mb-3">Our Mission</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6">The Life Ministry Vision</h3>
          <p className="text-gray-300 text-lg">
            Life Ministry isn't just a church; it's a movement dedicated to bringing the "God-Life" (Zoe) into every aspect of human existence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((item, index) => (
            <div key={index} className="bg-royal-800/50 backdrop-blur-sm p-8 rounded-xl border border-royal-700 hover:border-gold-500/50 transition-colors group">
              <div className="bg-royal-900 p-3 rounded-lg inline-block mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold mb-3 text-white font-serif">{item.title}</h4>
              <p className="text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ministry;