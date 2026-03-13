import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, X } from 'lucide-react';

export default function Promotions() {
  const [isVisible, setIsVisible] = React.useState(true);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed bottom-6 left-6 right-6 z-40 md:left-auto md:w-96"
    >
      <div className="luxury-card p-6 rounded-2xl border-gold-500 shadow-2xl shadow-gold-500/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-2">
          <button onClick={() => setIsVisible(false)} className="text-white/40 hover:text-white">
            <X size={18} />
          </button>
        </div>
        <div className="flex gap-4">
          <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center shrink-0">
            <Sparkles className="text-black" />
          </div>
          <div>
            <h4 className="text-gold-500 font-bold uppercase tracking-widest text-sm mb-1">Zomeractie!</h4>
            <p className="text-white/80 text-sm mb-4">
              Ontvang in de maand juli <span className="text-gold-400 font-bold">20% korting</span> op alle kleurbehandelingen.
            </p>
            <a
              href="#booking"
              className="text-xs font-bold uppercase tracking-widest text-white border-b border-gold-500 pb-1 hover:text-gold-500 transition-colors"
            >
              Boek nu met korting
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
