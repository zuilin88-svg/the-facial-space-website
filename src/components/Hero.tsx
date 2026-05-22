import { motion } from 'motion/react';
import { LINKS } from '../constants';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden bg-white">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Spa treatment room"
          className="w-full h-full object-cover object-center filter brightness-[1.1] saturate-[0.8]"
        />
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]"></div>
        
        {/* Soft floating gradients */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-spa-blue rounded-full mix-blend-multiply filter blur-[80px] opacity-60 z-0"
        />
        <motion.div
          animate={{
            x: [0, 30, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/4 right-1/4 w-[35vw] h-[35vw] bg-spa-champagne rounded-full mix-blend-multiply filter blur-[80px] opacity-40 z-0"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block py-1 px-4 rounded-full bg-white/60 text-spa-text-light text-xs font-medium uppercase tracking-widest mb-6 backdrop-blur-sm border border-white/50">
            Welcome to The Facial Space
          </span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-6xl lg:text-7xl font-serif text-spa-text leading-[1.15] mb-6"
        >
          Personalized Skincare & <br className="hidden md:block"/>
          <span className="italic text-spa-blue-dark">Facial Treatments</span> Designed <br className="hidden md:block"/>
          For Your Skin Goals
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-spa-text-light max-w-2xl mx-auto mb-10 font-light leading-relaxed"
        >
          Customized facial experiences focused on skin health, glow, relaxation, and long-term results.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={LINKS.booking}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-spa-text text-white rounded-full text-sm font-medium uppercase tracking-wider hover:bg-spa-blue-dark transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Book Appointment
          </a>
          <a
            href="#services"
            className="w-full sm:w-auto px-8 py-4 bg-white/80 backdrop-blur-md text-spa-text border border-spa-blue-dark/20 rounded-full text-sm font-medium uppercase tracking-wider hover:bg-white transition-all duration-300"
          >
            Explore Services
          </a>
        </motion.div>
      </div>

      {/* Decorative bottom wave or gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#fafafa] to-transparent z-10 pointer-events-none"></div>
    </section>
  );
}
