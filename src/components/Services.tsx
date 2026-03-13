import React from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '@/src/constants';
import { Scissors, Sparkles, Palette, Heart } from 'lucide-react';

const CATEGORY_ICONS = {
  Knippen: <Scissors className="w-5 h-5" />,
  Kleuren: <Palette className="w-5 h-5" />,
  Styling: <Sparkles className="w-5 h-5" />,
  Verzorging: <Heart className="w-5 h-5" />,
};

export default function Services() {
  return (
    <section id="diensten" className="py-24 px-6 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gold-500 font-medium tracking-widest uppercase text-sm mb-2 block"
          >
            Onze Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold text-white"
          >
            Diensten & <span className="gold-text-gradient italic">Tarieven</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {['Knippen', 'Kleuren', 'Styling', 'Verzorging'].map((cat) => (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="luxury-card p-8 rounded-2xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-500">
                  {CATEGORY_ICONS[cat as keyof typeof CATEGORY_ICONS]}
                </div>
                <h3 className="text-2xl font-display font-bold text-white">{cat}</h3>
              </div>
              <div className="space-y-4">
                {SERVICES.filter((s) => s.category === cat).map((service) => (
                  <div key={service.id} className="flex justify-between items-end border-b border-white/5 pb-2 group">
                    <div>
                      <p className="text-white group-hover:text-gold-400 transition-colors">{service.name}</p>
                      <p className="text-xs text-white/40 uppercase tracking-wider">{service.duration}</p>
                    </div>
                    <p className="text-gold-500 font-bold">{service.price}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
