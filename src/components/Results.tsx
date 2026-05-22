import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const results = [
  {
    id: 1,
    title: "Microdermabrasion & Peel",
    description: "Improved texture, scarring reduction, and immediate glow after a combined modality session.",
    before: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    after: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Acne Clearing Protocol",
    description: "Significant reduction in active inflammation and redness utilizing enzyme exfoliation.",
    before: "https://images.unsplash.com/photo-1620052445851-955a5dc3ff11?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    after: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

export default function Results() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % results.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + results.length) % results.length);
  };

  return (
    <section id="results" className="py-24 bg-spa-blue-light/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-serif text-spa-text mb-4">
              Real Skin Transformations
            </h2>
            <p className="text-spa-text-light">
              Results-driven treatments designed to dramatically improve skin health, texture, and clarity.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-spa-blue-dark flex items-center justify-center text-spa-text hover:bg-spa-blue-dark hover:text-white transition-colors"
              aria-label="Previous result"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-spa-blue-dark flex items-center justify-center text-spa-text hover:bg-spa-blue-dark hover:text-white transition-colors"
              aria-label="Next result"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[32px] bg-white shadow-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 h-full"
            >
              {/* Before */}
              <div className="relative aspect-square md:aspect-auto h-[400px] md:h-[600px] bg-spa-silver">
                <img 
                  src={results[currentIndex].before} 
                  alt="Before treatment" 
                  className="w-full h-full object-cover filter grayscale-[0.2]"
                />
                <div className="absolute top-6 left-6 glass-panel px-4 py-2 rounded-full text-sm font-medium tracking-wide uppercase">
                  Before
                </div>
              </div>
              
              {/* After */}
              <div className="relative aspect-square md:aspect-auto h-[400px] md:h-[600px] bg-spa-champagne">
                <img 
                  src={results[currentIndex].after} 
                  alt="After treatment" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-6 left-6 bg-spa-blue-dark/90 text-white backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium tracking-wide uppercase shadow-lg">
                  After
                </div>
                
                {/* Info Card Overlay on desktop, below on mobile */}
                <div className="absolute bottom-6 left-6 right-6 glass-panel p-6 rounded-[20px]">
                  <h3 className="text-xl font-serif text-spa-text mb-2">{results[currentIndex].title}</h3>
                  <p className="text-sm text-spa-text-light">{results[currentIndex].description}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
