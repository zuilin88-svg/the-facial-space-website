import { motion } from 'motion/react';

export default function Results() {
  return (
    <section id="results" className="py-24 bg-spa-blue-light/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-spa-text mb-4">
            Real Skin Transformations
          </h2>
          <p className="text-spa-text-light">
            Client result photos are temporarily disabled while we prepare updated real transformation images.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-[24px] border border-spa-silver p-10 md:p-16 text-center shadow-sm"
        >
          <span className="block uppercase tracking-widest text-xs font-semibold text-spa-blue-dark mb-4">
            Coming Soon
          </span>
          <h3 className="text-3xl md:text-4xl font-serif text-spa-text mb-4">
            Updated client results are on the way.
          </h3>
          <p className="max-w-2xl mx-auto text-spa-text-light leading-relaxed">
            This space will feature real before-and-after photos once the new gallery is ready.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
