import React, { useState } from 'react';
import { generateDevotional } from '../services/ai';
import { DevotionalResponse, LoadingState } from '../types';
import { Sparkles, Share2, RefreshCw, Quote } from 'lucide-react';

const Devotional: React.FC = () => {
  const [topic, setTopic] = useState<string>('Faith');
  const [devotional, setDevotional] = useState<DevotionalResponse | null>(null);
  const [status, setStatus] = useState<LoadingState>(LoadingState.IDLE);

  const topics = ['Hope', 'Faith', 'Healing', 'Prosperity', 'Peace', 'Family', 'Purpose'];

  const handleGenerate = async (selectedTopic: string) => {
    setTopic(selectedTopic);
    setStatus(LoadingState.LOADING);
    try {
      const result = await generateDevotional(selectedTopic);
      setDevotional(result);
      setStatus(LoadingState.SUCCESS);
    } catch (e) {
      setStatus(LoadingState.ERROR);
    }
  };

  return (
    <section id="devotional" className="py-20 bg-gold-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-gold-600 font-bold tracking-wider uppercase text-sm mb-2">Daily Bread</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-royal-900">Receive Your Word for Today</h3>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Select a theme below and let our AI assistant, inspired by biblical wisdom, generate a personalized devotional for you right now.
          </p>
        </div>

        {/* Topic Selectors */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {topics.map((t) => (
            <button
              key={t}
              onClick={() => handleGenerate(t)}
              disabled={status === LoadingState.LOADING}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 
                ${topic === t 
                  ? 'bg-royal-900 text-white shadow-lg scale-105' 
                  : 'bg-white text-gray-600 hover:bg-gold-100 hover:text-gold-700 border border-gray-200'
                }
                ${status === LoadingState.LOADING ? 'opacity-50 cursor-not-allowed' : ''}
              `}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden min-h-[400px] relative border border-gold-100 transition-all">
          {status === LoadingState.LOADING && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/80 z-10">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gold-500 mb-4"></div>
              <p className="text-royal-900 font-serif italic">Seeking wisdom for you...</p>
            </div>
          )}

          {status === LoadingState.IDLE && !devotional && (
             <div className="flex flex-col items-center justify-center h-full py-20 text-center px-6">
               <Sparkles className="w-16 h-16 text-gold-300 mb-4" />
               <h4 className="text-xl font-serif text-gray-400">Select a topic above to generate a devotional</h4>
             </div>
          )}
          
          {status === LoadingState.ERROR && (
             <div className="flex flex-col items-center justify-center h-full py-20 text-center px-6">
               <p className="text-red-500">Something went wrong. Please try again.</p>
               <button onClick={() => handleGenerate(topic)} className="mt-4 text-royal-900 underline">Retry</button>
             </div>
          )}

          {devotional && (
            <div className="p-8 md:p-12">
              <div className="flex justify-between items-start mb-6">
                <span className="bg-gold-100 text-gold-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  {topic}
                </span>
                <div className="flex gap-2">
                  <button className="text-gray-400 hover:text-royal-900 transition-colors" title="Regenerate" onClick={() => handleGenerate(topic)}>
                    <RefreshCw size={20} />
                  </button>
                  <button className="text-gray-400 hover:text-royal-900 transition-colors" title="Share">
                    <Share2 size={20} />
                  </button>
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl font-serif font-bold text-royal-900 mb-8 leading-tight">
                {devotional.title}
              </h2>

              <div className="mb-8 relative pl-8 border-l-4 border-gold-500">
                <Quote className="absolute -left-3 -top-4 bg-white p-1 text-gold-500 w-6 h-6 fill-current" />
                <p className="text-xl font-serif italic text-gray-800 leading-relaxed">
                  "{devotional.scripture}"
                </p>
              </div>

              <div className="prose prose-lg text-gray-600 mb-8">
                <p>{devotional.reflection}</p>
              </div>

              <div className="bg-royal-50 rounded-xl p-6 border border-royal-100">
                <h5 className="text-sm font-bold text-royal-900 uppercase tracking-wide mb-2">Closing Prayer</h5>
                <p className="text-royal-800 italic">
                  {devotional.prayer}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Devotional;