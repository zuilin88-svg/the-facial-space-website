import { motion } from 'motion/react';
import { LINKS } from '../constants';

export default function About() {
  return (
    <section id="about" className="py-24 bg-spa-champagne relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            {/* Decorative background shape */}
            <div className="absolute -inset-4 bg-spa-blue-light rounded-[32px] -z-10 transform -rotate-3"></div>
            <div className="aspect-[4/5] rounded-[24px] overflow-hidden shadow-xl">
              <img 
                src="/about/about-face.jpg" 
                alt="Meet your esthetician" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 glass-panel rounded-2xl p-6 shadow-xl max-w-[200px] text-center">
              <span className="block text-3xl font-serif text-spa-blue-dark mb-1">5.0★</span>
              <span className="text-xs text-spa-text-light font-medium uppercase tracking-wider">Top Rated Facial Spa</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 flex flex-col justify-center"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-spa-blue-dark"></div>
              <span className="uppercase tracking-widest text-sm text-spa-blue-dark font-medium">Your Esthetician</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif text-spa-text leading-tight mb-8">
              Personalized care in a <span className="italic text-spa-blue-dark">relaxing sanctuary.</span>
            </h2>
            
            <div className="space-y-6 text-spa-text-light leading-relaxed">
              <p>
                Welcome to The Facial Space, where science-backed treatments meet soulful, relaxing care. We specialize in holistic skincare solutions that bring your skin back to balance.
              </p>
              <p>
                Whether you're struggling with breakouts, sensitive skin, or dullness, our goal is to help you achieve long-term skin health. Every client journey begins with deep listening—understanding not just your skin type, but your lifestyle and goals.
              </p>
              <p>
                Step into a bright, airy environment designed to melt away stress while delivering professional, transformative results you can see and feel.
              </p>
            </div>

            <div className="mt-10 pt-10 border-t border-spa-silver flex items-center gap-8">
              <div className="flex flex-col">
                <span className="text-3xl font-serif text-spa-text mb-1">Expert</span>
                <span className="text-xs text-spa-text-light uppercase tracking-wider">Analysis</span>
              </div>
              <div className="w-px h-12 bg-spa-silver"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-serif text-spa-text mb-1">Custom</span>
                <span className="text-xs text-spa-text-light uppercase tracking-wider">Treatment Plans</span>
              </div>
            </div>

            <div className="mt-10">
              <a 
                href={LINKS.booking}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white border border-white text-spa-text px-8 py-3 rounded-full text-sm font-medium uppercase tracking-widest hover:bg-spa-blue-light transition-colors duration-300 shadow-sm"
              >
                Start Your Journey
              </a>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
