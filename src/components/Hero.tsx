import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Video Background Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1920&h=1080"
          alt="Salon Atmosphere"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        {/* In a real app, we would use a <video> tag here */}
      </div>

      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-gold-500 font-medium tracking-[0.3em] uppercase text-sm mb-4 block">
            Sinds 2018 in Amsterdam
          </span>
          <h1 className="text-5xl md:text-8xl font-display font-bold text-white mb-6 leading-tight">
            Uw Stijl, <br />
            <span className="gold-text-gradient italic">Onze Passie.</span>
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Ervaar de perfecte combinatie van vakmanschap, luxe en persoonlijke aandacht bij Knip & Stijl.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#booking"
              className="px-10 py-4 rounded-full gold-gradient text-black font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-xl shadow-gold-500/20"
            >
              Maak een afspraak
            </a>
            <a
              href="#diensten"
              className="px-10 py-4 rounded-full border border-white/30 text-white font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all"
            >
              Onze Diensten
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-gold-500/50"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}
