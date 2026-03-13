import React from 'react';
import { motion } from 'motion/react';
import { TEAM } from '@/src/constants';
import { Instagram } from 'lucide-react';

export default function Team() {
  return (
    <section id="team" className="py-24 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-gold-500 font-medium tracking-widest uppercase text-sm mb-2 block"
            >
              Ontmoet de Experts
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-display font-bold text-white"
            >
              Ons <span className="gold-text-gradient italic">Creatieve Team</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-white/50 max-w-sm text-right hidden md:block"
          >
            Vier gepassioneerde stylisten die klaarstaan om jouw droomkapsel te realiseren.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-6 luxury-border">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <a href="#" className="w-10 h-10 rounded-full bg-gold-500 flex items-center justify-center text-black hover:scale-110 transition-transform">
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-1">{member.name}</h3>
              <p className="text-gold-500 text-sm uppercase tracking-widest mb-3">{member.role}</p>
              <p className="text-white/60 text-sm leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
