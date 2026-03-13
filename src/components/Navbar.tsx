import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Scissors } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'Diensten', href: '#diensten' },
  { name: 'Team', href: '#team' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        scrolled ? 'bg-black/90 backdrop-blur-md border-b border-gold-500/20 py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center shadow-lg shadow-gold-500/20">
            <Scissors className="text-black w-5 h-5" />
          </div>
          <span className="text-xl font-display font-bold tracking-widest uppercase gold-text-gradient">
            Knip & Stijl
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium uppercase tracking-widest text-white/70 hover:text-gold-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#booking"
            className="px-6 py-2 rounded-full border border-gold-500 text-gold-500 text-sm font-bold uppercase tracking-widest hover:bg-gold-500 hover:text-black transition-all duration-300"
          >
            Boek Nu
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gold-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-black border-b border-gold-500/20 p-6 md:hidden"
          >
            <div className="flex flex-col gap-6 items-center">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium uppercase tracking-widest text-white/70 hover:text-gold-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#booking"
                onClick={() => setIsOpen(false)}
                className="w-full text-center px-6 py-3 rounded-full gold-gradient text-black font-bold uppercase tracking-widest"
              >
                Boek Nu
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
