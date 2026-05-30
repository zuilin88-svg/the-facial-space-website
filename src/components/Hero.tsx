import { motion } from 'motion/react';
import { LINKS } from '../constants';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 overflow-hidden bg-spa-off-white">
      <div className="absolute inset-0 z-0">
        <img
          src="/hero/face-hero.png"
          alt="The Facial Space studio interior"
          className="w-full h-full object-cover object-center brightness-[1.08] saturate-[1.03]"
        />
        <div className="absolute inset-0 bg-black/16"></div>
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-white via-white/38 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-5xl font-normal leading-[1.08] tracking-wide !text-white drop-shadow-sm md:text-6xl lg:text-7xl"
        >
          Your clear skin era starts now
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mx-auto mb-12 mt-6 max-w-3xl text-base font-medium leading-relaxed text-white drop-shadow-sm md:text-lg"
        >
          Expert Acne Care for teens and adults with over 90% success rate.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex items-center justify-center"
        >
          <a
            href={LINKS.booking}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-10 py-4 bg-spa-cta text-white rounded-full text-xs font-bold uppercase tracking-[0.18em] hover:bg-spa-text transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Book Appointment
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-spa-off-white to-transparent z-10 pointer-events-none"></div>
    </section>
  );
}
