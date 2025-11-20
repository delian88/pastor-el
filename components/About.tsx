import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 bg-gold-100 rounded-2xl transform rotate-3 -z-10"></div>
            <img
              src="https://picsum.photos/seed/pastor_portrait_elvis/800/1000" 
              alt="Pastor Elvis Myles Forson"
              className="rounded-xl shadow-2xl w-full object-cover h-[600px]"
            />
            <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur p-6 rounded-lg shadow-lg border-l-4 border-gold-500">
              <p className="font-serif text-xl italic text-gray-800">
                "My passion is to see people liberated by the truth of God's word and walking in their divine destiny."
              </p>
            </div>
          </div>

          {/* Text Side */}
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-gold-600 font-bold tracking-wider uppercase text-sm">Meet the Visionary</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-royal-900">
              Pastor Elvis Myles Forson
            </h3>
            
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p>
                Pastor Elvis Myles Forson is a dynamic spiritual leader, teacher, and the founder of Life Ministry. With a calling to empower this generation, he combines deep theological insight with practical life applications.
              </p>
              <p>
                His ministry is characterized by a strong emphasis on prayer, the prophetic word, and community building. Pastor Elvis believes that every individual carries a unique seed of greatness that requires the right spiritual environment to flourish.
              </p>
              <p>
                Through his sermons, books, and outreach programs, he has touched countless lives, guiding them from places of uncertainty to platforms of purpose. He is happily married and a devoted father, modeling the values of faith and family he preaches.
              </p>
            </div>

            <div className="pt-6 grid grid-cols-2 gap-8">
              <div>
                <span className="block text-3xl font-bold text-gold-500">15+</span>
                <span className="text-sm text-gray-500 uppercase tracking-wide">Years in Ministry</span>
              </div>
              <div>
                <span className="block text-3xl font-bold text-gold-500">10k+</span>
                <span className="text-sm text-gray-500 uppercase tracking-wide">Lives Impacted</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;