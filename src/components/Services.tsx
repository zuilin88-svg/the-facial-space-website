import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { LINKS } from '../constants';

const services = [
  {
    title: "FIRST TIME Acne Consultation + Treatment",
    description: "Ready to get to the root of your breakouts? This results-driven session combines a deep-dive consultation with a targeted treatment to kickstart your clear skin journey.",
    image: "/services/acne-initial.png",
  },
  {
    title: "Advanced Acne Treatment & Peel",
    description: "Targeted solutions addressing pigmentation, scarring, and uneven texture. Professional peel to treat stubborn acne and prevent future breakouts.",
    image: "/services/advanced-acne.png",
  },
  {
    title: "Glow Up Dermaplane Facial",
    description: "Deep exfoliation removing dead skin and vellus hair for an immediate, intensely radiant glow and perfectly smooth texture.",
    image: "/services/dermaplane.png",
  },
  {
    title: "Reverse Aging Two-Step Facial",
    description: "A powerful combination of peptides and clinical exfoliation designed to soften fine lines, rebuild lost collagen, and rejuvenate.",
    image: "/services/two-step-facial.png",
  },
  {
    title: "Deep Pore Foaming O2 Facial",
    description: "An oxygenating treatment that deeply purifies pores, reduces congestion, and brings immediate brightness to dull, tired skin.",
    image: "/services/foaming-o2.png",
  },
  {
    title: "LED Light Therapy Add-On",
    description: "Enhance any treatment. Blue light to target and destroy acne-causing bacteria, and Red light for anti-aging and cellular repair.",
    image: "/services/add-on.png",
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="h-px w-12 bg-spa-blue-dark"></div>
            <span className="uppercase tracking-widest text-sm text-spa-blue-dark font-medium">Treatment Menu</span>
            <div className="h-px w-12 bg-spa-blue-dark"></div>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-spa-text mb-6"
          >
            Curated For Your Skin
          </motion.h2>
          <motion.p
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-spa-text-light"
          >
            Your skin doesn't need guessing or quick fixes. Every treatment plan is personalized and evolves alongside your skin.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative bg-white rounded-[24px] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(168,205,220,0.4)] border border-spa-silver"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-spa-blue-dark/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-serif text-spa-text mb-3">{service.title}</h3>
                <p className="text-sm text-spa-text-light leading-relaxed mb-6">
                  {service.description}
                </p>
                <a
                  href={LINKS.booking}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-spa-blue-dark hover:text-spa-text transition-colors"
                >
                  Book Service <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
