import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Facebook, Instagram, MapPin, Menu, Phone, X } from 'lucide-react';
import { CONTACT_INFO, LINKS } from '../constants';

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
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Results', href: '#results' },
    { name: 'Products', href: '#products' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

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
          {navLinks.filter((link) => link.name !== 'Home' && link.name !== 'Testimonials').map((link) => (
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
          aria-label="Open menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden fixed inset-0 z-[60] bg-white text-spa-text"
          >
            <div className="min-h-screen px-8 pt-12 pb-10 flex flex-col">
              <div className="flex items-center justify-between">
                <a
                  href="#"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-serif text-4xl tracking-wide text-spa-text"
                >
                  The Facial Space
                </a>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-spa-text"
                  aria-label="Close menu"
                >
                  <X size={38} strokeWidth={2} />
                </button>
              </div>

              <nav className="flex-1 flex flex-col items-center justify-center gap-8 -mt-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-serif text-4xl text-spa-text hover:text-spa-blue-dark transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>

              <div className="flex flex-col items-center gap-8">
                <div className="flex items-center justify-center gap-10 text-spa-text">
                  <a
                    href={LINKS.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="hover:text-spa-blue-dark transition-colors"
                  >
                    <Instagram size={34} strokeWidth={2.2} />
                  </a>
                  <a
                    href={LINKS.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="hover:text-spa-blue-dark transition-colors"
                  >
                    <Facebook size={34} strokeWidth={2.2} />
                  </a>
                  <a
                    href={LINKS.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Google Maps"
                    className="hover:text-spa-blue-dark transition-colors"
                  >
                    <MapPin size={34} strokeWidth={2.2} />
                  </a>
                  <a
                    href={`tel:${CONTACT_INFO.phoneHref}`}
                    aria-label="Call The Facial Space"
                    className="hover:text-spa-blue-dark transition-colors"
                  >
                    <Phone size={34} strokeWidth={2.2} />
                  </a>
                </div>

                <a
                  href={LINKS.booking}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full max-w-[330px] bg-spa-text text-white py-5 text-center font-serif text-3xl hover:bg-spa-blue-dark transition-colors"
                >
                  Book Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
