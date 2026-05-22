import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { LINKS } from '../constants';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Results', href: '#results' },
    { name: 'Products', href: '#products' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-nav py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-12 h-12 rounded-full border border-spa-blue flex items-center justify-center bg-white overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
            <img
              src="/brand/face-space-logo.jpg"
              alt="The Facial Space logo"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-serif text-xl tracking-wider text-spa-text group-hover:text-spa-blue-dark transition-colors">
            The Facial Space
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium tracking-wide text-spa-text-light hover:text-spa-blue-dark transition-colors uppercase"
            >
              {link.name}
            </a>
          ))}
          <a
            href={LINKS.booking}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 bg-spa-text text-white rounded-full text-sm font-medium tracking-wide uppercase hover:bg-spa-blue-dark transition-colors shadow-sm hover:shadow-md"
          >
            Book Now
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-spa-text p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-panel border-x-0 border-t-0"
          >
            <nav className="flex flex-col px-6 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base font-medium text-spa-text py-2 border-b border-spa-blue-light"
                >
                  {link.name}
                </a>
              ))}
              <a
                href={LINKS.booking}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 px-6 py-3 bg-spa-text text-white rounded-full text-sm font-medium text-center uppercase tracking-wide"
              >
                Book Appointment
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
