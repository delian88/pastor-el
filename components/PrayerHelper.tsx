import React, { useState } from 'react';
import { generatePrayerSupport } from '../services/ai';
import { Send, Shield } from 'lucide-react';

const PrayerHelper: React.FC = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setIsLoading(true);
    setResponse('');
    
    try {
      const prayer = await generatePrayerSupport(input);
      setResponse(prayer);
    } catch (error) {
      setResponse("We are having trouble connecting right now. Please know God hears your heart regardless of technology.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="prayer" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Text / Intro */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-blue-700 font-medium text-sm mb-2">
              <Shield size={16} />
              <span>Virtual Prayer Assistant</span>
            </div>
            <h3 className="text-4xl font-serif font-bold text-royal-900">
              Need Prayer Right Now?
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Life can be heavy, but you don't have to carry it alone. Share what's burdening your heart, and let our ministry assistant generate a prayer grounded in scripture to encourage you instantly.
            </p>
            <p className="text-sm text-gray-500">
              * Your requests are private. For urgent counseling, please contact our office directly.
            </p>
            
            <div className="mt-8 p-6 bg-gold-50 border border-gold-100 rounded-xl">
              <h4 className="font-bold text-royal-900 mb-2">Direct Contact</h4>
              <p className="text-gray-600">office@pastorelvisministry.com</p>
              <p className="text-gray-600">+233 55 555 5555</p>
            </div>
          </div>

          {/* Interactive Form */}
          <div className="bg-white rounded-2xl shadow-2xl shadow-royal-900/10 border border-gray-100 overflow-hidden">
            <div className="p-6 bg-royal-900 text-white">
              <h4 className="text-lg font-medium">Prayer Request</h4>
            </div>
            
            <div className="p-6 md:p-8">
              {!response ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="prayer-input" className="block text-sm font-medium text-gray-700 mb-1">
                      What can we pray for?
                    </label>
                    <textarea
                      id="prayer-input"
                      rows={5}
                      className="w-full rounded-lg border-gray-300 border p-4 focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-shadow"
                      placeholder="I am feeling anxious about my job interview tomorrow..."
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={isLoading || !input.trim()}
                    className="w-full bg-gold-500 text-white py-3 rounded-lg font-semibold hover:bg-gold-600 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>Praying...</>
                    ) : (
                      <>
                        <Send size={18} /> Generate Prayer
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div className="space-y-6 animate-fade-in">
                  <div>
                    <h5 className="text-sm text-gray-400 uppercase tracking-wide mb-2">A Prayer for You</h5>
                    <div className="prose prose-lg text-royal-900 font-serif italic">
                      "{response}"
                    </div>
                  </div>
                  <button
                    onClick={() => { setResponse(''); setInput(''); }}
                    className="text-gold-600 hover:text-gold-700 text-sm font-medium"
                  >
                    Write another request
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrayerHelper;