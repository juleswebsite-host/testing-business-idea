import React from 'react';
import { motion } from 'motion/react';

const PORTFOLIO_IMAGES = [
  { id: 1, src: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800&h=1000', title: 'Modern Bob' },
  { id: 2, src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800&h=1000', title: 'Golden Balayage' },
  { id: 3, src: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&q=80&w=800&h=1000', title: 'Sleek Cut' },
  { id: 4, src: 'https://images.unsplash.com/photo-1620331311520-246422fd82f9?auto=format&fit=crop&q=80&w=800&h=1000', title: 'Vibrant Red' },
  { id: 5, src: 'https://images.unsplash.com/photo-1516914915600-896acb9c0373?auto=format&fit=crop&q=80&w=800&h=1000', title: 'Men\'s Fade' },
  { id: 6, src: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&q=80&w=800&h=1000', title: 'Natural Curls' },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gold-500 font-medium tracking-widest uppercase text-sm mb-2 block"
          >
            Ons Werk
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold text-white"
          >
            Portfolio & <span className="gold-text-gradient italic">Inspiratie</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {PORTFOLIO_IMAGES.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative aspect-[3/4] overflow-hidden rounded-xl group cursor-pointer"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-gold-500 font-display text-xl font-bold tracking-widest uppercase">
                  {img.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-white/50 mb-6 italic">Volg ons op Instagram voor dagelijkse updates</p>
          <a
            href="https://instagram.com/knipenstijl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gold-500 font-bold uppercase tracking-widest hover:text-white transition-colors"
          >
            @knipenstijl
          </a>
        </div>
      </div>
    </section>
  );
}
