import { motion } from 'motion/react';
import { LINKS } from '../constants';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 overflow-hidden bg-white">
      <div className="absolute inset-0 z-0">
        <img
          src="/hero/spa-room.jpg"
          alt="The Facial Space studio interior"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-white/35"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.35)_0%,rgba(255,255,255,0.28)_34%,rgba(255,255,255,0.72)_100%)]"></div>
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-white/95 via-white/70 to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-white via-white/70 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block py-1.5 px-5 rounded-full bg-white/85 text-spa-text-light text-xs font-medium uppercase tracking-widest mb-7 backdrop-blur-sm border border-white shadow-sm">
            East Meadow Facial Spa
          </span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-spa-text leading-[1.02] mb-6"
        >
          The Facial Space
          <span className="block italic text-spa-blue-dark mt-3">
            personalized skincare
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-spa-text-light max-w-3xl mx-auto mb-12 font-light leading-relaxed"
        >
          Acne care, dermaplaning, oxygen facials, LED therapy, and professional homecare in a calm East Meadow studio.
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
            className="w-full sm:w-auto px-9 py-4 bg-spa-text text-white rounded-full text-sm font-semibold uppercase tracking-wider hover:bg-spa-blue-dark transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Book Appointment
          </a>
          <a
            href="#services"
            className="w-full sm:w-auto px-9 py-4 bg-white text-spa-text border border-white/80 rounded-full text-sm font-semibold uppercase tracking-wider hover:bg-spa-blue-light transition-all duration-300 shadow-lg"
          >
            Explore Services
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#fafafa] to-transparent z-10 pointer-events-none"></div>
    </section>
  );
}
